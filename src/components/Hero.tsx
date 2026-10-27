import { useEffect, useState } from "react";
import heroImage from "@/assets/lawn-1.webp";
import { Accent, btn } from "@/components/site/blocks";
import { PHONE_DISPLAY, PHONE_SMS, PHONE_TEL } from "@/lib/site";
import { cn } from "@/lib/utils";

// Player chrome (controls, logo, channel name) is turned off and the frame is scaled up so its edges are cropped
const HERO_VIDEO_SRC =
  "https://www.youtube-nocookie.com/embed/n1jeSwNAgMo?autoplay=1&mute=1&loop=1&playlist=n1jeSwNAgMo&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1&disablekb=1&fs=0";

// Speed: the YouTube background video (~1 MB of player code plus the video
// stream) starts 1.5s after the page has loaded instead of competing with the
// first paint. Same video, same settings; skipped in the build-time prerender.
const useDeferredVideo = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if ((window as unknown as { __PRERENDER__?: boolean }).__PRERENDER__) return;
    let timer: number | undefined;
    const start = () => {
      timer = window.setTimeout(() => setReady(true), 1500);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      window.removeEventListener("load", start);
      if (timer) window.clearTimeout(timer);
    };
  }, []);
  return ready;
};

// `overlapped` leaves room at the bottom for the Christmas card that overlaps the hero
const Hero = ({ overlapped }: { overlapped?: boolean }) => {
  const videoReady = useDeferredVideo();
  return (
    // 16:9 to match the video; grows taller when the text needs more room. On desktop it slides up under the green nav.
    <section className="relative overflow-hidden grid grid-rows-[minmax(min-content,1fr)] min-h-[56.25vw] nav:-mt-[52px] bg-ink text-white text-center">
      <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
      {videoReady && (
        <iframe
          className="absolute top-1/2 left-1/2 h-full min-w-full aspect-video -translate-x-1/2 -translate-y-1/2 scale-[1.35] border-0 pointer-events-none"
          src={HERO_VIDEO_SRC}
          title="Lawn care background video"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="autoplay; encrypted-media"
          tabIndex={-1}
        />
      )}
      <div
        className={cn(
          "relative bg-[rgba(20,26,21,.5)] px-8 pt-[110px] flex items-center justify-center",
          overlapped ? "pb-40" : "pb-[110px]",
        )}
      >
        <div className="max-w-[1100px]">
          <h1 className="font-bold text-[clamp(44px,4.6vw,64px)] leading-[1.05] mx-auto mt-0 mb-7 max-w-[1100px] text-balance">
            Commercial &amp; Residential Lawn Care &amp; Landscaping in <Accent onDark>Kansas City</Accent>
          </h1>
          <p className="text-[clamp(19px,2vw,24px)] max-w-[720px] mx-auto mt-0 mb-10">
            From meticulously mowed lawns to irrigation, landscaping, and custom Christmas lighting — reliability and
            craftsmanship in every job
          </p>
          <div className="flex gap-5 flex-wrap justify-center">
            <a href={PHONE_TEL} className={btn.heroPrimary}>
              Call {PHONE_DISPLAY}
            </a>
            <a href={PHONE_SMS} className={btn.heroOutline}>
              Text Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
