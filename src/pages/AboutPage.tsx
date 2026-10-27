import SiteLayout from "@/components/SiteLayout";
import {
  Accent,
  BulletCard,
  Callout,
  CenteredCardRow,
  H2,
  InnerHero,
  Section,
  SectionIntro,
  SplitCard,
  TitleCard,
} from "@/components/site/blocks";
import hardscaping from "@/assets/miller-hardscaping.jpg";
import flowers from "@/assets/miller-landscaping-flowers.jpg";

const FLOWERS_ALT = "Beautiful landscape with colorful flowers and pristine lawn";

const coreValues: [string, string][] = [
  ["Whatever It Takes", "We'll do today what others won't, so tomorrow we can do what others can't."],
  ["Relationships First", "People matter more than profit."],
  ["Integrity Always", "Honest, accountable service you can trust."],
  ["Service Above All", "Exceeding expectations on every job."],
  ["Teamwork Wins", "Building beautiful spaces by working together."],
];

const reasons = [
  "Unlike large companies with huge overhead, our small, local team delivers better value at competitive prices",
  "You'll deal directly with an owner who is committed to follow-through and customer satisfaction",
  "Commercial property managers trust us for consistent contracts",
  "Homeowners rely on us for year-round lawn and landscape care",
  "Our clients stay with us because we do what we say we'll do — every time",
];

const AboutPage = () => (
  <SiteLayout>
    <InnerHero
      image={flowers}
      alt={FLOWERS_ALT}
      title={
        <>
          About <Accent onDark>Millerlawn &amp; Landscape LLC</Accent> | Kansas City Lawn &amp; Landscaping Services
        </>
      }
      text="A Kansas City lawn care and landscaping company founded by a retired firefighter, built on service, honesty, and dedication"
    />

    <Section>
      <SplitCard
        images={[
          { src: hardscaping, alt: "Professional hardscaping with stone steps and retaining walls" },
          { src: flowers, alt: FLOWERS_ALT },
        ]}
      >
        <p className="m-0 text-[clamp(20px,2vw,23px)] font-semibold text-ink text-pretty">
          Millerlawn &amp; Landscape LLC is a Kansas City lawn care and landscaping company founded by a retired
          firefighter who built the business on service, honesty, and dedication. We specialize in mowing, irrigation,
          hardscapes, gutter cleaning, gutter guard installation, and even custom Christmas light setups — all delivered
          with competitive pricing and unmatched integrity.
        </p>
      </SplitCard>
    </Section>

    <Section bg="mint">
      <SectionIntro wide>
        <H2>
          Our <Accent>Mission</Accent>
        </H2>
        <p className="m-0 mb-6 text-[clamp(19px,1.8vw,22px)] font-semibold text-pretty">
          To provide Kansas City commercial and residential property owners with reliable, affordable, and high-quality
          lawn and landscape services while building lasting relationships based on trust.
        </p>
        <Callout className="mt-0 text-[19px]">
          We're not just here to cut grass — we're here to make sure your property looks its best, season after season.
        </Callout>
      </SectionIntro>
    </Section>

    <Section>
      <SectionIntro className="mb-12">
        <H2 className="mb-4">
          Our <Accent>Core Values</Accent>
        </H2>
        <p className="m-0 text-[20px]">
          The principles that guide everything we do — from the first call to the final result
        </p>
      </SectionIntro>
      <CenteredCardRow>
        {coreValues.map(([title, text]) => (
          <TitleCard key={title} title={title}>
            {text}
          </TitleCard>
        ))}
      </CenteredCardRow>
    </Section>

    <Section bg="forest">
      <SectionIntro wide className="mb-12">
        <H2 className="mb-0">
          Why Choose <Accent onDark>Millerlawn &amp; Landscape</Accent> in Kansas City?
        </H2>
      </SectionIntro>
      <CenteredCardRow>
        {reasons.map((reason) => (
          <BulletCard key={reason}>{reason}</BulletCard>
        ))}
      </CenteredCardRow>
    </Section>
  </SiteLayout>
);

export default AboutPage;
