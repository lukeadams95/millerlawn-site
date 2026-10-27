import SiteLayout from "@/components/SiteLayout";
import {
  Accent,
  BulletCards,
  DiamondList,
  H2,
  InnerHero,
  Para,
  Section,
  SectionIntro,
  SplitCard,
  StatementSection,
} from "@/components/site/blocks";
import flowers1 from "@/assets/landscaping-flowers-1.jpg";
import flowers2 from "@/assets/landscaping-flowers-2.jpg";
import flowers3 from "@/assets/landscaping-flowers-3.jpg";

const FLOWERS_1_ALT = "Colorful flower beds and landscaping";

const LandscapingPage = () => (
  <SiteLayout>
    <InnerHero
      image={flowers1}
      alt={FLOWERS_1_ALT}
      title={
        <>
          <Accent onDark>Landscaping Design</Accent> &amp; Installation in Kansas City | Millerlawn &amp; Landscape LLC
        </>
      }
      text="Your property deserves more than just a neatly cut lawn — it deserves landscaping that enhances beauty, adds functionality, and creates a space you're proud of. At Millerlawn & Landscape LLC, we provide professional landscaping services in Kansas City for both commercial properties and residential homes."
      call
    />

    <Section>
      <SplitCard images={[{ src: flowers1, alt: FLOWERS_1_ALT }]}>
        <H2>
          Transform Your Outdoors with <Accent>Professional Landscaping</Accent>
        </H2>
        <Para last>
          Landscaping is about more than plants and mulch — it's about creating an environment where people feel welcome.
          We approach every project with a focus on design, detail, and durability, making sure your property looks great
          not just today, but for years to come.
        </Para>
      </SplitCard>
    </Section>

    <Section bg="mint">
      <SplitCard imageFirst images={[{ src: flowers2, alt: "Beautiful yellow flowers at sunset" }]}>
        <H2>
          Our Kansas City <Accent>Landscaping Services</Accent>
        </H2>
        <DiamondList
          items={[
            <>
              <strong>Landscape Design &amp; Planning:</strong> We'll create a customized plan to enhance your property's
              natural features.
            </>,
            <>
              <strong>Planting &amp; Garden Beds:</strong> Flowers, shrubs, and greenery that thrive in Kansas City's
              climate.
            </>,
            <>
              <strong>Mulching &amp; Rock Work:</strong> Protect your plants while giving your property a polished,
              professional look.
            </>,
            <>
              <strong>Seasonal Enhancements:</strong> Keep your property vibrant year-round with seasonal color and
              maintenance.
            </>,
          ]}
        />
      </SplitCard>
    </Section>

    <Section>
      <SectionIntro wide>
        <H2>
          <Accent>Commercial Landscaping</Accent> in Kansas City
        </H2>
        <Para>
          For property managers and business owners, landscaping is one of the first things clients, tenants, and
          visitors notice. Our commercial landscaping services are designed to:
        </Para>
      </SectionIntro>
      <BulletCards
        min={260}
        items={[
          "Create a professional, welcoming appearance.",
          "Provide low-maintenance solutions that save time and cost.",
          "Build lasting curb appeal that reflects positively on your brand.",
        ]}
      />
    </Section>

    <Section bg="mint">
      <SplitCard images={[{ src: flowers3, alt: "Spring blossoms and colorful landscaping" }]}>
        <H2>
          <Accent>Residential Landscaping</Accent> Services
        </H2>
        <Para>
          Your home should be a place of pride and comfort. Our residential landscaping services are perfect for
          homeowners who want:
        </Para>
        <DiamondList
          items={[
            "Fresh designs that boost curb appeal.",
            "Outdoor spaces for family gatherings and relaxation.",
            "Affordable, reliable upkeep that saves time and hassle.",
          ]}
        />
      </SplitCard>
    </Section>

    <Section bg="forest">
      <SectionIntro wide className="mb-12">
        <H2 className="mb-4">
          Why Kansas City Chooses <Accent onDark>Millerlawn &amp; Landscape</Accent>
        </H2>
        <p className="m-0 text-[20px]">
          We're not just another landscaping company. As a firefighter-owned business, we bring integrity, reliability,
          and true care to every project.
        </p>
      </SectionIntro>
      <BulletCards
        min={250}
        items={[
          "Competitive pricing without corporate overhead.",
          "Honest service and clear communication.",
          "Local expertise in Kansas City lawns, soil, and seasonal needs.",
          "A team committed to exceeding your expectations.",
        ]}
      />
    </Section>

    <StatementSection
      title={
        <>
          Let's Bring Your <Accent>Vision to Life</Accent>
        </>
      }
    >
      Whether you want a complete landscape redesign or simple upgrades that make a big difference, Millerlawn &amp;
      Landscape LLC is ready to help. Together, we'll create an outdoor space that's both beautiful and functional.
    </StatementSection>
  </SiteLayout>
);

export default LandscapingPage;
