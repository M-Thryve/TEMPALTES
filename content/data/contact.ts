import { intake } from "@/content/intake";

export const contactData = {
  hero: {
    heading: intake.contact_hero_title,
    description: intake.contact_hero_description,
  },
  contactInfo: {
    phone: intake.contact_phone,
    email: intake.contact_email,
    address: intake.contact_address,
    hours: intake.contact_hours,
  },
  form: {
    intro: intake.contact_form_intro,
  },
  maps: {
    embed_url: intake.google_maps_embed_url,
    address: intake.contact_address,
  },
  scheduleTour: {
    intro: intake.tour_intro,
    url: intake.tour_booking_url || undefined,
  },
};
