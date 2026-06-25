// Home marquee, in display order. `logo` is a path to a transparent monochrome
// file in public/images/clients/ — when present it renders as a single-color
// graphic (CSS grayscales it); otherwise the name renders as a wordmark. Not linked.
const L = (f) => `/images/clients/${f}`;

export const clients = [
  { name: "New York Life Investment Management", slug: "new-york-life", logo: L("new-york-life.svg") },
  { name: "ARSA", slug: "arsa", logo: L("arsa.png") },
  { name: "Care Options for Kids", slug: "care-options-for-kids", logo: L("care-options-for-kids.svg") },
  { name: "Heart & Vascular Center of Arizona", slug: "hvca", logo: L("hvca.png") },
  { name: "KIPP", slug: "kipp" },
  { name: "Valor Charter Schools", slug: "valor" },
  { name: "Brookfield Properties", slug: "brookfield", logo: L("brookfield.png") },
  { name: "SCAD", slug: "scad" },
  { name: "CVAUSA", slug: "cvausa", logo: L("cvausa.svg") },
  { name: "CareSource", slug: "caresource", logo: L("caresource.svg") },
  { name: "Ram Health", slug: "ram-health" },
  { name: "Bison Wealth", slug: "bison-wealth", logo: L("bison-wealth.png") },
  { name: "Marriott International", slug: "marriott", logo: L("marriott.png") },
  { name: "HDLA Landscape Architects", slug: "hdla", logo: L("hdla.png") },
  { name: "Grand Ole Opry", slug: "grand-ole-opry", logo: L("grand-ole-opry.png") },
  { name: "The Heart House", slug: "the-heart-house" },
  { name: "Desert Spine & Sports Physicians", slug: "desert-spine", logo: L("desert-spine.svg") },
  { name: "WVCAN", slug: "wvcan", logo: L("wvcan.webp") },
  { name: "Prospect Schools", slug: "prospect-schools", logo: L("prospect-schools.png") },
  { name: "BCNY — Boys' Club of New York", slug: "bcny", logo: L("bcny.png") },
  { name: "City of Boston", slug: "city-of-boston", logo: L("city-of-boston.png") },
  { name: "SchoolMint", slug: "schoolmint", logo: L("schoolmint.png") },
  { name: "Frothy Monkey", slug: "frothy-monkey", logo: L("frothy-monkey.png") },
  // Portfolio brands
  { name: "Gentle Dental", slug: "gentle-dental" },
  { name: "Fifth + Broadway", slug: "fifth-broadway" },
  { name: "Grizzly", slug: "grizzly" },
  { name: "Amivie", slug: "amivie", logo: L("amivie.svg") },
  { name: "Synergy Health Partners", slug: "synergy", logo: L("synergy.svg") },
  { name: "Common John Brewing", slug: "common-john", logo: L("common-john.png") },
  { name: "Fat Bottom Brewing", slug: "fat-bottom" },
  { name: "The Monroe", slug: "the-monroe", logo: L("the-monroe.svg") },
];
