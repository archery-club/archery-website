import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arrowmind.cn"),
  title: "识箭 — AI 射箭靶面识别与训练分析",
  description:
    "全球首款 AI 射箭靶面实时识别应用。拍照即可自动识别箭靶落点、计算环数，自动生成训练分析报告。支持反曲弓、复合弓、光弓、传统弓全弓种，覆盖 40+ 种靶纸规格。",
  keywords: "射箭,靶面识别,AI,箭靶,记分,训练分析,射箭app,识箭,archery,scoring",
  openGraph: {
    title: "识箭 — AI 射箭靶面识别与训练分析",
    description: "全球首款 AI 射箭靶面实时识别应用，拍照自动记分与训练分析",
    images: ["/og-image.jpg"],
    type: "website",
  },
  other: {
    "apple-itunes-app": "app-id=6749833556",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={notoSansSC.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
