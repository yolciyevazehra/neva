/* ============================================================
   NEVA logo mark — traced directly from the official brand file
   (Neva Logo White.svg / Neva Branding.pdf): the constellation
   "N" — two verticals + one diagonal, three gradient dots.
   Rendered as inline SVG so it stays crisp at any size; the
   strokes follow currentColor (adapt to header / footer / dark
   mode automatically) while the 3 dots always keep the official
   brand gradient (#8AD5EB → #164882), exactly as in the source file.
   ============================================================ */
(function () {
  let counter = 0;

  function nevaLogoSVG(size) {
    counter++;
    const a = "nvLogoA" + counter, b = "nvLogoB" + counter, c = "nvLogoC" + counter;
    const h = Math.round((size * 72) / 78);
    return `<svg viewBox="44 -4 78 72" width="${size}" height="${h}" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="${a}" x1="48" y1="17" x2="65" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset=".35" stop-color="#8AD5EB"/><stop offset=".9" stop-color="#164882"/>
        </linearGradient>
        <linearGradient id="${b}" x1="105" y1="64" x2="118" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset=".4" stop-color="#8AD5EB"/><stop offset="1" stop-color="#164882"/>
        </linearGradient>
        <linearGradient id="${c}" x1="106" y1="11" x2="119" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset=".3" stop-color="#8AD5EB"/><stop offset=".85" stop-color="#164882"/>
        </linearGradient>
      </defs>
      <line x1="54.051" y1="16.779" x2="54.051" y2="59.709" stroke="currentColor" stroke-width="6.101" stroke-linecap="round"/>
      <line x1="65.196" y1="13.825" x2="101.331" y2="49.959" stroke="currentColor" stroke-width="6.101" stroke-linecap="round"/>
      <line x1="112.476" y1="15.762" x2="112.476" y2="48.022" stroke="currentColor" stroke-width="6.101" stroke-linecap="round"/>
      <circle cx="54.051" cy="5.461" r="5.461" fill="url(#${a})"/>
      <circle cx="112.476" cy="5.461" r="5.461" fill="url(#${c})"/>
      <circle cx="111.079" cy="58.322" r="5.461" fill="url(#${b})"/>
    </svg>`;
  }

  window.nevaLogoSVG = nevaLogoSVG;

  function paint() {
    document.querySelectorAll("[data-neva-logo]").forEach((el) => {
      const size = Number(el.getAttribute("data-neva-logo")) || 34;
      el.innerHTML = nevaLogoSVG(size);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", paint);
  } else {
    paint();
  }
})();
