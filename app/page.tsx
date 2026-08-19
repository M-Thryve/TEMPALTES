import Hero from "@/components/sections/Hero";
import CompanyOverview from "@/components/sections/CompanyOverview";
import ServiceGrid from "@/components/sections/ServiceGrid";
import StorageTypeGrid from "@/components/sections/StorageTypeGrid";
import GalleryGrid from "@/components/sections/GalleryGrid";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import SecurityStrip from "@/components/sections/SecurityStrip";
import Testimonials from "@/components/sections/Testimonials";
import FaqAccordion from "@/components/sections/FaqAccordion";
import CtaBand from "@/components/sections/CtaBand";
import Partners from "@/components/sections/Partners";
import { homeData } from "@/content/data/home";

export default function HomePage() {
  return (
    <>
      <Hero {...homeData.hero} />
      <CompanyOverview {...homeData.overview} />
      <ServiceGrid items={homeData.services} />
      <StorageTypeGrid items={homeData.storageTypes} />
      <GalleryGrid items={homeData.gallery} />
      <IndustriesGrid items={homeData.industries} />
      <SecurityStrip items={homeData.security} />
      <Testimonials items={homeData.testimonials} />
      <FaqAccordion items={homeData.faqs} />
      <CtaBand cta={homeData.cta} />
      <Partners items={homeData.partners} />
    </>
  );
}
