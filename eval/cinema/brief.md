# Cinema test brief

This is synthetic evaluation data, not a real cinema listing.

- Name: Rạp Mây.
- Screening: 30 October 2026 at 19:30.
- Film: Trăng qua ngõ.
- Ticket price: 80,000 VND.
- No photos, testimonials, customer counts, or other screenings are supplied.
- The page is a prototype. Its booking action may update local UI state but must clearly say it does not send a real reservation.
- Primary job: find the screening and try the reservation flow.

To repeat the interaction smoke test, install Playwright for the test environment and run `node eval/cinema/smoke.cjs`. The script uses Chrome installed on the machine. `PLAYWRIGHT_PACKAGE` can point to an existing Playwright package directory; no Playwright dependency is shipped with the skill.
