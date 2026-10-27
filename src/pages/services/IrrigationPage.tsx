import SiteLayout from "@/components/SiteLayout";
import {
  Accent,
  Callout,
  DiamondList,
  H2,
  InnerHero,
  IntroSection,
  Para,
  Section,
  SectionIntro,
  SplitCard,
  TitleCards,
} from "@/components/site/blocks";
import sprinkler1 from "@/assets/irrigation-sprinkler-1.jpg";
import sprinkler2 from "@/assets/irrigation-sprinkler-2.jpg";
import sprinkler3 from "@/assets/irrigation-sprinkler-3.jpg";

const SPRINKLER_1_ALT = "Irrigation sprinkler system in action";

const IrrigationPage = () => (
  <SiteLayout>
    <InnerHero
      image={sprinkler1}
      alt={SPRINKLER_1_ALT}
      title={
        <>
          <Accent onDark>Irrigation System</Accent> Installation &amp; Lawn Watering Solutions in Kansas City
        </>
      }
      text="A beautiful, green lawn starts with the right watering system. At Millerlawn & Landscape LLC, we provide professional irrigation system installation and maintenance in Kansas City to keep your grass, plants, and landscaping healthy without wasting water."
      call
    />

    <IntroSection>
      Whether you're managing a commercial property or caring for your home, our irrigation solutions are designed to
      save you time, reduce costs, and ensure your lawn always looks its best.
    </IntroSection>

    <Section>
      <SplitCard images={[{ src: sprinkler1, alt: SPRINKLER_1_ALT }]}>
        <H2>
          <Accent>Smart Irrigation</Accent> for Kansas City Lawns
        </H2>
        <Para>
          Kansas City weather can be unpredictable — from hot, dry summers to heavy rains that quickly shift back to
          drought. A smart irrigation system takes the guesswork out of watering your property.
        </Para>
        <DiamondList
          className="mb-6"
          items={[
            "Delivering the right amount of water at the right time.",
            "Preventing overwatering, which can damage roots and waste money.",
            "Adapting to seasonal changes for year-round efficiency.",
            "Reducing runoff and protecting the environment.",
          ]}
        />
        <Callout>
          Our systems are designed for both commercial contracts and residential homeowners who want consistent results
          without the hassle of manual watering.
        </Callout>
      </SplitCard>
    </Section>

    <Section bg="mint">
      <SectionIntro wide className="mb-12">
        <H2>
          Irrigation <Accent>Installation Services</Accent>
        </H2>
        <p className="m-0 text-[20px]">
          When you work with Millerlawn &amp; Landscape, you get a team that handles your irrigation project from start to
          finish.
        </p>
      </SectionIntro>
      <TitleCards
        items={[
          ["System Design", "Tailored layouts for your lawn, flowerbeds, and hardscape features."],
          ["Professional Installation", "Expert crews that install with precision and minimal disruption."],
          ["Smart Controllers", "Optional weather-based programming for maximum efficiency."],
          ["Ongoing Support", "Adjustments, seasonal startups, and winterization services."],
        ]}
      />
    </Section>

    <Section>
      <SplitCard imageFirst images={[{ src: sprinkler3, alt: "Irrigation system repair and maintenance" }]}>
        <H2>
          Irrigation <Accent>Repair &amp; Maintenance</Accent>
        </H2>
        <Para>
          A broken or inefficient irrigation system can cost you money and damage your landscape. We provide
          comprehensive repair and maintenance services to keep your system running perfectly.
        </Para>
        <DiamondList
          className="mb-6"
          items={[
            "Sprinkler head repairs and replacements.",
            "Line inspections and leak detection.",
            "Seasonal adjustments for Kansas City's climate.",
            "System upgrades to smarter, more efficient technology.",
          ]}
        />
        <Callout>We make sure your system stays reliable year after year, protecting your lawn investment.</Callout>
      </SplitCard>
    </Section>

    <Section bg="forest">
      <SectionIntro wide className="mb-12">
        <H2 className="mb-0">
          Why Kansas City Chooses <Accent onDark>Millerlawn &amp; Landscape</Accent>
        </H2>
      </SectionIntro>
      <TitleCards
        items={[
          ["Local Expertise", "We know Kansas City soil, grass, and seasonal needs."],
          ["Trusted Service", "As a firefighter-owned company, integrity is at the core of our work."],
          ["Competitive Pricing", "High-quality irrigation without inflated costs."],
          ["Commercial & Residential", "Scalable services for properties of any size."],
        ]}
      />
    </Section>

    <Section>
      <SplitCard imageMinHeight={380} images={[{ src: sprinkler2, alt: "Professional irrigation system installation" }]}>
        <H2>
          Save Time. Save Water. <Accent>Grow Better.</Accent>
        </H2>
        <Para last>
          A healthy lawn shouldn't come at the cost of wasted water or endless hours dragging hoses. With Millerlawn &amp;
          Landscape's irrigation systems, you'll have a lush, green property that's automatically cared for — no extra
          effort required.
        </Para>
      </SplitCard>
    </Section>
  </SiteLayout>
);

export default IrrigationPage;
