import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import { ServiceCard, ServiceCardRow } from "@/components/Services";
import { Accent, BulletCards, H2, H2Large, InnerHero, IntroSection, Section, SectionIntro } from "@/components/site/blocks";
import { ICONS } from "@/lib/site";
import landscapingService from "@/assets/landscaping-service.jpg";
import lawnMowingService from "@/assets/lawn-mowing-service.jpg";
import irrigationService from "@/assets/irrigation-service.jpg";
import gutterService from "@/assets/gutter-service.jpg";
import christmasService from "@/assets/christmas-lights-service.jpg";

const offers = [
  {
    title: "Lawn Mowing & Maintenance",
    image: lawnMowingService,
    icon: ICONS.mower,
    description: "Consistent, professional mowing that keeps your property sharp and healthy.",
    link: "/services/lawn-mowing",
  },
  {
    title: "Irrigation Systems",
    image: irrigationService,
    icon: ICONS.drop,
    description: "Smart irrigation solutions designed to keep your lawn green and reduce water waste.",
    link: "/services/irrigation",
  },
  {
    title: "Landscaping",
    image: landscapingService,
    icon: ICONS.tree,
    description: "Complete design and installation services to enhance your property's curb appeal.",
    link: "/services/landscaping",
  },
  {
    title: "Gutter Cleaning & Gutter Guard Installation",
    image: gutterService,
    icon: ICONS.wind,
    description: "Protect your home or business with reliable gutter care that prevents water damage.",
    link: "/services/gutter-services",
  },
  {
    title: "Custom Christmas Lights",
    image: christmasService,
    icon: ICONS.sparkle,
    description: "Seasonal lighting designed, installed, and removed for a stress-free holiday.",
    link: "/services/christmas-lights",
  },
];

const reasons = [
  "Competitive prices without the overhead of larger companies.",
  "A retired firefighter leading with integrity, honesty, and accountability.",
  "Services tailored to both commercial contracts and residential properties.",
  "A local company that understands the unique needs of Kansas City lawns.",
];

const ServicesPage = () => (
  <SiteLayout>
    <InnerHero
      image={landscapingService}
      alt="Professional landscaping service in Kansas City"
      title={
        <>
          <Accent onDark>Lawn Care &amp; Landscaping</Accent> Services in Kansas City | Millerlawn &amp; Landscape LLC
        </>
      }
    />

    <IntroSection>
      At Millerlawn &amp; Landscape LLC, we provide full-service lawn care, landscaping, irrigation, gutter services, and
      seasonal lighting to keep your property looking its best all year long. Whether you're a commercial property
      manager in need of reliable contracts or a homeowner looking for a dependable crew, we bring competitive pricing,
      integrity, and top-quality results to every project.
    </IntroSection>

    <Section bg="forest">
      <SectionIntro className="mb-14">
        <H2Large className="mb-0">
          What We <Accent onDark>Offer</Accent>
        </H2Large>
      </SectionIntro>
      <ServiceCardRow>
        {offers.map((offer) => (
          <ServiceCard key={offer.title} title={offer.title} image={offer.image} icon={offer.icon}>
            <p className="m-0 mb-auto text-[19px] text-ink">{offer.description}</p>
            <Link to={offer.link} className="font-bold text-[17px] text-brand hover:text-brand-dark pt-3">
              Learn More→
            </Link>
          </ServiceCard>
        ))}
      </ServiceCardRow>
    </Section>

    <Section bg="mint">
      <SectionIntro wide className="mb-12">
        <H2 className="mb-0">
          Why Kansas City Chooses <Accent>Millerlawn &amp; Landscape</Accent>
        </H2>
      </SectionIntro>
      <BulletCards items={reasons} />
    </Section>
  </SiteLayout>
);

export default ServicesPage;
