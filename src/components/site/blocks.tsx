// Building blocks shared by every page: buttons, section shells, headings, split
// image cards, card grids, the inner-page hero and the closing call-to-action.
import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { PHONE_DISPLAY, PHONE_SMS, PHONE_TEL } from "@/lib/site";
import ctaImage from "@/assets/lawn-2.webp";

/* ---------- Icons ---------- */

type IconProps = { d: string; size?: number; color?: string; strokeWidth?: number; className?: string };

export const Icon = ({ d, size = 22, color = "#4F8F3D", strokeWidth = 1.8, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={cn("flex-none", className)}
  >
    <path d={d} />
  </svg>
);

/* ---------- Buttons ---------- */

const btnBase = "inline-block rounded-[10px] font-bold text-[19px] transition-colors";

export const btn = {
  primary: `${btnBase} px-8 py-4 bg-brand text-white border-2 border-brand hover:bg-brand-light hover:border-brand-light hover:text-white`,
  outlineLight: `${btnBase} px-8 py-4 text-white border-2 border-white hover:bg-white hover:text-ink`,
  heroPrimary: `${btnBase} px-9 py-4 bg-brand/90 text-white border-2 border-white/70 hover:bg-brand-light hover:text-white`,
  heroOutline: `${btnBase} px-9 py-4 text-white border-2 border-white/70 hover:bg-white hover:text-ink`,
  solid: `${btnBase} px-9 py-4 bg-brand text-white hover:bg-brand-light hover:text-white`,
  white: `${btnBase} px-9 py-4 bg-white text-brand hover:bg-[#E8F5DF] hover:text-brand-dark`,
  outlineGreen: `${btnBase} px-8 py-4 text-brand-dark border-2 border-brand hover:bg-brand hover:text-white`,
};

// The hero's two calls to action, reused across homepage sections. `onDark` uses the hero's
// own styles for photo and deep green backgrounds; extra buttons (children) follow in the same row.
export const CallTextButtons = ({
  onDark,
  className,
  children,
}: {
  onDark?: boolean;
  className?: string;
  children?: ReactNode;
}) => (
  <div className={cn("flex gap-4 flex-wrap", className)}>
    <a href={PHONE_TEL} className={onDark ? btn.heroPrimary : btn.primary}>
      Call {PHONE_DISPLAY}
    </a>
    <a href={PHONE_SMS} className={onDark ? btn.heroOutline : btn.outlineGreen}>
      Text Us Today
    </a>
    {children}
  </div>
);

/* ---------- Headings ---------- */

// Highlighted phrase inside a heading. Use `onDark` on photo and deep green backgrounds.
export const Accent = ({ children, onDark }: { children: ReactNode; onDark?: boolean }) => (
  <span className={onDark ? "text-brand-tint" : "text-brand-light"}>{children}</span>
);

type HeadingProps = { children: ReactNode; className?: string; as?: "h2" | "h3" };

// Section heading on inner pages
export const H2 = ({ children, className, as: Tag = "h2" }: HeadingProps) => (
  <Tag className={cn("font-bold text-[clamp(36px,4.2vw,56px)] leading-[1.05] m-0 mb-5 text-balance", className)}>
    {children}
  </Tag>
);

// Larger section heading used on the homepage and the Services page
export const H2Large = ({ children, className, as: Tag = "h2" }: HeadingProps) => (
  <Tag className={cn("font-bold text-[clamp(40px,5vw,64px)] leading-none m-0 mb-4", className)}>{children}</Tag>
);

/* ---------- Sections ---------- */

type SectionBg = "cream" | "mint" | "forest";

const sectionBg: Record<SectionBg, string> = {
  cream: "bg-cream",
  mint: "bg-mint",
  forest: "forest-stripes text-white",
};

type SectionProps = {
  bg?: SectionBg;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  id?: string;
};

// Full-width band with the site's standard vertical rhythm and 1280px container
export const Section = ({ bg = "cream", children, className, style, id }: SectionProps) => (
  <section id={id} className={cn("py-[clamp(64px,8vw,104px)] px-8", sectionBg[bg], className)} style={style}>
    <div className="max-w-[1280px] mx-auto">{children}</div>
  </section>
);

// Centred heading + intro text block that opens a section
export const SectionIntro = ({
  children,
  wide,
  className,
}: {
  children: ReactNode;
  wide?: boolean;
  className?: string;
}) => <div className={cn("mx-auto text-center", wide ? "max-w-[880px]" : "max-w-[720px]", className)}>{children}</div>;

// Large centred lead paragraph directly under an inner-page hero
export const IntroSection = ({ children }: { children: ReactNode }) => (
  <Section>
    <p className="max-w-[880px] mx-auto text-center text-[clamp(20px,2vw,24px)] font-semibold text-ink text-pretty m-0">
      {children}
    </p>
  </Section>
);

// Centred heading + emphasised paragraph (e.g. "Protect Your Property Today")
export const StatementSection = ({
  bg = "cream",
  title,
  children,
}: {
  bg?: SectionBg;
  title: ReactNode;
  children: ReactNode;
}) => (
  <Section bg={bg}>
    <SectionIntro wide>
      <H2>{title}</H2>
      <p className="m-0 text-[clamp(19px,1.8vw,22px)] font-semibold text-pretty">{children}</p>
    </SectionIntro>
  </Section>
);

/* ---------- Body copy ---------- */

// 19px paragraph used inside split cards and section intros
export const Para = ({ children, last }: { children: ReactNode; last?: boolean }) => (
  <p className={cn("m-0 text-[19px]", !last && "mb-6")}>{children}</p>
);

/* ---------- Lists and callouts ---------- */

export const DiamondList = ({ items, className }: { items: ReactNode[]; className?: string }) => (
  <ul className={cn("list-none p-0 m-0 grid gap-3", className)}>
    {items.map((item, i) => (
      <li key={i} className="flex gap-3.5 items-start font-semibold">
        <span className="diamond mt-[9px]" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

// Bold green closing line with a rule above it
export const Callout = ({ children, className }: { children: ReactNode; className?: string }) => (
  <p className={cn("m-0 mt-3 pt-6 border-t-[3px] border-brand-light font-bold text-brand-dark", className)}>
    {children}
  </p>
);

/* ---------- Split image card ---------- */

export type Img = { src: string; alt: string };

type SplitCardProps = {
  images: Img[];
  imageFirst?: boolean;
  // Minimum height of each image; defaults to 420px for one image, 240px for a stack of two
  imageMinHeight?: number;
  children: ReactNode;
};

// White rounded card: text column beside a full-bleed photo (or a stack of two)
export const SplitCard = ({ images, imageFirst, imageMinHeight, children }: SplitCardProps) => {
  const minHeight = imageMinHeight ?? (images.length > 1 ? 240 : 420);
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_18px_40px_rgba(38,42,39,.14)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-stretch">
      <div
        className={cn(
          "py-[clamp(40px,6vw,88px)] px-[clamp(28px,5vw,80px)] flex flex-col justify-center",
          imageFirst ? "order-2" : "order-1",
        )}
      >
        {children}
      </div>
      <div className={cn("grid auto-rows-fr", imageFirst ? "order-1" : "order-2")}>
        {images.map((img) => (
          <div key={img.src} className="relative bg-ink" style={{ minHeight }}>
            <img src={img.src} alt={img.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------- Card grids ---------- */

const cardShadow = "shadow-[0_4px_18px_rgba(38,42,39,.08)]";

export const CardGrid = ({ min, children, className }: { min: number; children: ReactNode; className?: string }) => (
  <div
    className={cn("grid gap-6", className)}
    style={{ gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${min}px), 1fr))` }}
  >
    {children}
  </div>
);

// Wrapping row of equal cards that stays centred when the last row is short
export const CenteredCardRow = ({ children }: { children: ReactNode[] }) => (
  <div className="flex flex-wrap justify-center gap-6">
    {children.map((child, i) => (
      <div key={i} className="flex-[1_1_220px] max-w-[340px] flex flex-col">
        {child}
      </div>
    ))}
  </div>
);

// White card with a diamond above one line of text
export const BulletCard = ({ children }: { children: ReactNode }) => (
  <div className={cn("flex-1 bg-white text-ink border border-rule rounded-2xl p-7 flex flex-col gap-2", cardShadow)}>
    <span className="diamond mt-1 mb-2" />
    <span className="font-semibold text-[19px]">{children}</span>
  </div>
);

export const BulletCards = ({ items, min = 240, className }: { items: string[]; min?: number; className?: string }) => (
  <CardGrid min={min} className={className}>
    {items.map((item) => (
      <BulletCard key={item}>{item}</BulletCard>
    ))}
  </CardGrid>
);

type TitleCardProps = { title: string; children: ReactNode; large?: boolean; bordered?: boolean };

// White card with a green title and a short description
export const TitleCard = ({ title, children, large, bordered }: TitleCardProps) => (
  <div
    className={cn(
      "flex-1 bg-white text-ink rounded-2xl flex flex-col",
      cardShadow,
      large ? "p-8" : "p-7",
      bordered ? "border border-rule gap-2" : "gap-2.5",
    )}
  >
    <div className={cn("font-bold leading-[1.1] text-brand-dark", large ? "text-[28px]" : "text-[26px]")}>{title}</div>
    <div className={large ? "text-[19px]" : "text-[18px]"}>{children}</div>
  </div>
);

export const TitleCards = ({
  items,
  min = 250,
  large,
  bordered,
}: {
  items: [string, string][];
  min?: number;
  large?: boolean;
  bordered?: boolean;
}) => (
  <CardGrid min={min}>
    {items.map(([title, text]) => (
      <TitleCard key={title} title={title} large={large} bordered={bordered}>
        {text}
      </TitleCard>
    ))}
  </CardGrid>
);

/* ---------- Testimonial card ---------- */

export const Stars = () => (
  <span className="text-star text-[20px] tracking-[3px]" role="img" aria-label="5 stars">
    ★★★★★
  </span>
);

/* ---------- Inner-page hero ---------- */

type InnerHeroProps = {
  image: string;
  alt: string;
  title: ReactNode;
  text?: ReactNode;
  // Small muted line under the title (legal pages)
  note?: string;
  call?: boolean;
};

// Standard hero for every page except the homepage
export const InnerHero = ({ image, alt, title, text, note, call }: InnerHeroProps) => (
  <section className="relative min-h-[clamp(360px,40vw,480px)] py-12 flex items-center justify-center bg-ink text-white text-center">
    <img src={image} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-[rgba(24,52,19,.74)]" />
    <div className="relative max-w-[1000px] px-8">
      <h1
        className={cn(
          "font-bold text-[clamp(34px,4.6vw,64px)] leading-[1.05] mx-auto mt-0 text-balance",
          text ? "mb-5" : note ? "mb-3.5" : call ? "mb-7" : "mb-0",
        )}
      >
        {title}
      </h1>
      {text && (
        <p className={cn("text-[clamp(18px,1.8vw,22px)] max-w-[760px] mx-auto mt-0 text-pretty", call ? "mb-7" : "mb-0")}>
          {text}
        </p>
      )}
      {note && <p className="text-[17px] text-[#D9EACF] m-0">{note}</p>}
      {call && (
        <a href={PHONE_TEL} className={btn.heroPrimary}>
          Call {PHONE_DISPLAY}
        </a>
      )}
    </div>
  </section>
);

/* ---------- Closing call-to-action ---------- */

export const FinalCTA = () => (
  <section id="contact" className="relative bg-ink text-white">
    <img src={ctaImage} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
    <div className="relative bg-[rgba(25,30,26,.8)] py-[120px] px-8 text-center">
      <div className="max-w-[860px] mx-auto">
        <h2 className="font-bold text-[clamp(40px,5.5vw,72px)] leading-none m-0 mb-6">
          Ready for a <Accent onDark>Better Lawn &amp; Landscape Partner?</Accent>
        </h2>
        <p className="m-0 mb-10 text-[21px]">
          Stop stressing about unreliable service, hidden costs, or jobs done halfway. Get a Kansas City team that takes
          pride in making your property look its best.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href={PHONE_TEL} className={btn.primary}>
            Call {PHONE_DISPLAY}
          </a>
          <a href={PHONE_SMS} className={btn.outlineLight}>
            Text Us Today
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- Internal/external link helper ---------- */

export const SmartLink = ({
  to,
  className,
  children,
  onClick,
}: {
  to: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) =>
  to.startsWith("/") ? (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  ) : (
    <a href={to} className={className} onClick={onClick}>
      {children}
    </a>
  );
