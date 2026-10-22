// Verified business information for Elk Heating & Air.
// Sources: existing elkheatingandair.com website and client-provided details.

export const BOOKING_URL =
  "https://book.housecallpro.com/book/Elk-Heating--Air/49149a105d9a44f5b1e371e0b799a456?v2=true";

export const PHONE_DISPLAY = "(937) 344-5445";
export const PHONE_TEL = "tel:+19373445445";
export const EMAIL = "kylearic@elkheatingandair.com";
export const SITE_URL = "https://www.elkheatingandair.com";
export const BUSINESS_NAME = "Elk Heating & Air";
export const TAGLINE = "Honest work. Done right.";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61594465561936";
export const HCP_REVIEWS_URL = "https://www.housecallpro.com/";

export const HOURS: { days: string; time: string }[] = [
  { days: "Mon – Fri", time: "7:00 am – 7:00 pm" },
  { days: "Sat – Sun", time: "8:00 am – 8:00 pm" },
];

export const ADDRESS_LOCALITY = "Dayton, OH 45424";

export const CITIES = [
  "Dayton",
  "Huber Heights",
  "Beavercreek",
  "Centerville",
  "Kettering",
  "Springfield",
  "Tipp City",
  "Troy",
  "Vandalia",
  "Englewood",
  "Fairborn",
  "Oakwood",
] as const;

export const COUNTIES = [
  "Montgomery County",
  "Greene County",
  "Miami County",
  "Clark County",
  "Champaign County",
  "Warren County",
  "Butler County",
  "Preble County",
  "Darke County",
  "Clinton County",
  "Shelby County",
] as const;

export type ServiceInfo = {
  slug: string;
  path: string;
  navLabel: string;
  title: string;
  headline: string;
  tagline: string;
  intro: string;
  items: string[];
  ctaLabel: string;
};

