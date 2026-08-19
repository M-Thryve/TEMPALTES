export type RepeaterItem<T> = T;

export type SpecItem = {
  label: string;
  value: string;
};

export type StatItem = {
  num: string;
  label: string;
};

export type ImageItem = {
  image: string;
  alt: string;
};

export type IconItem = {
  icon: string;
  title: string;
  description: string;
};

export type FeatureItem = {
  text: string;
};

export type ServiceSpec = {
  label: string;
  value: string;
};

export type ServiceFeature = {
  text: string;
};

export type WarehouseService = {
  id: string;
  icon: string;
  title: string;
  description: string;
  image: string;
  features: ServiceFeature[];
  specs: ServiceSpec[];
};

export type StorageType = {
  label: string;
  icon: string;
};

export type Industry = {
  name: string;
  icon: string;
  image: string;
  description: string;
  challenges: FeatureItem[];
  solutions: FeatureItem[];
  clients: string;
};

export type SecurityFeature = {
  icon: string;
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  title: string;
};

export type FaqItem = {
  category: string;
  question: string;
  answer: string;
};

export type Partner = {
  name: string;
};

export type FacilitySpecCategory = {
  category: string;
  items: SpecItem[];
};

export type LocationPoint = {
  icon: string;
  label: string;
  value: string;
};

export type Value = {
  icon: string;
  title: string;
  description: string;
};

export type Benefit = {
  icon: string;
  label: string;
  description: string;
};

export type OpenRole = {
  title: string;
  dept: string;
  type: string;
  location: string;
  description: string;
};

export type LegalSection = {
  title: string;
  body: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type ChecklistItem = {
  text: string;
};

export type BadgeItem = {
  num: string;
  label: string;
};

export type IntakeConfig = {
  company_name: string;
  company_logo: string | null;
  primary_cta_label: string;
  primary_cta_target: "quote" | "contact" | "facilities";

  contact_phone: string;
  contact_email: string;
  contact_address: string;
  contact_hours: string;
  google_maps_embed_url: string;
  tour_booking_url: string;
  careers_contact_email: string;

  hero_title: string;
  hero_description: string;
  hero_image: string;
  hero_stats: StatItem[];
  company_overview: string;
  overview_checklist: ChecklistItem[];
  overview_badge: BadgeItem[];

  warehouse_services: WarehouseService[];
  storage_types: StorageType[];
  showcase_specs: SpecItem[];
  showcase_images: ImageItem[];
  industries: Industry[];
  security_features: SecurityFeature[];
  testimonials: Testimonial[];
  faqs: FaqItem[];
  partners: Partner[];

  services_hero_title: string;
  services_hero_description: string;

  facilities_hero_title: string;
  facilities_hero_description: string;
  facility_stats: StatItem[];
  gallery: ImageItem[];
  facility_specs: FacilitySpecCategory[];
  location_points: LocationPoint[];

  industries_hero_title: string;
  industries_hero_description: string;

  faq_hero_title: string;
  faq_hero_description: string;

  quote_hero_title: string;
  quote_hero_description: string;
  quote_form_intro: string;
  quote_form_button_label: string;
  quote_form_enabled_fields: string[];
  quote_process_steps: ProcessStep[];

  contact_hero_title: string;
  contact_hero_description: string;
  contact_form_intro: string;
  tour_intro: string;

  about_hero_title: string;
  about_hero_description: string;
  about_stats: StatItem[];
  mission_values: Value[];
  capabilities: ChecklistItem[];
  certifications: ChecklistItem[];

  careers_hero_title: string;
  careers_hero_description: string;
  benefits: Benefit[];
  open_roles: OpenRole[];

  privacy_policy_body: LegalSection[];
  terms_conditions_body: LegalSection[];
};
