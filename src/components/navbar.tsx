import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import { BOOKING_URL, PHONE_DISPLAY, PHONE_TEL, SERVICES } from "@/data/site";
import { cn } from "@/lib/utils";
import logoLockup from "@/assets/elk-logo-lockup.png";

const MAIN_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Maintenance", path: "/maintenance" },
  { label: "Reviews", path: "/reviews" },
  { label: "Service Areas", path: "/service-areas" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close both menus whenever navigation happens.
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close the services dropdown on Escape or outside click.
  useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [servicesOpen]);

  const activeService = SERVICES.find((s) => s.path === pathname);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md transition-shadow duration-300",
        scrolled ? "border-border shadow-[0_10px_30px_-18px_oklch(0.27_0.05_262/0.35)]" : "border-transparent",
      )}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex flex-none items-center" aria-label="Elk Heating & Air — home">
          <img src={logoLockup} alt="Elk Heating & Air logo" className="h-12 w-auto md:h-14" />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          <Link
            to="/"
            className={cn(
              "text-sm font-semibold transition-colors hover:text-primary",
              pathname === "/" ? "text-primary" : "text-foreground/80",
            )}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={cn(
              "text-sm font-semibold transition-colors hover:text-primary",
              pathname === "/about" ? "text-primary" : "text-foreground/80",
            )}
          >
            About
          </Link>

          {/* Services dropdown — works on hover, click, touch and keyboard */}
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={cn(
                "flex items-center gap-1 text-sm font-semibold transition-colors hover:text-primary",
                pathname.startsWith("/services") || activeService ? "text-primary" : "text-foreground/80",
              )}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  servicesOpen && "rotate-180",
                )}
              />
            </button>
            <div
              id="services-menu"
              className={cn(
                "absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 transition-all duration-200",
                servicesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible translate-y-2 opacity-0",
              )}
            >
              <div className="card-hairline overflow-hidden p-2">
                <Link
                  to="/services"
                  className="block rounded-lg px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-primary transition-colors hover:bg-secondary"
                >
                  All Services
                </Link>
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to={s.path}
                    className={cn(
                      "block rounded-lg px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary",
                      pathname === s.path && "bg-secondary text-primary",
                    )}
                  >
                    {s.navLabel}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/maintenance"
            className={cn(
              "text-sm font-semibold transition-colors hover:text-primary",
              pathname === "/maintenance" ? "text-primary" : "text-foreground/80",
            )}
          >
            Maintenance
          </Link>
          <Link
            to="/reviews"
            className={cn(
              "text-sm font-semibold transition-colors hover:text-primary",
              pathname === "/reviews" ? "text-primary" : "text-foreground/80",
            )}
          >
            Reviews
          </Link>
          <Link
            to="/service-areas"
            className={cn(
              "text-sm font-semibold transition-colors hover:text-primary",
              pathname === "/service-areas" ? "text-primary" : "text-foreground/80",
            )}
          >
            Service Areas
          </Link>
          <Link
            to="/faq"
            className={cn(
              "text-sm font-semibold transition-colors hover:text-primary",
              pathname === "/faq" ? "text-primary" : "text-foreground/80",
            )}
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className={cn(
              "text-sm font-semibold transition-colors hover:text-primary",
              pathname === "/contact" ? "text-primary" : "text-foreground/80",
            )}
          >
            Contact
          </Link>
        </nav>

        <div className="flex flex-none items-center gap-3">
          <a
            href={PHONE_TEL}
            className="hidden items-center gap-2 font-display text-sm font-bold text-foreground transition-colors hover:text-flame xl:flex"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-flame/10">
              <Phone className="h-4 w-4 text-flame" />
            </span>
            {PHONE_DISPLAY}
          </a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-flame hidden md:inline-flex"
          >
            Book Now
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile slide-out menu */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-[21rem] max-w-[88vw] overflow-y-auto bg-background shadow-2xl transition-transform duration-300 lg:hidden",
          menuOpen ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!menuOpen}
      >
        <div className="flex h-20 items-center justify-between border-b border-border px-5">
          <img src={logoLockup} alt="Elk Heating & Air" className="h-10 w-auto" />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 p-5" aria-label="Mobile">
          {MAIN_LINKS.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={cn(
                "rounded-lg px-4 py-3 font-display text-sm font-bold uppercase tracking-wide transition-colors hover:bg-secondary",
                pathname === l.path ? "text-primary" : "text-foreground/85",
              )}
            >
              {l.label}
            </Link>
          ))}
          <p className="mt-3 px-4 font-display text-[0.7rem] font-bold uppercase tracking-[0.22em] text-muted-foreground">
            Services
          </p>
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to={s.path}
              className={cn(
                "rounded-lg px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary hover:text-primary",
                pathname === s.path ? "text-primary" : "text-foreground/80",
              )}
            >
              {s.navLabel}
            </Link>
          ))}
        </nav>
        <div className="sticky bottom-0 space-y-3 border-t border-border bg-background p-5">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-flame w-full">
            Book Now
          </a>
          <a href={PHONE_TEL} className="btn btn-outline w-full">
            <Phone className="h-4 w-4" />
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-navy-deep/50 backdrop-blur-sm lg:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
