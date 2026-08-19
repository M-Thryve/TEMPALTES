import PageHero from "@/components/sections/PageHero";
import IndustryDetail from "@/components/sections/IndustryDetail";
import CtaBand from "@/components/sections/CtaBand";
import { industriesData } from "@/content/data/industries";

export default function IndustriesPage() {
  return (
    <>
      <PageHero {...industriesData.hero} />
      <IndustryDetail items={industriesData.details} />
      <CtaBand cta={industriesData.cta} />
    </>
  );
}
