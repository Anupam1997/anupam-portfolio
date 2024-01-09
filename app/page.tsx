import AboutMe from "./components/aboutme/aboutme";
import Contact from "./components/contact/contact";
import HeroSection from "./components/heroSection/hero";
import { Projects } from "./components/projects/projects";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Projects />
      <AboutMe />
      <Contact />
    </>
  );
}
