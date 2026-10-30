# Visual language: make each choice earn its place

Use after content hierarchy is clear. Start from existing brand tokens and components. For a new product, choose a small coherent system from its material; do not assign a category palette by reflex. “Anti AI slop” does not mean banning purple, gradients, rounded corners, Inter, or dark mode when they are part of the user's brand or solve a real problem.

## Typography

- Choose a body face for sustained reading and a display treatment only if the subject benefits from it. One family with a useful weight range can be enough. Check the actual fonts and licenses available to the project before adding another.
- Build a clear hierarchy with size, weight, line length, position, and spacing. If every size is close or every heading is huge, emphasis loses meaning. Text must wrap with real content and localization.
- Ordinary labels, buttons, and navigation should be easy to scan. Before adding a small label above a heading, check whether it supplies information absent from the heading, navigation, or nearby content. If it repeats a name or category, omit it. Avoid decorative tracked capitals and monospace micro-labels unless the established brand or content calls for them.
- Avoid an isolated italic or colored word in every headline as a substitute for composition. If emphasis is needed, choose the phrase that carries the factual claim.

## Color and surfaces

- Derive colors from brand assets, subject matter, a real image, or a deliberate communication role. Define a small set of semantic roles: background, text, secondary text, action, border, state, and focus. Check actual text and control contrast on the composed surfaces.
- Use color to show priority and state, not merely to make every box different. A single accent may be enough; more colors may be warranted for categories, charts, or a playful brand.
- Gradients, glass, glows, and textures can be legitimate materials. If removing one changes no information, identity, or sense of place, it is likely filler. Ensure effects never reduce legibility or conceal focus.
- Use borders for input boundaries, grouping, tables, or real separation. Use shadows to communicate elevation or interaction. A border and shadow around every card usually flatten hierarchy rather than add polish.

## Spacing and shape

- Reuse the project's spacing and radius tokens. If none exist, establish a small relationship scale, then tune the few exceptions the content needs. Equivalent relationships should look equivalent across screens.
- Align edges and baselines. Check the first screen at the actual viewport: the main subject and action should form a coherent composition, not a small stack surrounded by unused space.
- Keep a readable content measure on wide screens. Do not let a grid or image force text overflow at narrow widths. Allow long labels, names, and numbers to wrap or truncate with an accessible way to read them.

## Imagery and icons

- Prefer real product UI, owned imagery, meaningful diagrams, or honest type. If the source material lacks photographs, a typographic composition is better than invented people or fake screenshots.
- Each image should carry a fact, show an experience, or establish a real place or product. Check cropping at target widths, image text, loading behavior, and alternative text.
- Use iconography consistently. Icons should clarify a label or represent a familiar action; do not add emoji, colored icon tiles, or a bespoke glyph to every sentence just to populate cards.

## Copy and motion

- State what the product does with its own nouns and mechanisms. A headline that a competitor could reuse unchanged needs more specificity. Do not fabricate numerical proof to make it sound concrete.
- Make each description earn its space: give the one fact, difference, or next step the title cannot convey. Cut throat-clearing, restated headings, and sentences that merely explain what the page already shows. Keep longer copy when a decision, safety instruction, or complex subject needs it; brevity is not a word-count rule.
- Keep helper text only when it answers a likely question or prevents an error. Empty states should explain what is empty and the next useful action; errors should explain what happened and how to recover.
- Motion should show cause, response, or spatial relationship. Keep it subtle enough for the task and platform, avoid layout jumps, and support reduced motion. A static interface can be more appropriate than an animated one.

### Motion timing for portfolios and other expressive pages

Use the project's existing timing tokens first. Otherwise these are **starting ranges to tune in a render**, not required durations:

| Motion | Starting duration | Check |
| --- | --- | --- |
| Hover, press, focus feedback | 100–200 ms | The response feels immediate; focus remains visible without animation. |
| Menu, dialog, filter, or card state change | 180–300 ms | The user can act as soon as the control appears; no content jump. |
| Page or section transition | 250–450 ms | The destination and back path remain clear; navigation never waits for decoration. |
| One-time portfolio reveal | 300–600 ms, with 40–80 ms stagger only when it clarifies reading order | Work and contact remain readable immediately; repeat visits and slow devices do not replay a long intro. |

Choose easing and distance to match the element's role. Keep essential text stationary or use a small opacity/position change; avoid parallax or scroll hijacking that makes reading and navigation harder. Never delay a primary action to finish an intro. Pause or omit continuous animation when it competes with project content. For `prefers-reduced-motion`, remove nonessential travel, parallax, autoplay, and staggers while preserving state changes and feedback. Check motion at narrow widths and on a slower device when effects are substantial.

Before adding motion, name what it explains or confirms and how often the user will encounter it. Frequent actions need immediate feedback; reserve a longer authored moment for a rare encounter that carries the subject's identity. Gate pointer-only hover motion with `(hover: hover) and (pointer: fine)` so a touch tap cannot leave a false hover state. For a motion-led portfolio, inspect the actual transition at start, during, and after, plus a repeated or interrupted action; static screenshots and CSS durations alone cannot establish pacing or smoothness.

## A final restraint pass

Temporarily imagine removing each eyebrow, pill, icon tile, highlight, border, shadow, background texture, and paragraph. Keep it if users lose information, grouping, affordance, or a specific brand cue. Otherwise remove it. Then recheck the screen: subtraction must not harm usability.
