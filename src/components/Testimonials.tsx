import { Link } from "react-router-dom";
import { Accent, CallTextButtons, H2Large, SectionIntro, Stars, btn } from "@/components/site/blocks";
import { REVIEWS } from "@/lib/reviews";

// Homepage masonry of the first nine reviews
const Testimonials = () => (
  <section id="reviews" className="py-[112px] px-8 bg-cream">
    <div className="max-w-[1280px] mx-auto">
      <SectionIntro className="mb-14">
        <H2Large>
          What Our <Accent>Clients Say</Accent>
        </H2Large>
        <p className="m-0 text-[20px]">
          Don't just take our word for it — hear from Kansas City property owners who trust us
        </p>
      </SectionIntro>
      <div className="columns-[320px] gap-6">
        {REVIEWS.slice(0, 9).map((review) => (
          <figure
            key={review.name}
            className="m-0 mb-6 break-inside-avoid bg-white border border-rule-warm rounded-2xl p-7 flex flex-col gap-3.5"
          >
            <figcaption className="font-bold text-[20px] text-ink">
              {review.name}, {review.role}
            </figcaption>
            <div className="flex items-center gap-2.5">
              <Stars />
              <span className="w-4 h-4 border-[1.5px] border-brand rounded-full text-brand text-[10px] leading-[13px] text-center font-bold">
                ✓
              </span>
            </div>
            <blockquote className="m-0 text-[17px]">"{review.quote}"</blockquote>
          </figure>
        ))}
      </div>
      <div className="mt-6 flex flex-col items-center gap-4">
        <Link to="/reviews" className={`${btn.outlineGreen} whitespace-nowrap`}>
          See All Reviews
        </Link>
        <CallTextButtons className="justify-center" />
      </div>
    </div>
  </section>
);

export default Testimonials;
