import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, Quote, Wrench } from "lucide-react";
import { BOOKING_URL, PHONE_DISPLAY, PHONE_TEL, TAGLINE, BUSINESS_NAME } from "@/data/site";
import { cn } from "@/lib/utils";
import elkMark from "@/assets/elk-mark.png";

/* ---------- Scroll reveal ---------- */

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", visible && "reveal-in", className)}
    >
      {children}
    </div>
  );
}

/* ---------- Section heading ---------- */

export function SectionHead({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "navy";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p className={cn("eyebrow", tone === "navy" && "eyebrow-frost")}>{eyebrow}</p>
      <h2
        className={cn(
          "h-display mt-4 text-3xl sm:text-4xl lg:text-[2.6rem]",
          tone === "navy" && "text-white",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p className={cn("lead mt-4", tone === "navy" && "text-white/70")}>{intro}</p>
      )}
    </div>
  );
}

/* ---------- CTAs ---------- */

export function BookNowButton({
  label = "Book Now",
  className = "btn btn-flame",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={className}>
      {label}
    </a>
  );
}

export function CallButton({
  className = "btn btn-outline",
  label = `Call ${PHONE_DISPLAY}`,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a href={PHONE_TEL} className={className}>
      <Phone className="h-4 w-4" />
      {label}
    </a>
  );
}

export function CtaBand({
  headline = "Comfort Starts With the Right Team.",
  copy = "From heating and cooling repairs to installation, maintenance, and indoor air quality solutions, Elk Heating & Air is here to help homeowners across Greater Dayton.",
}: {
  headline?: string;
  copy?: string;
}) {
  return (
    <section className="section-navy mesh-navy blueprint-navy relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(46rem 30rem at 85% 0%, oklch(0.42 0.13 30 / 0.25), transparent 60%), radial-gradient(40rem 26rem at 8% 100%, oklch(0.45 0.12 245 / 0.25), transparent 60%)",
        }}
      />
      <img
        src={elkMark}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 bottom-0 hidden w-[26rem] opacity-[0.07] lg:block"
      />
      <div className="container-x relative py-20 text-center md:py-24">
        <Reveal>
          <p className="eyebrow justify-center eyebrow-frost" style={{ color: "oklch(0.72 0.16 55)" }}>
            {TAGLINE}
          </p>
          <h2 className="h-display mx-auto mt-4 max-w-3xl text-3xl text-white sm:text-4xl lg:text-[2.7rem]">
            {headline}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70">{copy}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <BookNowButton label="Book Now" className="btn btn-flame" />
            <CallButton className="btn btn-outline-light" label={`Call ${PHONE_DISPLAY}`} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Subpage hero ---------- */

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  breadcrumb,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
  breadcrumb?: { name: string; path: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="mesh-warm blueprint relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-28 h-[26rem] w-[26rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.58 0.21 28 / 0.2), transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-[22rem] w-[22rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.62 0.15 240 / 0.14), transparent 70%)" }}
      />
      <div className="container-x relative grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.12fr_0.88fr]">
        <div>
          {breadcrumb && (
            <nav
              aria-label="Breadcrumb"
              className="mb-6 inline-flex items-center rounded-full border border-border bg-card/70 px-4 py-2 text-xs font-medium text-muted-foreground backdrop-blur"
            >
              <ol className="flex flex-wrap items-center gap-1.5">
                {breadcrumb.map((b, i) => (
                  <li key={b.path} className="flex items-center gap-1.5">
                    {i > 0 && <span aria-hidden="true">/</span>}
                    {i === breadcrumb.length - 1 ? (
                      <span className="font-semibold text-foreground/85">{b.name}</span>
                    ) : (
                      <Link to={b.path} className="transition-colors hover:text-primary">
                        {b.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="h-display mt-4 text-4xl sm:text-5xl lg:text-[3.4rem]">{title}</h1>
          {intro && <p className="lead mt-5 max-w-xl">{intro}</p>}
          {children && <div className="mt-8 flex flex-wrap items-center gap-4">{children}</div>}
        </div>
        {image && (
          <div className="relative hidden lg:block">
            <Reveal delay={120}>
              <div className="frame-premium relative aspect-[4/3]">
                <img
                  src={image}
                  alt={imageAlt ?? ""}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <div className="card-hairline absolute -bottom-7 -left-8 flex items-center gap-3 px-5 py-4">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-flame/15 to-frost/15">
                <Wrench className="h-5 w-5 text-flame" />
              </span>
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-wide">{TAGLINE}</p>
                <p className="text-xs text-muted-foreground">Serving Greater Dayton since 2015</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- Tick list ---------- */

export function TickList({
  items,
  className,
  frost = false,
}: {
  items: string[];
  className?: string;
  frost?: boolean;
}) {
  return (
    <ul className={cn("space-y-3 text-[0.95rem]", className)}>
      {items.map((item) => (
        <li key={item} className={cn("tick-item", frost && "tick-item-frost")}>
          <span className={frost ? "text-white/80" : "text-foreground/80"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Review card ---------- */

export function ReviewCard({
  name,
  date,
  text,
  service,
  className,
}: {
  name: string;
  date: string;
  text: string;
  service: string;
  className?: string;
}) {
  return (
    <figure className={cn("card-hairline flex h-full flex-col p-7", className)}>
      <Quote className="h-6 w-6 text-flame" aria-hidden="true" />
      <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-foreground/85">
        “{text}”
      </blockquote>
      <figcaption className="mt-6 border-t border-border pt-4">
        <p className="font-display text-sm font-bold uppercase tracking-wide">{name}</p>
        <p className="mt-1 text-xs text-muted-foreground">
          {service} • {date}
        </p>
      </figcaption>
    </figure>
  );
}

/* ---------- FAQ list ---------- */

export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((f) => (
        <details key={f.q} className="faq-item">
          <summary>{f.q}</summary>
          <p className="faq-answer">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/* ---------- Structured data ---------- */

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export { BUSINESS_NAME };
