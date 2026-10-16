
<template>
  <div class="dnsmitmwarning-box">
    <h3 id="dnsmitmWarning">
      DNS.mitm Warning
    </h3>

    <p>
      For currently unknown reasons, <i><b>DNS.mitm</b></i>, which is used in this guide as a form of ban protection, 
      is not properly blocking Nintendo servers on 23.0.0. It is advised to set up 90DNS 
      (which is working) on emuMMC by following the instructions here: <a href="../../extras/blocking_nintendo#instructions-for-90dns">90DNS</a>.<br>
      If you use sysCFW, this does <i><b>not</b></i> apply to you.
    </p>
  </div>
</template>

<style scoped>
@keyframes donations-pulse {
  0%, 100% {
    border-color: var(--vp-c-gray-1);
    box-shadow: 0 0 6px rgba(255, 100, 100, 0.08);
  }

  50% {
    border-color: var(--vp-c-red-2);
    box-shadow: 0 0 18px rgba(255, 0, 0, 0.35);
  }
}

.dnsmitmwarning-box {
  margin: 1.5rem 0;
  padding: 1.25rem 1.5rem;
  border: 3px solid var(--vp-c-red-1);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  animation: donations-pulse 3s ease-in-out infinite;
}

.dnsmitmwarning-box h3 {
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
}

.dnsmitmwarning-box p {
  margin-bottom: 0;
}
</style>