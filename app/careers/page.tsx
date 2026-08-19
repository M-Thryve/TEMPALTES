import PageHero from "@/components/sections/PageHero";
import BenefitsGrid from "@/components/sections/BenefitsGrid";
import OpenRoles from "@/components/sections/OpenRoles";
import { careersData } from "@/content/data/careers";

export default function CareersPage() {
  return (
    <>
      <PageHero {...careersData.hero} />
      <BenefitsGrid items={careersData.benefits} />
      <OpenRoles
        items={careersData.openRoles}
        contact_email={careersData.contact_email}
      />
    </>
  );
}
