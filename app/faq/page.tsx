import PageHero from "@/components/sections/PageHero";
import FaqCategoryTabs from "@/components/sections/FaqCategoryTabs";
import CtaBand from "@/components/sections/CtaBand";
import { faqData } from "@/content/data/faq";

export default function FaqPage() {
  return (
    <>
      <PageHero {...faqData.hero} />
      <FaqCategoryTabs items={faqData.categories} />
      <CtaBand cta={faqData.cta} />
    </>
  );
}
