import { intake } from "@/content/intake";

export const homeData = {
  hero: {
    heading: intake.hero_title,
    description: intake.hero_description,
    image: intake.hero_image,
    cta: { label: intake.primary_cta_label, href: `/${intake.primary_cta_target}` },
    stats: intake.hero_stats,
  },
  overview: {
    body: intake.company_overview,
    checklist: intake.overview_checklist,
    badge: intake.overview_badge,
  },
  services: intake.warehouse_services.map((s) => ({
    id: s.id,
    icon: s.icon,
    title: s.title,
    description: s.description,
  })),
  storageTypes: intake.storage_types,
  gallery: intake.showcase_images,
  industries: intake.industries.map((i) => ({
    name: i.name,
    image: i.image,
    description: i.description,
  })),
  security: intake.security_features,
  testimonials: intake.testimonials,
  faqs: intake.faqs,
  cta: { label: intake.primary_cta_label, href: `/${intake.primary_cta_target}` },
  partners: intake.partners,
};
