(() => {
  "use strict";

  const SITE_URL = "https://sudo-g1itch.github.io/chittoor-dhyanam-2026/";
  const MAP_URL = "https://www.google.com/maps/search/?api=1&query=Chittoor+Retreat+Centre+Ernakulam+Kerala";

  // Retreat times are fixed in IST so visitors in other time zones see the right countdown.
  const START = Date.parse("2026-11-18T09:00:00+05:30");
  const END = Date.parse("2026-11-22T14:00:00+05:30");

  // ?now=2026-11-20T10:00:00+05:30 previews another moment (a "+" in the query arrives as a space).
  const nowParam = new URLSearchParams(location.search).get("now");
  const nowOverride = nowParam ? Date.parse(nowParam.replace(" ", "+")) : NaN;
  const offset = Number.isNaN(nowOverride) ? 0 : nowOverride - Date.now();
  const now = () => Date.now() + offset;

  const $ = (id) => document.getElementById(id);
  const section = $("countdown");
  const status = $("cd-status");
  const eyebrow = $("cd-eyebrow");
  const done = $("cd-done");
  const fields = { d: $("cd-d"), h: $("cd-h"), m: $("cd-m"), s: $("cd-s") };

  const STATES = {
    before: { status: "", eyebrow: "ധ്യാനം ആരംഭിക്കാൻ ഇനി" },
    during: { status: "ധ്യാനം നടന്നുകൊണ്ടിരിക്കുന്നു", eyebrow: "സമാപനത്തിന് ഇനി" },
    after: { status: "", eyebrow: "" },
  };

  let currentState = null;

  const pad = (n) => String(n).padStart(2, "0");

  function setState(state) {
    if (state === currentState) return;
    currentState = state;
    section.dataset.state = state;
    status.textContent = STATES[state].status;
    status.hidden = !STATES[state].status;
    eyebrow.textContent = STATES[state].eyebrow;
    done.hidden = state !== "after";
  }

  function setField(el, value) {
    if (el.textContent !== value) el.textContent = value;
  }

  function tick() {
    const t = now();
    const state = t < START ? "before" : t < END ? "during" : "after";
    setState(state);

    if (state !== "after") {
      const remaining = Math.max(0, (state === "before" ? START : END) - t);
      const total = Math.floor(remaining / 1000);
      setField(fields.d, pad(Math.floor(total / 86400)));
      setField(fields.h, pad(Math.floor((total % 86400) / 3600)));
      setField(fields.m, pad(Math.floor((total % 3600) / 60)));
      setField(fields.s, pad(total % 60));
    }

    setTimeout(tick, 1000 - (now() % 1000) + 10);
  }

  tick();

  // Links
  $("map-link").href = MAP_URL;

  const shareText = [
    "പരമപരിശുദ്ധ ദിവ്യകാരുണ്യ ധ്യാനം",
    "നയിക്കുന്നത്: ഫാ. ജോസ് ഉപ്പാണി",
    "എറണാകുളം ചിറ്റൂർ ധ്യാനകേന്ദ്രത്തിൽ",
    "നവംബർ 18 (ബുധൻ) രാവിലെ 9 മുതൽ 22 (ഞായർ) ഉച്ചകഴിഞ്ഞ് 2 വരെ",
    "",
    SITE_URL,
  ].join("\n");

  $("wa-share").href = "https://wa.me/?text=" + encodeURIComponent(shareText);

  const nativeShare = $("native-share");
  if (navigator.share) {
    nativeShare.hidden = false;
    nativeShare.addEventListener("click", () => {
      navigator
        .share({ title: "പരമപരിശുദ്ധ ദിവ്യകാരുണ്യ ധ്യാനം", text: shareText.replace(SITE_URL, "").trim(), url: SITE_URL })
        .catch(() => {});
    });
  }

  // Poster lightbox
  const lightbox = $("lightbox");
  const lightboxImg = $("lightbox-img");
  const lightboxDl = $("lightbox-dl");

  document.querySelectorAll(".poster-thumb").forEach((btn) => {
    btn.addEventListener("click", () => {
      const thumb = btn.querySelector("img");
      lightboxImg.src = btn.dataset.full;
      lightboxImg.alt = thumb.alt;
      lightboxDl.href = btn.dataset.full;
      lightboxDl.setAttribute("download", btn.dataset.name);
      lightbox.showModal();
    });
  });

  $("lightbox-close").addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.close();
  });
})();
