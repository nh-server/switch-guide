<script setup>
import { data } from './firmwareCompatibility.data.js'

function compareVersions(a, b) {
  if (!a || !b) return null
  const pa = a.split('.').map(Number)
  const pb = b.split('.').map(Number)
  for (let i = 0; i < 3; i++) {
    const diff = (pa[i] || 0) - (pb[i] || 0)
    if (diff !== 0) return diff
  }
  return 0
}

function statusFor(supportedFirmware, currentFirmware) {
  if (!supportedFirmware || !currentFirmware) {
    return { label: 'Unable to determine', tone: 'unknown' }
  }
  const diff = compareVersions(supportedFirmware, currentFirmware)
  if (diff === null) return { label: 'Unable to determine', tone: 'unknown' }
  return diff >= 0
    ? { label: 'Supports current firmware', tone: 'ok' }
    : { label: `Supports up to ${supportedFirmware} only`, tone: 'warn' }
}

const hasData = !!(data.firmware && data.atmosphere && data.hekate)

const atmosphereStatus = hasData
  ? statusFor(data.atmosphere.supportedFirmware, data.firmware.version)
  : null
const hekateStatus = hasData
  ? statusFor(data.hekate.supportedFirmware, data.firmware.version)
  : null

const overallTone = (() => {
  if (data.error || !hasData) return 'unknown'
  if (atmosphereStatus.tone === 'ok' && hekateStatus.tone === 'ok') return 'ok'
  return 'danger'
})()

const headerTitle = (() => {
  if (!hasData) return 'Compatibility check unavailable'
  return overallTone === 'ok'
    ? `Firmware ${data.firmware.version} is supported`
    : `Firmware ${data.firmware.version} isn't supported yet`
})()

const headerSub = (() => {
  if (!hasData) return 'Check the release pages below manually.'
  if (overallTone === 'ok') {
    return `You can safely update your console to ${data.firmware.version}!`
  }
  return `Don't update your console until both Atmosphère and hekate support ${data.firmware.version}, if you currently wish to use CFW.`
})()

function formatDate(iso) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<template>
  <div class="fw-compat" :class="overallTone">
    <div class="fw-compat-header" :class="overallTone">
      <span class="fw-compat-dot" :class="overallTone"></span>
      <div>
        <div class="fw-compat-title">{{ headerTitle }}</div>
        <div class="fw-compat-sub">
          {{ headerSub }}
          <template v-if="hasData && overallTone === 'ok'">
            You can follow the rest of this page to update Atmosphère, hekate and your firmware.
          </template>
        </div>
      </div>
    </div>

    <div class="fw-compat-panels">
      <template v-if="hasData">
        <a class="fw-compat-panel" :class="atmosphereStatus.tone" :href="data.atmosphere.url" target="_blank" rel="noopener">
          <div class="fw-compat-panel-top">
            <span class="fw-compat-dot" :class="atmosphereStatus.tone"></span>
            <span class="fw-compat-panel-name">Atmosphère {{ data.atmosphere.tag }}</span>
          </div>
          <div class="fw-compat-panel-status">{{ atmosphereStatus.label }}</div>
          <div class="fw-compat-panel-date">Released {{ formatDate(data.atmosphere.publishedAt) }}</div>
        </a>
        <a class="fw-compat-panel" :class="hekateStatus.tone" :href="data.hekate.url" target="_blank" rel="noopener">
          <div class="fw-compat-panel-top">
            <span class="fw-compat-dot" :class="hekateStatus.tone"></span>
            <span class="fw-compat-panel-name">hekate {{ data.hekate.tag }}</span>
          </div>
          <div class="fw-compat-panel-status">{{ hekateStatus.label }}</div>
          <div class="fw-compat-panel-date">Released {{ formatDate(data.hekate.publishedAt) }}</div>
        </a>
      </template>
      <template v-else>
        <a class="fw-compat-panel unknown" href="https://github.com/Atmosphere-NX/Atmosphere/releases/latest" target="_blank" rel="noopener">
          <div class="fw-compat-panel-top">
            <span class="fw-compat-dot unknown"></span>
            <span class="fw-compat-panel-name">Atmosphère</span>
          </div>
          <div class="fw-compat-panel-status">Check release page</div>
        </a>
        <a class="fw-compat-panel unknown" href="https://github.com/CTCaer/hekate/releases/latest" target="_blank" rel="noopener">
          <div class="fw-compat-panel-top">
            <span class="fw-compat-dot unknown"></span>
            <span class="fw-compat-panel-name">hekate</span>
          </div>
          <div class="fw-compat-panel-status">Check release page</div>
        </a>
      </template>
    </div>

    <div v-if="hasData" class="fw-compat-footer">
      Refreshed each time this site rebuilds ·
      <a href="https://yls8.mtheall.com/ninupdates/reports.php" target="_blank" rel="noopener">firmware source</a>
    </div>
  </div>
