"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Feature {
  id: string;
  title: string;
  description: string;
  bullets?: string[];
  screenshots: string[];
  dark: boolean;
  imageLeft?: boolean;
}

const features: Feature[] = [
  {
    id: "ai-recognition",
    title: "拍一张，全识别",
    description:
      "基于深度学习的 YOLO 目标检测模型，自动识别靶面上的每一支箭，实时计算环数与落点坐标。",
    bullets: ["支持多种靶纸规格", "毫秒级识别速度", "离线可用，无需联网"],
    screenshots: ["/screenshots/01-ai-recognition.jpg"],
    dark: false,
    imageLeft: true,
  },
  {
    id: "target-types",
    title: "全规格靶纸，1:1 真实还原",
    description:
      "覆盖反曲弓、复合弓、光弓、传统弓全弓种。支持半环靶（80/60/40）、全环靶（122/80/60/40）及侯靶、三联靶等特殊靶纸。1:1 还原真实靶纸比例，训练数据精准可靠。",
    screenshots: ["/screenshots/02-target-types.jpg"],
    dark: true,
    imageLeft: false,
  },
  {
    id: "scoring-modes",
    title: "多种模式，随心切换",
    description:
      "AI 自动识别、手动键盘记分、靶面落点拖拽 — 三种记分方式无缝切换。支持多种手势操作，高亮选中与震动反馈，带来舒适流畅的记分体验。",
    screenshots: [
      "/screenshots/05-scoring-modes.jpg",
      "/screenshots/04-landing-points.jpg",
    ],
    dark: false,
    imageLeft: true,
  },
  {
    id: "analysis",
    title: "数据驱动，科学训练",
    description:
      "每次训练自动生成专业分析报告，用数据说话，让训练不再凭感觉。",
    bullets: [
      "偏向分析（水平 / 垂直方向偏移量化）",
      "椭圆散布分析（量化稳定性）",
      "聚类分析（识别落点规律）",
      "稳定性评分",
      "波动趋势图（长期变化追踪）",
    ],
    screenshots: [
      "/screenshots/06-analysis-deviation.jpg",
      "/screenshots/07-analysis-scatter.jpg",
    ],
    dark: true,
    imageLeft: false,
  },
  {
    id: "coach",
    title: "教练版，团队训练管理",
    description:
      "专为青训机构和专业队设计。教练可绑定学员、实时查看训练数据、追踪每位学员的进步曲线。一个平台管理整支队伍的训练。",
    bullets: [
      "学员绑定与管理",
      "实时训练数据同步",
      "今日训练总览",
      "历史训练追踪",
    ],
    screenshots: ["/screenshots/03-coach-center.jpg"],
    dark: false,
    imageLeft: true,
  },
];

import type { Variants } from "framer-motion";

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function PhoneMockupSmall({
  src,
  alt,
  dark,
}: {
  src: string;
  alt: string;
  dark: boolean;
}) {
  return (
    <div
      className="relative w-[200px] sm:w-[220px] lg:w-[240px] mx-auto"
      style={{ aspectRatio: "9/19.5" }}
    >
      <div
        className="absolute inset-0 rounded-[40px] border-[7px]"
        style={{
          borderColor: dark ? "#2a3a5c" : "#d1d5db",
          background: dark
            ? "linear-gradient(135deg, #1a2744 0%, #0f1d35 100%)"
            : "linear-gradient(135deg, #f0f4f8 0%, #e2e8f0 100%)",
          boxShadow: dark
            ? "0 30px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)"
            : "0 30px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.04)",
        }}
      >
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full z-10" />
        <div className="absolute inset-0 rounded-[33px] overflow-hidden">
          <Image src={src} alt={alt} fill className="object-cover" sizes="240px" />
        </div>
        <div
          className="absolute inset-0 rounded-[33px] pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%)",
          }}
        />
      </div>
    </div>
  );
}

function FeatureBlock({ feature }: { feature: Feature }) {
  const { title, description, bullets, screenshots, dark, imageLeft } = feature;
  const isDouble = screenshots.length === 2;

  const textContent = (
    <motion.div
      className="flex flex-col justify-center"
      variants={imageLeft ? fadeInRight : fadeInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2
        className={`text-3xl lg:text-[40px] font-bold leading-tight mb-5 ${
          dark ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      <p
        className={`text-base lg:text-lg leading-relaxed mb-6 ${
          dark ? "text-white/60" : "text-gray-500"
        }`}
      >
        {description}
      </p>
      {bullets && (
        <ul className="space-y-3">
          {bullets.map((b, i) => (
            <motion.li
              key={b}
              className={`flex items-center gap-3 text-sm lg:text-base ${
                dark ? "text-white/70" : "text-gray-600"
              }`}
              variants={fadeInUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "rgba(27, 133, 243, 0.15)" }}
              >
                <svg
                  className="w-3 h-3 text-[#1B85F3]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              {b}
            </motion.li>
          ))}
        </ul>
      )}
    </motion.div>
  );

  const imageContent = (
    <motion.div
      className={`flex items-center justify-center gap-4 lg:gap-6 ${
        isDouble ? "relative" : ""
      }`}
      variants={imageLeft ? fadeInLeft : fadeInRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {isDouble ? (
        <>
          <div className="relative z-10 mt-8">
            <PhoneMockupSmall src={screenshots[0]} alt={title} dark={dark} />
          </div>
          <div className="relative z-20 -ml-10 -mt-8">
            <PhoneMockupSmall src={screenshots[1]} alt={title} dark={dark} />
          </div>
        </>
      ) : (
        <PhoneMockupSmall src={screenshots[0]} alt={title} dark={dark} />
      )}
    </motion.div>
  );

  return (
    <section
      id={feature.id}
      className="py-20 lg:py-28"
      style={{
        background: dark
          ? "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)"
          : feature.id === "scoring-modes"
          ? "#ffffff"
          : "#f8fafc",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
        >
          {imageLeft ? (
            <>
              <div className="order-1 lg:order-1">{imageContent}</div>
              <div className="order-2 lg:order-2">{textContent}</div>
            </>
          ) : (
            <>
              <div className="order-1 lg:order-2">{imageContent}</div>
              <div className="order-2 lg:order-1">{textContent}</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Features() {
  return (
    <div id="features">
      {features.map((f) => (
        <FeatureBlock key={f.id} feature={f} />
      ))}
    </div>
  );
}
