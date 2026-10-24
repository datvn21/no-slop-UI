---
name: no-slop-ui
description: Create, redesign, or audit human-first UI source for web, mobile, desktop, and native apps. Use to reduce generic AI-generated visual patterns, improve usability and accessibility, or implement a requested style; skip backend-only work.
metadata:
  short-description: Build and audit human-first UI with less AI slop
---

# No-Slop UI

Create interfaces that feel intentional and specific to the product, content, platform, and requested style. Start from what people need to do, then remove visual and copy elements that do not help them. When asked to review existing UI source, inspect the implementation and report concrete evidence; make fixes when requested. When the user asks for concepts or a prompt, deliver that artifact instead of changing code.

This skill synthesizes Hallmark's structural variety and anti-pattern awareness with UI UX Pro Max's prioritized UX checks. It is self-contained and does not require either skill or its datasets to be installed.

## Read the context first

- Inspect the existing app, its framework, design system, assets, and relevant screens before changing anything. Reuse established components and conventions.
- Identify the user, their immediate goal, the information needed to complete it, platform, and any explicit visual constraints. Preserve the user's choices.
- If a key choice is missing, make a reasonable decision from the product context and proceed. Ask only when the missing information would materially change the result and cannot be inferred.
- For style-only requests, carry the style into usable hierarchy, spacing, type, color, controls, and imagery; do not stop at describing a moodboard.

## Audit existing UI source

- Trace the visible screen from its route or entry point through the components, styles, and assets that shape it. Review the rendered result at relevant viewport sizes or on-device when available; otherwise base findings on source and state that limitation.
- Prioritize findings by user impact: accessibility and task-blocking interaction first, then layout and responsive issues, feedback and content clarity, consistency, and visual polish.
- Look for concrete signs of generic or careless UI: repeated page templates without product-specific purpose, unnecessary eyebrow/top labels, decorative borders and shadows, weak hierarchy, redundant copy, inconsistent spacing/type/color, controls without clear feedback, cramped layouts, and missing interaction or accessibility states.
- Flag shouty all-caps headings, labels, and buttons when there is no product or platform reason for them. Prefer sentence case for ordinary interface copy. Preserve standard acronyms, brand spellings, and user-specified capitalization; do not lowercase everything indiscriminately.
- Distinguish a deliberate style choice from a problem. Do not flag a pattern just because it is trendy; explain how it harms this product's clarity, usability, or identity.
- Report findings with severity, user impact, and precise file/component references. Prioritize a few supported issues over a speculative checklist. If the UI is already coherent, say so and identify only material gaps.
- An audit is read-only unless the user asks for fixes. When asked to fix findings, address the underlying shared component or design token where appropriate, keep the diff scoped, and recheck affected screens and states.

## Design with restraint

- Choose page structure based on the user's task and content; do not reuse a default hero/features/cards/CTA rhythm when another composition would fit better. Related pages may share a design system without sharing the same layout.
- Start with the primary user need. Give the needed content and action clear priority; omit visual flourishes and features that do not help the task.
- Avoid eyebrow or top labels by default. Add one only when it gives useful context or hierarchy that the main heading cannot provide.
- Avoid borders that merely outline every card, section, or screen edge. Separate content with layout, whitespace, or restrained surface contrast; keep borders where they clarify control boundaries, grouping, or accessibility.
- Use shadows sparingly, only when elevation communicates a real layer or interaction. Prefer flat surfaces when depth adds no useful information.
- Keep descriptions and helper copy only when they answer a real question, reduce uncertainty, or help a user act. Remove repeated headings, filler descriptions, and explanations of what is already obvious.
- Use a consistent spacing scale and apply it consistently to equivalent relationships. Reuse the project's tokens where available; do not tune each gap independently.
- Prefer sentence case for headings, labels, and controls. Avoid decorative ALL CAPS used only to create emphasis or an artificial hierarchy. Preserve acronyms, brand names, and explicit style requests.
- Choose type and color for readable hierarchy. Use real product content and context-appropriate imagery. Do not invent logos, claims, metrics, testimonials, or product capabilities. If assets are missing, use a deliberate typographic or geometric treatment rather than fake photography.

## Fit the platform and interaction

- Web: respect the app's routing and established layout. Preserve the same hierarchy and visual intent across viewport changes; adapt only what is needed to keep content and actions usable. Avoid unnecessary breakpoint-specific rearrangement, fixed-width overflow, or controls that depend on hover alone.
- Mobile and native: follow the platform patterns and conventions already used by the project. Respect touch targets, safe areas, navigation/back behavior, and system conventions; do not make a native screen look like a shrunk desktop page.
- Make controls communicate purpose and state. Provide useful loading, empty, error, success, selected, or disabled feedback when the flow needs it. Use motion to clarify cause and response, and respect reduced-motion settings where supported.
- Preserve semantic structure, keyboard use, visible focus, accessible names, and contrast appropriate to the text and platform. Do not rely on color alone to communicate state.
- When the platform is unspecified, infer it from the repository. If there is no existing app, choose the simplest implementation compatible with the user's request and available environment.

## Use available tools and agents

- Use the tools Codex actually exposes for the task: repository search for source tracing, and browser, simulator, screenshot, or accessibility tools for rendered behavior when available. Do not assume a tool exists or claim a check was run without using it.
- For substantial audits or multi-screen work, split independent reviews across available agents when the agent facility is available: user flow and content clarity; visual hierarchy and responsive behavior; accessibility and interaction states; platform conventions. Keep each assignment narrow and evidence-based.
- Delegate read-only reviews by default. If agents implement fixes, assign non-overlapping files or components; coordinate shared files through one owner. Reconcile their findings against the source and rendered UI before reporting.
- Keep small UI changes on one agent. Parallel review is optional and should save time or improve coverage, not add ceremony.
- Skill instructions can guide use of available tools and agents; they cannot install tools or grant permissions that Codex has not provided.
## Finish

- Review the changed screen at relevant viewport sizes or on the target platform when practical. Fix overflow, awkward wrapping, inconsistent spacing, and broken interactions without changing the intended visual hierarchy unnecessarily.
- Before returning work, check that the primary task is clear, hierarchy is coherent, style fits the product, and key interactions are usable. Do not add a rigid score or stamp that does not help the user.
- Keep changes scoped to the request and report what was implemented, reviewed, and any important limitation.

