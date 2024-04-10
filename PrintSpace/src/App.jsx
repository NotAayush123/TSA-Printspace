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
import { StickyScrollRevealDemo } from "./components/ui/StickyScrollHero";
import { Footer } from "./components/ui/Footer";
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
        <StyledButton text="Featured Projects" title />
      </div>
      <Footer />
    </MantineProvider>
  );
}
