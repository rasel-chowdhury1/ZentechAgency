import Hero from "@/components/sections/Hero";
import Logos from "@/components/sections/Logos";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Process from "@/components/sections/Process";
import DarkServices from "@/components/sections/DarkServices";
import FAQ from "@/components/sections/FAQ";
import BlogPreview from "@/components/sections/BlogPreview";
import CTA from "@/components/sections/CTA";
import HeroMosaic from "@/components/sections/HeroMosaic";

export default function HomePage() {
  return (
    <>
      {/* <Hero /> */}
      <HeroMosaic/>
      <Logos />
      <ServicesGrid />
      <Process />
      <DarkServices />
      <FAQ />
      <BlogPreview />
      <CTA />
    </>
  );
}
