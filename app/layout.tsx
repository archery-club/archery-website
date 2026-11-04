import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arrowmindai.com"),
  title: "ArrowMind — Every arrow. In real time.",
  description: "Real-time arrow detection, automatic scoring, and training analysis. Available on the App Store and Google Play in 170+ countries and regions. Shoot. Scan. Improve.",
  keywords: ["ArrowMind", "archery", "arrow detection", "automatic scoring", "archery training", "shot analysis", "AI archery"],
  openGraph: {
    title: "ArrowMind — Shoot. Scan. Improve.",
    description: "Every arrow detected. Every session analyzed. Get ArrowMind for iOS and Android.",
    images: [{ url: "/media/social-preview.jpg", width: 1200, height: 630, alt: "ArrowMind real-time arrow detection" }],
    type: "website", locale: "en_US", siteName: "ArrowMind",
  },
  twitter: { card: "summary_large_image", title: "ArrowMind — Every arrow. In real time.", description: "Real-time arrow detection. Automatic scoring. Training analysis. Available on iOS and Android.", images: ["/media/social-preview.jpg"] },
  icons: { icon: "/media/arrowmind-icon.png", apple: "/media/arrowmind-icon.png" },
  other: { "apple-itunes-app": "app-id=6749833556" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
