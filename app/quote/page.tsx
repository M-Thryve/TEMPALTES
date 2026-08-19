import PageHero from "@/components/sections/PageHero";
import QuoteForm from "@/components/sections/QuoteForm";
import { quoteData } from "@/content/data/quote";

export default function QuotePage() {
  return (
    <>
      <PageHero {...quoteData.hero} />
      <QuoteForm
        intro={quoteData.form.intro}
        button_label={quoteData.form.button_label}
        process={quoteData.form.process}
      />
    </>
  );
}
