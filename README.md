# പരമപരിശുദ്ധ ദിവ്യകാരുണ്യ ധ്യാനം — Countdown

Countdown site for the Eucharistic retreat led by Fr. Jose Uppani at Chittoor Dhyana Kendram, Ernakulam
(18 Nov 2026, 9 AM → 22 Nov 2026, 2 PM IST).

Live: https://sudo-g1itch.github.io/chittoor-dhyanam-2026/

Plain static site (`index.html`, `style.css`, `script.js`, `assets/`) served by GitHub Pages from the `main` branch root.

- Retreat start/end and the Google Maps link are constants at the top of `script.js`.
- Preview other moments with `?now=`, e.g. `?now=2026-11-20T10:00:00%2B05:30` (during) or `?now=2026-11-23T00:00:00Z` (after).
- Artwork (all public domain, via Wikimedia Commons): the oculus is Gustave Doré's engraving of the Empyrean (Paradiso, Canto 31); the putti are from Raphael's *Sistine Madonna*; the hands are from Michelangelo's *Creation of Adam* on the Sistine Chapel ceiling; the arched angels are Melozzo da Forlì's music-making angels (Vatican Museums). The cloud bank is generated.
- Run locally: `python3 -m http.server 8000`, then open http://localhost:8000
