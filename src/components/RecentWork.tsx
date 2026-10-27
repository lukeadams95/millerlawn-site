import lawn1 from "@/assets/lawn-1.webp";
import lawn2 from "@/assets/lawn-2.webp";
import lawn3 from "@/assets/lawn-3.webp";
import lawn4 from "@/assets/lawn-4.webp";
import { Accent, CallTextButtons, H2Large, SectionIntro } from "@/components/site/blocks";

const photos = [
  { src: lawn1, alt: "Freshly mowed Kansas City lawn with clean edges" },
  { src: lawn2, alt: "Manicured lawn with crisp mowing stripes" },
  { src: lawn3, alt: "Well-maintained courtyard landscaping and lawn" },
  { src: lawn4, alt: "Trimmed lawn and edging along a residential walkway" },
];

const RecentWork = () => (
  <section id="gallery" className="pt-[clamp(64px,8vw,104px)] px-8 bg-cream">
    <div className="max-w-[1280px] mx-auto">
      <SectionIntro className="mb-14">
        <H2Large>
          Recent Work <Accent>Around Kansas City</Accent>
        </H2Large>
        <p className="m-0 text-[20px]">
          Crisp stripes, clean edges, and properties that look their best — a look at recent lawns we've cared for.
        </p>
      </SectionIntro>
      <div className="grid gap-7 grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))]">
        {photos.map((photo) => (
          <img
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            className="w-full aspect-[3/2] object-cover block rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,.2)]"
          />
        ))}
      </div>
      <CallTextButtons className="mt-12 justify-center" />
    </div>
  </section>
);

export default RecentWork;
