import * as React from "react";
import { Navbar } from "./layout/Navbar";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { Gallery } from "./sections/Gallery";
import { About } from "./sections/About";
import { Testimonials } from "./sections/Testimonials";
import { CTA } from "./sections/CTA";
import { Contact } from "./sections/Contact";
import { Footer } from "./layout/Footer";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { ScrollProgress } from "./components/ui/ScrollProgress";

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      {/* Dynamic premium scroll progress indicator */}
      <ScrollProgress />

      {/* Sticky navigation header */}
      <Navbar />

      {/* Main visual sections layout */}
      <main className="grow">
        {/* Immersive landing hero */}
        <Hero />

        {/* Premium services section */}
        <Services />

        {/* Brand story, philosophy & milestone timeline */}
        <About />

        {/* Inspiration showcase gallery section */}
        <Gallery />

        {/* Stellar client reviews validation */}
        <Testimonials />

        {/* High engagement action banner */}
        <CTA />

        {/* Responsive, highly robust request-quote form */}
        <Contact />
      </main>

      {/* Corporate detailed footer */}
      <Footer />

      {/* Page scroll helpers */}
      <ScrollToTop />
    </div>
  );
}
