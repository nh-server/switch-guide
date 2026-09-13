import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DATA_PATH = join(__dirname, 'firmwareCompatibility.json')

const EMPTY_STATE = {
  generatedAt: null,
  error: 'No firmware compatibility data has been generated yet.',
  firmware: null,
  atmosphere: null,
  hekate: null
}

export default {
  watch: [DATA_PATH],
  load() {
    if (!existsSync(DATA_PATH)) {
      return EMPTY_STATE
    }
    return JSON.parse(readFileSync(DATA_PATH, 'utf8'))
  }
}
