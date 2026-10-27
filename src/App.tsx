import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import PageMeta from "@/components/PageMeta";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import ReviewsPage from "./pages/ReviewsPage";
import NotFound from "./pages/NotFound";
import LawnMowingPage from "./pages/services/LawnMowingPage";
import IrrigationPage from "./pages/services/IrrigationPage";
import LandscapingPage from "./pages/services/LandscapingPage";
import GutterServicesPage from "./pages/services/GutterServicesPage";
import ChristmasLightsPage from "./pages/services/ChristmasLightsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <PageMeta />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/lawn-mowing" element={<LawnMowingPage />} />
          <Route path="/services/irrigation" element={<IrrigationPage />} />
          <Route path="/services/landscaping" element={<LandscapingPage />} />
          <Route path="/services/gutter-services" element={<GutterServicesPage />} />
          <Route path="/services/christmas-lights" element={<ChristmasLightsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
