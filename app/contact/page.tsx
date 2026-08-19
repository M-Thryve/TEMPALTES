import PageHero from "@/components/sections/PageHero";
import ContactInfo from "@/components/sections/ContactInfo";
import ContactForm from "@/components/sections/ContactForm";
import GoogleMaps from "@/components/sections/GoogleMaps";
import ScheduleTour from "@/components/sections/ScheduleTour";
import { contactData } from "@/content/data/contact";

export default function ContactPage() {
  return (
    <>
      <PageHero {...contactData.hero} />
      <ContactInfo {...contactData.contactInfo} />
      <ContactForm intro={contactData.form.intro} />
      <GoogleMaps embed_url={contactData.maps.embed_url} address={contactData.maps.address} />
      <ScheduleTour intro={contactData.scheduleTour.intro} url={contactData.scheduleTour.url} />
    </>
  );
}
