"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/%E8%AF%86%E7%AE%AD/id6749833556";
const ANDROID_APK_PATH = "/assets/识箭.apk";

export default function DownloadSection() {
  const [androidApkUrl, setAndroidApkUrl] = useState("");

  useEffect(() => {
    setAndroidApkUrl(`${window.location.origin}${ANDROID_APK_PATH}`);
  }, []);

  return (
    <section
      id="download"
      className="py-24 lg:py-36 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a1f4e 0%, #0c1228 50%, #0f172a 100%)",
      }}
    >
      {/* 背景装饰 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(27, 133, 243, 0.12) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(54, 61, 143, 0.15) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* App 图标 */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative w-28 h-28 lg:w-32 lg:h-32 rounded-[28%] overflow-hidden shadow-2xl shadow-blue-900/50">
            <Image
              src="/assets/app-icon-1024.png"
              alt="识箭 App 图标"
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>
        </motion.div>

        <motion.h2
          className="text-3xl lg:text-[40px] font-bold text-white mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          识箭 — AI 射箭训练助手
        </motion.h2>
        <motion.p
          className="text-white/50 text-lg mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          免费下载，开启科学训练
        </motion.p>

        {/* App Store 按钮 */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold text-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/40"
            style={{
              background:
                "linear-gradient(135deg, #363D8F 0%, #1B85F3 100%)",
            }}
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-80 font-normal">下载自</div>
              <div className="text-base font-bold leading-tight">App Store</div>
            </div>
          </a>

          {/* Android APK 下载 */}
          <a
            href="/assets/识箭.apk"
            download="识箭.apk"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold text-lg border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-200 hover:-translate-y-1"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.523 0.976L16.175 3.42A8.04 8.04 0 0 0 12 2.4a8.04 8.04 0 0 0-4.175 1.02L6.477.976C6.19.46 5.543.27 5.027.558c-.516.287-.706.934-.419 1.45l1.304 2.37A7.952 7.952 0 0 0 4 9.6v.8h16v-.8c0-2.007-.73-3.844-1.912-5.222l1.304-2.37c.287-.516.097-1.163-.419-1.45-.516-.287-1.163-.097-1.45.418zM8 7.2a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6zm8 0a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6zM4 11.2v7.2A1.6 1.6 0 0 0 5.6 20H6v2.4A1.6 1.6 0 0 0 7.6 24a1.6 1.6 0 0 0 1.6-1.6V20h5.6v2.4a1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6V20h.4a1.6 1.6 0 0 0 1.6-1.6v-7.2H4z" />
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-80 font-normal">下载</div>
              <div className="text-base font-bold leading-tight">Android APK</div>
            </div>
          </a>
        </motion.div>

        {/* 二维码 */}
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-white/40 text-sm">扫码下载</p>
          <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <QRCode url={APP_STORE_URL} alt="App Store 下载二维码" />
              <div className="flex items-center gap-1.5 text-white/50 text-xs">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                iOS / App Store
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              {androidApkUrl ? (
                <QRCode url={androidApkUrl} alt="Android APK 下载二维码" />
              ) : (
                <div className="w-36 h-36 rounded-xl bg-white/5 animate-pulse" />
              )}
              <div className="flex items-center gap-1.5 text-white/50 text-xs">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 0.976L16.175 3.42A8.04 8.04 0 0 0 12 2.4a8.04 8.04 0 0 0-4.175 1.02L6.477.976C6.19.46 5.543.27 5.027.558c-.516.287-.706.934-.419 1.45l1.304 2.37A7.952 7.952 0 0 0 4 9.6v.8h16v-.8c0-2.007-.73-3.844-1.912-5.222l1.304-2.37c.287-.516.097-1.163-.419-1.45-.516-.287-1.163-.097-1.45.418zM8 7.2a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6zm8 0a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6zM4 11.2v7.2A1.6 1.6 0 0 0 5.6 20H6v2.4A1.6 1.6 0 0 0 7.6 24a1.6 1.6 0 0 0 1.6-1.6V20h5.6v2.4a1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6V20h.4a1.6 1.6 0 0 0 1.6-1.6v-7.2H4z" />
                </svg>
                Android APK
              </div>
            </div>
          </div>
          <p className="text-white/30 text-xs">微信扫一扫 或 相机扫码下载</p>
        </motion.div>
      </div>
    </section>
  );
}

function QRCode({ url, alt }: { url: string; alt: string }) {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(url)}&bgcolor=ffffff&color=1a1f4e&margin=8&format=png`;

  return (
    <div className="w-36 h-36 rounded-xl overflow-hidden bg-white p-2 shadow-lg shadow-black/30">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={qrUrl}
        alt={alt}
        width={128}
        height={128}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
