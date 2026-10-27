// Readable single-column layout shared by the Privacy Policy and Terms of Service pages
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export const LegalBody = ({ children }: { children: ReactNode }) => (
  <section className="pt-[clamp(40px,6vw,80px)] pb-[clamp(64px,8vw,104px)] px-8 bg-cream">
    <div className="max-w-[800px] mx-auto">{children}</div>
  </section>
);

export const LegalH2 = ({ children, first }: { children: ReactNode; first?: boolean }) => (
  <h2
    className={cn(
      "font-bold text-[clamp(26px,3vw,34px)] leading-[1.15] mb-3.5 text-ink",
      first ? "mt-0" : "mt-12",
    )}
  >
    {children}
  </h2>
);

export const LegalP = ({ children }: { children: ReactNode }) => (
  <p className="m-0 mb-4 text-[19px] leading-[1.7] text-ink">{children}</p>
);

export const LegalList = ({ items }: { items: string[] }) => (
  <ul className="list-none p-0 m-0 mb-4 grid gap-2.5">
    {items.map((item) => (
      <li key={item} className="flex gap-3.5 items-start text-[19px] leading-[1.6]">
        <span className="diamond !w-2.5 !h-2.5 mt-2.5" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const LegalPhone = () => (
  <a href={PHONE_TEL} className="font-bold text-brand hover:text-brand-dark underline">
    {PHONE_DISPLAY}
  </a>
);
