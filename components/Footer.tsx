import Image from "next/image";
import { APP_STORE_URL, GOOGLE_PLAY_URL, PRIVACY_URL, SUPPORT_EMAIL, TERMS_URL } from "@/lib/site";
import { ArrowIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand"><a href="#top" aria-label="ArrowMind home"><Image src="/media/arrowmind-wordmark.png" alt="ArrowMind" width={1931} height={309} unoptimized /></a><p>More insight. Every arrow.</p></div>
          <div className="footer-links">
            <div><h3>Explore</h3><a href="#detection">How it works</a><a href="#analysis">Training analysis</a><a href="#setup">Your gear</a></div>
            <div><h3>Get ArrowMind</h3><a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">App Store <ArrowIcon /></a><a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer">Google Play <ArrowIcon /></a></div>
            <div><h3>Say hello</h3><a href={`mailto:${SUPPORT_EMAIL}`}>Contact support <ArrowIcon /></a><a href="#faq">FAQ</a></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 ArrowMind. All rights reserved.</span><span className="footer-signoff">BUILT FOR THE WAY YOU TRAIN.</span><div><a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer">Privacy</a><a href={TERMS_URL} target="_blank" rel="noopener noreferrer">Terms</a></div></div>
      </div>
    </footer>
  );
}
