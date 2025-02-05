import { AboutTimeline } from "./components/about/AboutTimeline";
import { Footer } from "./components/general/footer";
import { Navbar } from "./components/general/navbar";
import { Contact } from "./components/home/Contact";
import { CTA } from "./components/home/Cta";
import Hero from "./components/home/Hero";

import { TestimonialsMasonryGrid } from "./components/home/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <Hero />
      <AboutTimeline />

      <TestimonialsMasonryGrid />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}
