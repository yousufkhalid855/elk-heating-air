import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";

import { seo, breadcrumb } from "@/lib/seo";
import {
  CtaBand,
  JsonLd,
  PageHero,
  Reveal,
  SectionHead,
  BookNowButton,
} from "@/components/shared";
import {
  ADDRESS_LOCALITY,
  EMAIL,
  HOURS,
  PHONE_DISPLAY,
  PHONE_TEL,
  BOOKING_URL,
} from "@/data/site";
import { comfortableLivingRoom } from "@/data/images";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    ...seo({
      title: "Contact Elk Heating & Air | Dayton, OH HVAC",
      description:
        "Contact Elk Heating & Air at (937) 344-5445 or kylearic@elkheatingandair.com, or book heating and cooling service online for your Dayton area home.",
      path: "/contact",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ),
      },
    ],
  }),
});

const SERVICE_OPTIONS = [
  "Heating & Furnace",
  "Air Conditioning",
  "Heat Pumps",
  "Indoor Air Quality",
  "HVAC Maintenance",
  "Emergency HVAC",
  "General Question",
];

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: SERVICE_OPTIONS[0],
    city: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website inquiry — ${form.service}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService Needed: ${form.service}\nCity: ${form.city}\n\nMessage:\n${form.message}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputCls =
    "w-full rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/15";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        image={comfortableLivingRoom}
        title="Let's Get Your Home Comfortable Again."
        intro="Call, email, or send us a message — and when you're ready to schedule, online booking takes just a few minutes."
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      >
        <BookNowButton label="Book Online" className="btn btn-flame" />
        <a href={PHONE_TEL} className="btn btn-outline">
          <Phone className="h-4 w-4" />
          {PHONE_DISPLAY}
        </a>
      </PageHero>

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.15fr]">
          {/* Contact details */}
          <Reveal>
            <SectionHead
              eyebrow="Reach Us Directly"
              title="Talk to a Real Local Team."
              intro="No call centers, no runaround — you'll reach people who work on Dayton homes every day."
            />
            <div className="mt-8 space-y-4">
              <a
                href={PHONE_TEL}
                className="card-hairline flex items-center gap-4 p-5 transition-shadow hover:shadow-md"
              >
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-flame/10">
                  <Phone className="h-5 w-5 text-flame" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold uppercase tracking-wide">Call us</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{PHONE_DISPLAY}</p>
                </div>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="card-hairline flex items-center gap-4 p-5 transition-shadow hover:shadow-md"
              >
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-frost/10">
                  <Mail className="h-5 w-5 text-frost" />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-sm font-bold uppercase tracking-wide">Email us</p>
                  <p className="mt-0.5 truncate text-sm text-muted-foreground">{EMAIL}</p>
                </div>
              </a>
              <div className="card-hairline flex items-center gap-4 p-5">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-primary/8">
                  <MapPin className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold uppercase tracking-wide">Serving</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{ADDRESS_LOCALITY} &amp; the Miami Valley</p>
                </div>
              </div>
              <div className="card-hairline flex items-start gap-4 p-5">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-primary/8">
                  <Clock className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold uppercase tracking-wide">Hours</p>
                  {HOURS.map((h) => (
                    <p key={h.days} className="mt-0.5 text-sm text-muted-foreground">
                      {h.days}: {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-flame/25 bg-flame/5 p-5">
              <p className="font-display text-sm font-bold uppercase tracking-wide text-flame">
                Need service scheduled?
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                The fastest way to get on the calendar is our online booking page — pick your
                service and time, and you're set.
              </p>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-flame mt-4">
                Book Online
              </a>
            </div>
          </Reveal>

          {/* Inquiry form */}
          <Reveal delay={100}>
            <div className="card-hairline p-7 md:p-9">
              <h2 className="font-display text-xl font-bold">Send Us a Message</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                For general inquiries — for actual scheduling, use Book Online above or call us.
              </p>
              <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2" noValidate={false}>
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Full Name
                  </label>
                  <input id="name" required value={form.name} onChange={set("name")} placeholder="Your name" className={inputCls} />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Phone
                  </label>
                  <input id="phone" type="tel" required value={form.phone} onChange={set("phone")} placeholder="(937) 555-0123" className={inputCls} />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Email
                  </label>
                  <input id="email" type="email" required value={form.email} onChange={set("email")} placeholder="you@email.com" className={inputCls} />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="service" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Service Needed
                  </label>
                  <select id="service" value={form.service} onChange={set("service")} className={inputCls}>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="city" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    City
                  </label>
                  <input id="city" required value={form.city} onChange={set("city")} placeholder="Dayton, Beavercreek, Kettering…" className={inputCls} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Message
                  </label>
                  <textarea id="message" rows={5} required value={form.message} onChange={set("message")} placeholder="Tell us what's going on with your system…" className={inputCls} />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="btn btn-navy w-full sm:w-auto">
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                  {sent && (
                    <p className="mt-3 text-sm text-muted-foreground" role="status">
                      Your email app should now be open with your message ready to send. Thank you!
                    </p>
                  )}
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
