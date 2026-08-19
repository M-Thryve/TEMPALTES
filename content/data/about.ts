import { intake } from "@/content/intake";

export const aboutData = {
  hero: {
    heading: intake.about_hero_title,
    description: intake.about_hero_description,
  },
  overview: {
    body: intake.company_overview,
    checklist: intake.overview_checklist,
    stats: intake.about_stats,
  },
  values: intake.mission_values,
  capabilities: intake.capabilities,
  certifications: intake.certifications,
  partners: intake.partners,
  cta: { label: intake.primary_cta_label, href: `/${intake.primary_cta_target}` },
};
