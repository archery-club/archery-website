import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/site";
import { AppleIcon, GooglePlayIcon } from "./Icons";

export default function StoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`store-buttons ${className}`}>
      <a href={APP_STORE_URL} className="store-badge" target="_blank" rel="noopener noreferrer" aria-label="Download ArrowMind on the App Store">
        <AppleIcon />
        <span><small>Download on the</small><strong>App Store</strong></span>
      </a>
      <a href={GOOGLE_PLAY_URL} className="store-badge" target="_blank" rel="noopener noreferrer" aria-label="Get ArrowMind on Google Play">
        <GooglePlayIcon />
        <span><small>GET IT ON</small><strong>Google Play</strong></span>
      </a>
    </div>
  );
}
