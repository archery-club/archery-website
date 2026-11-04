import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;
const defaults = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.55, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true as const };

export function ArrowIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M5 19 19 5M5 5h14v14" /></svg>;
}
export function PlayIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="m9 5 11 7-11 7V5Z" /></svg>;
}
export function AppleIcon(props: IconProps) {
  return <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>;
}
export function GooglePlayIcon(props: IconProps) {
  return <svg width="27" height="29" viewBox="0 0 24 27" fill="none" aria-hidden="true" {...props}><path d="M1.2.7 14.1 13.5 1.2 26.3C.5 25.9.1 25.2.1 24.3V2.7C.1 1.8.5 1.1 1.2.7Z" fill="#5BC9F5" /><path d="m14.1 13.5 4.3-4.3L3 .3C2.4 0 1.7.1 1.2.7l12.9 12.8Z" fill="#55C686" /><path d="m14.1 13.5 4.3 4.3 4.4-2.5c1.6-.9 1.6-2.7 0-3.6l-4.4-2.5-4.3 4.3Z" fill="#FFD35A" /><path d="M1.2 26.3c.5.6 1.2.7 1.8.4l15.4-8.9-4.3-4.3L1.2 26.3Z" fill="#F46D72" /></svg>;
}
export function CheckIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="m5 12 4 4L19 6" /></svg>;
}
export function CrosshairIcon(props: IconProps) {
  return <svg {...defaults} {...props}><circle cx="12" cy="12" r="7" /><path d="M12 1v5m0 12v5M1 12h5m12 0h5" /></svg>;
}
export function ScanIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M8 3H5a2 2 0 0 0-2 2v3m13-5h3a2 2 0 0 1 2 2v3M3 16v3a2 2 0 0 0 2 2h3m13-5v3a2 2 0 0 1-2 2h-3M3 12h18" /><circle cx="9" cy="9" r="1" /><circle cx="15" cy="16" r="1" /></svg>;
}
export function ChipIcon(props: IconProps) {
  return <svg {...defaults} {...props}><rect x="5" y="5" width="14" height="14" rx="3" /><path d="M9 1v4m6-4v4M9 19v4m6-4v4M1 9h4m-4 6h4m14-6h4m-4 6h4" /><path d="m9 14 3-5 3 5M10 12h4" /></svg>;
}
export function ChartIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M4 3v17h17M8 15l4-5 4 2 5-7" /><path d="M17 5h4v4" /></svg>;
}
export function GlobeIcon(props: IconProps) {
  return <svg {...defaults} {...props}><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18M5 6.5h14M5 17.5h14" /></svg>;
}
export function LanguageIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M3 5h11M8.5 3v2M6 5c0 5 3 8 7 10M12 5c0 5-3 8-7 10m9 6 4-11 4 11m-6.5-4h5" /></svg>;
}
export function GearIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="m10 3-1 3-3 1-3-1-2 4 3 2v3l-1 2 3 3 3-1 3 1 2 2 4-2v-3l2-2 3-1-1-4-3-1-2-3-3 1-2-2Z" transform="translate(1 0) scale(.9)" /><circle cx="12" cy="12" r="3.5" /></svg>;
}
export function UsersIcon(props: IconProps) {
  return <svg {...defaults} {...props}><circle cx="9" cy="8" r="3" /><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 4v2" /></svg>;
}
export function LayersIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="m12 3 10 5-10 5L2 8l10-5ZM2 12l10 5 10-5M2 16l10 5 10-5" /></svg>;
}
export function TagIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M3 3h8l10 10-8 8L3 11V3Z" /><circle cx="7.5" cy="7.5" r="1.2" /></svg>;
}
