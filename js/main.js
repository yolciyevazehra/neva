/* Shared behaviour across all Neva pages */

/* ---------- dark / light mode ----------
   The actual attribute is already set as early as possible by a tiny
   inline script in each page's <head> (see setNevaTheme below) so the
   page never flashes the wrong theme; this just wires up the toggle
   button and keeps its icon in sync. */
function setNevaTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try { localStorage.setItem("neva_theme", theme); } catch (e) {}
}
function getNevaTheme() {
  try {
    const saved = localStorage.getItem("neva_theme");
    if (saved) return saved;
  } catch (e) {}
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

document.addEventListener("DOMContentLoaded", () => {
  /* mobile nav */
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");
  if (burger) burger.addEventListener("click", () => navLinks.classList.toggle("open"));

  /* theme toggle button(s) */
  document.querySelectorAll(".theme-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      setNevaTheme(next);
    });
  });

  /* fade-up on scroll */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
  }, { threshold: .15 });
  document.querySelectorAll(".fade-up").forEach(el => io.observe(el));

  /* highlight active nav link */
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    if (a.getAttribute("href") === path) a.classList.add("active");
  });

  /* reflect customer login state in every "Daxil ol" nav button
     (desktop nav-cta + the duplicate inside the mobile burger menu) */
  const navLoginLinks = document.querySelectorAll("#nav-login-link, .js-login-link");
  if (navLoginLinks.length && typeof NEVA_DB !== "undefined") {
    const customer = NEVA_DB.getCurrentCustomer();
    navLoginLinks.forEach(link => {
      if (customer) {
        link.textContent = customer.name.split(" ")[0];
        link.href = "account.html";
      } else {
        link.textContent = "Daxil ol";
        link.href = "customer-login.html";
      }
    });
  }

  /* home search panel -> services page */
  const homeSearch = document.getElementById("home-search-form");
  if (homeSearch) {
    homeSearch.addEventListener("submit", (e) => {
      e.preventDefault();
      const cat = document.getElementById("hs-category").value;
      const area = document.getElementById("hs-location").value;
      const params = new URLSearchParams();
      if (cat) params.set("cat", cat);
      if (area) params.set("q", area);
      location.href = "services.html" + (params.toString() ? "?" + params.toString() : "");
    });
  }

  /* FAQ accordion */
  document.querySelectorAll(".faq-item").forEach(item => {
    const q = item.querySelector(".faq-q");
    const a = item.querySelector(".faq-a");
    q.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(o => {
        if (o !== item) { o.classList.remove("open"); o.querySelector(".faq-a").style.maxHeight = null; }
      });
      item.classList.toggle("open", !isOpen);
      a.style.maxHeight = !isOpen ? a.scrollHeight + "px" : null;
    });
  });

  const faqCats = document.querySelectorAll(".faq-cats .filter-chip");
  if (faqCats.length) {
    faqCats.forEach(chip => chip.addEventListener("click", () => {
      faqCats.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      const cat = chip.dataset.cat;
      document.querySelectorAll(".faq-item").forEach(item => {
        item.style.display = (cat === "all" || item.dataset.cat === cat) ? "" : "none";
      });
    }));
  }

  /* contact form fake submit */
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast(typeof t === "function" ? t("contact.sent") : "Mesajınız göndərildi — 24 saat ərzində cavab verəcəyik.");
      contactForm.reset();
    });
  }
});

/* ---------- toast helper ---------- */
function showToast(msg) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = '<span class="dot"></span><span class="msg"></span>';
    document.body.appendChild(toast);
  }
  toast.querySelector(".msg").textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove("show"), 3200);
}

/* ---------- simple icon set (inline, no external deps) ---------- */
const ICONS = {
  scissors: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><line x1="20" y1="4" x2="8.5" y2="15.5"/><line x1="8.5" y1="8.5" x2="20" y2="20"/></svg>',
  fork: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 3v7a3 3 0 0 0 3 3h0"/><path d="M7 3v7"/><path d="M10 3v7"/><path d="M8.5 13v8"/><path d="M17 3c-1.5 0-2.5 2-2.5 5s1 5 2.5 5v8"/></svg>',
  cup: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17"/><path d="M8 3c0 1-1 1-1 2M12 3c0 1-1 1-1 2"/></svg>',
  dumbbell: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 7v10M18 7v10M2 10v4M22 10v4M6 12h12"/></svg>',
  pin: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.3"/></svg>',
  star: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6L22 9.3l-5 4.9L18.2 22 12 18.3 5.8 22 7 14.2l-5-4.9 7.1-.7z"/></svg>',
  clock: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  users: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3"/><path d="M2 20c0-3.3 3-6 7-6s7 2.7 7 6"/><circle cx="17" cy="9" r="2.4"/><path d="M16 14.2c2.7.5 5 2.3 5 5.8"/></svg>',
  sun: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.6M12 18.9v2.6M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M2.5 12h2.6M18.9 12h2.6M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8"/></svg>',
  moon: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5z"/></svg>',
};

/* paint sun/moon icons into every .theme-toggle button and keep them
   in sync with the current theme (initial paint + after each toggle) */
(function () {
  function paintThemeIcons() {
    const theme = document.documentElement.getAttribute("data-theme") || "light";
    document.querySelectorAll(".theme-toggle").forEach(btn => {
      btn.innerHTML = theme === "dark" ? ICONS.sun : ICONS.moon;
    });
  }
  document.addEventListener("DOMContentLoaded", paintThemeIcons);
  const mo = new MutationObserver(paintThemeIcons);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
})();
