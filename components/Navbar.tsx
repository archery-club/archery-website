"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/%E8%AF%86%E7%AE%AD/id6749833556";
const ANDROID_APK_URL = "/assets/识箭.apk";

const navLinks = [
  { label: "功能", href: "#features" },
  { label: "教练版", href: "#coach" },
  { label: "下载", href: "#download" },
  { label: "关于", href: "#footer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f172a]/80 backdrop-blur-[20px] border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/assets/logo-transparent.svg"
              alt="识箭 Logo"
              width={36}
              height={36}
              className="w-9 h-9"
            />
            <span className="text-white font-semibold text-lg tracking-wide">
              识箭
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30"
              style={{
                background: "linear-gradient(135deg, #363D8F 0%, #1B85F3 100%)",
              }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              iOS
            </a>
            <a
              href={ANDROID_APK_URL}
              download="识箭.apk"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-white/80 text-sm font-semibold border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 0.976L16.175 3.42A8.04 8.04 0 0 0 12 2.4a8.04 8.04 0 0 0-4.175 1.02L6.477.976C6.19.46 5.543.27 5.027.558c-.516.287-.706.934-.419 1.45l1.304 2.37A7.952 7.952 0 0 0 4 9.6v.8h16v-.8c0-2.007-.73-3.844-1.912-5.222l1.304-2.37c.287-.516.097-1.163-.419-1.45-.516-.287-1.163-.097-1.45.418zM8 7.2a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6zm8 0a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6zM4 11.2v7.2A1.6 1.6 0 0 0 5.6 20H6v2.4A1.6 1.6 0 0 0 7.6 24a1.6 1.6 0 0 0 1.6-1.6V20h5.6v2.4a1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6V20h.4a1.6 1.6 0 0 0 1.6-1.6v-7.2H4z" />
              </svg>
              Android
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="菜单"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-white/10 mt-1">
            <nav className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/70 hover:text-white px-2 py-2.5 text-base font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-2">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #363D8F 0%, #1B85F3 100%)",
                  }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  App Store 下载
                </a>
                <a
                  href={ANDROID_APK_URL}
                  download="识箭.apk"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-white/80 text-sm font-semibold border border-white/20"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 0.976L16.175 3.42A8.04 8.04 0 0 0 12 2.4a8.04 8.04 0 0 0-4.175 1.02L6.477.976C6.19.46 5.543.27 5.027.558c-.516.287-.706.934-.419 1.45l1.304 2.37A7.952 7.952 0 0 0 4 9.6v.8h16v-.8c0-2.007-.73-3.844-1.912-5.222l1.304-2.37c.287-.516.097-1.163-.419-1.45-.516-.287-1.163-.097-1.45.418zM8 7.2a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6zm8 0a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6zM4 11.2v7.2A1.6 1.6 0 0 0 5.6 20H6v2.4A1.6 1.6 0 0 0 7.6 24a1.6 1.6 0 0 0 1.6-1.6V20h5.6v2.4a1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6V20h.4a1.6 1.6 0 0 0 1.6-1.6v-7.2H4z" />
                  </svg>
                  Android APK 下载
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