export const SERVICES: ServiceInfo[] = [
  {
    slug: "heating-furnace",
    path: "/services/heating-furnace",
    navLabel: "Heating & Furnace",
    title: "Heating & Furnace Services",
    headline: "Keep Your Home Warm When It Matters Most.",
    tagline: "Keep your home ready for cold weather.",
    intro:
      "When Ohio cold snaps hit, your furnace has to be ready. Elk Heating & Air provides furnace repair, installation, replacement, maintenance, safety inspections, and emergency heating repairs for homeowners across Greater Dayton.",
    items: [
      "Furnace Repair",
      "Furnace Installation",
      "Furnace Replacement",
      "Furnace Maintenance",
      "Heating Safety Inspections",
      "Emergency Heating Repairs",
    ],
    ctaLabel: "Book Heating Service",
  },
  {
    slug: "air-conditioning",
    path: "/services/air-conditioning",
    navLabel: "Air Conditioning",
    title: "Air Conditioning Services",
    headline: "Reliable Cooling for Hot Dayton Summers.",
    tagline: "Stay comfortable all summer.",
    intro:
      "Humid Miami Valley summers put real demand on your air conditioner. Elk Heating & Air handles AC repair, installation, replacement, seasonal tune-ups, preventative maintenance, and cooling diagnostics.",
    items: [
      "AC Repair",
      "AC Installation",
      "AC Replacement",
      "Seasonal Tune-Ups",
      "Preventative Maintenance",
      "Cooling Diagnostics",
    ],
    ctaLabel: "Book AC Service",
  },
  {
    slug: "heat-pumps",
    path: "/services/heat-pumps",
    navLabel: "Heat Pumps",
    title: "Heat Pump Services",
    headline: "Efficient Heating & Cooling, All Year Long.",
    tagline: "Year-round comfort.",
    intro:
      "A heat pump heats and cools your home from a single system. Elk Heating & Air services, installs, and maintains heat pumps — including dual-fuel setups and high-efficiency solutions — for year-round comfort.",
    items: [
      "Heat Pump Repair",
      "Heat Pump Installation",
      "Heat Pump Replacement",
      "Heat Pump Maintenance",
      "Dual-Fuel Systems",
      "High-Efficiency Solutions",
    ],
    ctaLabel: "Book Heat Pump Service",
  },
  {
    slug: "indoor-air-quality",
    path: "/services/indoor-air-quality",
    navLabel: "Indoor Air Quality",
    title: "Indoor Air Quality Solutions",
    headline: "Create a More Comfortable Indoor Environment.",
    tagline: "A more comfortable-feeling home.",
    intro:
      "From whole-home filtration to humidity control, Elk Heating & Air installs and services indoor air quality solutions that help your home feel more comfortable through every Ohio season.",
    items: [
      "Whole-Home Air Filtration",
      "Air Purification Systems",
      "Humidifiers",
      "Dehumidifiers",
      "UV Air Treatment",
    ],
    ctaLabel: "Ask About Indoor Air Quality",
  },
  {
    slug: "hvac-maintenance",
    path: "/maintenance",
    navLabel: "HVAC Maintenance",
    title: "HVAC Maintenance",
    headline: "Protect Your Comfort With Regular HVAC Maintenance.",
    tagline: "Prevent small problems from becoming big repairs.",
    intro:
      "Regular maintenance keeps your heating and cooling systems performing the way they should. Elk Heating & Air provides seasonal maintenance, preventative inspections, and system performance checks.",
    items: [
      "Seasonal Maintenance",
      "Preventative Inspections",
      "Heating Maintenance",
      "Cooling Maintenance",
      "System Performance Checks",
    ],
    ctaLabel: "Book Maintenance",
  },
  {
    slug: "emergency-hvac",
    path: "/emergency-hvac",
    navLabel: "Emergency HVAC",
    title: "Emergency HVAC Service",
    headline: "When Your HVAC Stops Working, We're Ready to Help.",
    tagline: "Fast, dependable help when your system goes down.",
    intro:
      "A failed furnace or a dead air conditioner can't wait for a convenient moment. Elk Heating & Air provides emergency heating repairs and urgent diagnostics for homeowners across Greater Dayton.",
    items: [
      "Emergency Heating Repairs",
      "Urgent Cooling Issues",
      "System Diagnostics",
      "Troubleshooting",
      "Repair Recommendations",
    ],
    ctaLabel: "Book Service",
  },
];

export const CORE_SERVICES = SERVICES.slice(0, 4);