</template>

<style scoped>
@keyframes fw-compat-pulse {
  0%, 100% {
    border-color: var(--vp-c-gray-1);
  }
  50% {
    border-color: var(--vp-c-indigo-2);
  }
}

.fw-compat {
  margin: 0.75rem 0 1.5rem;
  border: 3px solid var(--vp-c-gray-1);
  border-radius: 8px;
  overflow: hidden;
  animation: fw-compat-pulse 3s ease-in-out infinite;
}

.fw-compat.ok {
  border-color: darkgreen;
  animation: none;
}

.fw-compat-header {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.9rem 1rem;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.fw-compat-header.ok {
  background: rgba(0, 180, 0, 0.12);
}

.fw-compat-header.danger {
  background: var(--vp-custom-block-danger-bg);
  color: var(--vp-custom-block-danger-text);
}

.fw-compat-header.unknown {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
}

.fw-compat-title {
  font-size: 1rem;
  font-weight: 600;
}

.fw-compat-sub {
  margin-top: 0.15rem;
  font-size: 0.9rem;
  opacity: 0.9;
}

.fw-compat-panels {
  display: flex;
  flex-wrap: wrap;
  border-top: 3px solid var(--vp-c-gray-1);
}

.fw-compat.ok .fw-compat-panels {
  border-top-color: darkgreen;
}

.fw-compat-panel {
  flex: 1 1 200px;
  display: block;
  padding: 0.75rem 1rem;
  background: var(--vp-c-bg-soft);
  text-decoration: none !important;
  color: var(--vp-c-text-1);
}

.fw-compat-panel:not(:first-child) {
  border-left: 3px solid var(--vp-c-gray-1);
}

.fw-compat.ok .fw-compat-panel:not(:first-child) {
  border-left-color: darkgreen;
}

@media (max-width: 480px) {
  .fw-compat-panel:not(:first-child) {
    border-left: none;
    border-top: 3px solid var(--vp-c-gray-1);
  }

  .fw-compat.ok .fw-compat-panel:not(:first-child) {
    border-top-color: darkgreen;
  }
}

.fw-compat-panel.ok {
  background: rgba(0, 180, 0, 0.08);
  color: var(--vp-custom-block-ok-text);
}

.fw-compat-panel.warn {
  background: var(--vp-custom-block-warning-bg);
  color: var(--vp-custom-block-warning-text);
}

.fw-compat-panel.unknown {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
}

.fw-compat-panel:hover .fw-compat-panel-name {
  text-decoration: underline;
}

.fw-compat-panel-top {
  display: flex;
  align-items: center;
  gap: 0.45rem;
}

.fw-compat-panel-name {
  font-weight: 600;
}

.fw-compat-panel-status {
  margin-top: 0.35rem;
  font-size: 0.9rem;
}

.fw-compat-panel-date {
  margin-top: 0.25rem;
  font-size: 0.8rem;
  opacity: 0.75;
}

.fw-compat-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--vp-c-text-2);
}

.fw-compat-dot.ok {
  background: #00b400;
}

.fw-compat-dot.warn {
  background: var(--vp-c-warning-2);
}

.fw-compat-dot.danger {
  background: var(--vp-c-danger-2);
}

.fw-compat-dot.unknown {
  background: var(--vp-c-text-2);
}

.fw-compat-footer {
  padding: 0.5rem 1rem 0.75rem;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
}
</style>
