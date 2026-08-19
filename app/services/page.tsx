import PageHero from "@/components/sections/PageHero";
import ServiceDetail from "@/components/sections/ServiceDetail";
import CtaBand from "@/components/sections/CtaBand";
import { servicesData } from "@/content/data/services";

export default function ServicesPage() {
  return (
    <>
      <PageHero {...servicesData.hero} />
      <ServiceDetail items={servicesData.details} />
      <CtaBand cta={servicesData.cta} />
    </>
  );
}
