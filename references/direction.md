# Direction: turn product facts into design choices

Use for a new UI or substantial redesign. Skip the worksheet for a small, specified edit. Keep the result in working notes unless the project already has a design decision file. The goal is a buildable direction, not a moodboard.

## 1. Collect the facts

| Input | Record |
| --- | --- |
| User and situation | Who uses this, on which device, under what time or attention constraints? |
| Job | The verb they came to do and what success looks like. |
| Material | Real names, objects, data, product screens, photographs, places, copy, assets, and brand rules. Mark source for any claim. |
| Boundaries | Existing components, routes, technologies, accessibility needs, content that must remain, and scope the user fixed. |
| Unknowns | Facts or assets you lack. Do not turn them into fabricated proof. |

Separate product references from interaction references. A product reference can inform hierarchy, voice, and material; an interaction reference can inform the trigger, object change, feedback, and next state. If you inspect another product, record what you actually saw and why it applies. Do not copy its entire visual identity or infer an unseen workflow from a screenshot.

If the primary action depends on an unknown destination, payment flow, or service, get that missing fact before presenting it as functional. A requested prototype may simulate the action only when clearly labeled as a prototype. When brand material is absent, treat the visual identity as provisional and avoid presenting category styling as the product's established identity.

## 2. Remove before composing

List the current or proposed elements as `keep / combine / demote / remove`, with a reason tied to the job. Common removals: a paragraph repeating its heading, an eyebrow that adds no context, a second primary-looking button, invented proof, a decorative card around a single sentence. Keep labels, status, error information, and affordances that make an action understandable.

State the **main subject** and **primary action** of each important screen in one sentence each. For an app screen, the subject is usually the object being worked on. For a persuasive page, it may be a product demonstration, an offer, a place, an item, or credible evidence. If every item has the same weight, rank by user need rather than equalizing cards.

## 3. Translate tone into visible decisions

Choose positions on five axes and cite the product reason for each:

| Axis | Visible consequence |
| --- | --- |
| Quiet ↔ energetic | Contrast, saturation, motion, and visual competition. |
| Sparse ↔ dense | Information per view, spacing, grouping, and control proximity. |
| Soft ↔ sharp | Type weight, corners, edges, and surface changes. |
| Familiar ↔ experimental | How much the navigation and interaction follow category expectations. |
| Editorial ↔ operational | Whether the main view is a story to read or an object to manipulate. |

Words like “premium,” “modern,” or “clean” are not decisions. Translate them: which text receives emphasis, what remains visible, what material carries the screen, how much contrast, how dense, which motion is warranted. A coherent strong choice is better than blending all axes toward the middle.

## 4. Compare structures, then commit

For an underspecified greenfield brief, use [open-brief concepts](concepts.md) to think through at least two different structures before coding. Change the reading order or the way real material appears, not just the palette. A third is useful when both resemble the category default. This is internal exploration; do not build multiple variants unless the user asks.

Reject a candidate when it needs fabricated content, hides the primary action, breaks a familiar task without benefit, or depends on an unavailable asset. Compare the surviving candidates against the same facts: task clarity, content fit, platform fit, distinctiveness, and implementation cost. Keep the strongest one.

### Compact direction card

```text
User / job:
Main subject / primary action:
Real material and its source:
Visual principle (one sentence):
Structure and reading order:
Type / color / imagery rationale:
Important states and device constraints:
Existing choices to preserve:
Unknowns or stand-ins:
```

Example: A neighborhood cinema has a real weekly program and venue photos. Lead with tonight's film and screening time, followed by the week as a readable schedule; “Book a seat” is the primary action. Derive color from the venue's existing signage. Do not add a fake review carousel or a generic row of “Why choose us” cards.

## 5. Test specificity before building

- Replace the product name with a close competitor. If the main headline, structure, and imagery still fit unchanged, the direction needs more of this product's real material.
- Remove the decoration. If the subject and action disappear, the hierarchy depends on ornament rather than content.
- Read headings alone. Do they tell a specific story or a sequence of generic benefits?
- On a redesign, name what the old UI let someone find or do more easily. Preserve that advantage.

Do not chase novelty at the expense of conventions users rely on. Keep expected navigation and controls; spend distinctiveness on the content, composition, voice, and presentation of the real object.
