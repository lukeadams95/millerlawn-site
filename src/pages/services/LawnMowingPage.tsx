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
  TitleCards,
} from "@/components/site/blocks";
import ridingMower from "@/assets/riding-mower.jpg";
import mowerBlades from "@/assets/mower-blades.jpg";
import lawnEdging from "@/assets/lawn-edging.jpg";

const RIDING_MOWER_ALT = "Professional riding mower maintaining commercial property lawn";

const LawnMowingPage = () => (
  <SiteLayout>
    <InnerHero
      image={ridingMower}
      alt={RIDING_MOWER_ALT}
      title={
        <>
          <Accent onDark>Lawn Mowing</Accent> &amp; Lawn Care Services in Kansas City
        </>
      }
      text="A healthy, perfectly cut lawn isn't just about appearance — it's about creating a welcoming, professional, and well-kept property that reflects pride and care."
      call
    />

    <IntroSection>
      At Millerlawn &amp; Landscape LLC, we provide Kansas City lawn mowing and lawn care services for both homeowners
      and commercial property managers who want dependable results without the hassle. With years of experience,
      competitive pricing, and a reputation for integrity, our team is committed to keeping your grass sharp, clean, and
      thriving season after season.
    </IntroSection>

    <Section>
      <SplitCard images={[{ src: ridingMower, alt: RIDING_MOWER_ALT }]}>
        <H2>
          Full-Service <Accent>Lawn Mowing</Accent> in Kansas City
        </H2>
        <Para>
          We don't believe in "just cutting grass." Every lawn mowing service we perform is about precision, consistency,
          and long-term lawn health.
        </Para>
        <DiamondList
          className="mb-6"
          items={[
            "Cut at the optimal height to encourage thicker, greener growth.",
            "Use clean, sharp blades to prevent lawn stress or browning.",
            "Provide professional edging along sidewalks, driveways, and flower beds.",
            "Clear clippings and debris so your property looks polished after every visit.",
          ]}
        />
        <Callout>
          Whether you need weekly, bi-weekly, or seasonal mowing, our flexible plans ensure your lawn looks its best all
          year long.
        </Callout>
      </SplitCard>
    </Section>

    <Section bg="mint">
      <SectionIntro wide>
        <H2>
          Commercial Lawn Mowing <Accent>Contracts</Accent>
        </H2>
        <Para>
          For Kansas City businesses, retail centers, and office parks, first impressions matter. A neatly cut,
          well-maintained lawn shows clients and tenants that you value your property — and them.
        </Para>
      </SectionIntro>
      <BulletCards
        className="my-9"
        items={[
          "Reliable scheduling so your property always looks professional.",
          "Scalable crews to handle everything from small office lawns to large commercial campuses.",
          "Communication you can count on — no missed calls, no guessing when we'll show up.",
          "Competitive contract pricing tailored to your budget.",
        ]}
      />
      <SectionIntro wide>
        <Callout className="mt-0">
          We currently manage multiple commercial properties and bring the same level of professionalism and
          accountability to every site we maintain.
        </Callout>
      </SectionIntro>
    </Section>

    <Section>
      <SectionIntro className="mb-12">
        <H2>
          Residential <Accent>Lawn Care Services</Accent>
        </H2>
        <p className="m-0 text-[20px]">
          Your home deserves the same level of care as a commercial property — and with Millerlawn &amp; Landscape, you'll
          get exactly that.
        </p>
      </SectionIntro>
      <BulletCards
        items={[
          "Show up on time, every time.",
          "Treat every property like our own.",
          "Offer flexible scheduling that works around your family's needs.",
          "Deliver a lawn you'll actually be proud to come home to.",
        ]}
      />
    </Section>

    <Section bg="forest">
      <SectionIntro className="mb-12">
        <H2 className="mb-4">
          Why Kansas City Chooses <Accent onDark>Millerlawn &amp; Landscape</Accent>
        </H2>
        <p className="m-0 text-[20px]">
          Plenty of companies can cut grass. What sets us apart is our commitment to service and integrity.
        </p>
      </SectionIntro>
      <TitleCards
        items={[
          ["Competitive Pricing", "Better value without the overhead of larger providers."],
          ["Personal Service", "You deal directly with an owner, not a corporate call center."],
          ["Consistency", "No skipped weeks or surprise changes — just dependable care."],
          ["Integrity", "We do what we say we'll do, every single time."],
        ]}
      />
      <p className="mt-12 mb-0 mx-auto max-w-[820px] text-center text-[21px] font-semibold text-pretty">
        As a firefighter-owned company, we bring the same reliability and honesty to your property that defined a career
        in public service.
      </p>
    </Section>

    <Section>
      <SplitCard
        imageFirst
        images={[
          { src: mowerBlades, alt: "Close-up of professional lawn mower blades cutting grass" },
          { src: lawnEdging, alt: "Professional lawn edging and trimming services" },
        ]}
      >
        <H2>
          Seasonal &amp; <Accent>Year-Round Care</Accent>
        </H2>
        <Para>
          Kansas City lawns face unique challenges — from hot summers and dry spells to heavy rains and cold winters.
          That's why our lawn mowing services are designed around the seasonal needs of Midwest turf.
        </Para>
        <DiamondList
          className="mb-6"
          items={[
            "Patchy growth in shaded areas.",
            "Scalping or thinning during heat waves.",
            "Weed outbreaks caused by improper cutting.",
            "Stress and disease from inconsistent maintenance.",
          ]}
        />
        <Callout>
          We know what Kansas City lawns need at every time of year — and we adjust our mowing techniques accordingly.
        </Callout>
      </SplitCard>
    </Section>

    <Section bg="mint">
      <SectionIntro className="mb-12">
        <H2>
          Precision &amp; Detail in <Accent>Every Cut</Accent>
        </H2>
        <p className="m-0 text-[20px]">
          Professional lawn care is about more than just mowing. It's the crisp edges, the clean lines, and the attention
          to detail that transforms a good lawn into a great one.
        </p>
      </SectionIntro>
      <TitleCards
        min={280}
        bordered
        items={[
          ["Professional Edging", "Sharp, clean edges along sidewalks, driveways, and beds that define your property."],
          ["Complete Cleanup", "We clear all clippings and debris, leaving your property spotless after every visit."],
          ["Quality Equipment", "Well-maintained, professional-grade equipment for superior results every time."],
        ]}
      />
    </Section>
  </SiteLayout>
);

export default LawnMowingPage;
