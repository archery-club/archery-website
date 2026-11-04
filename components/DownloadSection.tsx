import Image from "next/image";
import StoreButtons from "./StoreButtons";
import Reveal from "./Reveal";
import { LanguageIcon } from "./Icons";

export default function DownloadSection() {
  return (
    <section className="download-section container" id="download" aria-labelledby="download-heading">
      <Reveal className="download-panel">
        <div className="download-orbit orbit-one" aria-hidden="true" /><div className="download-orbit orbit-two" aria-hidden="true" />
        <Image src="/media/arrowmind-icon.png" alt="ArrowMind app icon" width={256} height={256} className="download-app-icon" unoptimized />
        <p className="eyebrow">MAKE YOUR NEXT SESSION COUNT</p>
        <h2 id="download-heading">Shoot. Scan. Improve.</h2>
        <p className="download-description">Every arrow detected. Every session analyzed.<br />Bring ArrowMind to your next training.</p>
        <StoreButtons />
        <p className="language-line"><LanguageIcon /><span>English · Cantonese · Chinese</span></p>
      </Reveal>
    </section>
  );
}
