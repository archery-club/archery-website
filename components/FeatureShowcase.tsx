"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { productFeatures, type ProductFeature } from "@/lib/product-features";
import ProductImage from "./ProductImage";
import Reveal from "./Reveal";

function FeatureChapter({ feature, index }: { feature: ProductFeature; index: number }) {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const view = feature.views[active];
  return <section className={`feature-chapter feature-tone-${feature.tone} ${index % 2 ? "feature-reverse" : ""}`} id={feature.id} aria-labelledby={`${feature.id}-heading`}>
    <div className="container feature-chapter-layout">
      <Reveal className="feature-chapter-copy">
        <p className="eyebrow"><span className="feature-number">0{index + 1}</span>{feature.label.toUpperCase()}</p>
        <h2 id={`${feature.id}-heading`}>{feature.heading}</h2>
        <p className="feature-introduction">{feature.introduction}</p>
        <div className="feature-choices" aria-label={`${feature.label} details`}>
          {feature.views.map((item, i) => <div className={`feature-choice ${active === i ? "is-active" : ""}`} key={item.title}>
            <h3><button aria-expanded={active === i} aria-controls={`${feature.id}-description-${i}`} onClick={() => setActive(i)}><span className="feature-choice-dot" aria-hidden="true">{active === i ? "✓" : "+"}</span>{item.title}</button></h3>
            <p id={`${feature.id}-description-${i}`} hidden={active !== i}>{item.text}</p>
          </div>)}
        </div>
      </Reveal>
      <Reveal className="feature-product-area" delay={0.08}>
        <div className="feature-product-stage">
          <span className="feature-stage-label">INSIDE ARROWMIND</span>
          <motion.div className="feature-source-main" key={view.main ?? feature.main} initial={reduced ? false : { opacity: 0.6, y: 9 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
            <ProductImage name={view.main ?? feature.main} alt={view.mainAlt ?? feature.mainAlt} />
          </motion.div>
          <motion.figure className="feature-detail-float" key={view.detail} initial={reduced ? false : { opacity: 0.5, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <figcaption><span aria-hidden="true">↗</span>{view.detailLabel}</figcaption>
            <ProductImage name={view.detail} alt={view.detailAlt} />
          </motion.figure>
        </div>
        <p className="feature-image-caption">{feature.label} <span>·</span> A closer look at the app</p>
      </Reveal>
    </div>
  </section>;
}

export default function FeatureShowcase() {
  return <div className="product-tour">
    <nav className="feature-index" aria-label="Explore ArrowMind features"><div className="container">{productFeatures.map((item, index) => <a key={item.id} href={`#${item.id}`}><span>0{index + 1}</span>{item.label}</a>)}</div></nav>
    {productFeatures.map((feature, index) => <FeatureChapter feature={feature} index={index} key={feature.id} />)}
  </div>;
}
