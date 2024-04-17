// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { SpotlightPreview } from "./components/ui/SpotlightHero";
import Header from "./components/ui/Header";
import { ThreeDCardDemo } from "./components/ui/3dCards";
import StyledButton from "./components/StyledButton";
import Mission from "./components/ui/Mission";
import { BentoGridThirdDemo } from "./components/ui/BentoGridHero";
import { Footer } from "./components/ui/Footer";
import { InfiniteMovingCardsDemo } from "./components/ui/Testimonials";
import { LayoutGridDemo } from "./components/ui/FeaturedProjects";
export default function App() {
  return (
    <MantineProvider>
      <Header />
      <SpotlightPreview />
      <div className="bg-black bg-dot-white/[0.3]">
        <StyledButton text="Our Mission and Values" title />
        <Mission />

        <ThreeDCardDemo />

        <StyledButton text="Why Printspace?" title />

        <BentoGridThirdDemo />
      </div>
      <StyledButton text="Featured Projects" title className="mt-5" />
      <LayoutGridDemo />
      <StyledButton text="Reviews" title />
      <InfiniteMovingCardsDemo />
      <Footer />
    </MantineProvider>
  );
}
