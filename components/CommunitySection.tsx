"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { communityColumns, communityIsPreview } from "@/lib/community";
import Reveal from "./Reveal";

// Original illustrated avatars; no external profile requests or borrowed identities.
function CommunityAvatar({ variant }: { variant: number }) {
  const colors = ["#e8e2fa", "#dfeee6", "#e0eaf5", "#f4e5dc", "#e5e9dd", "#eee3ec", "#e1e8f6", "#ece8de"];
  const skin = ["#c99170", "#e6b494", "#a16e50", "#e4ad83", "#d79c7b", "#a87053", "#e1b498", "#bc896b"];
  const shirts = ["#7163ab", "#4c7965", "#557894", "#ab7966", "#718055", "#976b8d", "#647aab", "#8d8062"];
  return <svg className="community-avatar" viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="32" cy="32" r="32" fill={colors[variant]} />
    <path d="M8 64v-6c0-12 10-19 24-19s24 7 24 19v6" fill={shirts[variant]} />
    <path d="M27 36h10v11q-5 5-10 0Z" fill={skin[variant]} />
    {variant % 3 === 1 ? <path d="M17 31c0-16 4-22 15-22s16 9 16 24v14H16Z" fill="#403b40" /> : null}
    <ellipse cx="32" cy="28" rx="12" ry="15" fill={skin[variant]} />
    <path d={variant % 3 === 0 ? "M19 26V19c0-14 27-15 27 2l-4 6-3-11c-6 6-14 5-20 10Z" : variant % 3 === 1 ? "M19 28c-4-17 7-22 16-19 9 2 12 12 10 22l-6-15c-5 6-12 8-20 12Z" : "M19 24c-3-12 5-17 14-16 10 0 15 8 12 17l-6-9-20 8Z"} fill={variant % 2 ? "#54443e" : "#343941"} />
    <path d="M26 28h2m8 0h2" stroke="#3e3431" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M29 35q3 2 6 0" fill="none" stroke="#835445" strokeWidth="1.5" strokeLinecap="round" />
    {variant === 2 || variant === 6 ? <g fill="none" stroke="#43424d" strokeWidth="1.2"><rect x="22" y="25" width="9" height="7" rx="2" /><rect x="34" y="25" width="9" height="7" rx="2" /><path d="M31 28h3" /></g> : null}
  </svg>;
}

export default function CommunitySection() {
  const wall = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const reduced = useReducedMotion();

  function move(direction: number) {
    const column = wall.current?.firstElementChild as HTMLElement | null;
    if (!wall.current || !column) return;
    wall.current.scrollBy({ left: direction * (column.offsetWidth + 16), behavior: reduced ? "instant" : "smooth" });
  }

  return <section className="community-section section" id="community" aria-labelledby="community-heading">
    <div className="container">
      <Reveal className="community-heading">
        <p className="eyebrow">THE PEOPLE BEHIND EVERY ARROW</p>
        <h2 id="community-heading">At the range.<br /><span>In their words.</span></h2>
        <p>A shared passion. A little more insight, every session.</p>
        {communityIsPreview ? <p className="community-preview-note"><span />Design preview · Illustrative names and comments.</p> : null}
      </Reveal>
      <div className="community-wall" ref={wall} onScroll={() => {
        const element = wall.current;
        const column = element?.firstElementChild as HTMLElement | null;
        if (element && column) setPosition(Math.round(element.scrollLeft / (column.offsetWidth + 16)));
      }} role="region" aria-label="Community comments" tabIndex={0}>
        {communityColumns.map((column, columnIndex) => <div className="community-column" key={columnIndex}>
          {column.map((comment, index) => <motion.figure className="community-card" key={comment.name} initial={false} whileInView={reduced ? undefined : { y: [16, 0], opacity: [0.7, 1] }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: columnIndex * 0.07 + index * 0.05 }}>
            <figcaption><CommunityAvatar variant={comment.avatar} /><span>{comment.name}</span><span className="community-quote-mark" aria-hidden="true">“</span></figcaption>
            <blockquote>{comment.quote}</blockquote>
          </motion.figure>)}
        </div>)}
      </div>
      <div className="community-navigation">
        <span aria-live="polite">{position + 1} <span>/ {communityColumns.length}</span></span>
        <div><button onClick={() => move(-1)} disabled={position === 0} aria-label="Previous comments">←</button><button onClick={() => move(1)} disabled={position >= communityColumns.length - 1} aria-label="Next comments">→</button></div>
      </div>
    </div>
  </section>;
}
