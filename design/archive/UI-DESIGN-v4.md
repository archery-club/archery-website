# ArrowMind — UI Design v3 / conversion & trust

Supersedes v2 following user feedback. Existing stack: Next.js / React / TypeScript / Framer Motion. Local-only. Design first, then development. No Canvas, review or deployment.

## Objective

Help an archer understand real-time detection, trust ArrowMind, and download the app. Remove the all-black aesthetic and every iPad/tablet image. Preserve complete phone frames and legible product UI. Keep the no-gradients requirement. Primary: detection / automatic scoring. Secondary: analysis, comparison, equipment.

## Visual direction

Luminous, precise and approachable. Off-white #F8F9FD, white #FFFFFF, navy ink #202438, muted #6A7085, electric violet #6254E8, lavender surface #EEEBFF, mint #E7F5EE, border #E4E6EF. Flat surfaces and subtle physical shadows; no black section backgrounds, rainbow gradients or glows. Native app green stays inside demo UI. Rounded 16–28px product stages, light fine borders, abundant breathing room, occasional outlined orbit strokes and small feature icons.

System sans typography: hero 80–88px desktop with tight tracking, body 17–18px. Mobile 48–58px, body 15–16px. Desktop max-width 1240px, 48px gutters; mobile 22px. Device mockups preserve full proportions around 280×570. Never stretch a tablet screen into a phone. Phone UI is rebuilt from the actual frontend source, with illustrative session data identified unobtrusively.

## Layout and English content

1. Light sticky header: original black wordmark, How it works / Analysis / FAQ, violet Get the app button. Mobile menu.
2. Hero: left clear heading “Every arrow. / In real time.” (second line violet); eyebrow “AI VISION, BUILT FOR ARCHERY”; body “Real-time arrow detection. Automatic scoring. Training insights. Meet ArrowMind — your next training partner.” Prominent App Store + Google Play buttons with recognizable icons and actual links, then Watch the film. Small language line English · Cantonese · Chinese. Right dimensional product composition: two complete phone mockups (scan foreground, plot behind), lavender flat stage, subtle coordinate/orbit strokes, small white floating result panel “9 arrows detected” and small accuracy pill. One deliberate intro/scan sequence; pause/replay if looping; reduced-motion final state. Avoid permanently moving unrelated cards.
3. Trust strip: “95%+ / Detection accuracy”, “Nearly 50,000 / Users”, “170+ / Countries & regions”. Link the accuracy card narrative to “Our own AI vision model.” No invented certification, reviews, partner logos or guarantees.
4. Detection story: “Finish your end. / Start seeing more.” Whole phone scan/plot stage + 3-step user-controlled tabs “Point / Detect / Review”; own model chip icon, no photo/no waiting, saved virtual target. Real original launch film remains proof, available by button. Animate scan markers, then virtual-target positions, then score chips. Distinguish illustrative UI from actual video.
5. Analysis: soft mint or white layout, “Auto-scoring is just the start.” Complete PHONE UI with Bias / Grouping / Trends selector, adjacent benefit copy and standalone small full chart card. Use exact mobile app structure: Basics / Bias / Spread / Variation, black ratio bars, green bias crosshair, end spread mini-targets, end-score trend chart. No iPad assets. Small consistent line icons for bias/grouping/trend.
6. Comparison: existing functional All arrows / Setup A / Setup B target filtering, light lavender stage; heading “See what’s changing. Find what works.” Explicit “Illustrative comparison.” Dots vs diamonds remain distinct. No fake performance improvement numbers.
7. Gear: complete phone Equipment screen from actual source; photo/name/bow type/field/components rows; next to it an entire small component specs card and clean bow/settings icons. “Your bow. Every detail.” No tablets.
8. Global/languages trust: globe/orbit illustration (SVG, no external map dependency) with “Built for archers. Around the world.” Show 170+ countries & regions and the 3 language labels. FAQ can explain 173 App Store / 178 Google Play based on latest supplied release records; availability differs by store.
9. FAQ / trust, 4–5 concise real answers: no photo needed; what detection does; supported languages; store availability; in-app purchases exist, current pricing on local store. Native details/summary, easy keyboard use. Support/privacy/terms retained with real URLs. Do not infer offline/privacy claims from aspirations.
10. Closing lavender/white CTA: “Shoot. Scan. Improve.” and both store buttons. Original logo in light footer, support/contact, privacy/terms.

