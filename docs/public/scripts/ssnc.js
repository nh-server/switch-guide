const MARIKO_FAMILIES = [
  { base: 'XKW', type: 'range', from: 0, to: 9 },
  { base: 'XKJ', type: 'range', from: 0, to: 9 },
  { base: 'XKE', type: 'range', from: 0, to: 9 },
  { base: 'XTW', type: 'range', from: 0, to: 9 },
  { base: 'XTJ', type: 'range', from: 0, to: 9 },
  { base: 'XTE', type: 'range', from: 0, to: 9 },
  { base: 'XJW', type: 'range', from: 0, to: 9 },
  { base: 'XJJ', type: 'range', from: 0, to: 9 },
  { base: 'XJE', type: 'range', from: 0, to: 9 },
  { base: 'XWW', type: 'range', from: 0, to: 9 },
  { base: 'XWJ', type: 'range', from: 0, to: 9 },
  { base: 'XWE', type: 'range', from: 0, to: 9 },
];

function buildMarikoOptions(group) {
  for (const family of MARIKO_FAMILIES) {
    const opt = document.createElement('option');
    opt.value = family.base;
    opt.textContent = `${family.base} (${family.from}–${family.to})`;
    group.appendChild(opt);
  }
}

function initSerialChecker() {
  const prefix = document.getElementById("serial-prefix");
  const digits = document.getElementById("serial-digits");
  const result = document.getElementById("serial-result");
  const resultSerial = document.getElementById("serial-result-serial");
  const resultText = document.getElementById("serial-result-text");

  if (!prefix || !digits) return;

  const marikoGroup = document.getElementById("mariko-prefixes");
  if (marikoGroup) buildMarikoOptions(marikoGroup);

  function checkSerial(s) {
    if (s.length >= 3) {
      const isMarikoFamily = MARIKO_FAMILIES.some(f => s.startsWith(f.base));
      if (isMarikoFamily) return 'mariko';
    }
    if (s.match(/^X[KJWT][JWCE]/)) return 'mariko';
    if (s.match(/^XA[JW][9]/)) return 'refurb';
    if (s.match(/^XAK[1479]/)) return 'krmaybe';
    if (s.match(/^HA[JKWE]/)) return 'switch2';
    if (!s.match(/^XA[JKW9][1479]/)) return 'invalid';

    if (s.length >= 10 && s.length < 14) s = s.padEnd(14, 'X');
    if (s.length !== 14) return 'invalid';

    const region = s[2];
    const assemblyLine = parseInt(s[3]);
    const checkingValue = parseInt(s.slice(3, 10));

    if (region === 'K') return 'maybe';
    if (region === '9') return 'maybe';

    if (region === 'J') {
      if (assemblyLine === 1) {
        if (checkingValue < 1002000) return 'unpatched';
        if (checkingValue < 1003000) return 'maybe';
        return 'patched'
      } else if (assemblyLine === 4) {
        if (checkingValue < 4004400) return 'unpatched';
        if (checkingValue < 4008300) return 'maybe';
        return 'patched'
      } else if (assemblyLine === 7) {
        if (checkingValue < 7004000) return 'unpatched';
        if (checkingValue < 7005000) return 'maybe';
        return 'patched'
      }
    }

    if (region === 'W') {
      if (assemblyLine === 1) {
        if (checkingValue < 1006500) return 'unpatched';
        if (checkingValue < 1012000) return 'maybe';
        return 'patched';
      } else if (assemblyLine === 4) {
        if (checkingValue < 4001100) return 'unpatched';
        if (checkingValue < 4001200) return 'maybe';
        return 'patched';
      } else if (assemblyLine === 7) {
        if (checkingValue < 7001750) return 'unpatched';
        if (checkingValue < 7003000) return 'maybe';
        return 'patched';
      } else if (assemblyLine === 9) {
        return 'maybe';
      }
    }

    return 'invalid';
  }

  const messages = {
    mariko:    { type: 'danger',  text: 'This appears to be a <strong>Mariko (V2) Switch or Switch Lite</strong>. These are patched and not hackable via software, only via hardware modchip. Find trusted hardware modders <a href="https://nintendohomebrew.com/hardmodders">here</a>.' },
    switch2:   { type: 'danger',  text: 'This appears to be a <strong>Switch 2</strong>. These are currently not hackable.' },
    refurb:    { type: 'warning', text: 'This prefix belongs to officially <strong>refurbished Switch</strong> consoles, it <strong>might be patched</strong>. The only way to know for sure is to manually push a payload. Continue to <a href="/user_guide/rcm/sending_payload.html">this page</a>.' },
    krmaybe:   { type: 'warning', text: 'This serial <strong>might be patched</strong>. The only way to know for sure is to manually push a payload. Continue to <a href="/user_guide/rcm/sending_payload.html">this page</a>.' },
    maybe:     { type: 'warning', text: 'This serial <strong>might be patched</strong>. The only way to know for sure is to manually push a payload. Continue to <a href="/user_guide/rcm/sending_payload.html">this page</a>.' },
    patched:   { type: 'danger',  text: 'This serial is <strong>patched</strong>. It is not hackable via software. Find trusted hardware modders <a href="https://nintendohomebrew.com/hardmodders">here</a>.' },
    unpatched: { type: 'tip',     text: 'This serial is <strong>not patched</strong>! Click the following link to continue with the <a href="rcm/index">RCM path</a> of the guide.' },
    invalid:   { type: 'danger',  text: 'This serial is <strong>invalid</strong>. Double-check you typed it correctly. At minimum, provide 6 digits after the prefix.' },
  }

  function redact(s) {
    if (s.length <= 9) return s;
    return s.slice(0, 9) + 'XXXX';
  }

  function outputResult(serial, {type, text}) {
    resultSerial.innerText = serial;
    resultText.innerHTML = text;
    result.classList = type;
  }

  function serialChangeEvent() {
    const d = digits.value.replace(/\D/g, '');
    const s = (prefix.value + d).toUpperCase();

    const earlyCheck = checkSerial(s.padEnd(14, 'X'));
    if (earlyCheck === 'mariko' || earlyCheck === 'switch2' || earlyCheck === 'refurb' || earlyCheck === 'krmaybe') {
      digits.disabled = true;
      digits.value = '';
      outputResult(prefix.value + "…", messages[earlyCheck]);
      return;
    }

    digits.disabled = false;

    if (d.length < 6) {
      result.classList = "serial-result-hidden";
      return;
    }

    const key = checkSerial(s);
    outputResult(redact(s), messages[key]);
  }

  prefix.addEventListener("change", serialChangeEvent);
  digits.addEventListener("input", serialChangeEvent);
}

// make sure this component loads properly upon refreshing page/random navigation :P

function tryInit() {
  const prefix = document.getElementById("serial-prefix");
  if (!prefix) return;
  if (prefix.dataset.initialized) return;
  prefix.dataset.initialized = "1";
  initSerialChecker();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", tryInit);
} else {
  tryInit();
}

const observer = new MutationObserver(tryInit);
observer.observe(document.body, { childList: true, subtree: true });