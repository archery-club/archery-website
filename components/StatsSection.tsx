"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface Stat {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  isText?: boolean;
}

const stats: Stat[] = [
  {
    value: "全球首款",
    numericValue: 0,
    suffix: "",
    label: "AI 射箭靶面识别",
    isText: true,
  },
  {
    value: "40",
    numericValue: 40,
    suffix: "+",
    label: "支持靶纸规格",
    isText: false,
  },
  {
    value: "100",
    numericValue: 100,
    suffix: "ms",
    label: "识别速度",
    isText: false,
  },
  {
    value: "12",
    numericValue: 12,
    suffix: " 箭/组",
    label: "最大支持",
    isText: false,
  },
  {
    value: "40",
    numericValue: 40,
    suffix: " 组/场",
    label: "最大支持",
    isText: false,
  },
  {
    value: "∞",
    numericValue: 0,
    suffix: "",
    label: "训练记录",
    isText: true,
  },
];

function CountUp({
  target,
  suffix,
  isDark,
}: {
  target: number;
  suffix: string;
  isDark: boolean;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView) {
      animate(count, target, { duration: 2, ease: "easeOut" });
    }
  }, [inView, count, target]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

function StatCard({ stat }: { stat: Stat }) {
  return (
    <motion.div
      className="text-center px-4 py-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div
        className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 leading-none"
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {stat.isText ? (
          <span>{stat.value}</span>
        ) : (
          <CountUp target={stat.numericValue} suffix={stat.suffix} isDark />
        )}
      </div>
      <p className="text-white/50 text-xs sm:text-sm font-medium">{stat.label}</p>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0f172a 0%, #0a0f1e 100%)",
      }}
    >
      {/* 背景光效 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(54, 61, 143, 0.2) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-[40px] font-bold text-white mb-4">
            数字背后的实力
          </h2>
          <p className="text-white/50 text-lg">每一个数字，都是对射箭运动的承诺</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
          {stats.map((stat) => (
            <StatCard key={`${stat.label}-${stat.value}`} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