## Verified product facts / sources

- App Store: https://apps.apple.com/us/app/id6749833556
- Google Play: https://play.google.com/store/apps/details?id=com.taoming.archeryclub — public Arrowmind listing by Sportix AI verified; package matches app.config.js. Do not link the unrelated ArrowMind puzzle games.
- Languages: `/Users/shuhan/Desktop/archery-mobile-app/lib/i18n/locale.ts` exports zh-CN, zh-HK, en; yue maps to zh-HK.
- App Store availability: 173, from `docs/reviews/2026-11-03-ios-localization-mainland-readiness.md` in supplied frontend repository.
- Google Play availability: 178, from `docs/reviews/2026-11-03-pricing-execution/Google-Play全球价格执行记录.md`. These are application availability counts, not subscription pricing countries.
- “Our own AI vision model” and “95%+ detection accuracy” are explicitly provided/authorized by the user. No independent benchmark or guarantee is claimed. Nearly 50,000 users comes from the supplied film copy.

## Real mobile UI sources

Read-only reference repository; do not modify it. Root AGENTS refers to CLAUDE.md, which is absent in the provided checkout.
- modules/detection/ios/Sources/CameraViewController.swift: scan status, camera, zoom, confirm.
- app/(training)/scoring/components/TrainingStatsHeader.tsx: Stability, Total, Arrows, Settings.
- app/(training)/point/components/TargetView.tsx: target UI and tags.
- app/(training)/analysis/components/BiasVisualCard.tsx: bias axes, native green dots and distribution circle.
- app/(training)/analysis/components/AxisDistributionSummary.tsx: left-right/high-low ratios.
- components/ui/EquipmentSetupItem.tsx and app/equipment/index.tsx: setup library.

## Motion direction

Borrow the presentation rhythm from Portrait and Chronicle, not their exact skin. Portrait: friendly staged objects, clear action, generous light surfaces. Chronicle: a real product composition drives each feature and tab changes explain workflow. Flighty: prominent app download actions, real app capability demonstration and concrete trust evidence. No borrowed testimonials or awards.

Framer Motion only: intro device entrance, viewport-once reveals, controlled scan→plot sequence, user-driven analysis transitions, marker/chip stagger, subtle SVG icon strokes. Avoid perpetual animation unless pause is provided. Respect prefers-reduced-motion; all content and data stay readable. Native film modal with Escape/focus restoration and transcript remains.

## References inspected

- https://portrait.so/?ref=landing.love — actual page and screenshot inspected; visual staging and easy first action.
- https://chroniclehq.com/?ref=landing.love — actual page and screenshot inspected; UI compositions, feature selectors, fine iconography.
- https://flighty.com — content inspected for app conversion and trust structure; no claim of visual inspection.

## Validation

TypeScript, local desktop/mobile rendering, store hrefs, three-language and country copy, zero referenced iPad/tablet images, all primary UI screens fit their phone frame, film playback/close, menus, step controls, comparison, FAQ, animation pause/replay. No code review or deployment.

## Revision 4 — community wall addition

Reference: https://supabase.com/ community section and the user-supplied screenshot. Adopt staggered columns, varied quote lengths, circular avatars and nicknames; retain ArrowMind's light palette. Place after GlobalSection and before FAQ to provide a social-proof slot before the final download action. No profile links, social badges, ratings, borrowed Supabase quotes or borrowed user identities.

Desktop: four columns of two full cards, alternating 30–72px top offsets, 18px gaps, white cards, subtle violet/mint avatar backgrounds. Mobile: horizontally scrollable two-card columns, scroll snap, previous/next controls, readable complete quotes; all cards remain reachable. Cards reveal once and lift subtly on hover; reduced-motion keeps them static. No gradients or continuously moving text.

Content status: no real customer feedback found in the supplied material. Use original illustrative names, vector avatars and sample quotes in this local preview, with a visible sample notice. Store content separately for replacing with approved real feedback. Sample content must not be described as verified customer testimony.
