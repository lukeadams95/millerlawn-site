import type { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FinalCTA } from "@/components/site/blocks";

// Global header and footer around a page. Every page ends with the shared call-to-action.
const SiteLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-cream">
    <Navigation />
    <main>
      {children}
      <FinalCTA />
    </main>
    <Footer />
  </div>
);

export default SiteLayout;
