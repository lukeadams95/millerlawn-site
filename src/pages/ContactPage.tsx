import type { FormEvent, ReactNode } from "react";
import { toast } from "sonner";
import SiteLayout from "@/components/SiteLayout";
import { Accent, Icon, InnerHero } from "@/components/site/blocks";
import { ICONS, PHONE_DISPLAY, PHONE_SMS, PHONE_TEL, SERVICE_LINKS } from "@/lib/site";
import lawn4 from "@/assets/lawn-4.webp";

const h2Class = "font-bold text-[clamp(32px,3.6vw,48px)] leading-[1.05] text-balance";
const labelClass = "flex flex-col gap-1.5 font-semibold text-[17px] text-ink";

const Required = () => <span className="text-brand"> *</span>;

const InfoCard = ({ icon, title, children }: { icon: string; title: string; children: ReactNode }) => (
  <div className="bg-white border border-rule rounded-2xl shadow-[0_4px_18px_rgba(38,42,39,.08)] px-7 py-6 flex gap-5 items-start">
    <span className="flex-none w-[52px] h-[52px] rounded-full bg-brand-wash flex items-center justify-center">
      <Icon d={icon} size={26} strokeWidth={1.7} />
    </span>
    <div className="flex flex-col gap-1">
      <div className="font-bold text-[24px] leading-[1.1] text-brand-dark">{title}</div>
      {children}
    </div>
  </div>
);

const ContactPage = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    toast.success("Thank you! We'll get back to you soon.");
    e.currentTarget.reset();
  };

  return (
    <SiteLayout>
      <InnerHero
        image={lawn4}
        alt="Trimmed lawn and edging along a residential walkway"
        title={
          <>
            Get In <Accent onDark>Touch</Accent>
          </>
        }
        text="Ready to transform your property? Contact us today for a free quote"
      />

      <section className="py-[clamp(64px,8vw,104px)] px-8 bg-cream">
        {/* Two columns on desktop; stacked with the form first at 900px and under */}
        <div className="max-w-[1280px] mx-auto grid grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] gap-[clamp(32px,5vw,64px)] items-start max-[900px]:flex max-[900px]:flex-col">
          <div className="flex flex-col gap-5 max-[900px]:w-full">
            <h2 className={`${h2Class} m-0 mb-1`}>
              Contact <Accent>Information</Accent>
            </h2>
            <InfoCard icon={ICONS.phone} title="Phone">
              <a href={PHONE_TEL} className="text-[19px] font-bold text-ink hover:text-brand">
                {PHONE_DISPLAY}
              </a>
              <div className="text-[17px] text-ink-soft">Call or text us anytime</div>
            </InfoCard>
            <InfoCard icon={ICONS.pin} title="Service Area">
              <div className="text-[19px] font-bold text-ink">Kansas City Metro Area</div>
              <div className="text-[17px] text-ink-soft">Serving commercial and residential properties</div>
            </InfoCard>
            <InfoCard icon={ICONS.message} title="Text Message">
              <a href={PHONE_SMS} className="text-[19px] font-bold text-ink hover:text-brand">
                Send us a text
              </a>
              <div className="text-[17px] text-ink-soft">Fastest way to get a response</div>
            </InfoCard>
            <InfoCard icon={ICONS.clock} title="Business Hours">
              <div className="text-[19px] text-ink">Monday - Friday: 7:00 AM - 6:00 PM</div>
              <div className="text-[19px] text-ink">Saturday: 8:00 AM - 4:00 PM</div>
              <div className="text-[19px] text-ink">Sunday: By appointment</div>
            </InfoCard>
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-[900px]:order-first max-[900px]:w-full bg-white border border-rule rounded-2xl shadow-[0_18px_40px_rgba(38,42,39,.14)] p-[clamp(28px,4vw,48px)] flex flex-col gap-5"
          >
            <h2 className={`${h2Class} m-0`}>
              Request a <Accent>Free Quote</Accent>
            </h2>
            <label className={labelClass}>
              <span>
                Name
                <Required />
              </span>
              <input type="text" name="name" autoComplete="name" required className="field" />
            </label>
            <label className={labelClass}>
              <span>
                Email
                <Required />
              </span>
              <input type="email" name="email" autoComplete="email" required className="field" />
            </label>
            <label className={labelClass}>
              <span>
                Phone
                <Required />
              </span>
              <input type="tel" name="phone" autoComplete="tel" required className="field" />
            </label>
            <label className={labelClass}>
              <span>Service Interested In</span>
              <select name="service" defaultValue="" className="field">
                <option value="" />
                {SERVICE_LINKS.map((s) => (
                  <option key={s.name}>{s.name}</option>
                ))}
              </select>
            </label>
            <label className={labelClass}>
              <span>
                Message
                <Required />
              </span>
              <textarea name="message" rows={5} required className="field resize-y" />
            </label>
            <label className="flex gap-3 items-start text-[16px] text-ink-soft leading-[1.45]">
              <input type="checkbox" name="consent" required className="flex-none w-[22px] h-[22px] mt-0.5 accent-brand" />
              <span>
                I consent to receive SMS messages and phone calls from David Miller regarding my inquiry. Message and data
                rates may apply.
                <Required />
              </span>
            </label>
            <button
              type="submit"
              className="bg-brand text-white px-9 py-4 rounded-[10px] font-bold text-[19px] border-2 border-brand hover:bg-brand-light hover:border-brand-light cursor-pointer w-full transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ContactPage;
