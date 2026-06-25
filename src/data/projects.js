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

// Ordered for the portfolio — Gentle Dental leads.
export const projects = [
  {
    slug: "gentle-dental",
    name: "Gentle Dental",
    tags: ["Web Design", "Brand Standards"],
    role: "Web Design · Brand",
    year: "2023",
    accent: "#2FA8C7",
    result: "A conversion-built site that turns visits into booked appointments.",
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
    tags: ["Logo", "Web Design", "Brand Standards", "Collateral", "Signage", "Messaging"],
    role: "Art Director",
    year: "2021",
    accent: "#84A6CF",
    result: "A bold identity for Nashville's premier 6.2-acre destination.",
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
    tags: ["Social Media", "Collateral", "NASCAR", "Video", "Photography", "Packaging"],
    role: "Art Director",
    year: "2020–2024",
    accent: "#E0913E",
    result: "Grew the brand from 0 to 32,000 followers since 2020 — all real, no bots.",
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
    tags: ["Logo", "Web Design", "Brand Standards", "Collateral"],
    role: "Art Director",
    year: "2023",
    accent: "#7CB3A4",
    result: "A brand and site that make healthcare feel human.",
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
    tags: ["Brand Standards", "Collateral"],
    role: "Brand Designer",
    year: "2022",
    accent: "#6E8FB5",
    result: "A cohesive system for a fast-growing healthcare network.",
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
    tags: ["Logo", "Branding", "Collateral"],
    role: "Brand Designer",
    year: "2022",
    accent: "#C99A3F",
    result: "A full identity for the bar, the can, and the community.",
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
    tags: ["Branding", "Collateral"],
    role: "Brand Designer",
    year: "2021",
    accent: "#D2493F",
    result: "Expanded a beloved brewery's brand — irreverence intact.",
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
    tags: ["Branding", "Collateral"],
    role: "Brand Designer",
    year: "2022",
    accent: "#7FA37F",
    result: "Luxury, made approachable for a mixed-use property.",
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

// Portfolio filter categories.
export const filters = [
  { label: "All", match: null },
  { label: "Branding", match: ["Branding", "Brand Standards", "Logo"] },
  { label: "Web Design", match: ["Web Design"] },
  { label: "Social", match: ["Social Media"] },
  { label: "Packaging", match: ["Packaging"] },
  { label: "Signage", match: ["Signage"] },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
