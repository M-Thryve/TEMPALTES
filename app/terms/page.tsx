import PageHero from "@/components/sections/PageHero";
import LegalBody from "@/components/sections/LegalBody";
import { termsData } from "@/content/data/terms";

export default function TermsPage() {
  return (
    <>
      <PageHero {...termsData.hero} />
      <LegalBody
        sections={termsData.legal.sections}
        legal_entity={termsData.legal.legal_entity}
      />
    </>
  );
}
