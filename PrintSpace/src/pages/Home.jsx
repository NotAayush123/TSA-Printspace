import { Hero } from "../components/Home/Hero";
import { ThreeDCardDemo } from "../components/Home/3dCards";
import StyledButton from "../components/ui/StyledButton";
import Mission from "../components/ui/Mission";
import { BentoGridFeatures } from "../components/Home/BentoGridFeatures";
import { Footer } from "../components/Footer";
import { Testimonials } from "../components/Home/Testimonials";
import { FeaturedProjects } from "../components/Home/FeaturedProjects";
import FAQ from "../components/Home/FAQ";
import { CallToAction } from "../components/Home/CallToAction";
const Home = () => {
  return (
    <>
      <Hero />
      <div className="bg-black bg-dot-white/[0.3]">
        <StyledButton text="Our Mission and Values" title />
        <Mission />
        <ThreeDCardDemo />
        <StyledButton text="Why Printspace?" title />
        <BentoGridFeatures />
      </div>
      <StyledButton text="Featured Projects" title className="mt-5" />
      <p className="text-center text-slate-500 text-2xl mb-0">
        Click on a project to learn more
      </p>
      <FeaturedProjects />
      <StyledButton text="FAQ" title />
      <FAQ />
      <StyledButton text="Reviews" title />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
