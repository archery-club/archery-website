import Image from "next/image";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/%E8%AF%86%E7%AE%AD/id6749833556";

const footerLinks = {
  产品: [
    { label: "功能介绍", href: "#features" },
    { label: "教练版", href: "#coach" },
    { label: "隐私政策", href: "https://www.notion.so/2d411b3862fc80559a44f4cee6b9deaa", external: true },
    { label: "用户协议", href: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/", external: true },
  ],
  关注我们: [
    { label: "Bilibili", href: "https://space.bilibili.com/1311972747?spm_id_from=333.337.0.0" },
    { label: "抖音", href: "https://www.douyin.com/user/MS4wLjABAAAAwrK0NcQw_syyLO1W8QYLhtqzkFMUU9ZqdY7RC3t5aTfZY3ENvjZPDeje2zfVz8hS" },
    { label: "小红书", href: "https://www.xiaohongshu.com/user/profile/63b536fa000000002702a85f" },
  ],
  联系: [
    { label: "反馈邮箱", href: "mailto:onearrowai@gmail.com" },
    { label: "商务合作", href: "mailto:onearrowai@gmail.com" },
    { label: "App Store", href: APP_STORE_URL, external: true },
  ],
};

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative"
      style={{
        background: "linear-gradient(180deg, #0a0f1e 0%, #060a14 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Logo & 简介 */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/assets/logo-transparent.svg"
                alt="识箭 Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-white font-bold text-xl">识箭</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              AI 射箭靶面识别，让训练更高效。
              <br />
              全球首款基于 AI 的射箭靶面实时识别与训练分析工具。
            </p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30"
              style={{
                background:
                  "linear-gradient(135deg, #363D8F 0%, #1B85F3 100%)",
              }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store 下载
            </a>
          </div>

          {/* 链接列 */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm mb-4 tracking-wide">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={"external" in link && link.external ? "_blank" : undefined}
                      rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                      className="text-white/40 hover:text-white/80 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 底部版权 */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-white/30 text-xs text-center sm:text-left">
            © 2025 Arrowmind / 南京滔鸣科技有限公司 All Rights Reserved.
          </p>
          <p className="text-white/20 text-xs">
            Powered by AI · Made with ❤️ for Archers
          </p>
        </div>
      </div>
    </footer>
  );
}
