import PageHero from "@/components/sections/PageHero";
import LegalBody from "@/components/sections/LegalBody";
import { privacyData } from "@/content/data/privacy";

export default function PrivacyPage() {
  return (
    <>
      <PageHero {...privacyData.hero} />
      <LegalBody
        sections={privacyData.legal.sections}
        legal_entity={privacyData.legal.legal_entity}
      />
    </>
  );
}
