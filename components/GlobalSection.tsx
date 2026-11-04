import AnimatedGlyph from "./AnimatedGlyph";
import { LanguageIcon } from "./Icons";
import Reveal from "./Reveal";

export default function GlobalSection() {
  return (
    <section className="global-section" aria-labelledby="global-heading">
      <div className="container global-layout">
        <Reveal className="global-visual">
          <svg viewBox="0 0 460 380" className="world-orbits" aria-hidden="true">
            <ellipse cx="230" cy="188" rx="200" ry="80" transform="rotate(-23 230 188)" fill="none" stroke="var(--line)" strokeWidth="1.2" />
            <circle cx="230" cy="188" r="137" fill="var(--paper)" stroke="var(--line)" strokeWidth="1.2" />
            <ellipse cx="230" cy="188" rx="69" ry="137" fill="none" stroke="var(--line)" strokeWidth="1.2" />
            <ellipse cx="230" cy="188" rx="111" ry="137" fill="none" stroke="var(--line)" />
            <path d="M93 188h274M106 130h248M106 246h248M144 82h172M144 294h172" stroke="var(--line)" strokeWidth="1.2" />
            <circle cx="170" cy="143" r="6" fill="var(--accent)" stroke="white" strokeWidth="3" />
            <circle cx="282" cy="204" r="6" fill="var(--accent)" stroke="white" strokeWidth="3" />
            <circle cx="245" cy="100" r="5" fill="var(--accent)" stroke="white" strokeWidth="3" />
            <circle cx="192" cy="262" r="5" fill="var(--accent)" stroke="white" strokeWidth="3" />
            <circle cx="323" cy="157" r="5" fill="var(--accent)" stroke="white" strokeWidth="3" />
            <circle cx="52" cy="263" r="5" fill="var(--line)" />
            <circle cx="414" cy="99" r="4" fill="var(--line)" />
          </svg>
          <div className="global-count"><strong>170+</strong><span>COUNTRIES & REGIONS</span></div>
          <span className="global-hello hello-one">Hello.</span><span className="global-hello hello-two">你好。</span><span className="global-hello hello-three">你好呀。</span>
        </Reveal>
        <Reveal className="global-copy" delay={0.1}>
          <p className="eyebrow"><AnimatedGlyph name="globe" /> A WORLD OF ARCHERS</p>
          <h2 id="global-heading">Built for archers.<br />Around the world.</h2>
          <p className="body-copy">From your local range to your next competition, ArrowMind is available in 170+ countries and regions.</p>
          <div className="global-languages"><LanguageIcon /><span>Train in your language.</span></div>
          <div className="language-options"><span>English</span><span>Cantonese</span><span>Chinese</span></div>
          <p className="availability-note">Availability varies by store and region.</p>
        </Reveal>
      </div>
    </section>
  );
}
