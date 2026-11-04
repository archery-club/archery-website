# ArrowMind English website redesign

- [x] Inspect the existing Next.js / TypeScript project and provided assets.
- [x] Install existing dependencies and obtain permission for local preview.
- [x] Research American archery brands and restrained AI product websites.
- [x] Finish the UI design: direction, English copy, sections, desktop/mobile layout, and motion storyboard. Save Markdown and self-contained HTML.
- [x] Prepare real product visuals and a browser-friendly version of the supplied film.
- [x] Implement the approved-by-brief design in the existing stack.
- [x] Add detection animation, comparison interaction, film player, and reduced-motion behavior.
- [x] Replace all visitor-facing Chinese copy and metadata with English.
- [x] Verify that the website opens locally and key interactions work; no code review.
- [x] Deliver the local preview and completed design artifacts.

Scope: local development only; no deployment or publishing. Design is completed before implementation begins. The source film and supplied promotional copy are the authority for product claims.

## Revision 2 — user feedback

- [x] Replace the v1 visual direction: full real devices, App Store compositions, AI/frontier technology reference sites.
- [x] Rebuild the self-contained UI design and Markdown brief before changing the site.
- [x] Prepare full phone/tablet assets without cropping important screen content.
- [x] Implement the revised design.
- [x] Verify full device visibility, desktop/mobile layout and interactions locally.

## Revision 2 validation result — 2026-11-04

- Next.js preview returned HTTP 200; all referenced media, film, and Android APK responded successfully.
- TypeScript: `pnpm exec tsc --noEmit` passed.
- Desktop and 390px mobile views opened; no horizontal overflow or missing images observed.
- Complete real phone and full analysis/gear devices use their natural image proportions.
- Detection steps, Bias/Grouping switch, illustrative setup filtering, mobile menu and download anchor worked.
- Film metadata loaded (71.818 seconds, 720 × 1280), actual playback advanced, Escape closed the player and restored focus.
- Browser console had no warnings or errors in final verification.
- Fixed double anchor offset and missing mobile sentence spacing found during local testing.
- No code review, deployment, or production build was performed.
- Captures: `design/preview-desktop.jpg`, `design/preview-desktop-full.jpg`, `design/preview-mobile-full.jpg`.
- Local watcher limit was avoided with `WATCHPACK_POLLING=true pnpm dev --hostname 127.0.0.1 --webpack`.
- Preview server stopped after validation; restart with the documented command.

## Revision 3 — download conversion and trust

- [x] Inspect Portrait, Chronicle and app conversion references.
- [x] Read the supplied mobile frontend UI and confirm store links, language support and country coverage.
- [x] Complete the light-tech design specification before implementation.
- [x] Replace tablets with accurate interactive phone UI demonstrations.
- [x] Implement the light visual direction, icons, purposeful motion and prominent store downloads.
- [x] Add own-model / 95%+ accuracy, 170+ regions and three-language content.
- [x] Verify desktop/mobile locally, update previews and finish TODO.

## Revision 3 validation result — 2026-11-04

- TypeScript check passed; Next.js page and all checked media returned HTTP 200.
- Desktop 1280 × 900 and mobile 390 × 844 tested in the browser. No horizontal overflow, broken images, or console warnings/errors.
- Complete phone demos replace every tablet. Bias and grouping screen heights adjusted after browser measurement; all six phone views fit.
- Hero replay, pause and resume; detection steps; Bias/Grouping/Trends; Setup A/B filtering; FAQ; mobile menu and download anchor verified.
- Film playback advanced, metadata loaded, Escape closed the modal and focus returned to the trigger.
- App Store and Google Play URLs verified in rendered links. English document language; three supported app languages; 95%+ own-model and 170+ coverage content present.
- Corrected accumulated anchor offsets and strengthened inactive tab text contrast during local testing.
- No gradient or tablet references in current application code. Reduced-motion alternatives implemented.
- Current captures: `design/preview-desktop.jpg`, `design/preview-desktop-full.jpg`, `design/preview-mobile-full.jpg`.
- No code review, deployment, or production build performed.
- Owned preview server stopped after validation; use the README command to reopen locally.

## Revision 4 — community wall

- [x] Inspect Supabase reference and supplied screenshot.
- [x] Define a light, staggered review-card wall without social links or gradients.
- [x] Implement avatar + nickname + feedback cards with responsive navigation.
- [x] Keep sample feedback clearly identified until real customer quotes are supplied.
- [x] Verify desktop/mobile locally and save a preview.

Revision 4 validation: TypeScript passed; desktop four-column layout and mobile swipe/previous/next navigation checked, including disabled last/first boundaries. Eight cards, zero links inside the community section, no page horizontal overflow, and no browser console errors/warnings. Captures: `design/preview-community-desktop.jpg` and `design/preview-community-mobile.jpg`. Real customer content remains to be supplied; the preview visibly identifies illustrative names and comments. No review or deployment.

## Revision 5 — full feature tour / supplied imagery only

- [x] Inspect Apifox's feature navigation and paired explanations/screenshots.
- [x] Cross-check launch copy, App Store artwork, and actual film frames.
- [x] Extract original device frames and complete detail cards; no generated or redrawn UI.
- [x] Update the design board and coverage map before development.
- [x] Replace all drawn phone screens and synthetic charts with supplied imagery.
- [x] Implement seven linked feature chapters with corresponding screenshot detail views.
- [x] Verify all views locally on desktop/mobile and save current previews.

Revision 5 validation: TypeScript passed. All seven chapters and all 18 subfeature switches tested in the browser; every selected source image loaded. Desktop 1280 × 1000 and mobile 390 × 844 opened normally with no horizontal overflow or browser warnings/errors. Mobile feature navigation, shot-order switch, menu and download anchor passed. Original app screenshots retain their proportions; detail cards do not cover important UI. Sample comments remain visibly labeled. Design board, asset provenance and current desktop/mobile previews updated. No code review or deployment. Owned preview server stopped after testing.

## Color direction study

- [x] Research technology and consumer-product references.
- [x] Prepare four restrained palettes using unchanged original product screenshots.
- [x] Deliver self-contained interactive HTML and Markdown rationale.
- [x] Verify palette switching, image loading and mobile layout.
- [x] User selected A: platinum + cobalt.
- [x] Apply A across every section and retain source imagery.
- [x] Pair the same original camera/plot session in the hero and add controlled motion.
- [x] Verify locally on desktop/mobile and open the running site for the user.

Palette A verification: TypeScript passed. HTTP 200; desktop and 390px mobile layouts opened. No horizontal overflow or console warnings/errors. All nine major product/global/download surfaces resolve to #E9EDF2; main action resolves to #2358D5. Original matched hero crops load. Pause sets image transform to none and flow animation to paused; resume works. Analysis view switching works. Current previews and design board updated. The local server is intentionally left running at http://127.0.0.1:3000 because the user requested an open, usable local preview.
