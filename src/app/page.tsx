import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Process from "@/components/sections/Process";
import DarkServices from "@/components/sections/DarkServices";
import FAQ from "@/components/sections/FAQ";
import BlogPreview from "@/components/sections/BlogPreview";
import CTA from "@/components/sections/CTA";
import HeroMosaic from "@/components/sections/HeroMosaic";
import WhyUs from "@/components/sections/WhyUs";
import TrustIndicators from "@/components/sections/TrustIndicators";
import HowWeWork from "@/components/sections/HowWeWork";

export default function HomePage() {
  return (
    <>
      {/* <Hero /> */}
      <HeroMosaic/>
      {/* <WhyUs /> */}
      <ServicesGrid />
      <TrustIndicators />
      <HowWeWork />
      {/* <DarkServices /> */}
      <FAQ />
      {/* <BlogPreview /> */}
      <CTA />
    </>
  );
}
