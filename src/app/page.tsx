import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsGrid } from "@/components/sections/SkillsGrid";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 sm:gap-24">
      <HeroSection />
      <ProjectsSection />
      <SkillsGrid />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
