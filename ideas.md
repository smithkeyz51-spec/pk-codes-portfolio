# Pk Codes Portfolio — Design Direction

## Three stylistic approaches

### Theme Name: Carbon Signal
Very Brief Intro: A near-black editorial portfolio with restrained signal colors, technical typography, and soft chromatic edges. It feels like a crafted developer instrument rather than a template.
Probability: 0.03

### Theme Name: Paper Circuit
Very Brief Intro: A warm off-white portfolio built around ink-like black type, cobalt rules, and tactile editorial spacing. It feels thoughtful, human, and publication-led.
Probability: 0.07

### Theme Name: Terminal Bloom
Very Brief Intro: A dark portfolio with electric green and violet accents, expressive hover states, and a more experimental interface language. It feels energetic and future-facing.
Probability: 0.02

## Selected Approach: Carbon Signal

### Design Movement
Contemporary digital brutalism softened by editorial Swiss typography: precise structure, hard contrast, and deliberately limited ornament.

### Core Principles
1. **Signal over decoration:** every glow, line, and accent should guide attention or explain hierarchy.
2. **Editorial asymmetry:** use offset columns, wide margins, and varied card scales instead of a centered template grid.
3. **Quiet depth:** build materiality with hairline borders, shadow, blur, and grain rather than loud gradients or 3D effects.
4. **Proof through detail:** project descriptions, tool labels, and resume-backed facts should feel as intentional as the visual system.

### Color Philosophy
The base is a carbon-black field (#080909) that gives the work room to breathe. Ivory typography provides a print-like contrast, while one ownable signal color—**acid chartreuse (#B8F04A)**—marks action, availability, and the parts of the brand that are alive. A muted petrol secondary note supports depth without becoming a second loud accent.

### Layout Paradigm
A long-form vertical portfolio organized like a fold-out studio dossier: a floating pill nav, a split hero with a framed portrait, a horizontal tool rail, then offset service and project compositions. Sections alternate between full-bleed quiet space and denser proof blocks.

### Signature Elements
- A thin “signal rail” motif: short horizontal rules with an acid endpoint, repeated in section labels and footer details.
- Carbon glass panels with clipped corner geometry and hairline edges.
- Oversized display type with one highlighted word, like a printed mark on a technical sheet.

### Interaction Philosophy
Interactions should feel like a physical control panel: tactile on press, quick on hover, and never noisy. Links reveal their destination with arrow movement and signal color; cards lift only slightly and reveal a sharper border rather than a dramatic transform.

### Animation
Use 180–260ms ease-out transitions for buttons, nav, and cards. Stagger the initial reveal of hero copy and proof panels by 50ms. Use a slow, nearly imperceptible drift for the hero glow and a single scan-line shimmer on the tool rail. Respect reduced-motion preferences and keep all motion transform/opacity-based.

### Typography System
Display: **Space Grotesk** 700/600 for headlines, with tight tracking and occasional italic emphasis. Body: **DM Sans** 400/500 for descriptions and controls. Metadata: **IBM Plex Mono** 500 for labels, dates, and technology tags. Hierarchy uses strong scale changes rather than many weights.

### Brand Essence
**Pk Codes helps people turn useful ideas into shipped digital experiences through software development, product thinking, and creative direction.** Personality: considered, capable, inventive.

### Brand Voice
Headlines are concise and confident. CTAs are direct and active. Microcopy is warm but specific, avoiding portfolio filler.

Example lines:
- “Useful ideas deserve a real interface.”
- “Show me the problem. I’ll help shape what ships.”

### Wordmark & Logo
A compact “PK” monogram built from two interlocking signal brackets: the P is a rounded vertical rail, while the K is a diagonal split that suggests motion from idea to interface. Use the monogram as a small mark in the nav and a larger outlined stamp in the footer; never rely on plain text alone for the logo.

### Signature Brand Color
**Acid Chartreuse — #B8F04A**

## Style Decisions
- Keep the page dark by default; a theme toggle may be omitted if it would dilute the carbon signal system.
- Use the supplied portrait/reference image as the hero visual, without introducing a random stock developer image.
- Use original generated abstract project cover art only where actual project screenshots are unavailable; label project facts conservatively and never invent metrics, reviews, or technologies.
