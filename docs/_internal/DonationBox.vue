
<template>
  <div class="donations-box">
    <h3 id="donations">
      Donations
    </h3>

    <p>
      If you appreciate our guides or the Nintendo
      Homebrew Discord server and would like to
      show your support, we accept
      <a href="../../about#donations">Donations</a>.
    </p>
  </div>
</template>

<style scoped>
@keyframes donations-pulse {
  0%, 100% {
    border-color: var(--vp-c-gray-1);
    box-shadow: 0 0 6px rgba(100, 130, 255, 0.08);
  }

  50% {
    border-color: var(--vp-c-indigo-2);
    box-shadow: 0 0 18px rgba(100, 130, 255, 0.35);
  }
}

.donations-box {
  margin: 1.5rem 0;
  padding: 1.25rem 1.5rem;
  border: 3px solid var(--vp-c-gray-1);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  animation: donations-pulse 3s ease-in-out infinite;
}

.donations-box h3 {
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
}

.donations-box p {
  margin-bottom: 0;
}
</style>