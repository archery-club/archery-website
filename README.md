# ArrowMind

English product website for ArrowMind: real-time arrow detection, automatic scoring, and training analysis.

Built with the existing Next.js 16 App Router, React 19, TypeScript, and Framer Motion stack. The redesign uses the selected platinum-gray surfaces with cobalt-blue actions, local system fonts, and the supplied product imagery.

## Local development

```sh
pnpm install --frozen-lockfile
WATCHPACK_POLLING=true pnpm dev --hostname 127.0.0.1 --webpack
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000).

## Design artifacts

- [UI design and research](design/UI-DESIGN.md)
- [Self-contained HTML design board](design/UI-DESIGN.html)
- [Asset provenance](design/ASSET-PROVENANCE.md)
- [Task checklist](TODO.md)

The design board embeds its images and can be opened independently. The production website runs through Next.js.

## Product interactions

- Complete original phone images from the supplied App Store artwork and launch film; no generated or reconstructed app UI.
- Seven linked feature chapters: detection, scoring/review, analysis, arrow tags/order, group comparison, gear library and reports.
- Eighteen selectable explanations switch corresponding original screenshots and complete detail cards.
- On-demand launch film with native playback controls and an English transcript.
- Responsive navigation and reduced-motion support.

Product screenshots and film are in `public/media`. Original source files were not changed. The original Android APK remains at `public/assets/识箭.apk`; Google Play is now the primary Android download destination. The iOS download retains App Store ID `6749833556`; Google Play uses package `com.taoming.archeryclub`. Both are prominent conversion actions.

## Static build

```sh
pnpm build
```

The existing `output: "export"` setting writes a static website to `out/`. Serve that directory with a static HTTP server; `next start` is not the preview command for an exported site. The build checks that the Android APK is a real binary rather than a Git LFS pointer.

This redesign is local-only. No deployment or code review was requested.

If macOS reports `EMFILE` watcher errors or styles stay stale, use the development fallback:

```sh
WATCHPACK_POLLING=true pnpm dev --hostname 127.0.0.1 --webpack
```

## Product content (revision 6 — selected palette A)

The website highlights the owner-supplied 95%+ detection accuracy and proprietary AI model, nearly 50,000 users from the launch copy, and 170+ countries/regions based on the supplied November 3 release records (173 App Store / 178 Google Play). Source locale configuration confirms English, Cantonese, and Chinese. All displayed product sessions are from the supplied original materials. No tablet assets are used in the current page.

## Community wall

The homepage includes a staggered avatar/name/comment wall inspired by the supplied Supabase reference, without profile links or social platform badges. On mobile, swipe or use the previous/next controls. `lib/community.ts` contains clearly labeled illustrative content for the local design preview. Replace it with approved real feedback before presenting the section as customer testimony; `communityIsPreview` controls the visible notice. Original inline vector avatars make no external image requests.

## Current hero and motion

The hero pairs two unretouched crops from the same 23-second launch-film frame: real camera detection and its corresponding nine-arrow / 80-point plot on the original phone mock. Images enter in sequence and float subtly; the flow indicator sits outside the app UI. Pause/Play motion controls both ongoing effects, movement suspends offscreen, and reduced-motion preferences disable it. Existing feature transitions and scroll reveals remain.
