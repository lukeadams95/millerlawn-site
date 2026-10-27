import lawn3 from "@/assets/lawn-3.webp";
import { Accent, Callout } from "@/components/site/blocks";

const values = [
  { title: "Integrity", description: "Honest pricing and transparent service from a retired firefighter" },
  { title: "Whatever It Takes", description: "We go above and beyond to ensure your complete satisfaction" },
  { title: "Relationships", description: "Building lasting partnerships with our commercial and residential clients" },
  { title: "Service Excellence", description: "Professional craftsmanship and reliable follow-through on every job" },
];

// Homepage "From Firefighting to Landscaping" card followed by the Core Values timeline
const About = () => (
  <>
    <section id="about" className="bg-cream py-[clamp(64px,8vw,104px)] px-8">
      <div className="max-w-[1280px] mx-auto bg-white rounded-2xl overflow-hidden shadow-[0_18px_40px_rgba(38,42,39,.14)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-stretch">
          <div className="order-2 py-[clamp(56px,8vw,112px)] px-[clamp(28px,6vw,96px)] flex flex-col justify-center">
            <h2 className="font-bold text-[clamp(36px,4.2vw,56px)] leading-none m-0 mb-7">
              From Firefighting to <Accent>Landscaping</Accent>
            </h2>
            <p className="m-0 mb-7 text-[21px] font-semibold text-ink">
              Millerlawn &amp; Landscape was founded by a retired firefighter who brings the same values of service,
              integrity, and follow-through into the landscaping industry.
            </p>
            <p className="m-0 mb-[18px]">
              With competitive pricing, no unnecessary overhead, and a commitment to doing the job right the first time,
              we've built trust across Kansas City commercial contracts and residential clients alike.
            </p>
            <Callout>Your property deserves a team that shows up on time, communicates clearly, and delivers results.</Callout>
          </div>
          <div className="order-1 relative min-h-[480px] bg-ink">
            <img
              src={lawn3}
              alt="Well-maintained courtyard landscaping and lawn"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="py-[112px] px-8 bg-mint text-ink">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[720px] mx-auto mb-16 text-center">
          <h3 className="font-bold text-[clamp(36px,4.5vw,56px)] leading-none m-0 mb-4">
            Our <Accent>Core Values</Accent>
          </h3>
          <p className="m-0 text-[20px]">
            The principles that guide everything we do — from the first call to the final result
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-x-10 border-t border-[#B9CFAE]">
          {values.map((value) => (
            <div key={value.title} className="relative pt-16 text-center">
              <span className="absolute left-[calc(50%-8px)] -top-2 w-4 h-4 rounded-full bg-white border-[5px] border-brand" />
              <span className="absolute left-1/2 top-2 w-px h-9 bg-[#B9CFAE]" />
              <div className="font-bold text-[clamp(36px,3.6vw,48px)] leading-none text-brand-dark mb-4">
                {value.title}
              </div>
              <div className="text-[18px] text-ink-soft">{value.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
