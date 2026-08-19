import { intake } from "@/content/intake";

export const industriesData = {
  hero: {
    heading: intake.industries_hero_title,
    description: intake.industries_hero_description,
  },
  details: intake.industries,
  cta: { label: intake.primary_cta_label, href: `/${intake.primary_cta_target}` },
};
