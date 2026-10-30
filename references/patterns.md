# Pattern diagnostics

Use these as prompts to inspect the real UI, not as automatic violations. A brand, an established system, or the user's explicit request can justify any visual treatment. Name the cost to this user's task before recommending a change. Most patterns need visual judgment; the source checker only flags a few mechanically recognizable risks.

| Symptom | What to inspect | Likely correction |
| --- | --- | --- |
| Centered headline, generic subtitle, two equal buttons, then three identical cards | Can the first screen say what this particular product does and show its most useful evidence? Are both actions genuinely equal? | Lead with the actual offer, working object, or evidence; give one action priority; shape sections around the available content. |
| A small all-caps label repeats the name or category above a headline; descriptions restate what is visible | What new fact does each line provide? Does removing it change understanding or the next action? | Remove redundant labels and sentences; keep short, concrete supporting copy only where it adds meaning. |
| Every item has the same bordered card, icon tile, and shadow | Are the items equally important and genuinely separate? Does elevation represent a layer? | Group by meaning, vary emphasis by importance, use spacing or surface contrast, reserve borders and shadows for real boundaries and layers. |
| Purple gradients, blurred glows, glass panels, dot grids, fake browser chrome, emoji icons | Do these depict the product or clarify interaction, or are they filling empty space? | Use actual assets, product UI, type, or a restrained geometric treatment. Preserve a brand use when it is deliberate. |
| The "tasteful" replacement: cream paper, serif headline, clay accent, tracked labels; or dark terminal with neon | Does this combination arise from the product, or merely avoid an older cliché? | Derive the look from a specific source, then change the composition or material where the product needs it. |
| All headings and buttons in tracked capitals | Does the case improve scanning or match the brand's actual typography? | Use readable sentence case for normal controls and headings; preserve acronyms and established brand treatment. |
| Repeated gradients, colored words, and illustrations compete with one another | Can the user identify the screen's subject and next action at a glance? | Choose one visual focal point and reduce competing accents. |
| Nice default state, missing empty/error/loading/focus state | Can someone complete or recover the task with keyboard, touch, slow data, or no data? | Add the relevant state and a clear next action; verify it in the rendered UI. |
| Desktop composition squeezed onto mobile | Does text wrap, do controls remain reachable, and is the main action still obvious? | Reflow according to task priority; preserve relationships rather than only shrinking sizes. |
| Generic claims or fabricated proof | Can every metric, testimonial, logo, screenshot, and capability be traced to supplied material? | Remove unsupported proof; state the actual mechanism or show the real product. |
| A landing page continues with features, process, statistics, testimonials, FAQ, and CTA despite little real material | Which sections have content or evidence that a visitor needs? | Cut unsupported sections; let the strongest real material carry a shorter page. |
| Every section repeats the same centered title, text, and grid | Is the information actually the same type or importance? | Change structure where the content changes role: example, comparison, schedule, editor, case, or document. |
| A dashboard is made of equal cards around an empty center | What object is the user working on, and where is its current state? | Give the working object the main area; place tools and summaries in support. |
| One accent color appears in every heading, icon, border, badge, and button | Can the user still distinguish the primary action and meaningful state? | Reserve the accent for priority or state; use type and spacing for ordinary hierarchy. |
| Copy describes the interface instead of the task | Does “Welcome,” “Here you can,” or helper text add information? | Replace it with an actual object, status, instruction, or remove it. |
| Every section is unusually sparse while controls or data are far apart | Does the space help reading or force unnecessary travel and scrolling? | Set density according to the task; keep related information and actions close. |

The strongest fix often changes structure or content, not decoration. Recheck after a visual cleanup: removing a border or label must not erase grouping, affordance, or accessibility.
