// Images live in public/images/<slug>/<slug>-NN.webp (pulled from the live site).
const img = (slug, n) => `/images/${slug}/${slug}-${String(n).padStart(2, "0")}.webp`;
const gallery = (slug, count) =>
  Array.from({ length: count }, (_, i) => img(slug, i + 1));

// Videos live in public/videos/<slug>/<slug>-NN.mp4 with a matching .jpg poster.
const vid = (slug, n, { ar = 16 / 9, title = "", loop = false } = {}) => ({
  src: `/videos/${slug}/${slug}-${String(n).padStart(2, "0")}.mp4`,
  poster: `/videos/${slug}/${slug}-${String(n).padStart(2, "0")}.jpg`,
  ar,
  title,
  loop,
});

// TAXONOMY NOTE:
//   `categories` = the controlled vocabulary the filter bar runs on (what the
//     project IS). Keep these to CATEGORY_ORDER values only. First entry is the
//     project's "headline" category and drives the card badge.
//   `tags` = free-form deliverables/skills shown on the card/detail (what's IN it).
//   Keeping them separate is what lets every project filter accurately while
//   still showing rich, specific labels.

// Ordered for the portfolio — Gentle Dental leads.
export const projects = [
  {
    slug: "gentle-dental",
    name: "Gentle Dental",
    categories: ["Web", "Branding"],
    tags: ["Web Design", "Brand Standards"],
    role: "Web Design · Brand",
    year: "2023",
    accent: "#2FA8C7",
    result: "A conversion-built site that turns visits into booked appointments.",
    outcome: "A site built to turn a visit into a booked appointment.",
    metric: "Booked.",
    metricLabel: "A site built to turn visits into appointments",
    brief:
      "Gentle Dental needed a website that turned trust into booked appointments — fast, clear, and mobile-first.",
    description:
      "A clean, conversion-focused website redesign built on trust and accessibility. Prominent social proof (5-star reviews, years in practice, location count), clear promotional offers, and a mobile-first layout designed to get patients to booking with confidence.",
    liveUrl: "https://gentledental.interdent.com/",
    liveLabel: "Visit live site ↗",
    thumbnail: img("gentle-dental", 1),
    images: gallery("gentle-dental", 2),
  },
  {
    slug: "fifth-broadway",
    name: "Fifth + Broadway",
    categories: ["Branding", "Web"],
    tags: ["Logo", "Web Design", "Brand Standards", "Signage", "Collateral", "Messaging"],
    role: "Art Director",
    year: "2021",
    accent: "#84A6CF",
    result: "A bold identity for Nashville's premier 6.2-acre destination.",
    outcome: "An identity for Nashville's downtown destination.",
    cao: {
      challenge:
        "Nashville's largest mixed-use destination — 6.2 acres on the old convention center site — needed a brand as big and walkable as the place itself.",
      approach:
        "We wove the city's historic architecture into a contemporary identity: a stylized '5+B' mark, neon signage, and wayfinding that guides you through retail, dining, entertainment, offices, and homes.",
      outcome:
        "A brand that holds up at every scale — from a logo to the side of a building.",
    },
    metric: "6.2 acres",
    metricLabel: "Nashville's premier mixed-use destination",
    brief:
      "Nashville's biggest mixed-use destination needed a brand as bold as its location.",
    description:
      "A bold urban identity for Nashville's premier 6.2-acre mixed-use destination on the former convention center site. The brand interweaves the city's historic architecture with contemporary energy through a stylized '5+B' mark, neon signage, and vibrant wayfinding — creating a walkable, culturally rich environment for retail, dining, entertainment, office, and residential.",
    liveUrl: null,
    thumbnail: img("fifth-broadway", 6),
    images: gallery("fifth-broadway", 17),
  },
  {
    slug: "grizzly-smokeless-tobacco",
    name: "Grizzly",
    categories: ["Social", "Packaging"],
    tags: ["Social Media", "Photography", "Video", "Packaging", "NASCAR", "Collateral"],
    role: "Art Director",
    year: "2020–2024",
    accent: "#E0913E",
    result: "Grew the brand from 0 to 32,000 followers since 2020 — all real, no bots.",
    outcome: "Built a rugged, real social presence from zero.",
    cao: {
      challenge:
        "Grizzly needed a social presence as rugged and real as the people who actually use it. There was nothing to build on — the account started at zero.",
      approach:
        "We leaned into outdoor authenticity and product range, then anchored it with high-engagement campaigns like 'See Y'all Out There' and a 20-Year Blowout activation. Every post earned its place in the feed.",
      outcome:
        "0 to 32,000 Instagram followers since 2020, plus 20K on Facebook — all real, no bots.",
    },
    metric: "0 → 32,000",
    metricLabel: "Instagram followers · plus 20K on Facebook · zero bots",
    brief:
      "Grizzly needed a social presence as rugged and real as its audience — and it needed to start from nothing.",
    description:
      "Built the Grizzly brand's social presence from 0 to 32K Instagram followers and 20K on Facebook since 2020. The strategy blended rugged outdoor authenticity, product variety, and high-engagement campaigns — including the 'See Y'all Out There' series and a 20-Year Blowout activation — anchoring Grizzly as a top-choice brand in the smokeless tobacco category.",
    liveUrl: "https://www.instagram.com/grizzlysmokeless/",
    liveLabel: "Instagram feed ↗",
    thumbnail: img("grizzly-smokeless-tobacco", 1),
    images: gallery("grizzly-smokeless-tobacco", 22),
    videos: [
      vid("grizzly-smokeless-tobacco", 1),
      vid("grizzly-smokeless-tobacco", 2, { title: "20-Year Blowout" }),
      vid("grizzly-smokeless-tobacco", 3, { title: "Beaver Lake Fish Habitat Restoration" }),
      vid("grizzly-smokeless-tobacco", 4, { title: "See Y’all Out There — Gluten Free" }),
      vid("grizzly-smokeless-tobacco", 5, { title: "See Y’all Out There — Minivan" }),
      vid("grizzly-smokeless-tobacco", 6, { title: "See Y’all Out There — Ski Boats" }),
      vid("grizzly-smokeless-tobacco", 7, { title: "See Y’all Out There — Luxury Camper" }),
      vid("grizzly-smokeless-tobacco", 8, { title: "See Y’all Out There — Miter Saw" }),
    ],
  },
  {
    slug: "amivie",
    name: "Amivie",
    categories: ["Branding", "Web"],
    tags: ["Logo", "Web Design", "Brand Standards", "Collateral"],
    role: "Art Director",
    year: "2023",
    accent: "#7CB3A4",
    result: "A brand and site that make healthcare feel human.",
    outcome: "A brand and site that make community healthcare feel personal.",
    metric: "Human",
    metricLabel: "Healthcare that finally feels personal",
    brief:
      "Amivie needed a brand that made community healthcare feel personal, warm, and trustworthy.",
    description:
      "A complete brand identity and website for a community-focused healthcare provider. The design system emphasizes trust, warmth, and accessibility — using generous white space, soft accent colors, and imagery that centers real people. The result aligns Amivie's visual presence with its mission of personalized, compassionate care.",
    liveUrl: "https://amivie.com/",
    liveLabel: "Visit live site ↗",
    guidelinesUrl: "https://www.nsmithadve.com/s/Amivie-Final-Guidelines-03.pdf",
    thumbnail: img("amivie", 1),
    images: gallery("amivie", 2),
  },
  {
    slug: "synergy",
    name: "Synergy Health Partners",
    categories: ["Branding", "Web"],
    tags: ["Brand Standards", "Web Design", "Collateral"],
    role: "Brand Designer",
    year: "2022",
    accent: "#6E8FB5",
    result: "A cohesive system for a fast-growing healthcare network.",
    outcome: "One identity across a growing network of clinics.",
    metric: "Unified",
    metricLabel: "One system across a multi-location network",
    brief:
      "A growing healthcare network needed one coherent identity across every location.",
    description:
      "Brand standards and collateral system for a growing healthcare network, bringing cohesion to a multi-location provider identity.",
    liveUrl: null,
    thumbnail: img("synergy", 1),
    images: gallery("synergy", 1),
  },
  {
    slug: "common-john-brewing",
    name: "Common John Brewing",
    categories: ["Branding", "Packaging"],
    tags: ["Logo", "Brand Standards", "Packaging", "Collateral"],
    role: "Brand Designer",
    year: "2022",
    accent: "#C99A3F",
    result: "A full identity for the bar, the can, and the community.",
    outcome: "A full identity made for the bar, the can, and the regulars.",
    metric: "On tap",
    metricLabel: "A brand for the bar, the can, and the community",
    brief:
      "A new craft brewery needed an identity built for the bar, the can, and the community.",
    description:
      "Full brand identity for a craft brewery, from logo and brand standards to packaging and merchandise — built for the bar, the can, and the community.",
    liveUrl: null,
    thumbnail: img("common-john-brewing", 1),
    images: gallery("common-john-brewing", 11),
    videos: [vid("common-john-brewing", 1, { ar: 2038 / 1080, loop: true })],
  },
  {
    slug: "fat-bottom-brewing",
    name: "Fat Bottom Brewing",
    categories: ["Branding"],
    tags: ["Brand Standards", "Collateral"],
    role: "Brand Designer",
    year: "2021",
    accent: "#D2493F",
    result: "Expanded a beloved brewery's brand — irreverence intact.",
    outcome: "Expanded a beloved Nashville brewery — irreverence fully intact.",
    cao: {
      challenge:
        "One of Nashville's most loved breweries was expanding into new touchpoints — and its irreverent personality was the whole point. None of that could get lost in the process.",
      approach:
        "We built a collateral system that carried the brand's voice into every new place it showed up — character sharp, tone intact.",
      outcome:
        "A wider, more capable brand with its irreverence completely intact — same Fat Bottom, more room to play.",
    },
    metric: "Intact",
    metricLabel: "Irreverence kept, reach expanded",
    brief:
      "A beloved Nashville brewery needed to expand its brand without losing its irreverence.",
    description:
      "Brand collateral system for one of Nashville's beloved craft breweries — keeping the irreverent personality intact while expanding into new touchpoints.",
    liveUrl: null,
    thumbnail: img("fat-bottom-brewing", 1),
    images: gallery("fat-bottom-brewing", 18),
  },
  {
    slug: "the-monroe",
    name: "The Monroe",
    categories: ["Branding"],
    tags: ["Brand Standards", "Collateral"],
    role: "Brand Designer",
    year: "2022",
    accent: "#7FA37F",
    result: "Luxury, made approachable for a mixed-use property.",
    outcome: "Luxury for a mixed-use property, made approachable.",
    metric: "Elevated",
    metricLabel: "Luxury made approachable",
    brief:
      "A mixed-use property needed a brand that balanced luxury with approachability.",
    description:
      "Brand identity and collateral for a mixed-use residential and retail property — striking the balance between luxury and approachability.",
    liveUrl: null,
    thumbnail: img("the-monroe", 1),
    images: gallery("the-monroe", 15),
  },
];

// Home hero cycles through these (in order). Gentle Dental leads.
export const featuredSlugs = [
  "gentle-dental",
  "fifth-broadway",
  "grizzly-smokeless-tobacco",
  "amivie",
];

// Canonical filter categories, in display order. The filter bar is built from
// the categories ACTUALLY present in the data, so it can never show an empty
// filter or drift out of sync as projects are added/edited.
export const CATEGORY_ORDER = ["Branding", "Web", "Packaging", "Social"];

export const filters = [
  "All",
  ...CATEGORY_ORDER.filter((c) => projects.some((p) => p.categories.includes(c))),
];

// Count of projects per filter label (for the "Branding (7)" style counts).
export const filterCount = (label) =>
  label === "All"
    ? projects.length
    : projects.filter((p) => p.categories.includes(label)).length;

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