// Real customer reviews submitted through HouseCall Pro (October 2026).
export const REVIEWS: { name: string; date: string; text: string; service: string }[] = [
  {
    name: "Jordan D.",
    date: "Oct 22, 2026",
    text: "Kyle came out to repair my furnace and did an amazing job. He was polite, kind and worked quick. Very professional and would recommend to anyone looking for HVAC work",
    service: "Furnace Repair",
  },
  {
    name: "Bridget P.",
    date: "Oct 12, 2026",
    text: "Did a fantastic job. Found our go to Heating & Air company!!",
    service: "Heating & Cooling Service",
  },
  {
    name: "Jacob L.",
    date: "Oct 7, 2026",
    text: "Awesome Service! Very reasonable pricing and super friendly. Would use them again anytime. Thanks Elk!",
    service: "HVAC Service",
  },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "What HVAC services does Elk Heating & Air provide?",
    a: "We provide residential heating and cooling services across Greater Dayton, including furnace repair, installation, replacement, and maintenance; AC repair, installation, replacement, and tune-ups; heat pump service; indoor air quality solutions; HVAC maintenance; and emergency heating repairs.",
  },
  {
    q: "Do you repair furnaces?",
    a: "Yes. Furnace repair is one of our core services. We diagnose the problem, explain what your system needs in plain language, and give you practical options for your home and budget.",
  },
  {
    q: "Do you install new AC systems?",
    a: "Yes. We handle AC installation and full system replacement, along with seasonal tune-ups, preventative maintenance, and cooling diagnostics for existing systems.",
  },
  {
    q: "Do you service heat pumps?",
    a: "Yes. We repair, install, replace, and maintain heat pumps, including dual-fuel systems and high-efficiency solutions for year-round comfort.",
  },
  {
    q: "Do you provide HVAC maintenance?",
    a: "Yes. We offer seasonal maintenance, preventative inspections, heating and cooling maintenance, and system performance checks to help keep your equipment running the way it should.",
  },
  {
    q: "What indoor air quality solutions are available?",
    a: "We install and service whole-home air filtration, air purification systems, humidifiers, dehumidifiers, and UV air treatment to help your home feel more comfortable.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Dayton and surrounding communities including Huber Heights, Beavercreek, Centerville, Kettering, Springfield, Tipp City, Troy, Vandalia, Englewood, Fairborn, and Oakwood — plus surrounding communities within roughly 50 miles.",
  },
  {
    q: "How do I schedule service?",
    a: "The fastest way is to book online through our scheduling page, or call us at (937) 344-5445 and we'll get you on the schedule.",
  },
  {
    q: "Can I book online?",
    a: "Yes. Every Book Now button on this site takes you to our online booking page, where you can choose the service and time that works for you.",
  },
  {
    q: "How do I contact Elk Heating & Air?",
    a: "Call (937) 344-5445 or email kylearic@elkheatingandair.com. You can also send us a message through our contact page.",
  },
  {
    q: "Do you provide emergency heating repairs?",
    a: "Yes. When your heat goes out, we provide emergency heating repairs and urgent diagnostics. Call (937) 344-5445 or book online and we'll respond as quickly as we can.",
  },
  {
    q: "Do you replace HVAC systems?",
    a: "Yes. We handle complete system replacements for furnaces, air conditioners, and heat pumps, with straightforward recommendations for your home and budget.",
  },
];

export const EDUCATION_ARTICLES: { title: string; summary: string; slug: string }[] = [
  {
    title: "How to Know When Your Furnace Needs Repair",
    summary:
      "Short cycling, unusual noises, weak airflow, or a burning smell at startup are all signals your furnace is asking for attention. We explain which symptoms mean a simple fix and which warrant a technician visit.",
    slug: "furnace-needs-repair",
  },
  {
    title: "Signs Your AC May Need Service",
    summary:
      "Warm air from the vents, ice on the refrigerant line, rising humidity indoors, or a unit that runs constantly without catching up — each points to a different underlying cause.",
    slug: "ac-needs-service",
  },
  {
    title: "How Often Should HVAC Systems Be Maintained?",
    summary:
      "A practical rhythm for most homes: heating equipment checked in the fall, cooling equipment checked in the spring. We walk through what a maintenance visit actually includes.",
    slug: "maintenance-frequency",
  },
  {
    title: "Furnace vs Heat Pump",
    summary:
      "Both can heat a Dayton home, but they work very differently. Here's a plain-language comparison of cost, comfort, and how each handles an Ohio winter.",
    slug: "furnace-vs-heat-pump",
  },
  {
    title: "How to Improve Indoor Comfort",
    summary:
      "Filtration, humidity control, and airflow all shape how your home feels — not just the number on the thermostat. Simple changes that make a noticeable difference.",
    slug: "indoor-comfort",
  },
  {
    title: "What to Check When Your AC Isn't Cooling",
    summary:
      "Before you call: a few safe checks homeowners can make — thermostat settings, a clogged filter, a tripped breaker — and when it's time to bring in a technician.",
    slug: "ac-not-cooling",
  },
  {
    title: "What to Know Before Replacing an HVAC System",
    summary:
      "Sizing, efficiency ratings, and installation quality matter more than the brand on the box. What to ask before you commit to a replacement.",
    slug: "before-replacing-hvac",
  },
];
