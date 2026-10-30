# Audit and verification protocol

Use for a read-only review, diagnosis before fixes, or the final pass on a build. The output must distinguish **observed** defects from source-level risks and taste preferences. An audit request is read-only unless the user explicitly asks for changes.

## Gather evidence in proportion to the task

1. Identify the route or screen, user goal, target platform, main viewport, and relevant design constraints. Read only the source that shapes the visible result: route, component, styles, tokens, assets, copy, and shared interaction code.
2. If possible, inspect a current render at the main viewport and a different width/device. For existing work, save or note the before state before editing. A screenshot proves appearance at one state and size, not interaction behavior.
3. Exercise the primary task with keyboard or touch as appropriate. Sample a relevant empty, loading, error, or selected state. Use real or realistic content lengths.
4. Run the optional source hint tool for mechanical risks: `py -3 scripts/check_ui.py <path>` on Windows or `python3 scripts/check_ui.py <path>` elsewhere. Inspect each hit in context. Do not report a hint as a proven user-facing failure without evidence.
5. If no renderer or device is available, state that visual and interaction behavior remain unobserved. Do not infer a polished or broken layout solely from class names.

## Diagnose in impact order

| Priority | Examples | Evidence needed |
| --- | --- | --- |
| Blocker | Cannot complete task, inaccessible control, lost form data, action with no result. | Reproduction path or clear code path. |
| High | Primary action unclear, severe responsive clipping, key information hidden, invalid claim, unrecoverable state. | Render/interaction or direct source proof. |
| Medium | Weak hierarchy, repeated template sections, confusing copy, inconsistent components, crowded layout. | Specific screen evidence and effect on task. |
| Low | Decorative excess, small polish inconsistency, trend-based sameness without a task cost. | Only report if it materially improves this UI. |

For every finding write `where → what was observed → why it matters to this user → smallest useful change`. Link to file/component and line when the source is available. Distinguish a deliberate style from a defect: a purple accent, centered hero, serif type, or cards are not findings by themselves. See [pattern diagnostics](patterns.md) for likely causes and alternatives.

Example:

```text
High — Checkout summary at 390px: the fixed footer covers the final total and Pay button after the error message expands. A shopper cannot verify the amount or retry. Add bottom inset equal to the footer and recheck the error state.
```

The example names a screen, state, viewport, impact, and fix. “Looks generic; use more whitespace” does none of those.

## Before and after a fix

- Compare the same route, content, viewport, and state. Say what became easier to understand or do. Preserve any old behavior that was better unless the user requested its removal.
- Fix root causes in shared components or tokens when several screens inherit the issue. Keep unrelated visual changes out of a focused repair.
- Review the main screen before detail polish: subject, action, and real evidence should be legible without relying on decoration. Then scan the full page or flow for repeated section shapes and empty space with no purpose.
- Verify the interaction path and responsive layout after a cleanup. Removing a box, label, or paragraph must not remove a control boundary, status explanation, or information hierarchy.

## Finish report

Keep the report short and evidence-led. For an audit: the ranked findings, what was inspected, and what was not observable. For implementation: the design choice, changes, checks run, and any material limitation. Avoid a numerical quality score unless the user asked for a rubric; a number can disguise missing evidence.
