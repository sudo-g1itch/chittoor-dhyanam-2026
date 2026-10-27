# പരമപരിശുദ്ധ ദിവ്യകാരുണ്യ ധ്യാനം — Countdown

Countdown site for the Eucharistic retreat led by Fr. Jose Uppani at Chittoor Dhyana Kendram, Ernakulam
(18 Nov 2026, 9 AM → 22 Nov 2026, 2 PM IST).

Live: https://sudo-g1itch.github.io/chittoor-dhyanam-2026/

Plain static site (`index.html`, `style.css`, `script.js`, `assets/`) served by GitHub Pages from the `main` branch root.

- Retreat start/end and the Google Maps link are constants at the top of `script.js`.
- Preview other moments with `?now=`, e.g. `?now=2026-11-20T10:00:00%2B05:30` (during) or `?now=2026-11-23T00:00:00Z` (after).
- Artwork (all public domain, via Wikimedia Commons): the oculus is Gustave Doré's engraving of the Empyrean (Paradiso, Canto 31); the putti are from Raphael's *Sistine Madonna*; the hands are from Michelangelo's *Creation of Adam* on the Sistine Chapel ceiling; the arched angels are Melozzo da Forlì's music-making angels (Vatican Museums). The cloud bank is generated.
- Fonts: Manjari (SMC) for all Malayalam text, because it joins conjuncts in the traditional script like the posters, and Cinzel for the Latin inscriptions. Both are OFL-licensed and self-hosted in `assets/fonts/` (licences alongside). They are cut down to the glyphs this page uses, so **after changing any text, re-cut the fonts** with fontTools + uharfbuzz (shape every text run, keep the glyphs seen at each lookup step, subset with `layout_closure=False`); otherwise new letters fall back to a system font.
- Images are WebP, with smaller files for phones via `srcset`. The full poster JPEGs load only in the lightbox and for download.
- Run locally: `python3 -m http.server 8000`, then open http://localhost:8000
