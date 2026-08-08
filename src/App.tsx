import { Navbar } from "./layout/Navbar";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { Gallery } from "./sections/Gallery";
import { About } from "./sections/About";
// import { Testimonials } from "./sections/Testimonials";
import { CTA } from "./sections/CTA";
import { Contact } from "./sections/Contact";
import { Footer } from "./layout/Footer";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { CookieConsent } from "./components/ui/CookieConsent";
import { IntegritetspolicyModal } from "./components/ui/IntegritetspolicyModal";
import React from "react";

export default function App() {
  const [isPolicyOpen, setIsPolicyOpen] = React.useState(false);
  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      <ScrollProgress />

      <Navbar />

      <main className="grow">
        <Hero />

        <Services />

        <About />

        <Gallery />

        {/* <Testimonials /> */}

        <CTA />

        <Contact />
      </main>

      <Footer />

      <ScrollToTop />

      {/* شريط الكوكيز */}
      <CookieConsent onOpenPolicy={() => setIsPolicyOpen(true)} />

      {/* نافذة سياسة الخصوصية المنبثقة */}
      <IntegritetspolicyModal
        isOpen={isPolicyOpen}
        onClose={() => setIsPolicyOpen(false)}
      />
    </div>
  );
}
