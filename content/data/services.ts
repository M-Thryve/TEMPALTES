import { intake } from "@/content/intake";

export const servicesData = {
  hero: {
    heading: intake.services_hero_title,
    description: intake.services_hero_description,
  },
  details: intake.warehouse_services,
  cta: { label: intake.primary_cta_label, href: `/${intake.primary_cta_target}` },
};
