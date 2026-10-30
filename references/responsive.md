# Responsive and adaptive UI

Use for substantial layout work or audits across device sizes. Preserve the same task and hierarchy while changing the composition that carries them. Choose breakpoints where the content stops fitting; do not create a layout solely because a device category has a familiar number.

## Plan the range

Record the primary device and supported range from the user or project. When unspecified on the web, inspect a narrow phone, a middle width, a common desktop, and a wide screen. Useful probes are **320–390px, 768px, 1280–1440px, and 1920px or wider**; these are test points, not required CSS breakpoints. Add landscape, split window, text enlargement, or an unusually long label when the product makes them relevant. Native apps should use the platform's size classes and safe areas rather than copying web breakpoints.

| Range | Check the design decision |
| --- | --- |
| Narrow phone | Keep the main subject and action in a clear order. Reflow columns, preserve labels and values, make targets usable by touch, and avoid controls hidden under fixed bars. |
| Middle width / tablet | Decide whether a two-column arrangement truly helps. Watch for awkward half-width cards, floating controls, and navigation that fits only at one exact width. |
| Desktop | Use space to show relationships or working context. Keep reading widths comfortable and controls close to their object. |
| Wide or ultrawide | Cap text measure and main content width where appropriate; let gutters grow or use intentional secondary space. Do not stretch a single paragraph or a small grid across the monitor. |
| Enlarged text / zoom | Let content reflow and controls grow or wrap. Avoid clipped names, prices, errors, and modal actions. Do not disable browser zoom. |

## Implement from content pressure

- First make a readable single-column order, then add columns when they clarify the material. Keep source order sensible for keyboard and assistive technology.
- Use the project's layout tokens and existing responsive components. For new CSS, flexible containers, `minmax(0, 1fr)`, sensible max widths, and fluid type can help; inspect the result instead of assuming a formula is enough.
- Give images an aspect ratio or dimensions, use appropriate cropping, and prevent a large asset from pushing text or controls away. Long words, translated labels, prices, and data values need an intentional wrap or overflow treatment.
- Tables, timelines, charts, and editors may need a dedicated narrow-screen representation or a clearly bounded local scroller. Do not silently hide columns or meaning. Keep the primary action reachable.
- Sticky headers, footers, floating buttons, and dialogs must leave room for safe areas, the on-screen keyboard, focus, and expanded error text.
- At large widths, avoid the opposite failure: isolated content in a vast empty canvas. Either keep a disciplined readable measure or use the extra space for a real secondary task or context.

## Verify the rendered result

At representative widths, inspect the **whole page** and the primary task state. Check document-level horizontal overflow, clipping inside components, wrapping, navigation, modal placement, focus visibility, touch target spacing, and whether the primary action remains easy to find. Inspect at least one boundary near a layout change; a pass at 375px and 1280px does not prove the widths between them work. For web text scaling, try browser zoom or increased text size when practical. Record exact widths and states checked; source inspection alone cannot establish responsive behavior.

An intentional local scroller can be valid for data-heavy content. Distinguish it from accidental page-level overflow and explain how users discover and operate it.
