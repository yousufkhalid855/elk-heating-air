import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Flame,
  MapPin,
  ShieldCheck,
  Snowflake,
  Timer,
  Wrench,
} from "lucide-react";

import { seo } from "@/lib/seo";
import {
  CtaBand,
  FaqList,
  JsonLd,
  Reveal,
  ReviewCard,
  SectionHead,
  BookNowButton,
  CallButton,
  TickList,
} from "@/components/shared";
import {
  BOOKING_URL,
  CORE_SERVICES,
  COUNTIES,
  CITIES,
  EDUCATION_ARTICLES,
  FAQS,
  PHONE_DISPLAY,
  REVIEWS,
  SITE_URL,
} from "@/data/site";
import {
  heroHomeDusk,
  comfortableLivingRoom,
  furnaceTechnician,
  acInstallation,
  heatPumpPremium,
  heatPumpOutdoor,
} from "@/data/images";

export const Route = createFileRoute("/")({
  component: HomeComponent,
  head: () => ({
    ...seo({
      title: "Top HVAC Repair & Service Dayton OH | Elk Heating & Air",
      description:
        "Elk Heating & Air provides honest furnace repair, AC service, heat pump installation, and indoor air quality solutions for homeowners across Dayton, OH and the Miami Valley. Honest work. Done right.",
      path: "/",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HVACBusiness",
          name: "Elk Heating & Air",
          url: SITE_URL,
          telephone: "+1-937-344-5445",
          email: "kylearic@elkheatingandair.com",
          logo: `${SITE_URL}/og-image.png`,
          image: `${SITE_URL}/og-image.png`,
          description:
            "Residential heating and cooling services for homeowners across Dayton, Ohio and the Miami Valley. HVAC experience since 2008, serving the Dayton market since 2015.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Dayton",
            addressRegion: "OH",
            postalCode: "45424",
          },
          areaServed: [...CITIES.map((c) => `${c}, OH`), ...COUNTIES],
          sameAs: ["https://www.facebook.com/profile.php?id=61594465561936"],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "07:00",
              closes: "19:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Saturday", "Sunday"],
              opens: "08:00",
              closes: "20:00",
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Elk Heating & Air",
          url: SITE_URL,
        }),
      },
    ],
  }),
});

const SERVICE_IMAGES: Record<string, string> = {
  "heating-furnace": furnaceTechnician,
  "air-conditioning": acInstallation,
  "heat-pumps": heatPumpPremium,
  "indoor-air-quality": comfortableLivingRoom,
};

const SERVICE_FLAGS: Record<string, string> = {
  "heating-furnace": "Heat",
  "air-conditioning": "Cool",
  "heat-pumps": "All Season",
  "indoor-air-quality": "Air Quality",
};

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Honest Recommendations",
    copy: "We explain what your system needs and help you choose the right fix for your home and budget — straightforward explanations, practical options, no pressure.",
  },
  {
    icon: Wrench,
    title: "Quality Workmanship",
    copy: "Dependable repairs, careful installations, and the kind of attention to detail that helps systems do their job season after season.",
  },
  {
    icon: Timer,
    title: "Responsive Service",
    copy: "When comfort is on the line, we respond with dependable service and practical solutions that get your home back to normal.",
  },
  {
    icon: MapPin,
    title: "Local to Greater Dayton",
    copy: "We proudly serve Dayton and the surrounding communities with respectful, reliable residential HVAC care.",
  },
];

const STATS = [
  { value: "2008", label: "HVAC experience begins" },
  { value: "2015", label: "Serving the Dayton market" },
  { value: "12+", label: "Communities served" },
  { value: "50 mi", label: "Service radius around Dayton" },
];

