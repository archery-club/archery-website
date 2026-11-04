import AnimatedGlyph from "./AnimatedGlyph";

export default function StatsSection() {
  return (
    <div className="container">
      <div className="proof-strip" aria-label="ArrowMind at a glance">
        <div><AnimatedGlyph name="chip" /><span><strong>95%+</strong><span>Detection accuracy</span><small>Our own AI vision model</small></span></div>
        <div><AnimatedGlyph name="users" /><span><strong>Nearly 50,000</strong><span>Users</span><small>A growing archery community</small></span></div>
        <div><AnimatedGlyph name="globe" /><span><strong>170+</strong><span>Countries & regions</span><small>Available around the world</small></span></div>
      </div>
    </div>
  );
}
