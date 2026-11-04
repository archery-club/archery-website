"use client";
import { useRef, useState } from "react";
import { PlayIcon } from "./Icons";

export default function FilmPlayer() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [loaded, setLoaded] = useState(false);
  function openFilm() {
    setLoaded(true);
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  }
  function finishClose() {
    videoRef.current?.pause();
    document.body.style.overflow = "";
    triggerRef.current?.focus();
  }
  return <><button ref={triggerRef} className="film-trigger" onClick={openFilm}><span className="play-circle"><PlayIcon /></span>Watch the film <span className="film-length">1:12</span></button>
    <dialog ref={dialogRef} className="film-dialog" onClose={finishClose} onClick={event => { if (event.target === event.currentTarget) dialogRef.current?.close(); }} aria-labelledby="film-title">
      <div className="film-dialog-inner"><div className="film-dialog-header"><div><span className="eyebrow">THE ARROWMIND FILM</span><h2 id="film-title">Shoot. Scan. Improve.</h2></div><button className="close-film" aria-label="Close film" onClick={() => dialogRef.current?.close()}>✕</button></div>
        {loaded ? <video ref={videoRef} controls playsInline preload="metadata" poster="/media/film-poster.jpg"><source src="/media/arrowmind-film.mp4" type="video/mp4" />Your browser does not support video. <a href="/media/arrowmind-film.mp4">Download the film</a>.</video> : null}
        <details className="film-transcript"><summary>Read the film transcript</summary><p>Real-time arrow detection. Automatic scoring. Training analysis. Meet ArrowMind. Once you finish an end, simply point your phone at the target. Every arrow’s position and score appear on your screen in real time. No need to take a photo. No waiting for results.</p><p>Every arrow plotted on a virtual target. Review your shots anytime. Powered by our own AI vision model. Nearly 50,000 users. And now, available worldwide.</p><p>Auto-scoring is just the start. Where do your arrows tend to land? Horizontal and vertical bias. Grouping size. Trends over time. All visualized. See the patterns, refine your form, and track your progress.</p><p>Different setups? Save your bow and detailed component specs in your gear library. Different arrows? Add tags. Mark your shot order. Tuning your bow? Adjusting your form? See your groups together on one target, or view them separately to compare. See what’s changing. Find what works. No more guessing. Let the data guide your next training.</p><p>Every arrow detected. Every session analyzed. Shoot. Scan. Improve. ArrowMind.</p></details>
      </div>
    </dialog></>;
}
