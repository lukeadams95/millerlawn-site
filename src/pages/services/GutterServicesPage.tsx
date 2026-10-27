import SiteLayout from "@/components/SiteLayout";
import {
  Accent,
  BulletCards,
  Callout,
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
import gutterCleaning from "@/assets/gutter-cleaning.jpg";
import gutterGuard1 from "@/assets/gutter-guard-1.jpg";
import gutterGuard2 from "@/assets/gutter-guard-2.jpg";

const GUTTER_CLEANING_ALT = "Professional gutter cleaning service removing leaves";

const GutterServicesPage = () => (
  <SiteLayout>
    <InnerHero
      image={gutterCleaning}
      alt={GUTTER_CLEANING_ALT}
      title={
        <>
          <Accent onDark>Gutter Cleaning</Accent> &amp; Gutter Guard Installation in Kansas City | Millerlawn &amp;
          Landscape LLC
        </>
      }
      call
    />

    <IntroSection>
      Clogged gutters don't just look bad — they can cause serious damage to your home or business. Overflowing water can
      ruin landscaping, erode foundations, and even lead to costly repairs inside your property. At Millerlawn &amp;
      Landscape LLC, we provide professional gutter cleaning and gutter guard installation services in Kansas City to
      keep your property safe, clean, and protected year-round.
    </IntroSection>

    <Section>
      <SplitCard images={[{ src: gutterCleaning, alt: GUTTER_CLEANING_ALT }]}>
        <H2>
          Why <Accent>Gutter Care</Accent> Matters
        </H2>
        <Para>
          Your gutters are your first line of defense against water damage. When they're clogged with leaves, sticks, or
          debris, water overflows and ends up where it shouldn't — on your foundation, siding, or roof. Regular gutter
          cleaning and guards provide:
        </Para>
        <DiamondList
          className="mb-6"
          items={[
            <>
              <strong>Protection from Water Damage:</strong> Prevent costly repairs to roofs, siding, and basements.
            </>,
            <>
              <strong>Extended Gutter Life:</strong> Reduce wear and rust caused by standing water.
            </>,
            <>
              <strong>Better Curb Appeal:</strong> Clean gutters make your property look well-maintained.
            </>,
            <>
              <strong>Peace of Mind:</strong> No more worrying during heavy Kansas City rainstorms.
            </>,
          ]}
        />
      </SplitCard>
    </Section>

    <Section bg="mint">
      <SectionIntro wide>
        <H2>
          Professional <Accent>Gutter Cleaning</Accent> in Kansas City
        </H2>
        <Para>
          Cleaning gutters yourself is messy, dangerous, and time-consuming. That's why homeowners and businesses trust us
          to handle the job safely and efficiently.
        </Para>
      </SectionIntro>
      <BulletCards
        className="my-9"
        items={[
          "Clearing all leaves, sticks, and debris.",
          "Flushing downspouts to ensure proper drainage.",
          "Inspecting gutters for leaks, sagging, or damage.",
          "Leaving your property clean and tidy after the job is done.",
        ]}
      />
      <SectionIntro wide>
        <Callout className="mt-0">
          We recommend seasonal cleanings in spring and fall, when gutters are most likely to get clogged.
        </Callout>
      </SectionIntro>
    </Section>

    <Section>
      <SplitCard
        imageFirst
        images={[
          { src: gutterGuard1, alt: "Close-up of gutter guard installation" },
          { src: gutterGuard2, alt: "Gutter guard mesh protection system" },
        ]}
      >
        <H2>
          <Accent>Gutter Guard</Accent> Installation
        </H2>
        <Para>
          Want a long-term solution? Gutter guards are designed to prevent debris from ever clogging your gutters in the
          first place.
        </Para>
        <DiamondList
          className="mb-6"
          items={[
            <>
              <strong>Low Maintenance:</strong> Reduce the need for frequent cleanings.
            </>,
            <>
              <strong>Year-Round Protection:</strong> Keep out leaves, twigs, and pests.
            </>,
            <>
              <strong>Durable Materials:</strong> Guards designed to withstand Kansas City's weather.
            </>,
            <>
              <strong>Custom Fit:</strong> Professionally installed to ensure proper performance.
            </>,
          ]}
        />
        <Callout>
          With gutter guards, you'll spend less time worrying about your gutters and more time enjoying your home or
          business.
        </Callout>
      </SplitCard>
    </Section>

    <Section bg="forest">
      <SectionIntro wide className="mb-12">
        <H2 className="mb-0">
          Commercial &amp; Residential <Accent onDark>Gutter Services</Accent>
        </H2>
      </SectionIntro>
      <TitleCards
        min={340}
        large
        items={[
          [
            "For Commercial Properties:",
            "Protect buildings, landscaping, and hardscapes from water damage while keeping your property professional and safe.",
          ],
          [
            "For Homeowners:",
            "Affordable protection that saves you from climbing ladders and risking injuries just to keep your gutters clear.",
          ],
        ]}
      />
    </Section>

    <StatementSection
      title={
        <>
          Why Choose <Accent>Millerlawn &amp; Landscape</Accent>?
        </>
      }
    >
      Kansas City clients choose us because we combine professional results with true integrity. As a firefighter-owned
      company, we stand by our values of honesty, reliability, and hard work. With competitive pricing and dependable
      service, we make gutter maintenance easy and stress-free.
    </StatementSection>

    <StatementSection
      bg="mint"
      title={
        <>
          Protect Your Property <Accent>Today</Accent>
        </>
      }
    >
      Don't wait until clogged gutters cause expensive damage. Trust Millerlawn &amp; Landscape LLC for gutter cleaning
      and gutter guard installation in Kansas City.
    </StatementSection>
  </SiteLayout>
);

export default GutterServicesPage;
