import { readFileSync, writeFileSync, existsSync, appendFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUTPUT_PATH = join(__dirname, '..', 'docs', '_internal', 'firmwareCompatibility.json')

const FIRMWARE_FEED_URL = 'https://yls8.mtheall.com/ninupdates/feed.php'
const ATMOSPHERE_RELEASE_API = 'https://api.github.com/repos/Atmosphere-NX/Atmosphere/releases/latest'
const HEKATE_RELEASE_API = 'https://api.github.com/repos/CTCaer/hekate/releases/latest'
const USER_AGENT = 'switch-guide-firmware-compat-checker'

function githubHeaders() {
  const headers = {
    'User-Agent': USER_AGENT,
    Accept: 'application/vnd.github+json'
  }
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  }
  return headers
}

function compareVersions(a, b) {
  const pa = a.split('.').map(Number)
  const pb = b.split('.').map(Number)
  for (let i = 0; i < 3; i++) {
    const diff = (pa[i] || 0) - (pb[i] || 0)
    if (diff !== 0) return diff
  }
  return 0
}

function extractHighestVersion(text, patterns) {
  let highest = null
  for (const pattern of patterns) {
    const re = new RegExp(pattern, 'gi')
    let match
    while ((match = re.exec(text)) !== null) {
      const version = match[1]
      if (!highest || compareVersions(version, highest) > 0) {
        highest = version
      }
    }
  }
  return highest
}

async function getLatestFirmware() {
  const res = await fetch(FIRMWARE_FEED_URL)
  if (!res.ok) {
    throw new Error(`Firmware feed request failed: HTTP ${res.status}`)
  }
  const xml = await res.text()
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) || []

  for (const item of items) {
    const titleMatch = item.match(/<title>(.*?)<\/title>/)
    if (!titleMatch) continue
    const title = titleMatch[1].trim()
    const isOriginalSwitch = /sys=hac/.test(item)
    const versionMatch = title.match(/^Switch (\d+\.\d+\.\d+)$/)

    if (isOriginalSwitch && versionMatch) {
      return {
        version: versionMatch[1],
        sourceUrl: 'https://yls8.mtheall.com/ninupdates/reports.php'
      }
    }
  }

  return null
}

async function getLatestRelease(apiUrl) {
  const res = await fetch(apiUrl, { headers: githubHeaders() })
  if (!res.ok) {
    throw new Error(`GitHub API request failed for ${apiUrl}: HTTP ${res.status}`)
  }
  return res.json()
}

async function buildCompatibilityData() {
  const result = {
    generatedAt: new Date().toISOString(),
    error: null,
    firmware: null,
    atmosphere: null,
    hekate: null
  }

  try {
    const [firmware, atmosphereRelease, hekateRelease] = await Promise.all([
      getLatestFirmware(),
      getLatestRelease(ATMOSPHERE_RELEASE_API),
      getLatestRelease(HEKATE_RELEASE_API)
    ])

    const atmosphereBody = atmosphereRelease.body || ''
    const atmosphereSupportedFirmware = extractHighestVersion(atmosphereBody, [
      String.raw`(?:basic\s+)?support\s+(?:was\s+)?added\s+for\s+(\d+\.\d+\.\d+)`,
      String.raw`(\d+\.\d+\.\d+)\s+support\s+(?:was\s+)?added`,
      String.raw`support\s+for\s+(\d+\.\d+\.\d+)`
    ])

    const hekateBody = hekateRelease.body || ''
    const hekateSupportedFirmware = extractHighestVersion(hekateBody, [
      String.raw`latest\s+hos\s+supported:?\s*(\d+\.\d+\.\d+)`,
      String.raw`hos\s+(\d+\.\d+\.\d+)\s+support`
    ])

    result.firmware = firmware
    result.atmosphere = {
      tag: atmosphereRelease.tag_name,
      url: atmosphereRelease.html_url,
      publishedAt: atmosphereRelease.published_at,
      supportedFirmware: atmosphereSupportedFirmware
    }
    result.hekate = {
      tag: hekateRelease.tag_name,
      url: hekateRelease.html_url,
      publishedAt: hekateRelease.published_at,
      supportedFirmware: hekateSupportedFirmware
    }
  } catch (err) {
    result.error = err instanceof Error ? err.message : String(err)
  }

  return result
}

function withoutTimestamp(data) {
  const { generatedAt, ...rest } = data
  return rest
}

function setOutput(name, value) {
  if (process.env.GITHUB_OUTPUT) {
    appendFileSync(process.env.GITHUB_OUTPUT, `${name}=${value}\n`)
  }
}

const previous = existsSync(OUTPUT_PATH) ? JSON.parse(readFileSync(OUTPUT_PATH, 'utf8')) : null
const next = await buildCompatibilityData()

if (next.error && previous && !previous.error) {
  console.warn('Fetch failed this run, keeping previously committed data:', next.error)
  setOutput('changed', 'false')
  process.exitCode = 1
} else {
  const changed = !previous || JSON.stringify(withoutTimestamp(previous)) !== JSON.stringify(withoutTimestamp(next))

  if (changed) {
    writeFileSync(OUTPUT_PATH, JSON.stringify(next, null, 2) + '\n')
    console.log('Firmware compatibility data changed, wrote', OUTPUT_PATH)
    console.log(JSON.stringify(next, null, 2))
  } else {
    console.log('Firmware compatibility data unchanged, nothing to commit')
  }

  setOutput('changed', changed ? 'true' : 'false')
}
