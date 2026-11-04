# ArrowMind — UI design and implementation brief

Design completed before implementation. Date: 2026-11-04. Local-only redesign of the existing Next.js / React / TypeScript site.

## Product hierarchy and copy

The site should feel like a precision AI product built by people who understand archery. Lead with real-time detection, follow with automatic scoring and saved arrow positions, then analysis, comparison, and gear. Use the supplied film copy as the authority. Keep the terms “end,” “group,” “shot order,” and “setup.” Never imply live detection of arrows in flight: the archer finishes an end, then points the phone at the target.

1. Navigation: supplied English wordmark, Detection, Analysis, Your setup; Get ArrowMind → (#download).
2. Hero eyebrow: AI VISION. BUILT FOR ARCHERY.
   - H1: Every arrow. / Detected.
   - Body: Real-time arrow detection. Automatic scoring. Point your phone at the target and see every shot come into focus.
   - Primary CTA: Get ArrowMind →; secondary: Watch the film ↗ (opens supplied film in accessible native dialog).
   - Large right-hand product stage: actual target-scan crop, fine corner markers, small LIVE DETECTION status, sequential scan line, floating white “9 arrows detected / Positions. Scores. Instantly.” card, small sample virtual-target plot. Label composite as “Product visualization”. Replay/pause control.
3. Credibility strip: Nearly 50,000 users / Our own AI vision model / Available worldwide. No fake logos, testimonials, accuracy metrics, or invented speed claims.
4. Detection section, approximately 55% of product story:
   - Eyebrow 01 / REAL-TIME DETECTION
   - H2: Finish your end. / We’ll take it from here.
   - Supporting text: Simply point your phone at the target. Every arrow’s position and score appear in real time. No photo. No waiting.
   - Three interactive steps: 01 Point your phone; 02 Detect every arrow; 03 Keep every shot. Selecting a step changes the large real product screenshot (scan-screen / target-scan / plot-screen) and explanatory text. Keep controls visible and distinguish active state with a line + color, not color only.
   - “Every arrow plotted on a virtual target. Review your shots anytime.”
5. Analysis section on solid near-black:
   - Eyebrow 02 / TRAINING ANALYSIS
   - H2: Auto-scoring is / just the start.
   - Body: See the patterns. Refine your form. Track your progress.
   - Large cropped white app panels for bias and spread. Avoid repeated full-phone mockups.
   - Three labels: Find your bias — Horizontal and vertical deviation, visualized. / Know your grouping — See where your arrows tend to land. / See your progress — Follow trends across your training.
6. Comparison section, cream:
   - H2: See what’s changing. / Find what works.
   - Left copy: Different arrows? Add tags. Mark your shot order. Compare your groups together on one target, or view them separately.
   - Right: interactive clean vector target with All arrows / Setup A / Setup B controls. Clearly label “Illustrative comparison”; it is a site demonstration, not a live AI service or a performance claim. Change visible dots, legend and explanatory text. Target has true archery colors with black outlines; two groups visually distinct (dot vs diamond) beyond color.
7. Gear section, cream with single border divider:
   - H2: Your bow. / Every detail.
   - Body: Save your bow and detailed component specs in your gear library. Keep every setup ready for your next session.
   - Actual cropped equipment list from supplied iPad promotional image, asymmetrically composed with small component-spec inset from the film if available. No fabricated actual equipment specs.
8. Final CTA, solid chartreuse:
   - Shoot. Scan. Improve.
   - Every arrow detected. Every session analyzed.
   - App Store download, secondary existing Android APK download (label “Android APK”; preserve existing binary path, set English download name). Do not invent Google Play availability.
9. Footer: provided wordmark, “Built for the way you train.”; Product section links; Support email from existing project; existing Privacy policy and Terms destinations; © 2026 ArrowMind. All visitor-facing text in English.

## Visual specification

- Background: warm white #F5F5EF. Main text #1B1D19. Secondary #62665D. Border #DADDD2. Accent #D5F66B. Dark analysis background #20231E. No gradients anywhere.
- Typography: system sans (Arial/Helvetica fallback), editorial oversize headings, medium weight, tight letterspacing. Use system monospace for micro labels, counters and numbered steps. Local system fonts avoid network font dependencies.
- Desktop: max content width 1280px; horizontal gutters 48–64px; nav height 84px; hero grid 0.88fr / 1.12fr with 72px gap; hero H1 88–104px; section H2 56–72px. Visible modular rails, hairline borders and generous space.
- Corners: buttons 6px, product surface 12px; small UI panels 8px. No excessive rounded pills, decorative blobs, background glows, noisy dotted grids, or stock archery photos.
- Use original supplied English wordmark, cropped to its visible bounds (1931 × 309). Do not recreate its lettering. Small icon is cropped from original supplied asset.
- Mobile: at <=760px collapse to single column; keep hero heading 58–72px, 24px gutters, visual after copy. Single menu toggle, 44px minimum touch controls, readable labels. No horizontal overflow. Product visuals remain large enough to understand; comparison buttons wrap.

## Motion storyboard

Use existing Framer Motion + CSS, not a new rendering framework. Deliver Remotion-like deliberate sequencing rather than gratuitous motion.
- Hero entrance: copy settles upward 14px over 0.65s; product frame follows 0.15s later.
- Scan scene: line travels top-to-bottom; corner markers resolve; detection badge changes from “Scanning target…” to “9 arrows detected”; miniature virtual target dots appear in sequence. Complete cycle 5.4 seconds. Replay explicitly resets it; pause freezes it. Prefer one initial pass rather than a perpetual distracting loop.
- Section reveals: viewport-triggered once, 20px travel, 0.6s. Static content remains visible if JS is unavailable.
- Detection steps: screenshot crossfade 0.25s; no autoplay step changes.
- Comparison: group dots animate opacity and scale on filter change, 0.25s.
- Respect prefers-reduced-motion globally: no auto scan, parallax, animated scroll or transform entrance; show final detection state immediately. Video never autoplays sound; film only loads on request.
- Native video controls; native modal dialog with close control, Escape behavior, focus restoration and captions/transcript.

## Assets and provenance

All product images are cropped from the supplied English promotional artworks in `/Users/shuhan/Desktop/Arrowmind4`. Film is the supplied 71.8-second MOV transcoded to H.264 MP4 at 720px width. The original files remain unchanged. Derived assets live in `public/media`.

- arrowmind-wordmark.png, arrowmind-icon.png — supplied logo.
- target-scan.webp, scan-screen.webp — real detection screen.
- plot-screen.webp — plotted arrows and scoring screen.
- bias-screen.webp, spread-screen.webp — actual analysis screens.
- gear-screen.webp — actual equipment list.
- arrowmind-film.mp4, film-poster.jpg — supplied English launch film.

Implementation should follow `UI-DESIGN.html`, a self-contained visual design board, plus this document. Deliver local HTTP preview and basic interaction verification; user explicitly does not request review or deployment.

## Research findings and sources

Research checked 2026-11-04. These are design observations and editorial inferences, not a market survey or evidence that every American archer shares the same aesthetic preference.

- [Mathews](https://mathewsinc.com/): visually inspected homepage. Large real product/use imagery, short statements and direct exploration/video entry points suggest a proof-led hero. Apply to ArrowMind through an actual detection screen plus a short headline.
- [Hoyt](https://hoyt.com/): homepage content and product structure emphasize equipment, tuning and practical use. Keep archery-specific terms such as end, groups, shot order, setup and tuning. Do not imply automated coaching.
- [Easton](https://eastonarchery.com/): target/hunting, indoor/outdoor and detailed arrow component taxonomy support showing concrete equipment records rather than generic management icons.
- [Linear](https://linear.app/): visually inspected homepage. Large left-aligned type, restrained black/white surfaces, fine separators and substantial product UI establish a useful visual reference for AI product credibility. Apply the hierarchy to detection first, analysis second.
- [Claude](https://claude.com/): only top-level warm-white, dark type and solid CTA treatment was visually confirmed; page body did not finish loading. This limited observation supports the light palette, not any claim about the complete page.
- [Existing App Store listing](https://apps.apple.com/us/app/%E8%AF%86%E7%AE%AD/id6749833556): ID 6749833556 verified and retained. The external App Store currently uses its own localized listing name; the website itself is entirely English.

Borrow the restraint and practical vocabulary; preserve ArrowMind’s actual product and supplied logo. No borrowed endorsements, fabricated accuracy rates, or implied endorsements by these brands.
