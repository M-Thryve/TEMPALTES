import { intake } from "@/content/intake";

export const facilitiesData = {
  hero: {
    heading: intake.facilities_hero_title,
    description: intake.facilities_hero_description,
  },
  stats: intake.facility_stats,
  gallery: intake.gallery,
  specs: intake.facility_specs,
  security: intake.security_features,
  location: {
    items: intake.location_points,
    tour_url: intake.tour_booking_url || undefined,
  },
  cta: { label: intake.primary_cta_label, href: `/${intake.primary_cta_target}` },
};
