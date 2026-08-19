export type ExtensionId =
  | "crm_lead_management"
  | "email_service"
  | "google_maps"
  | "cloudinary"
  | "calendly"
  | "google_calendar"
  | "tawk_to"
  | "crisp"
  | "google_analytics";

export type CrmLeadConfig = {
  enabled: boolean;
  quote_form_endpoint: string;
  contact_form_endpoint: string;
  api_key: string;
};

export type EmailServiceConfig = {
  enabled: boolean;
  quote_notification_email: string;
  contact_notification_email: string;
};

export type GoogleMapsConfig = {
  enabled: boolean;
  google_maps_embed_url: string;
};

export type CloudinaryConfig = {
  enabled: boolean;
  cloud_name: string;
  folder: string;
};

export type CalendlyConfig = {
  enabled: boolean;
  tour_booking_url: string;
};

export type GoogleCalendarConfig = {
  enabled: boolean;
  tour_booking_url: string;
};

export type TawkToConfig = {
  enabled: boolean;
  widget_id: string;
};

export type CrispConfig = {
  enabled: boolean;
  widget_id: string;
};

export type GoogleAnalyticsConfig = {
  enabled: boolean;
  analytics_id: string;
};

export type ExtensionsConfig = {
  crm_lead_management: CrmLeadConfig;
  email_service: EmailServiceConfig;
  google_maps: GoogleMapsConfig;
  cloudinary: CloudinaryConfig;
  calendly: CalendlyConfig;
  google_calendar: GoogleCalendarConfig;
  tawk_to: TawkToConfig;
  crisp: CrispConfig;
  google_analytics: GoogleAnalyticsConfig;
};

export const extensions: ExtensionsConfig = {
  crm_lead_management: {
    enabled: false,
    quote_form_endpoint: "",
    contact_form_endpoint: "",
    api_key: "",
  },
  email_service: {
    enabled: false,
    quote_notification_email: "",
    contact_notification_email: "",
  },
  google_maps: {
    enabled: false,
    google_maps_embed_url: "",
  },
  cloudinary: {
    enabled: false,
    cloud_name: "",
    folder: "",
  },
  calendly: {
    enabled: false,
    tour_booking_url: "",
  },
  google_calendar: {
    enabled: false,
    tour_booking_url: "",
  },
  tawk_to: {
    enabled: false,
    widget_id: "",
  },
  crisp: {
    enabled: false,
    widget_id: "",
  },
  google_analytics: {
    enabled: false,
    analytics_id: "",
  },
};
