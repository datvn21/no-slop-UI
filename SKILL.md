---
name: no-slop-ui
description: Design, build, redesign, or audit user-facing web, mobile, desktop, and native UI when visual direction or usability needs judgment. Use for generic, AI-looking, template-like, or "make it feel designed" feedback. Skip backend-only work and fully specified cosmetic edits.
metadata:
  short-description: Design and audit UI with product-specific direction
---

# No-Slop UI

Design from the product outward. An interface should reveal what this product is, help its user complete a task, and hold together across real content, states, and devices. A fashionable style is not a design decision unless it has a reason here.

## Route the request

| Request | Do | Read |
| --- | --- | --- |
| New page, app screen, or substantial redesign | Establish product facts and direction, plan structure, implement, then inspect the result. | [Direction](references/direction.md), [composition](references/composition.md), [visual language](references/visual-language.md), [interaction](references/interaction.md), [responsive](references/responsive.md) |
| Vague UI request or several requested concepts | Determine the missing critical fact or form a few content-led directions; choose one unless the user asked to compare. | [Open briefs and concepts](references/concepts.md), then [direction](references/direction.md) |
| Existing UI feels generic, messy, or weak; user asks for fixes | Capture the current state, diagnose, fix the highest-impact causes, compare before and after. | [Audit](references/audit.md), then the relevant design references |
| Read-only audit or review | Report ranked findings with evidence and concrete changes; leave files untouched. | [Audit](references/audit.md), [pattern diagnostics](references/patterns.md) |
| A specified small edit | Make the edit using the existing system; check the affected area. | Only the reference needed for that edit, if any |
| Concept, critique, or prompt without implementation | Deliver that artifact; do not modify code. | [Concepts](references/concepts.md), [direction](references/direction.md), or [audit](references/audit.md) as relevant |

Read references only when that part of the task matters. For an open brief or substantial new direction, use [current UI research](references/inspiration.md) to check relevant public examples. The [pattern diagnostics](references/patterns.md) are a symptom guide, not a mandatory blacklist. Existing brand, user instructions, and platform conventions take priority over aesthetic defaults in this skill.

## Invariants

1. **Facts stay facts.** Do not invent claims, metrics, testimonials, customers, logos, screenshots, photos, or capabilities. Mark unknowns; use honest placeholders only when the user asked for a mockup.
2. **A task remains possible.** Preserve navigation, input, validation, feedback, keyboard and touch use, visible focus, contrast, and relevant empty/error/loading states. Visual simplification must not remove meaning or affordances.
3. **Existing systems matter.** Inspect the route, components, tokens, assets, and surrounding screens before replacing a pattern. Fix a shared cause in its shared component or token when that is the real scope.
4. **Evidence has a source.** Distinguish what was seen in a render, exercised in an interaction, read in source, or inferred. Never claim a visual or accessibility check that was not performed.

## Working loop for substantial UI work

### 1. Establish the material

Identify user, task, content, primary action, platform, existing brand, real assets, constraints, and missing facts. For an existing UI, capture the current screen and its relevant states when a renderer is available. Ask only when an unknown would change the core direction and cannot be inferred. Use the [direction worksheet](references/direction.md) for a new screen or redesign; use [open-brief concepts](references/concepts.md) when the request is vague.

### 2. Choose a direction and structure

Name one visual and structural idea that follows from the material. Identify the screen's main subject and primary action; keep necessary secondary actions visibly secondary. Sketch the information hierarchy before choosing color or decoration. Consider more than one composition internally when the first is the familiar category template; deliver multiple directions only when requested. Use [composition](references/composition.md) to match the content, not to pick a template at random.

### 3. Build the system and interaction

Apply [visual language](references/visual-language.md) to typography, color, spacing, imagery, copy, and motion. Reuse the project's components and tokens. Implement the states the flow actually needs using [interaction](references/interaction.md), and adapt the composition across the supported range using [responsive](references/responsive.md). Work from the main task outward; do not add sections or decoration merely to fill space.

### 4. Inspect, correct, deliver

Run relevant project checks. Inspect the rendered result at its main viewport, a narrow width, a middle width near a layout change, and a wide width when tools allow and the scope is substantial; use the [responsive checks](references/responsive.md) to select the relevant points. Exercise the primary action and a relevant non-happy state. At each pass, fix the most consequential issue first: blocked task, misleading content, weak hierarchy, broken layout, then polish. Stop when remaining differences are taste preferences rather than supported problems. Use the [audit protocol](references/audit.md) for a review or before/after comparison.

When applicable, run `py -3 scripts/check_ui.py <path>` (or `python3`) as a **source hint pass**. It catches a few mechanical risks and cannot judge whether a design looks generic. Confirm every result in context; the tool does not replace rendered review.

Report what changed or what was found, what was actually verified, and any material limitation. Keep audit findings tied to a location, observation, user impact, and smallest useful correction. Do not assign an arbitrary quality score.
