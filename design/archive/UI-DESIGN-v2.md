# ArrowMind — UI Design v2

Replaces v1 following direct user feedback: the site needs complete real phone mockups, legible complete UI, an App Store presentation style, and inspiration from AI / frontier technology websites. Design completed before the v2 implementation.

## Direction

A premium AI vision product with a photographic, complete phone as its hero. Monochrome near-black and soft white, with small native signal-green details. No gradients, excessive diagram frames, giant empty cards, or artificial dashboard UI. Wide editorial layouts, a strong type hierarchy, real device presentation and disciplined motion.

## Critical image rules

- Hero uses `/media/hero-phone.webp`: a complete physical iPhone running actual arrow detection, cropped only outside the device from the provided App Store art.
- Use `width:100%; height:auto` or `object-fit:contain`. No fixed-height overflow crop around important app screens. No UI screenshots pretending to be background decoration.
- `/media/scan-to-score-phones.webp` retains the original App Store composition: complete back scanning phone, front plotted-target phone and entire score-card floating layer.
- `/media/bias-tablet.webp`, `spread-tablet.webp`, `gear-tablet.webp` include complete original device bezels and screens. Show a selected tablet completely instead of hiding lower parts inside a short card.
- `/media/component-specs.webp` is a complete real details card. Display the entire card, with a small intentional overlap only outside primary content.
- The provided analysis phone composition may be shown as supplementary art, but never use it as a substitute for readable, complete selected analysis UI.
- Any image enlargement must be a real dialog/lightbox with close/Escape, not an inert click affordance. Site can alternatively provide a simple View full screen link to the image.

## Palette and typography

Hero/nav: #111211. Scoring showcase: #292929 to match original art background. Light sections: #F3F4EF. White text #F7F7F2. Muted dark text #A8AAA4, light secondary #686D65. Accent #3CE281 only for small live indicator, active line and primary CTA if appropriate. Borders #363834 / #D7DBD2. System sans, 92–104px desktop hero type, 58–68px section headings, 64px mobile hero type. Keep body copy at least 15px desktop and mobile. Label text 11–12px, not unreadable 7px microcopy.

## Final section design

1. Dark navigation: supplied light wordmark; Detection / Analysis / Your setup; white Get ArrowMind button. Sticky solid dark header, accessible mobile menu.
2. Dark hero: left text, right full real phone photograph (preserve entire phone). Eyebrow “REAL-TIME AI VISION”; title “Every arrow. / In real time.”; body “Real-time arrow detection. Automatic scoring. Training analysis. Meet ArrowMind.” Primary Get ArrowMind, Watch the film secondary. Full phone rendered at ~410px wide, ~610px tall on desktop; no massive crop of target. Small green live caption outside image, no fake interface frame. At mobile, phone directly under compact headline/actions and fully visible when scrolled.
3. Narrow credibility strip: Nearly 50,000 users / Our own AI vision model / Available worldwide.
4. Charcoal detection+scoring editorial spread: left complete App Store scan-to-score composition, right 01–03 sequence with title “Point. Detect. / Already scored.” All benefit text grounded in supplied film. Switching steps updates the short supporting copy and progress, but must not crop or replace complete main mockups with small UI fragments. Include “No photo. No waiting.” and virtual target/history copy. Small animation: selected step green line and native scan sweep over camera region, no arbitrary perpetual floating.
5. Light analysis section: title “Auto-scoring is / just the start.”; left vertical selector Bias / Grouping, concise explanations plus Trends over time copy; right one large complete tablet mock, switching between bias-tablet and spread-tablet. All chart content and device edges visible, click View full screen for inspection. Tablet ~440px wide desktop, bounded by natural aspect ratio (not cropped). Small data panels only if complete and readable.
6. Dark comparison: retain meaningful All arrows / Setup A / Setup B target interaction, mark illustrative comparison. Arrange real product plot/report visual in adjacent optional section or use a full target; all arrows remain visible. Headline “See what’s changing. / Find what works.”
7. Light gear: “Your bow. / Every detail.” with full gear tablet + complete component-specs card. Use a composed product spread; no entire tablet hidden under clipped short viewport. On mobile stack device and details at comfortable size.
8. Dark final CTA: large “Shoot. Scan. Improve.”; full app icon; white App Store badge and Android APK link; existing URLs retained. Restrained green dot/status, no giant chartreuse block.
9. Dark footer, English only. Same legitimate support/privacy/terms links.

## Motion / behavior

Keep existing film native dialog + full transcript, no sound autoplay. Use small deliberate Framer Motion entrances and transitions; preserve reduced-motion handling. Complete real mockups are the primary visuals, animation supports them. Avoid scan controls that are only decorative; if retained pause/replay must work. Mobile navigation, download links, analysis tabs, film and comparison filters must work. Retain original TypeScript/Next.js stack; no new dependencies needed.

## Local validation

No code review or deployment. Verify TypeScript and open the actual site locally, check desktop and mobile and key interactions. Current dev had stale CSS: restarting is preferred to source hacks. Do not mark complete until actual screenshots show the intended design and full devices.

## Verified reference observations

- [Figure](https://www.figure.ai/): homepage visually inspected in this revision. Large product imagery, light navigation and an explicit film entry point inform the complete-phone hero and one-capability-per-section progression.
- [Linear](https://linear.app/): homepage visually inspected in the first research pass. Large type followed by recognizable real product UI informs the analysis section and readable interface presentation.
- [Comet](https://www.perplexity.ai/comet): content inspected in this revision. Its task-to-result product explanation informs ArrowMind’s point → detect → score story. No claim is made about a visually verified current Comet color scheme.
- [Nothing](https://nothing.tech/): content read only; current visual treatment was not verified and is not used as a factual basis for this palette.

The monochrome palette and green accent are ArrowMind design decisions, not copied claims or implied endorsements. App Store compositions supplied by the user remain the authority for actual product visuals.
