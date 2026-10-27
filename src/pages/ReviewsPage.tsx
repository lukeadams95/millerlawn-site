import SiteLayout from "@/components/SiteLayout";
import { Accent, CardGrid, InnerHero, Stars } from "@/components/site/blocks";
import { REVIEWS } from "@/lib/reviews";
import { REVIEW_URL } from "@/lib/site";
import lawn3 from "@/assets/lawn-3.webp";

const ReviewsPage = () => (
  <SiteLayout>
    <InnerHero
      image={lawn3}
      alt="Well-maintained courtyard landscaping and lawn"
      title={
        <>
          Client <Accent onDark>Reviews</Accent>
        </>
      }
      text="See what Kansas City property owners have to say about our services"
    />

    <section className="py-[clamp(64px,8vw,104px)] px-8 bg-cream">
      <CardGrid min={340} className="max-w-[1280px] mx-auto">
        {REVIEWS.map((review) => (
          <figure
            key={review.name}
            className="m-0 bg-white border border-rule-warm rounded-2xl p-7 flex flex-col gap-3.5"
          >
            <Stars />
            <blockquote className="m-0 text-[17px]">"{review.quote}"</blockquote>
            <figcaption className="mt-auto pt-3.5 border-t border-rule flex flex-col gap-0.5">
              <div className="font-bold text-[20px] text-ink">{review.name}</div>
              <div className="text-[16px] text-ink-soft">{review.role}</div>
            </figcaption>
          </figure>
        ))}
      </CardGrid>
    </section>

    <section className="py-[clamp(48px,6vw,72px)] px-8 forest-stripes text-center">
      <a
        href={REVIEW_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-brand-light text-white hover:text-white hover:brightness-110 px-9 py-4 rounded-[10px] font-bold text-[17px] tracking-[1.2px] uppercase"
      >
        Write A Review ★
      </a>
    </section>
  </SiteLayout>
);

export default ReviewsPage;
