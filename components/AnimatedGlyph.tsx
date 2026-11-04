"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChartIcon, ChipIcon, CrosshairIcon, GearIcon, GlobeIcon, LanguageIcon, LayersIcon, ScanIcon, TagIcon, UsersIcon } from "./Icons";

const glyphs = { chart: ChartIcon, chip: ChipIcon, target: CrosshairIcon, gear: GearIcon, globe: GlobeIcon, language: LanguageIcon, layers: LayersIcon, scan: ScanIcon, tag: TagIcon, users: UsersIcon };
export type GlyphName = keyof typeof glyphs;

export default function AnimatedGlyph({ name, className = "" }: { name: GlyphName; className?: string }) {
  const reduced = useReducedMotion();
  const Icon = glyphs[name];
  return (
    <motion.span className={`feature-glyph ${className}`} initial={false} whileInView={reduced ? undefined : { scale: [0.86, 1.04, 1], rotate: [-8, 0] }} viewport={{ once: true, amount: 1 }} transition={{ duration: 0.65 }}>
      <Icon />
    </motion.span>
  );
}
