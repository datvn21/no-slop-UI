# No-Slop UI

A Codex skill for building and reviewing UI that reflects the product, its users, and its actual content. It works with web, mobile, desktop, and native interfaces. An audit is read-only unless you ask for fixes.

## Why this exists

Generated UI often looks polished while making the same unexamined choices: a generic first screen, repeated card grids, decorative labels, vague claims, and a perfect default state with no usable failure path. This skill makes those choices explicit and checks their effect on the task. It does not impose a house palette, font blacklist, or layout template.

## What the skill does

1. **Find the material:** user, task, real content, assets, existing brand, platform, and unknown facts.
2. **Choose a direction:** one main subject and action, a content-led composition, and a visual principle that belongs to this product.
3. **Build the interface:** typography, color, spacing, imagery, copy, states, responsive behavior, and accessibility using the project's conventions.
4. **Verify the result:** relevant project checks, rendered views and interaction when available, and evidence-led correction.

For reviews, it reports a few ranked findings with location, observation, user impact, and a concrete fix. It distinguishes a seen defect from a source hint or aesthetic preference.

## Install in Codex

For your user account:

```powershell
git clone https://github.com/datvn21/no-slop-UI.git "$env:USERPROFILE\.codex\skills\no-slop-ui"
```

For one project:

```powershell
git clone https://github.com/datvn21/no-slop-UI.git ".agents/skills/no-slop-ui"
```

Restart or reload Codex if the skill does not appear. Update a user-level installation with:

```powershell
git -C "$env:USERPROFILE\.codex\skills\no-slop-ui" pull
```

## Use it

```text
$no-slop-ui Build the booking page from the real schedule and photos in this project.
$no-slop-ui This dashboard feels generic. Keep the brand; make the invoice workflow clearer.
$no-slop-ui Audit this screen for AI-looking patterns and usability problems. Cite evidence; do not edit files.
```

Codex may also select the skill automatically for relevant UI work. A specified small edit follows a shorter path than a full redesign.

## Source hint checker

The optional checker uses Python's standard library and scans UI source for a few mechanical risks: `transition: all`, hidden outlines, disabled zoom, `href="#"`, clipped text backgrounds, and lorem ipsum. It reports locations and exits successfully because each hit needs human confirmation. It cannot judge composition, copy quality, contrast, or rendered behavior.

```powershell
py -3 scripts/check_ui.py path/to/ui
py -3 scripts/check_ui.py path/to/ui --json
py -3 -m unittest discover -s scripts -p 'test_*.py'
```

On systems where `python3` is available, use it instead of `py -3`.

## Repository map

| File | Purpose |
| --- | --- |
| [SKILL.md](SKILL.md) | Task routing, invariants, and main loop. |
| [direction.md](references/direction.md) | Product facts, choices, and direction card. |
| [concepts.md](references/concepts.md) | Generate and choose directions from a vague brief. |
| [inspiration.md](references/inspiration.md) | Find and assess current public UI references for a concept. |
| [composition.md](references/composition.md) | Content-led page and app structures. |
| [visual-language.md](references/visual-language.md) | Typography, color, imagery, spacing, copy, motion. |
| [interaction.md](references/interaction.md) | States, accessibility, responsive and platform checks. |
| [responsive.md](references/responsive.md) | Phone, tablet, desktop, wide-screen, and enlarged-text behavior. |
| [audit.md](references/audit.md) | Evidence gathering, severity, before/after review. |
| [patterns.md](references/patterns.md) | Generic-pattern diagnostics with exceptions. |
| [check_ui.py](scripts/check_ui.py) | Optional source hint checker. |
| [scenarios.md](eval/scenarios.md) | Manual behavioral test cases for the skill. |

The first worked smoke test is [Rạp Mây](eval/cinema/result.md), with a synthetic brief, runnable HTML, browser screenshots, and an interaction check. It is a self-test, not an independent benchmark against a run without the skill.

A second [DesignMD portfolio trial](eval/designmd-portfolio/result.md) tests whether the skill can take a useful project hierarchy and motion cue from a catalog entry without importing its unrelated template sections. It includes the synthetic brief, runnable page, viewport screenshots, and an assessment.

## Research behind this version

- [Hallmark](https://github.com/Nutlope/hallmark): content-led page anatomy, specific design direction, judged versus mechanical gates, screenshot review, and evaluation briefs. This skill adopts the decision and verification ideas without copying its theme catalog or treating every visual trope as a universal failure.
- [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill): task-specific reference material and priority for accessibility, interaction, and responsive behavior. This skill keeps a smaller, focused reference set instead of a large style database.
- [oil-ui](https://github.com/oil-oil/oil-ui): separating product facts, direction, structure, implementation, and visual review; preserving existing conventions during a redesign.
- [Emil Kowalski's skills](https://github.com/emilkowalski/skills): motion review by purpose and frequency, including pointer-only hover and reduced-motion checks. We adopted the relevant checks without its absolute timing rules.
- [Impeccable](https://github.com/pbakaus/impeccable): choose one earned focal motion and keep supporting feedback quiet; verify repeated use and interruption.
- [taste-skill](https://github.com/leonxlnx/taste-skill): research-driven direction and screenshot critique. Its critique makes clear that a passing source inspector is not a visual verdict; we keep the artifact review but not its fixed animation quotas.

The skill has no runtime dependency. Python is needed only for the optional checker and its tests.
