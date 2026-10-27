import SiteLayout from "@/components/SiteLayout";
import {
  Accent,
  DiamondList,
  H2,
  InnerHero,
  IntroSection,
  Para,
  Section,
  SectionIntro,
  SplitCard,
  StatementSection,
  TitleCards,
} from "@/components/site/blocks";
import lights1 from "@/assets/christmas-lights-1.jpg";
import lights2 from "@/assets/christmas-lights-2.jpg";
import lights3 from "@/assets/christmas-lights-3.jpg";

const LIGHTS_1_ALT = "Beautiful home with Christmas lights display";

// Warm glow, like light from a house, over the deep green band
const holidayGlow = {
  background:
    "radial-gradient(ellipse at 50% 0%, rgba(255,214,130,.16), rgba(255,214,130,0) 60%), repeating-linear-gradient(90deg, #2F5A24 0 90px, #335F28 90px 180px)",
};

const ChristmasLightsPage = () => (
  <SiteLayout>
    <InnerHero
      image={lights1}
      alt={LIGHTS_1_ALT}
      title={
        <>
          Custom <Accent onDark>Christmas Light Installation</Accent> in Kansas City | Millerlawn &amp; Landscape LLC
        </>
      }
      call
    />

    <IntroSection>
      The holidays should be joyful, not stressful. At Millerlawn &amp; Landscape LLC, we make it easy to bring the magic
      of Christmas to your home or business with professional Christmas light installation in Kansas City. From elegant
      rooflines to full-property displays, we design, install, and maintain custom lighting that spreads holiday cheer —
      without you ever having to climb a ladder.
    </IntroSection>

    <Section>
      <SplitCard images={[{ src: lights1, alt: LIGHTS_1_ALT }]}>
        <H2>
          Take the Stress Out of <Accent>Christmas Lights</Accent>
        </H2>
        <Para>
          Hanging Christmas lights on your own can be frustrating, time-consuming, and even dangerous. By letting our team
          handle it, you get:
        </Para>
        <DiamondList
          items={[
            <>
              <strong>Safety First:</strong> No ladders, no slips, no risks — we do it all for you.
            </>,
            <>
              <strong>Professional Design:</strong> Lighting layouts tailored to your home or business.
            </>,
            <>
              <strong>Hassle-Free Service:</strong> We handle installation, maintenance, and removal.
            </>,
            <>
              <strong>Wow Factor:</strong> Displays that shine bright and stand out in your neighborhood.
            </>,
          ]}
        />
      </SplitCard>
    </Section>

    <Section bg="mint">
      <SplitCard imageFirst images={[{ src: lights2, alt: "House with icicle lights and wreaths" }]}>
        <H2>
          <Accent>Custom Designs</Accent> for Every Property
        </H2>
        <Para>
          No two properties are the same, which is why we provide custom holiday lighting solutions that match your
          space, style, and budget. Our services include:
        </Para>
        <DiamondList
          items={[
            <>
              <strong>Roofline &amp; Trim Lighting</strong> – Clean, classic lines that outline your home or office.
            </>,
            <>
              <strong>Landscape Lighting</strong> – Trees, shrubs, and walkways illuminated for a festive touch.
            </>,
            <>
              <strong>Commercial Displays</strong> – Professional lighting for storefronts, offices, and event spaces
              that welcome customers and guests.
            </>,
            <>
              <strong>Custom Color Options</strong> – Choose warm white, multicolor, or themes that match your style.
            </>,
          ]}
        />
      </SplitCard>
    </Section>

    <Section>
      <SplitCard images={[{ src: lights3, alt: "Festive Christmas market with lights" }]}>
        <H2>
          <Accent>Full-Service</Accent> Holiday Lighting
        </H2>
        <Para>
          Our Christmas light installation in Kansas City is designed to make your holiday season simple and enjoyable:
        </Para>
        <DiamondList
          items={[
            <>
              <strong>Consultation &amp; Design:</strong> We'll walk your property and create a plan that fits your
              vision.
            </>,
            <>
              <strong>Professional Installation:</strong> Quick, safe setup using high-quality lights and materials.
            </>,
            <>
              <strong>Maintenance &amp; Support:</strong> If a bulb goes out or an issue comes up, we handle it.
            </>,
            <>
              <strong>Take-Down &amp; Storage Options:</strong> After the season ends, we remove everything neatly and can
              even store it for next year.
            </>,
          ]}
        />
      </SplitCard>
    </Section>

    <Section bg="forest" style={holidayGlow}>
      <SectionIntro wide className="mb-12">
        <H2 className="mb-0">
          Why Kansas City Chooses <Accent onDark>Millerlawn &amp; Landscape</Accent>
        </H2>
      </SectionIntro>
      <TitleCards
        items={[
          ["Firefighter-Owned Business", "Built on trust, service, and reliability."],
          ["Competitive Pricing", "Holiday magic that doesn't break the bank."],
          ["Attention to Detail", "Every display installed with care and precision."],
          ["Stress-Free Holidays", "You enjoy the season, we handle the work."],
        ]}
      />
    </Section>

    <Section bg="mint">
      <SectionIntro wide className="mb-12">
        <H2 className="mb-0">
          Residential &amp; Commercial <Accent>Christmas Light Installation</Accent>
        </H2>
      </SectionIntro>
      <TitleCards
        min={340}
        large
        items={[
          ["Homeowners:", "Create a warm, inviting holiday look your family and neighbors will love."],
          [
            "Businesses:",
            "Attract customers and spread cheer with a professional lighting display that sets you apart.",
          ],
        ]}
      />
    </Section>

    <StatementSection
      title={
        <>
          Book Your <Accent>Christmas Light Installation</Accent> Early
        </>
      }
    >
      Spots fill up fast during the holiday season! Don't wait until December to get on the schedule. Let Millerlawn &amp;
      Landscape LLC create a custom holiday display that makes this Christmas unforgettable.
    </StatementSection>
  </SiteLayout>
);

export default ChristmasLightsPage;
