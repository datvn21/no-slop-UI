# Interaction and platform checks

Use the parts relevant to the flow. This is a verification guide, not an instruction to add every possible state or new library. Existing platform components and established project patterns take precedence.

## Trace the primary task

Record `entry → action → object change → feedback → next state`. If the task can fail, record `failure → recovery`. Implement the state where a user needs it, rather than adding a generic toast after every action. Confirm the visible label, interactive target, and resulting state agree.

| State | Check |
| --- | --- |
| Default | The subject, current value or status, and main action are recognizable. |
| Hover / pressed / selected | Feedback is perceivable; selected state is distinguishable without color alone. Do not rely on hover for an essential action. |
| Keyboard focus | Focus is visible, not hidden behind sticky UI, and follows a sensible order. Dialogs and menus have a usable escape and return path. |
| Loading | User knows work started; repeated submission is prevented where it would duplicate work or cause harm. Avoid layout jumps. |
| Empty | Explain the absence that matters and offer the next useful action, if there is one. |
| Error | Point to the problem near the relevant field or object; retain entered data and provide recovery. |
| Success | Show the result in the object or flow, with any next step. A toast alone may be insufficient. |
| Disabled | The control's unavailability is understandable when it matters; do not leave a dead-looking primary action without context. |

## Accessibility and responsive behavior

- Use semantic controls and accessible names. Icon-only controls need a name; decorative icons should not announce themselves redundantly. Images that convey content need alternatives; decorative images do not need invented descriptions.
- Verify text contrast and non-text control boundaries against their actual backgrounds. Keep keyboard operation, logical reading order, and visible focus. Do not disable zoom or use color alone to communicate status.
- For touch interfaces, use platform-appropriate hit areas and spacing. Keep critical controls clear of safe areas and fixed bars. Preserve system gestures and native back behavior.
- Test a long realistic label, a short one, and enlarged text when relevant. Follow [responsive and adaptive UI](responsive.md) for narrow, middle, desktop, and wide layouts. Provide an alternative to a visual chart or color code when the data matters.
- Respect `prefers-reduced-motion` or the platform equivalent for nonessential animation. Avoid unexpected movement during input.

## Platform emphasis

| Platform | Pay extra attention to |
| --- | --- |
| Web | Semantic HTML, keyboard, browser zoom, responsive content, hover-independent actions, meaningful focus, reduced motion. |
| iOS / Android | Safe areas, tap target conventions, system navigation, dynamic text, permission and offline states, native feedback. |
| Desktop native | Window resizing, dense data, keyboard shortcuts, menus, focus, platform widgets and file dialogs. |

Do not claim a full accessibility audit from source inspection or a single screenshot. Record which states, devices, and input modes were actually exercised.
