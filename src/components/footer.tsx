import { Link } from "@tanstack/react-router";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import {
  ADDRESS_LOCALITY,
  BOOKING_URL,
  CITIES,
  EMAIL,
  FACEBOOK_URL,
  HOURS,
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICES,
} from "@/data/site";
import logoLockup from "@/assets/elk-logo-lockup.png";

const QUICK_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Maintenance", path: "/maintenance" },
  { label: "Reviews", path: "/reviews" },
  { label: "Service Areas", path: "/service-areas" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

export function Footer() {
  return (
    <footer className="section-navy">
      <div className="container-x pb-10 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="inline-flex rounded-xl bg-background/95 p-3">
              <img src={logoLockup} alt="Elk Heating & Air logo" className="h-14 w-auto" />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Reliable, expert heating and cooling for homeowners across Dayton and the Miami Valley.
              HVAC experience since 2008 — serving the Dayton market since 2015.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-flame mt-6"
            >
              Book Now
            </a>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-white/75">
              <li>
                <a href={PHONE_TEL} className="flex items-center gap-3 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 flex-none text-flame" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 flex-none text-frost" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 flex-none text-frost" />
                {ADDRESS_LOCALITY}
              </li>
            </ul>
            <div className="mt-6 space-y-1.5 text-sm text-white/60">
              {HOURS.map((h) => (
                <p key={h.days}>
                  <span className="text-white/80">{h.days}:</span> {h.time}
                </p>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              Company
            </h3>
            <ul className="mt-5 grid grid-cols-1 gap-2.5 text-sm">
              {QUICK_LINKS.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-white/70 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              Services
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={s.path} className="text-white/70 transition-colors hover:text-white">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              Service Areas
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {CITIES.map((c) => (
                <li key={c}>
                  <Link
                    to="/service-areas"
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {c}, OH
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-white/50">
              Plus Montgomery, Greene, Miami, Clark, and surrounding counties — communities within
              roughly 50 miles of Dayton.
            </p>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
            >
              <Facebook className="h-4 w-4" />
              Elk Heating & Air on Facebook
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© 2026 Elk Heating & Air. All rights reserved.</p>
          <p>Honest work. Done right.</p>
        </div>
      </div>
    </footer>
  );
}
