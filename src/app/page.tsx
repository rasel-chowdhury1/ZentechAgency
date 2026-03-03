import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Process from "@/components/sections/Process";
import DarkServices from "@/components/sections/DarkServices";
import FAQ from "@/components/sections/FAQ";
import BlogPreview from "@/components/sections/BlogPreview";
import CTA from "@/components/sections/CTA";
import HeroMosaic from "@/components/sections/HeroMosaic";
import WhyUs from "@/components/sections/WhyUs";

export default function HomePage() {
  return (
    <>
      {/* <Hero /> */}
      <HeroMosaic/>
      <WhyUs />
      <ServicesGrid />
      <DarkServices />
      <FAQ />
      <BlogPreview />
      <CTA />
    </>
  );
}
