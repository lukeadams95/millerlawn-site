import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/miller-lawn-logo.webp";
import AnnouncementBar from "@/components/AnnouncementBar";
import { Icon } from "@/components/site/blocks";
import { cn } from "@/lib/utils";
import { ICONS, PHONE_DISPLAY, PHONE_SMS, PHONE_TEL, REVIEW_URL, SERVICE_LINKS, isServicePath } from "@/lib/site";

const LOGO_ALT = "Millerlawn & Landscape LLC";
// Past this scroll offset the white info bar is gone and the green nav pins to the top
const PIN_OFFSET = 110;

const navLinks = [
  { name: "About", path: "/about" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

const infoBlocks = [
  { icon: ICONS.pin, label: "Service Area", value: "Kansas City & Surrounding Areas" },
  { icon: ICONS.clock, label: "Business Hours", value: "Mon-Sat: 7:00 AM - 6:00 PM" },
];

const desktopLink =
  "nav-underline text-white hover:text-white px-[22px] h-full flex items-center font-bold text-[15.5px] tracking-[1.2px] uppercase whitespace-nowrap";
const mobileLink =
  "block w-full text-left text-white py-4 font-bold text-[20px] tracking-[1.2px] uppercase border-b border-white/20";

const usePinned = () => {
  const [pinned, setPinned] = useState(false);
  useEffect(() => {
    const onScroll = () => setPinned(window.scrollY > PIN_OFFSET);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return pinned;
};

const ServicesDropdown = ({ active }: { active: boolean }) => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <div
      ref={ref}
      className="relative h-full"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!ref.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
      onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
    >
      <Link to="/services" className={desktopLink} data-active={active} aria-haspopup="true" aria-expanded={open}>
        Services ▾
      </Link>
      {open && (
        <div className="absolute top-full left-0 bg-white min-w-[300px] p-3 flex flex-col gap-0.5 shadow-[0_14px_32px_rgba(0,0,0,.22)] rounded-b-2xl">
          {SERVICE_LINKS.map((s) => (
            <Link
              key={s.path}
              to={s.path}
              onClick={() => setOpen(false)}
              aria-current={pathname === s.path ? "page" : undefined}
              className={cn(
                "text-ink hover:text-ink px-4 py-3.5 rounded-[10px] font-bold text-[19px] flex items-center gap-3.5 whitespace-nowrap",
                // Current page: gold highlight matching the nav underline
                pathname === s.path
                  ? "bg-gold/[.18] shadow-[inset_4px_0_0_#E8B431]"
                  : "hover:bg-[rgba(95,171,73,.14)]",
              )}
            >
              <Icon d={s.icon} size={26} color="#5FAB49" strokeWidth={1.6} />
              {s.menuLabel ?? s.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const MobileMenu = ({ onClose, isActive }: { onClose: () => void; isActive: (path: string) => boolean }) => {
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const activeShadow = (path: string) => (isActive(path) ? { boxShadow: "inset 0 -3px 0 #E8B431" } : undefined);

  return (
    <div
      className="nav:hidden fixed inset-0 z-[100] mow-stripes overflow-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
    >
      <div className="px-8 py-2 flex items-center justify-between">
        <Link to="/" onClick={onClose} className="block bg-white rounded-xl px-3 py-1.5">
          <img src={logo} alt={LOGO_ALT} className="h-[52px] w-auto block" />
        </Link>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="w-12 h-12 border-2 border-white bg-transparent rounded-full cursor-pointer text-white text-[26px] leading-none p-0"
        >
          ×
        </button>
      </div>
      <div className="px-7 pt-2 pb-10 flex flex-col">
        <Link to="/" onClick={onClose} className={mobileLink} style={activeShadow("/")}>
          Home
        </Link>
        <button
          onClick={() => setServicesOpen((o) => !o)}
          aria-expanded={servicesOpen}
          className={cn(mobileLink, "bg-transparent cursor-pointer")}
        >
          Services ▾
        </button>
        {servicesOpen && (
          <div className="flex flex-col pl-4">
            {SERVICE_LINKS.map((s) => (
              <Link
                key={s.path}
                to={s.path}
                onClick={onClose}
                aria-current={isActive(s.path) ? "page" : undefined}
                className="text-white hover:text-white py-3 font-semibold border-b border-white/[.18]"
                style={activeShadow(s.path)}
              >
                › {s.name}
              </Link>
            ))}
          </div>
        )}
        {navLinks.map((l) => (
          <Link key={l.path} to={l.path} onClick={onClose} className={mobileLink} style={activeShadow(l.path)}>
            {l.name}
          </Link>
        ))}
        <a href={REVIEW_URL} target="_blank" rel="noopener noreferrer" className={mobileLink}>
          Write A Review ★
        </a>
        <div className="flex flex-col gap-5 py-7">
          {infoBlocks.map((b) => (
            <div key={b.label} className="flex gap-3 items-center">
              <span className="w-11 h-11 rounded-full bg-white/[.16] flex items-center justify-center flex-none">
                <Icon d={b.icon} color="#fff" />
              </span>
              <div className="leading-[1.25] text-white">
                <div className="text-[13px] opacity-85">{b.label}</div>
                <div className="text-[16px] font-bold">{b.value}</div>
              </div>
            </div>
          ))}
        </div>
        <a
          href={PHONE_SMS}
          className="bg-white text-brand hover:bg-[#E8F5DF] hover:text-brand-dark py-4 px-6 rounded-full font-bold text-[18px] text-center"
        >
          Text Us Today
        </a>
      </div>
    </div>
  );
};

const Navigation = () => {
  const { pathname } = useLocation();
  const pinned = usePinned();
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => setMobileOpen(false), [pathname]);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <AnnouncementBar />

      {/* Desktop tier 1: white info bar with the logo badge hanging into the green nav */}
      <div className="hidden nav:block relative z-[70] bg-white">
        <div className="max-w-[1344px] mx-auto px-8 h-20 flex items-center gap-7 relative">
          <div className="w-[150px] flex-none" />
          <div className="flex-1 flex items-center justify-center gap-7">
            {infoBlocks.map((b, i) => (
              <div key={b.label} className="contents">
                {i > 0 && <span className="w-px h-11 bg-rule-warm flex-none" />}
                <div className="flex gap-3 items-center">
                  <span className="w-11 h-11 rounded-full bg-brand-light/[.12] flex items-center justify-center flex-none">
                    <Icon d={b.icon} />
                  </span>
                  <div className="leading-[1.25]">
                    <div className="text-[13px] text-ink-muted">{b.label}</div>
                    <div className="text-[16px] font-bold text-ink">{b.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a
            href={PHONE_TEL}
            className="flex-none flex items-center gap-3 bg-brand text-white py-1.5 pl-1.5 pr-[26px] rounded-full transition-[transform,background-color,box-shadow] duration-200 hover:bg-brand-light hover:text-white hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(79,143,61,.35)]"
          >
            <span className="w-11 h-11 rounded-full bg-white flex items-center justify-center">
              <Icon d={ICONS.phone} />
            </span>
            <span className="leading-[1.2]">
              <span className="block text-[13px] opacity-[.92]">Call or Text</span>
              <span className="block text-[19px] font-bold whitespace-nowrap">{PHONE_DISPLAY}</span>
            </span>
          </a>
          <Link
            to="/"
            className="absolute left-8 top-0 w-[150px] h-[134px] bg-white rounded-b-[18px] shadow-[0_10px_24px_rgba(38,42,39,.18)] flex items-center justify-center"
          >
            <img src={logo} alt={LOGO_ALT} className="w-[122px] h-auto block" />
          </Link>
        </div>
      </div>

      {/* Desktop tier 2: green nav. Pins to the top (and grows) once the white bar scrolls away. */}
      <div className="hidden nav:block h-[52px] relative z-[60]">
        <div
          className={cn(
            "top-0 left-0 right-0 z-[60] mow-stripes shadow-[0_4px_14px_rgba(0,0,0,.18)] transition-[height] duration-[250ms] ease-in-out",
            pinned ? "fixed h-[72px]" : "absolute h-[52px]",
          )}
        >
          <nav className="relative max-w-[1344px] h-full mx-auto px-8 flex items-stretch" aria-label="Main">
            <div
              className={cn(
                "w-[190px] flex-none flex items-center transition-opacity duration-[250ms]",
                pinned ? "opacity-100" : "opacity-0 pointer-events-none",
              )}
            >
              <Link
                to="/"
                tabIndex={pinned ? 0 : -1}
                aria-hidden={!pinned}
                className="block bg-white rounded-[10px] px-3 py-[5px] shadow-[0_3px_10px_rgba(0,0,0,.2)]"
              >
                <img src={logo} alt={LOGO_ALT} className="h-12 w-auto block" />
              </Link>
            </div>
            <div className="w-8 flex-none" />
            <Link to="/" className={desktopLink} data-active={isActive("/")}>
              Home
            </Link>
            <ServicesDropdown active={isServicePath(pathname)} />
            {navLinks.map((l) => (
              <Link key={l.path} to={l.path} className={desktopLink} data-active={isActive(l.path)}>
                {l.name}
              </Link>
            ))}
            <div className="flex-1" />
            <a
              href={PHONE_TEL}
              tabIndex={pinned ? 0 : -1}
              aria-hidden={!pinned}
              className={cn(
                "self-center mr-[18px] bg-white text-brand hover:bg-[#E8F5DF] hover:text-brand-dark px-4 py-1.5 rounded-full font-bold text-[15px] whitespace-nowrap transition-opacity duration-[250ms]",
                pinned ? "opacity-100" : "opacity-0 pointer-events-none",
              )}
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="self-stretch pl-11 pr-8 bg-brand-light text-white hover:text-white hover:brightness-110 flex items-center font-bold text-[15.5px] tracking-[1.2px] uppercase whitespace-nowrap [clip-path:polygon(22px_0,100%_0,100%_100%,0_100%)]"
            >
              Write A Review ★
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile header */}
      <div className="nav:hidden sticky top-0 z-[80] bg-white shadow-[0_2px_12px_rgba(0,0,0,.12)]">
        <div className="px-8 py-2 flex items-center justify-between gap-3">
          <Link to="/" className="block bg-white rounded-xl shadow-[0_4px_14px_rgba(38,42,39,.15)] px-3 py-1.5">
            <img src={logo} alt={LOGO_ALT} className="h-[52px] w-auto block" />
          </Link>
          <div className="flex gap-3 items-center">
            <a
              href={PHONE_TEL}
              aria-label={`Call ${PHONE_DISPLAY}`}
              className="w-12 h-12 rounded-full bg-brand hover:bg-brand-light flex items-center justify-center"
            >
              <Icon d={ICONS.phone} color="#fff" />
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Menu"
              aria-expanded={mobileOpen}
              className="w-12 h-12 border-2 border-ink bg-white rounded-full cursor-pointer flex flex-col gap-[5px] items-center justify-center p-0"
            >
              <span className="w-5 h-0.5 bg-ink" />
              <span className="w-5 h-0.5 bg-ink" />
              <span className="w-5 h-0.5 bg-ink" />
            </button>
          </div>
        </div>
      </div>
      {mobileOpen && <MobileMenu onClose={closeMobile} isActive={isActive} />}
    </>
  );
};

export default Navigation;
