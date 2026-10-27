import { Link } from "react-router-dom";
import logo from "@/assets/miller-lawn-logo.webp";
import { PHONE_DISPLAY, PHONE_TEL, SERVICE_LINKS } from "@/lib/site";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Reviews", path: "/reviews" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

const columnLink = "text-white hover:text-white hover:underline";
const columnTitle = "font-bold text-[26px] mb-4";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand text-white pt-20 px-8 pb-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid gap-12 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
          <div className="flex flex-col gap-4 text-[17px]">
            <div className="bg-cream px-3.5 py-2.5 rounded-[4px] self-start">
              <img src={logo} alt="Millerlawn & Landscape LLC" className="h-14 block" loading="lazy" />
            </div>
            <p className="m-0">
              Professional lawn care and landscaping services in Kansas City. Owned and operated by a retired
              firefighter with values of integrity and service.
            </p>
            <div>
              <strong>Call or Text:</strong>{" "}
              <a href={PHONE_TEL} className="text-white hover:text-white underline">
                {PHONE_DISPLAY}
              </a>
            </div>
            <div>
              <strong>Service Area:</strong> Kansas City &amp; Surrounding Areas
            </div>
            <div>
              <strong>Business Hours:</strong> Mon-Sat: 7:00 AM - 6:00 PM
            </div>
            <div className="flex gap-2.5 flex-wrap">
              <span className="border-2 border-white px-3 py-1 font-bold text-[15px] rounded-[2px]">
                Licensed &amp; Insured
              </span>
              <span className="border-2 border-white px-3 py-1 font-bold text-[15px] rounded-[2px]">Veteran Owned</span>
            </div>
          </div>

          <div>
            <div className={columnTitle}>Quick Links</div>
            <div className="flex flex-col gap-2.5 text-[17px]">
              {quickLinks.map((l) => (
                <Link key={l.path} to={l.path} className={columnLink}>
                  {l.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className={columnTitle}>Our Services</div>
            <div className="flex flex-col gap-2.5 text-[17px]">
              {SERVICE_LINKS.map((s) => (
                <Link key={s.path} to={s.path} className={columnLink}>
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className={columnTitle}>Find Us</div>
            <p className="m-0 text-[17px]">Proudly serving Kansas City and surrounding areas</p>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/50 flex flex-wrap gap-x-8 gap-y-3 justify-between text-[16px]">
          <div>
            © {currentYear} Millerlawn &amp; Landscape LLC. All rights reserved. |{" "}
            <Link to="/privacy" className="text-white hover:text-white underline">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link to="/terms" className="text-white hover:text-white underline">
              Terms of Service
            </Link>
          </div>
          <div>Built with pride by a retired firefighter. Bringing the same dedication to your landscape.</div>
          <div>
            <a
              href="https://www.blueheronmarketing.com/"
              target="_blank"
              rel="noopener"
              className="text-white hover:text-white underline"
            >
              Built and Maintained by Blue Heron
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
