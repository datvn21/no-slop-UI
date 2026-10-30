# DesignMD portfolio concept trial

This self-test used the synthetic [brief](brief.md), the local skill, and the [DesignMD portfolio reference](https://designmd.app/library/portfolio-dev-full-stack/). The output is [index.html](index.html). It was built and reviewed in the same session; it is not an independent comparison with a run without the skill.

## What transferred

- The reference's useful decision was **projects before tech badges**. The page leads with three studies, each with a short purpose and expandable detail, then contact.
- A 240 ms hover response on the project art and 160–180 ms control feedback are small enough to preserve browsing pace. There is no forced intro, scroll hijack, or 3D asset.
- The reference's fixed testimonials, pricing, and 3D hero were rejected because the brief supplies none of them. Its dark/cyan palette was also not copied; the palette here is provisional.

## Evidence

- Full-page screenshots: [phone 375 px](375.png), [tablet 768 px](768.png), [desktop 1280 px](1280.png), [wide 1920 px](1920.png), and [phone with 200% root text](375-text-200.png).
- `smoke.cjs` ran in Chrome at 320, 375, 768, 1280, and 1920 px: no page-level horizontal overflow or JavaScript errors. At 375 and 1280 px, a project detail opened by click and closed by Enter; the contact link remained visible.
- At 375 px, reduced-motion mode removed the tested art transition. With 200% root text there was no horizontal overflow.
- After GitHub research, the project hover motion was gated to fine pointers; a touch tap was checked for a lingering transform.
- After the copy pass, the redundant all-caps eyebrow and intro description were removed; each project summary now states one short distinction. Phone and desktop screenshots were recaptured.
- `check_ui.py` returned zero source hints. Skill validation and the four existing checker tests passed.

## Assessment

| Criterion | Result | Observation |
| --- | --- | --- |
| Main job | Pass for this fixture | Three projects and contact are easy to find; no unrelated sections compete with them. |
| Factual integrity | Pass | Names and studies are explicitly marked synthetic; no fabricated clients, outcomes, or testimonials. |
| Responsive layout | Pass with a limitation | No overflow at tested widths. The shorter headline reduces wrapping at ordinary phone size; at 375 px with 200% text the page remains long, though controls are usable. |
| Interaction and motion | Partial | Project details work with click and keyboard; reduced motion removes the tested transition. Timing was checked in source and a browser state, but smoothness was not assessed by recording playback on real hardware. |
| Portfolio quality | Partial | Removing the redundant label and long blurbs strengthens the hierarchy. All three projects still repeat the same split layout and stand-in artwork; real motion samples and project outcomes are needed to shape distinct presentations and judge whether the portfolio represents a designer. |

**Verdict:** DesignMD helped most as a prompt to prioritize actual work and choose restrained motion. Its prewritten page checklist would have weakened this brief. The local skill filtered that checklist, but this self-test cannot establish how reliably a fresh agent would make the same choice.
