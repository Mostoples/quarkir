// ============================================================
// QR — generate (qrcodejs) + scan (html5-qrcode), via CDN on-demand.
// Selalu sediakan fallback teks bila lib/kamera tak tersedia.
// ============================================================
function loadScript(src, glob) {
  if (window[glob]) return Promise.resolve();
  return new Promise((res, rej) => {
    const s = document.createElement("script"); s.src = src; s.onload = res; s.onerror = rej; document.head.append(s);
  });
}

export async function renderQR(el, text, size = 180) {
  el.innerHTML = "";
  try {
    await loadScript("https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js", "QRCode");
    new window.QRCode(el, { text, width: size, height: size, correctLevel: window.QRCode.CorrectLevel.M });
  } catch {
    // fallback: API gambar
    const img = document.createElement("img");
    img.width = size; img.height = size;
    img.src = "https://api.qrserver.com/v1/create-qr-code/?size=" + size + "x" + size + "&data=" + encodeURIComponent(text);
    el.append(img);
  }
}

// Mulai scanner pada element id; onResult(text). Return stop()
export async function startScanner(elId, onResult) {
  try {
    await loadScript("https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js", "Html5Qrcode");
    const scanner = new window.Html5Qrcode(elId);
    await scanner.start({ facingMode: "environment" }, { fps: 10, qrbox: 220 },
      (txt) => { onResult(txt); }, () => {});
    return () => scanner.stop().catch(() => {});
  } catch (e) {
    throw new Error("Kamera/QR tidak tersedia. Gunakan input kode manual.");
  }
}
