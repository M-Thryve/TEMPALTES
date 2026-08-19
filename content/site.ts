import { intake } from "./intake";

const ctaHref: Record<string, string> = {
  quote: "/quote",
  contact: "/contact",
  facilities: "/facilities",
};

const primaryCtaHref = ctaHref[intake.primary_cta_target] ?? "/quote";

export type Cta = {
  label: string;
  href: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type SiteContent = {
  companyName: string;
  logo: string | null;
  headerCta: Cta;
  navLinks: NavLink[];
  footer: {
    tagline: string;
    quickLinks: NavLink[];
    serviceLinks: NavLink[];
    contact: {
      address: string;
      phone: string;
      email: string;
      hours: string;
    };
    socialLinks: SocialLink[];
    legalLinks: NavLink[];
  };
};

export const site: SiteContent = {
  companyName: intake.company_name,
  logo: intake.company_logo,
  headerCta: { label: intake.primary_cta_label, href: primaryCtaHref },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Facilities", href: "/facilities" },
    { label: "Industries", href: "/industries" },
    { label: "FAQs", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  footer: {
    tagline:
      "Trusted warehousing solutions for businesses of all sizes.",
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Facilities", href: "/facilities" },
      { label: "Industries", href: "/industries" },
      { label: "FAQs", href: "/faq" },
    ],
    serviceLinks: intake.warehouse_services.slice(0, 5).map((s) => ({
      label: s.title,
      href: "/services",
    })),
    contact: {
      address: intake.contact_address,
      phone: intake.contact_phone,
      email: intake.contact_email,
      hours: intake.contact_hours,
    },
    socialLinks: [
      { label: "LinkedIn", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "Facebook", href: "#" },
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Careers", href: "/careers" },
    ],
  },
};

export { primaryCtaHref };
