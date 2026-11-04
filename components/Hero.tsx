"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ChipIcon, LanguageIcon } from "./Icons";
import FilmPlayer from "./FilmPlayer";
import StoreButtons from "./StoreButtons";
import ProductImage from "./ProductImage";

export default function Hero() {
  const reduced = useReducedMotion();
  const stage = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const visible = useInView(stage, { amount: 0.2 });
  const [paused, setPaused] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [requestedPlay, setRequestedPlay] = useState(false);
  const shouldPlay = visible && !paused && (reduced === false || requestedPlay);

  useEffect(() => {
    const player = video.current;
    if (!player) return;
    function syncPlayback() {
      if (shouldPlay && document.visibilityState === "visible") {
        // Autoplay can be declined by the browser; the Play video button remains usable.
        void player!.play().catch(() => {});
      } else {
        player!.pause();
      }
    }
    syncPlayback();
    document.addEventListener("visibilitychange", syncPlayback);
    return () => {
      document.removeEventListener("visibilitychange", syncPlayback);
      player.pause();
    };
  }, [shouldPlay]);

  function toggleVideo() {
    if (playing) {
      setPaused(true);
      video.current?.pause();
    } else {
      setPaused(false);
      setRequestedPlay(true);
      void video.current?.play().catch(() => {});
    }
  }
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
      <div className="hero-real-stage" ref={stage}>
        <span className="hero-real-accuracy"><ChipIcon /><span><strong>95%+</strong> detection accuracy</span></span>
        <motion.figure className="hero-real-camera" initial={false} whileInView={reduced ? undefined : { x: [-18, 0], opacity: [0.5, 1] }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <video ref={video} id="hero-recognition-video" className="hero-recognition-video" autoPlay={shouldPlay} loop muted playsInline preload="metadata" poster="/media/hero-recognition-poster.webp" width={720} height={1280} aria-label="Real ArrowMind recognition footage from the launch film: point a phone at the target and see arrow positions detected" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}>
            <source src="/media/hero-recognition.mp4" type="video/mp4" />
            Your browser does not support video. <a href="/media/hero-recognition.mp4">Watch the recognition footage</a>.
          </video>
          <figcaption>01 / REAL-TIME DETECTION</figcaption>
        </motion.figure>
        <motion.figure className="hero-real-plot" initial={false} whileInView={reduced ? undefined : { x: [18, 0], opacity: [0.5, 1] }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.25 }}>
          <ProductImage name="hero-plot-matched" priority alt="Original phone mock from the launch film showing the nine-arrow, 80-point virtual-target result" />
          <figcaption>02 / EVERY ARROW PLOTTED</figcaption>
        </motion.figure>
        <div className="hero-flow" aria-hidden="true"><span>POINT AT YOUR TARGET</span><span className="hero-flow-track" /><span>SEE YOUR RESULTS</span></div>
      </div>
      <div className="hero-real-caption"><span>Shoot. Scan. Improve.</span><button className="hero-video-toggle" aria-controls="hero-recognition-video" onClick={toggleVideo}>{playing ? "Pause video" : "Play video"}</button><a href="#detection">Explore the app <span aria-hidden="true">↗</span></a></div>
    </div>
  </section>;
}
