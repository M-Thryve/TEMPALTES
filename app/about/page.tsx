import PageHero from "@/components/sections/PageHero";
import CompanyOverview from "@/components/sections/CompanyOverview";
import ValuesGrid from "@/components/sections/ValuesGrid";
import CapabilitiesList from "@/components/sections/CapabilitiesList";
import CertificationsCard from "@/components/sections/CertificationsCard";
import Partners from "@/components/sections/Partners";
import CtaBand from "@/components/sections/CtaBand";
import { aboutData } from "@/content/data/about";

export default function AboutPage() {
  return (
    <>
      <PageHero {...aboutData.hero} />
      <CompanyOverview
        body={aboutData.overview.body}
        checklist={aboutData.overview.checklist}
        stats={aboutData.overview.stats}
      />
      <ValuesGrid items={aboutData.values} />
      <CapabilitiesList items={aboutData.capabilities} />
      <CertificationsCard items={aboutData.certifications} />
      <Partners items={aboutData.partners} />
      <CtaBand cta={aboutData.cta} />
    </>
  );
}