function HomeComponent() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="mesh-warm blueprint relative overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[30rem] w-[30rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.58 0.21 28 / 0.2), transparent 70%)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-36 -left-28 h-[24rem] w-[24rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.62 0.15 240 / 0.16), transparent 70%)" }}
        />
        <div className="container-x relative grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <Reveal>
              <p className="eyebrow">Dayton, Ohio • Residential HVAC</p>
              <h1 className="h-display mt-5 text-4xl sm:text-5xl lg:text-[3.7rem]">
                Reliable <span className="text-gradient-flame">Heating &amp; Cooling</span> for Greater
                Dayton Homes.
              </h1>
              <p className="lead mt-6 max-w-xl">
                Honest recommendations, quality workmanship, and dependable HVAC service for
                homeowners across the Miami Valley.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <BookNowButton label="Book Now" className="btn btn-flame" />
                <CallButton className="btn btn-outline" />
              </div>
              <p className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Flame className="h-3.5 w-3.5 text-flame" /> HVAC experience since 2008
                </span>
                <span aria-hidden="true" className="text-border">
                  •
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Snowflake className="h-3.5 w-3.5 text-frost" /> Serving Dayton since 2015
                </span>
              </p>
            </Reveal>
          </div>

          {/* Layered hero visual */}
          <Reveal delay={120} className="relative">
            <div className="frame-premium relative">
              <span className="frame-flag">Honest Work</span>
              <img
                src={heroHomeDusk}
                alt="Warm, comfortable Dayton-area home at dusk with glowing windows"
                width={1600}
                height={900}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <div className="card-hairline absolute -bottom-6 left-4 flex items-center gap-3 px-4 py-3 sm:left-8">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-flame/15 to-frost/15">
                <Wrench className="h-5 w-5 text-flame" />
              </span>
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-wide">
                  Heating • Cooling • Air Quality
                </p>
                <p className="text-xs text-muted-foreground">Residential service across the Miami Valley</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Stats band ---------- */}
      <section className="mesh-navy relative overflow-hidden">
        <div className="container-x relative grid grid-cols-2 gap-x-6 gap-y-8 py-10 md:grid-cols-4 md:py-12">
          {STATS.map((s, i) => (
            <Reveal key={s.value} delay={i * 70} className="text-center md:text-left">
              <p className="stat-num text-gradient-flame">{s.value}</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-white/65">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Trust / introduction ---------- */}
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <div className="frame-premium relative">
              <span className="frame-flag">Since 2008</span>
              <img
                src={comfortableLivingRoom}
                alt="Cozy Dayton living room with steady, comfortable temperature"
                loading="lazy"
                width={1400}
                height={1000}
                className="aspect-[7/5] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100} className="order-1 lg:order-2">
            <SectionHead
              eyebrow="Who We Are"
              title="Comfort Starts With the Right HVAC Team."
            />
            <div className="prose-copy mt-5">
              <p>
                Elk Heating &amp; Air provides residential heating and cooling solutions throughout
                Greater Dayton. With industry experience dating back to 2008 and service in the
                Dayton market since 2015, we bring years of hands-on knowledge to every repair,
                installation, and maintenance visit.
              </p>
            </div>
            <TickList
              className="mt-7"
              items={[
                "Honest recommendations for your home and budget",
                "Quality workmanship on every repair and install",
                "Dependable service, year-round",
                "Practical solutions from a local team",
              ]}
            />
            <div className="mt-8">
              <Link to="/about" className="link-arrow">
                More about Elk
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Core services (photo card grid) ---------- */}
      <section className="mesh-warm blueprint section border-y border-border">
        <div className="container-x">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <SectionHead
                eyebrow="What We Do"
                title="Residential HVAC Services in Greater Dayton."
                intro="From routine maintenance and emergency repairs to complete system replacements and indoor air quality solutions, Elk Heating & Air helps keep your home comfortable year-round."
              />
            </Reveal>
            <Reveal delay={80}>
              <Link to="/services" className="btn btn-navy flex-none">
                View All Services
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {CORE_SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 2) * 80}>
                <article className="service-tile group">
                  <img
                    src={SERVICE_IMAGES[service.slug]}
                    alt={`${service.title} in Dayton, Ohio`}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="service-tile-img"
                  />
                  <div aria-hidden="true" className="service-tile-shade" />
                  <div className="relative flex h-full flex-col justify-end p-7 sm:p-9">
                    <div className="flex items-center gap-3">
                      <span className="service-tile-num">0{i + 1}</span>
                      <span className="service-tile-flag">{SERVICE_FLAGS[service.slug] ?? "Service"}</span>
                    </div>
                    <h3 className="h-display mt-5 text-2xl text-white sm:text-3xl">{service.title}</h3>
                    <p className="mt-1 font-display text-sm font-bold uppercase tracking-[0.14em] text-ember">
                      {service.tagline}
                    </p>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">{service.intro}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {service.items.slice(0, 4).map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.72rem] font-medium text-white/85 backdrop-blur"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap items-center gap-5">
                      <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-flame"
                      >
                        Book {service.navLabel.split(" ")[0]} Service
                      </a>
                      <Link to={service.path} className="link-arrow text-white">
                        Learn more
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Why Elk ---------- */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Why Elk"
              title="Why Homeowners Choose Elk."
              intro="Our business thrives on local trust, straightforward recommendations, and quality workmanship."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="card-premium flex h-full flex-col gap-4 p-8">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-flame/15 to-frost/15">
                    <p.icon className="h-5 w-5 text-flame" />
                  </span>
                  <h3 className="font-display text-lg font-bold">{p.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
                  <span className="font-display text-xs font-bold italic uppercase tracking-widest text-flame/70">
                    0{i + 1}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Reviews strip ---------- */}
      <section className="mesh-warm section border-y border-border">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHead
                eyebrow="Real Feedback"
                title="See What Homeowners Are Saying."
                intro="Genuine feedback from HouseCall Pro customers across Greater Dayton."
              />
              <Link to="/reviews" className="link-arrow">
                All reviews
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 80}>
                <ReviewCard {...r} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Gallery teaser ---------- */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHead eyebrow="Our Work" title="A Look at the Work We Do." />
              <Link to="/gallery" className="link-arrow">
                View gallery
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              {
                src: furnaceTechnician,
                alt: "Technician performing furnace repair in a Dayton home",
                caption: "Furnace repair",
              },
              {
                src: acInstallation,
                alt: "Air conditioner installation at a Dayton area home",
                caption: "AC installation",
              },
              {
                src: heatPumpOutdoor,
                alt: "Heat pump outdoor unit being serviced",
                caption: "Heat pump service",
              },
            ].map((img, i) => (
              <Reveal key={img.alt} delay={i * 80}>
                <Link to="/gallery" className="frame-premium group relative block">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute bottom-4 left-4 rounded-lg bg-navy-deep/70 px-3 py-1.5 font-display text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
                    {img.caption}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Service areas strip ---------- */}
      <section className="mesh-navy blueprint-navy relative overflow-hidden">
        <div className="container-x relative py-16">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow eyebrow-frost">Service Areas</p>
                <h2 className="h-display mt-4 text-3xl text-white sm:text-4xl">
                  Serving Dayton &amp; Surrounding Communities.
                </h2>
              </div>
              <Link to="/service-areas" className="link-arrow text-white">
                Full service area
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {CITIES.map((c) => (
                <li key={c} className="glass-chip">
                  {c}, OH
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-white/55">
              Plus Montgomery, Greene, Miami, Clark, Champaign, Warren, Butler, Preble, Darke,
              Clinton, and Shelby counties — communities within roughly 50 miles.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- FAQ teaser ---------- */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHead
              eyebrow="Questions"
              title="Answers Homeowners Ask Us Most."
              intro="Straight answers about our services, scheduling, and service area."
            />
            <div className="mt-7">
              <Link to="/faq" className="link-arrow">
                Read all FAQs
              </Link>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <FaqList faqs={FAQS.slice(0, 5)} />
          </Reveal>
        </div>
      </section>

      {/* ---------- Education ---------- */}
      <section className="mesh-warm blueprint section border-y border-border">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHead
                eyebrow="HVAC Education"
                title="Practical Guidance for Your Home."
              />
              <Link to="/resources" className="link-arrow">
                All resources
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {EDUCATION_ARTICLES.slice(0, 3).map((a, i) => (
              <Reveal key={a.slug} delay={i * 80}>
                <Link
                  to="/resources"
                  className="card-premium group flex h-full flex-col p-7"
                >
                  <span className="num-badge">{`0${i + 1}`}</span>
                  <h3 className="mt-5 font-display text-lg font-bold leading-snug">{a.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {a.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-primary">
                    Read more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />

      {/* Quick booking note */}
      <div className="sr-only">
        <a href={BOOKING_URL}>Schedule HVAC service online</a>
        <p>Call {PHONE_DISPLAY} for heating and cooling service in Dayton, Ohio.</p>
      </div>
    </>
  );
}
