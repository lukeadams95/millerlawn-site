import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import { Accent, H2, Icon, InnerHero, Section, btn } from "@/components/site/blocks";
import { ICONS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import lawn2 from "@/assets/lawn-2.webp";

const answerLink = "font-bold text-brand hover:text-brand-dark underline";

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve the Kansas City metro area and surrounding communities. Contact us to confirm service availability in your specific location.",
  },
  {
    question: "Do you offer both residential and commercial services?",
    answer:
      "Yes! We provide comprehensive lawn care and landscaping services for both residential properties and commercial contracts including office parks, retail centers, and HOAs.",
  },
  {
    question: "How do I get a quote?",
    answer: (
      <>
        Getting a quote is easy! Call or text us at{" "}
        <a href={PHONE_TEL} className={answerLink}>
          {PHONE_DISPLAY}
        </a>
        , or fill out our{" "}
        <Link to="/contact" className={answerLink}>
          contact form
        </Link>
        . We'll schedule a time to visit your property and provide a free, detailed estimate.
      </>
    ),
  },
  {
    question: "What's included in your lawn mowing service?",
    answer:
      "Our lawn mowing service includes mowing, edging, trimming, and debris cleanup. We can customize service to your needs and provide weekly, bi-weekly, or custom scheduling.",
  },
  {
    question: "Are you insured?",
    answer:
      "Absolutely. Millerlawn & Landscape LLC is fully insured to protect both our team and your property. We can provide proof of insurance upon request.",
  },
  {
    question: "Do you offer seasonal services?",
    answer:
      "Yes! In addition to year-round services like lawn care and landscaping, we offer seasonal services including irrigation winterization and startup, gutter cleaning, and custom Christmas light installation.",
  },
  {
    question: "What makes your pricing competitive?",
    answer:
      "We keep our overhead low by running an efficient operation, which allows us to pass savings on to our clients. You get professional quality service at fair, honest prices with no hidden fees.",
  },
  {
    question: "How do I schedule service?",
    answer:
      "Once we've provided a quote and you've approved it, we'll add you to our schedule. For regular maintenance, we'll set up a recurring schedule that works for you. For project work, we'll coordinate timing based on your needs and our availability.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept multiple payment methods including check, cash, and major credit cards. Payment terms will be discussed when we provide your quote.",
  },
  {
    question: "Do you guarantee your work?",
    answer:
      "Yes. We stand behind our work and take pride in customer satisfaction. If there's ever an issue with our service, we'll make it right. That's part of our commitment to integrity and follow-through.",
  },
  {
    question: "Can you handle large commercial properties?",
    answer:
      "Absolutely. We have experience managing large commercial contracts and can scale our services to meet your property's needs. Contact us to discuss your specific requirements.",
  },
  {
    question: "Do you provide emergency services?",
    answer:
      "While we primarily work on scheduled services, we understand that emergencies happen. Contact us and we'll do our best to accommodate urgent needs when possible.",
  },
];

const FAQPage = () => {
  // The first question starts open
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true });

  return (
    <SiteLayout>
      <InnerHero
        image={lawn2}
        alt="Manicured lawn with crisp mowing stripes"
        title={
          <>
            Frequently <Accent onDark>Asked Questions</Accent>
          </>
        }
        text="Find answers to common questions about our services, pricing, and process"
      />

      <Section>
        <div className="max-w-[920px] mx-auto flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className="bg-white border border-rule rounded-2xl shadow-[0_4px_18px_rgba(38,42,39,.08)] overflow-hidden"
            >
              <button
                onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}
                aria-expanded={!!open[i]}
                aria-controls={`faq-answer-${i}`}
                className="w-full bg-transparent border-0 px-7 py-6 font-bold text-[clamp(19px,2vw,23px)] leading-[1.25] text-ink hover:text-brand-dark cursor-pointer flex justify-between items-center gap-5 text-left"
              >
                <span>{faq.question}</span>
                <Icon
                  d={ICONS.chevronDown}
                  size={24}
                  strokeWidth={2.2}
                  className={`transition-transform duration-200 ${open[i] ? "rotate-180" : ""}`}
                />
              </button>
              {/* Closed answers stay in the DOM (hidden) so every answer is in the prerendered HTML */}
              <div id={`faq-answer-${i}`} hidden={!open[i]} className="px-7 pb-[26px] text-[19px] text-ink">
                <div className="border-t border-rule pt-[18px]">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="mint">
        <div className="max-w-[760px] mx-auto text-center">
          <H2>
            Still Have <Accent>Questions?</Accent>
          </H2>
          <p className="m-0 mb-8 text-[clamp(19px,1.8vw,22px)] font-semibold text-pretty">
            Can't find the answer you're looking for? Give us a call or send us a message. We're happy to help!
          </p>
          <a href={PHONE_TEL} className={`${btn.primary} px-9`}>
            {PHONE_DISPLAY}
          </a>
        </div>
      </Section>
    </SiteLayout>
  );
};

export default FAQPage;
