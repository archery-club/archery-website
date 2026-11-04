import type { ProductMediaName } from "./product-media";

type FeatureView = { title: string; text: string; detail: ProductMediaName; detailLabel: string; detailAlt: string; main?: ProductMediaName; mainAlt?: string };
export type ProductFeature = { id: string; label: string; heading: string; introduction: string; main: ProductMediaName; mainAlt: string; tone: "lavender" | "mint" | "blue"; views: FeatureView[] };

export const productFeatures: ProductFeature[] = [
  {
    id: "detection", label: "Real-time detection", heading: "Point. Detect. Done.",
    introduction: "Once you finish an end, simply point your phone at the target. See every arrow’s position and score appear in real time.",
    main: "hero-phone", mainAlt: "Actual ArrowMind camera view on a phone, showing nine arrows detected on the target", tone: "lavender",
    views: [
      { title: "No photo. No waiting.", text: "ArrowMind detects your arrows as you point your phone. There’s no photo to take and no waiting for the result.", detail: "store-end-scores", detailLabel: "Every arrow. Every score.", detailAlt: "Original App Store screenshot showing an end with nine scored arrows" },
      { title: "Your target, understood.", text: "See detected positions on the real target, then review your arrows on a virtual target.", detail: "film-shot-review", detailLabel: "From camera to virtual target", detailAlt: "Original launch-film composition showing camera and virtual-target views" },
      { title: "Our own AI vision model.", text: "Purpose-built for arrow detection. Powered by our own AI vision model, with 95%+ detection accuracy.", detail: "film-plot-phone", detailLabel: "The result, ready to review", detailAlt: "Actual ArrowMind phone screenshot showing arrow positions and scores" },
    ],
  },
  {
    id: "scoring", label: "Scoring & review", heading: "Every arrow plotted. Every score recorded.",
    introduction: "Keep the full picture of your end. Every arrow is plotted on a virtual target, ready to revisit anytime.",
    main: "film-plot-phone", mainAlt: "Complete original phone mock from the launch film with virtual target, arrow scores and training totals", tone: "blue",
    views: [
      { title: "Automatic scoring.", text: "Your arrow positions and scores come together in one view. See the end’s score and the individual arrows behind it.", detail: "store-end-scores", detailLabel: "A closer look at one end", detailAlt: "Original end summary card with scores, arrow tags and shot numbers" },
      { title: "Review your shots anytime.", text: "Return to your shots and compare the camera view with the plotted result. Your training is more than a total score.", main: "film-shot-review", mainAlt: "Original film showing the saved camera view beside the virtual target", detail: "store-end-scores", detailLabel: "Keep the details of each end", detailAlt: "Actual saved end and score record" },
      { title: "Bring your form into the picture.", text: "Add action videos to your training. Keep your shooting footage alongside the results you’re working to understand.", detail: "film-action-video", detailLabel: "Action videos", detailAlt: "Actual ArrowMind upload action videos panel from the English launch film" },
    ],
  },
  {
    id: "analysis", label: "Training analysis", heading: "Auto-scoring is just the start.",
    introduction: "Where do your arrows tend to land? See the patterns, refine your form, and track your progress.",
    main: "film-bias", mainAlt: "Original ArrowMind analysis cards showing horizontal and vertical bias", tone: "mint",
    views: [
      { title: "Horizontal & vertical bias.", text: "Understand left-right and high-low tendencies. See the distribution and offsets behind your group.", detail: "film-bias-trend", detailLabel: "Your tendencies, visualized", detailAlt: "Original arrow direction trend across ends" },
      { title: "Grouping size.", text: "Look at the shape and spread of each end. See how your groups compare as your session develops.", main: "film-grouping", mainAlt: "Original ellipse spread chart showing six ends", detail: "film-compare-detail", detailLabel: "Every end, side by side", detailAlt: "Original target showing group ellipses" },
      { title: "Trends over time.", text: "Follow the changes in your training. End scores and score distribution help you see beyond a single arrow.", main: "film-trends", mainAlt: "Original end-scores chart showing scores across eight ends", detail: "film-distribution", detailLabel: "Follow the pattern", detailAlt: "Original score distribution card" },
      { title: "Score distribution.", text: "See how your arrows are distributed across the scoring rings. Put the individual shots into context.", main: "film-distribution", mainAlt: "Actual ArrowMind score distribution chart from the launch film", detail: "film-trends", detailLabel: "Every scoring ring", detailAlt: "Original end-scores chart from the launch film" },
    ],
  },
  {
    id: "arrows", label: "Arrow tags & order", heading: "Different arrows. Keep the context.",
    introduction: "Add tags. Mark your shot order. Give every arrow the details that make your training easier to understand.",
    main: "film-plot-phone", mainAlt: "Original ArrowMind scoring phone view with individual arrow records", tone: "lavender",
    views: [
      { title: "Add arrow tags.", text: "Keep different arrows identifiable. Use tags to organize the groups you want to compare.", detail: "film-arrow-tags", detailLabel: "A tag for each arrow", detailAlt: "Actual arrow tag selector with Fletched, Bare, KSL Jet6 and Spinwing" },
      { title: "Mark your shot order.", text: "Record which arrow you shot first, second, and next. Keep the sequence alongside each arrow’s score.", detail: "film-shot-order", detailLabel: "The sequence behind your end", detailAlt: "Actual shot-order panel with numbers one through nine" },
    ],
  },
  {
    id: "compare", label: "Group comparison", heading: "See what’s changing. Find what works.",
    introduction: "Tuning your bow? Adjusting your form? Compare your groups and let the data guide your next training.",
    main: "film-compare", mainAlt: "Actual ArrowMind target view with multiple group ellipses and group labels", tone: "blue",
    views: [
      { title: "Together on one target.", text: "See your groups in the same target view. Compare their position and spread at a glance.", detail: "film-compare-detail", detailLabel: "One target. A clearer comparison.", detailAlt: "Enlarged original target view showing overlaid groups" },
      { title: "View groups separately.", text: "Use your arrow tags to look at groups separately. Focus on the arrows behind a particular setup or adjustment.", main: "film-plot-phone", mainAlt: "Original plotting screen with All and Fletched group selectors", detail: "film-arrow-tags", detailLabel: "Keep the groups identifiable", detailAlt: "Original tag choices used to identify different arrow groups" },
    ],
  },
  {
    id: "setup", label: "Gear library", heading: "Your bow. Every detail.",
    introduction: "Different setups? Save your bows and detailed component specs in your gear library.",
    main: "film-gear-library", mainAlt: "Actual equipment library showing six saved bow setups and their component counts", tone: "mint",
    views: [
      { title: "All your setups, together.", text: "Keep your indoor and outdoor setups organized. Find the bow and components you want to train with.", detail: "component-specs", detailLabel: "Down to the components", detailAlt: "Actual stabilizer details showing brand, model, specifications and photo" },
      { title: "The specs behind every adjustment.", text: "Record component brands, models, specifications and photos. Keep the small details that make your setup yours.", detail: "film-sight", detailLabel: "Every component has a story", detailAlt: "Actual sight component details with brand, model, specifications and photo" },
    ],
  },
  {
    id: "share", label: "Training reports", heading: "Your training. Ready to share.",
    introduction: "Bring the session together in a training report — your target, scores, and the details behind every end.",
    main: "store-share-report", mainAlt: "Original App Store training report showing target plot, score distribution, stability and average scores", tone: "lavender",
    views: [
      { title: "See the whole session.", text: "Review your target plot and session statistics together. Keep a clear picture of the training you’ve put in.", detail: "film-distribution", detailLabel: "From individual arrows to the full picture", detailAlt: "Original score distribution card" },
      { title: "Keep your results ready to share.", text: "Share a training report with your scores and shot details. Make the next training conversation more useful.", detail: "store-end-scores", detailLabel: "The details behind the result", detailAlt: "Original end summary showing all nine arrow scores" },
    ],
  },
];
