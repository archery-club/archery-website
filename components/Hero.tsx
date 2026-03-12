"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/%E8%AF%86%E7%AE%AD/id6749833556";
const ANDROID_APK_URL = "/assets/识箭.apk";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 10 + 15,
  delay: Math.random() * 5,
}));

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
      }}
    >
      {/* 光晕装饰 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(27, 133, 243, 0.15) 0%, transparent 70%)",
        }}
      />

      {/* 动态粒子 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-blue-400/20"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 左侧文案 */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-blue-300 border border-blue-500/30 bg-blue-500/10 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                全球首款 · 独家专利算法
              </span>
            </motion.div>

            <motion.h1
              className="text-[36px] sm:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              AI 射箭靶面
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #7C8FFF 0%, #1B85F3 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                实时识别
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-white/60 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              一部手机即可识别箭靶，自动记分与落点分析
              <br className="hidden sm:block" />
              让每一次训练都有据可查
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-white font-semibold text-base transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/40"
                style={{
                  background:
                    "linear-gradient(135deg, #363D8F 0%, #1B85F3 100%)",
                }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store 下载
              </a>
              <a
                href={ANDROID_APK_URL}
                download="识箭.apk"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-white/80 font-semibold text-base border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-200 hover:-translate-y-1"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 0.976L16.175 3.42A8.04 8.04 0 0 0 12 2.4a8.04 8.04 0 0 0-4.175 1.02L6.477.976C6.19.46 5.543.27 5.027.558c-.516.287-.706.934-.419 1.45l1.304 2.37A7.952 7.952 0 0 0 4 9.6v.8h16v-.8c0-2.007-.73-3.844-1.912-5.222l1.304-2.37c.287-.516.097-1.163-.419-1.45-.516-.287-1.163-.097-1.45.418zM8 7.2a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6zm8 0a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6zM4 11.2v7.2A1.6 1.6 0 0 0 5.6 20H6v2.4A1.6 1.6 0 0 0 7.6 24a1.6 1.6 0 0 0 1.6-1.6V20h5.6v2.4a1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6V20h.4a1.6 1.6 0 0 0 1.6-1.6v-7.2H4z" />
                </svg>
                Android 下载
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white/80 font-semibold text-base border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-200"
              >
                了解更多
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* 右侧手机截图 */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              {/* 光晕效果 */}
              <div
                className="absolute inset-0 rounded-[44px] blur-3xl opacity-30"
                style={{
                  background:
                    "linear-gradient(135deg, #363D8F 0%, #1B85F3 100%)",
                  transform: "scale(0.85) translateY(20px)",
                }}
              />

              {/* 手机 Mockup */}
              <div className="relative">
                <PhoneMockup
                  src="/screenshots/01-ai-recognition.jpg"
                  alt="AI 射箭靶面识别截图"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 向下滚动提示 */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
          <div className="w-1 h-2.5 rounded-full bg-white/50" />
        </div>
      </motion.div>
    </section>
  );
}

function PhoneMockup({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div
      className="relative w-[200px] sm:w-[230px] lg:w-[260px]"
      style={{ aspectRatio: "9/19.5" }}
    >
      {/* 外框 */}
      <div
        className="absolute inset-0 rounded-[44px] border-[8px] border-[#2a3a5c] shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #1a2744 0%, #0f1d35 100%)",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.08), 0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      >
        {/* 顶部灵动岛 */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10" />

        {/* 截图 */}
        <div className="absolute inset-0 rounded-[36px] overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="320px"
          />
        </div>

        {/* 屏幕反光 */}
        <div
          className="absolute inset-0 rounded-[36px] pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)",
          }}
        />
      </div>
    </div>
  );
}
