import { Link } from "react-router-dom";
import christmasImage from "@/assets/christmas-lights-1.jpg";
import { Accent, CallTextButtons, DiamondList, btn } from "@/components/site/blocks";

const highlights = [
  "Custom design for your home or business",
  "Professional installation — no ladders for you",
  "Maintenance all season long",
  "Take-down after the holidays",
];

// Seasonal card that overlaps the bottom of the homepage hero. Index only renders it in season.
const HolidayPromo = () => (
  <>
    <section id="christmas" className="relative z-[5] px-8">
      <div className="relative max-w-[1280px] mx-auto -mt-[110px] flex flex-wrap rounded-2xl overflow-hidden shadow-[0_24px_48px_rgba(31,66,23,.22)]">
        <div className="flex-[1.35_1_440px] bg-white p-[clamp(40px,5vw,72px)] flex flex-col justify-center">
          <div className="text-brand-dark font-bold uppercase tracking-[2px] text-[15px] mb-3">
            Now Booking for the Holidays
          </div>
          <h2 className="font-bold text-[clamp(36px,4.2vw,56px)] leading-none m-0 mb-5">
            Christmas Light Installation in <Accent>Kansas City</Accent>
          </h2>
          <div className="w-16 h-1 bg-brand-light mb-6" />
          <p className="m-0 mb-6 text-[19px]">
            Skip the ladder this year. We design, install, maintain, and take down your holiday lights so you can just
            enjoy the season. Book early to lock in your install date.
          </p>
          <DiamondList items={highlights} className="mb-8" />
          <CallTextButtons>
            <Link to="/services/christmas-lights" className={btn.outlineGreen}>
              See Our Light Displays
            </Link>
          </CallTextButtons>
        </div>
        <div className="relative flex-[1_1_380px] min-h-[420px] bg-ink">
          <img
            src={christmasImage}
            alt="Christmas light installation in Kansas City"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
    <div className="h-[clamp(64px,7vw,96px)] bg-cream" />
  </>
);

export default HolidayPromo;
