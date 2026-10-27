import { useState } from "react";
import { Link } from "react-router-dom";
import lawn1 from "@/assets/lawn-1.webp";
import lawn2 from "@/assets/lawn-2.webp";
import lawn3 from "@/assets/lawn-3.webp";
import lawn4 from "@/assets/lawn-4.webp";
import christmasImage from "@/assets/christmas-lights-1.jpg";
import { Accent, CallTextButtons, H2Large, Icon, Section, SectionIntro, btn } from "@/components/site/blocks";
import { ICONS } from "@/lib/site";

const services = [
  {
    title: "Lawn Mowing",
    image: lawn1,
    icon: ICONS.mower,
    description: "Consistent, clean cuts that keep turf healthy and looking professional.",
    details:
      "Professional lawn mowing services with edging and cleanup included. We provide reliable, scheduled maintenance for both residential and commercial properties throughout Kansas City.",
    link: "/services/lawn-mowing",
    linkText: "View Lawn Mowing page →",
  },
  {
    title: "Irrigation Systems",
    image: lawn2,
    icon: ICONS.drop,
    description: "Installation, repair, and upkeep for thriving landscapes year-round.",
    details:
      "Complete irrigation solutions from design and installation to maintenance and repairs. Our systems are optimized for water efficiency while keeping your landscape healthy.",
    link: "/services/irrigation",
    linkText: "View Irrigation Systems page →",
  },
  {
    title: "Landscaping",
    image: lawn3,
    icon: ICONS.tree,
    description: "Plantings, mulch, and design that boost curb appeal and property value.",
    details:
      "Custom landscape design and installation services. From plant selection to mulching and flower bed design, we create beautiful landscapes that enhance your property.",
    link: "/services/landscaping",
    linkText: "View Landscaping page →",
  },
  {
    title: "Gutter Services",
    image: lawn4,
    icon: ICONS.wind,
    description: "Cleaning and guard installation to protect your property from damage.",
    details:
      "Professional gutter cleaning and guard installation to protect your property from water damage. Regular maintenance programs available.",
    link: "/services/gutter-services",
    linkText: "View Gutter Services page →",
  },
  {
    title: "Christmas Lights",
    image: christmasImage,
    icon: ICONS.sparkle,
    description: "Professional design and installation for spectacular holiday displays.",
    details:
      "Complete Christmas light services including design, installation, and post-season removal. Commercial-grade lights and professional techniques for stunning displays.",
    link: "/services/christmas-lights",
    linkText: "View Christmas Lights page →",
  },
];

// Photo-topped card with an icon tile; shared by the homepage and the Services page
export const ServiceCard = ({
  title,
  image,
  icon,
  children,
}: {
  title: string;
  image: string;
  icon: string;
  children: React.ReactNode;
}) => (
  <div className="flex-[0_1_calc((100%-80px)/3)] min-w-[min(100%,300px)] bg-white text-ink border border-rule rounded-2xl shadow-[0_4px_18px_rgba(38,42,39,.08)] overflow-hidden flex flex-col">
    <div className="relative h-[210px] bg-ink">
      <img src={image} alt={title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
    </div>
    <div className="flex-1 px-[30px] pb-[30px] flex flex-col gap-3.5">
      <div className="relative w-20 h-20 rounded-[14px] bg-brand-wash border-4 border-white flex items-center justify-center -mt-10 mb-2.5">
        <Icon d={icon} size={40} strokeWidth={1.6} />
      </div>
      <h3 className="font-semibold text-[26px] leading-[1.1] m-0 text-ink">{title}</h3>
      {children}
    </div>
  </div>
);

export const ServiceCardRow = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-wrap justify-center gap-10 items-stretch">{children}</div>
);

const Services = () => {
  const [open, setOpen] = useState<Record<number, boolean>>({});

  return (
    <Section bg="forest" id="services">
      <SectionIntro className="mb-14">
        <H2Large>
          Our <Accent onDark>Services</Accent>
        </H2Large>
        <p className="m-0 text-[20px]">
          Comprehensive lawn care and landscaping solutions for commercial and residential properties
        </p>
      </SectionIntro>
      <ServiceCardRow>
        {services.map((service, i) => (
          <ServiceCard key={service.title} title={service.title} image={service.image} icon={service.icon}>
            <p className="m-0 mb-auto text-[19px] text-ink">{service.description}</p>
            <button
              onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}
              aria-expanded={!!open[i]}
              className="bg-transparent border-0 pt-3 px-0 pb-0 font-semibold text-[17px] text-brand hover:text-brand-dark cursor-pointer flex justify-between items-center w-full"
            >
              Learn More
              <Icon
                d={ICONS.chevronDown}
                size={20}
                color="currentColor"
                strokeWidth={2.2}
                className={`transition-transform duration-200 ${open[i] ? "rotate-180" : ""}`}
              />
            </button>
            {open[i] && (
              <div className="pt-4 border-t border-rule flex flex-col gap-3">
                <p className="m-0 text-[17px]">{service.details}</p>
                <Link to={service.link} className="font-bold text-[17px] text-brand hover:text-brand-dark">
                  {service.linkText}
                </Link>
              </div>
            )}
          </ServiceCard>
        ))}
      </ServiceCardRow>
      <CallTextButtons onDark className="mt-12 justify-center">
        <Link to="/services" className={btn.white}>
          View All Services
        </Link>
      </CallTextButtons>
    </Section>
  );
};

export default Services;
