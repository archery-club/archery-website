"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ChipIcon, LanguageIcon } from "./Icons";
import FilmPlayer from "./FilmPlayer";
import StoreButtons from "./StoreButtons";
import ProductImage from "./ProductImage";

export default function Hero() {
  const reduced = useReducedMotion();
  const stage = useRef<HTMLDivElement>(null);
  const visible = useInView(stage, { amount: 0.2 });
  const [paused, setPaused] = useState(false);
  const moving = visible && !paused && !reduced;
  return <section className="hero container hero-original" aria-labelledby="hero-heading">
    <motion.div className="hero-copy" initial={false} animate={reduced ? undefined : { y: [16, 0] }} transition={{ duration: 0.75 }}>
      <p className="eyebrow hero-eyebrow"><span className="status-dot" /> AI VISION, BUILT FOR ARCHERY</p>
      <h1 id="hero-heading">Every arrow.<br /><span>In real time.</span></h1>
      <p className="hero-description">Real-time arrow detection. Automatic scoring. Training analysis. Meet ArrowMind — your next training partner.</p>
      <StoreButtons />
      <div className="hero-secondary"><FilmPlayer /><span className="hero-film-note">See it in action</span></div>
      <p className="language-line"><LanguageIcon /><span>English · Cantonese · Chinese</span></p>
    </motion.div>
    <div className="hero-real-product">
      <div className="hero-real-stage" ref={stage} data-motion={moving ? "playing" : "paused"}>
        <span className="hero-real-accuracy"><ChipIcon /><span><strong>95%+</strong> detection accuracy</span></span>
        <motion.figure className="hero-real-camera" initial={false} whileInView={reduced ? undefined : { x: [-18, 0], opacity: [0.5, 1] }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <motion.div animate={{ y: moving ? [0, -6, 0] : 0 }} transition={moving ? { duration: 6, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }}><ProductImage name="hero-camera-matched" priority alt="Original camera footage showing nine detected arrows, paired with the same end on the virtual target" /></motion.div>
          <figcaption>01 / REAL-TIME DETECTION</figcaption>
        </motion.figure>
        <motion.figure className="hero-real-plot" initial={false} whileInView={reduced ? undefined : { x: [18, 0], opacity: [0.5, 1] }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.25 }}>
          <motion.div animate={{ y: moving ? [0, -8, 0] : 0 }} transition={moving ? { duration: 6, repeat: Infinity, delay: 0.7, ease: "easeInOut" } : { duration: 0.3 }}><ProductImage name="hero-plot-matched" priority alt="Complete original phone mock showing the corresponding nine-arrow, 80-point end from the same launch-film frame" /></motion.div>
          <figcaption>02 / EVERY ARROW PLOTTED</figcaption>
        </motion.figure>
        <div className="hero-flow" aria-hidden="true"><span>POINT AT YOUR TARGET</span><span className="hero-flow-track" /><span>SEE YOUR RESULTS</span></div>
      </div>
      <div className="hero-real-caption"><span>Shoot. Scan. Improve.</span><button className="hero-motion-toggle" aria-pressed={paused} onClick={() => setPaused(value => !value)}>{paused ? "Play motion" : "Pause motion"}</button><a href="#detection">Explore the app <span aria-hidden="true">↗</span></a></div>
    </div>
  </section>;
}
