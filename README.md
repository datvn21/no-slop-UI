# No-Slop UI

A Codex skill for creating, redesigning, and reviewing interfaces that feel made for their users—not assembled from generic AI UI patterns.

It applies to web, mobile, desktop, and native app interfaces. The skill can review UI source and report evidence-based findings, or implement a focused change when asked.

## Design principles

- Start from the user's task and the information they need.
- Choose structure to fit the product instead of reusing the same page template.
- Keep copy useful and concise; prefer sentence case over decorative ALL CAPS.
- Avoid unnecessary top labels, decorative borders, and shadows.
- Use a consistent spacing scale and preserve visual hierarchy across screen sizes.
- Keep accessibility, interaction feedback, and platform conventions intact.

## Install in Codex

Install for your user account:

```powershell
git clone https://github.com/datvn21/no-slop-UI.git "$env:USERPROFILE\.codex\skills\no-slop-ui"
```

Or install for one project by cloning into its `.agents/skills` directory:

```powershell
git clone https://github.com/datvn21/no-slop-UI.git ".agents/skills/no-slop-ui"
```

Restart or reload Codex if the skill does not appear after installation. To update a user-level install later:

```powershell
git -C "$env:USERPROFILE\.codex\skills\no-slop-ui" pull
```

## Use it

Call it directly with `$no-slop-ui`, for example:

> `$no-slop-ui audit this screen for generic patterns and usability issues. Cite the source files and suggest focused fixes.`

Codex may also select it automatically for relevant UI creation, redesign, or review requests.

An audit is read-only unless you ask for fixes. For large, multi-screen work, the skill can split independent checks across available agents and UI tools. It cannot install tools or grant permissions that Codex has not provided.

## Repository contents

```text
SKILL.md             Skill instructions
agents/openai.yaml   Codex display metadata and suggested prompt
```

The skill has no runtime dependencies. It distills structural variety from Hallmark and prioritized UX checks from UI UX Pro Max; neither needs to be installed to use this skill.
