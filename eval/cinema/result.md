# Rạp Mây: first behavioral smoke test

This run applied the local `SKILL.md` to the synthetic [brief](brief.md). It was performed in the same working session that edited the skill. It tests whether the workflow can produce and review a concrete UI; it is not an independent agent run or a comparison with no skill.

## Evidence

- [Desktop, 1280px](desktop.png), [mobile, 375px](mobile.png), [tablet, 768px](768.png), and [wide screen, 1920px](1920.png) full-page screenshots, captured with Playwright using Chrome and exact browser viewports.
- [375px with 200% text](375-text-200.png) and its [scrollable dialog](375-text-200-dialog.png).
- [Desktop dialog](1280-dialog.png) and [mobile dialog](375-dialog.png) after selecting three tickets.
- `smoke.cjs`: no page-level horizontal overflow at 320, 375, 768, 1280, 1920, or 2560px; no overflow at 375px with 200% root text; the enlarged dialog scrolls and its confirmation remains reachable. At 375px and 1280px, the dialog opens, Esc closes it, three tickets total 240,000 VND, confirmation changes the button state, and no JavaScript page errors occurred.
- `check_ui.py`: zero source hints. This is not a visual verdict.
- Color pairs measured against the main background: body text 15.46:1, muted text 8.68:1, accent 9.76:1. No full accessibility audit was performed.

## Assessment

| Criterion | Result | Observation |
| --- | --- | --- |
| Main task | Pass | Film, date, time, price, and trial booking action are visible without filler sections. |
| Factual integrity | Pass for the test fixture | No customer counts, testimonials, stock photos, or unsupported screenings. Trial booking is clearly labeled as non-transactional. |
| Responsive layout | Pass for tested widths | Browser measurements show no page overflow from 320px through 2560px at the six tested points. Screenshots cover phone, tablet, desktop, wide screen, and 200% text. The enlarged dialog requires internal scrolling but keeps its actions reachable. |
| Interaction | Pass for tested path | Dialog, Escape, quantity total, confirmation, and keyboard focus were exercised. |
| Accessibility | Partial | Native controls, visible focus, measured color contrast, and enlarged text were checked; screen reader behavior and actual browser zoom were not tested. |
| Product-specific identity | Partial | The schedule-first hierarchy uses the supplied facts, but the dark and amber styling could belong to many cinemas because the brief supplies no brand asset or venue imagery. |

The test revealed two gaps: the first headline was initially generic, and the original direction guidance did not explicitly handle an unknown booking service. The headline was changed to the film title. `references/direction.md` now requires an actual action destination or a clearly labeled prototype and treats visual identity as provisional when brand material is absent.

**Verdict:** the skill supported a coherent, usable small UI and caught an unearned generic headline during review. The later responsive pass exposed a dialog that needed an explicit height limit and internal scrolling at 200% text; that was fixed and retested. This run does not establish that it outperforms an agent without the skill. A fresh-session comparison on the same brief is still needed for that claim.
