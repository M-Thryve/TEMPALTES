import type { IntakeConfig } from "./schema";

export const intake: IntakeConfig = {
  company_name: "General Warehouse Provider",
  company_logo: null,
  primary_cta_label: "Request a Quote",
  primary_cta_target: "quote",

  contact_phone: "+1 (312) 555-0100",
  contact_email: "info@warehouse.example.com",
  contact_address: "1234 Industrial Parkway, Chicago, IL 60601",
  contact_hours: "Mon-Fri 6:00 AM - 10:00 PM | Sat 8:00 AM - 4:00 PM",
  google_maps_embed_url:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2973.123456789!2d-87.6298!3d41.8781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDUyJzQxLjIiTiA4N8KwMzcnNDcuMyJX!5e0!3m2!1sen!2sus!4v1234567890",
  tour_booking_url: "https://calendly.com/warehouse-tour",
  careers_contact_email: "careers@warehouse.example.com",

  hero_title: "Reliable Warehousing & Storage Solutions",
  hero_description:
    "Secure, climate-controlled facilities with flexible terms and 24/7 access. Your inventory, managed with precision.",
  hero_image: "/images/hero-warehouse.jpg",
  hero_stats: [
    { num: "500K+", label: "Sq. Ft. of Warehouse Space" },
    { num: "99.8%", label: "Inventory Accuracy" },
    { num: "24/7", label: "Security & Access" },
    { num: "15+", label: "Years in Business" },
  ],
  company_overview:
    "We provide comprehensive warehousing solutions for businesses of all sizes. Our state-of-the-art facilities combine advanced inventory management with flexible storage options, ensuring your products are handled efficiently and securely from receiving to distribution.",
  overview_checklist: [
    { text: "Climate-controlled storage environments" },
    { text: "Real-time inventory tracking and reporting" },
    { text: "Flexible lease terms from short to long-term" },
    { text: "Strategic locations with highway access" },
    { text: "Dedicated account management" },
  ],
  overview_badge: [
    { num: "15+", label: "Years Experience" },
    { num: "200+", label: "Active Clients" },
  ],

  warehouse_services: [
    {
      id: "commercial",
      icon: "warehouse",
      title: "Commercial Storage",
      description:
        "Flexible warehouse space for businesses of every size, from startups to enterprises.",
      image: "/images/service-commercial.jpg",
      features: [
        { text: "Flexible space allocation" },
        { text: "Monthly or annual terms" },
        { text: "Climate-controlled options" },
        { text: "24/7 facility access" },
      ],
      specs: [
        { label: "Min. Space", value: "1 Pallet" },
        { label: "Max. Space", value: "50,000+ sq ft" },
        { label: "Access", value: "24/7" },
        { label: "Terms", value: "Flexible" },
      ],
    },
    {
      id: "industrial",
      icon: "cog",
      title: "Industrial Storage",
      description:
        "Heavy-duty storage solutions for manufacturing, machinery, and raw materials.",
      image: "/images/service-industrial.jpg",
      features: [
        { text: "Heavy equipment handling" },
        { text: "Floor-level storage available" },
        { text: "Hazmat-certified zones" },
        { text: "Loading dock access" },
      ],
      specs: [
        { label: "Weight Limit", value: "Unlimited" },
        { label: "Ceiling Height", value: "32 ft" },
        { label: "Docks", value: "12+" },
        { label: "Crane", value: "Available" },
      ],
    },
    {
      id: "inventory",
      icon: "clipboard",
      title: "Inventory Management",
      description:
        "Complete inventory tracking, reporting, and management from receiving to dispatch.",
      image: "/images/service-inventory.jpg",
      features: [
        { text: "Real-time inventory tracking" },
        { text: "Barcode and RFID scanning" },
        { text: "Automated reorder alerts" },
        { text: "Custom reporting dashboards" },
      ],
      specs: [
        { label: "Accuracy", value: "99.8%" },
        { label: "Reporting", value: "Real-time" },
        { label: "Integration", value: "API / EDI" },
        { label: "Audits", value: "Cycle Counts" },
      ],
    },
    {
      id: "distribution",
      icon: "truck",
      title: "Distribution Services",
      description:
        "Streamlined order fulfillment and distribution to keep your supply chain moving.",
      image: "/images/service-distribution.jpg",
      features: [
        { text: "Same-day shipping available" },
        { text: "Multi-carrier rate shopping" },
        { text: "Cross-docking capabilities" },
        { text: "Regional and national reach" },
      ],
      specs: [
        { label: "Orders/Day", value: "5,000+" },
        { label: "Carriers", value: "15+" },
        { label: "Accuracy", value: "99.9%" },
        { label: "Cutoff", value: "5 PM" },
      ],
    },
    {
      id: "cold-storage",
      icon: "snowflake",
      title: "Cold Storage",
      description:
        "Temperature-controlled environments for perishable and sensitive goods.",
      image: "/images/service-cold.jpg",
      features: [
        { text: "2-8°C and -20°C zones" },
        { text: "FDA-compliant monitoring" },
        { text: "Temperature logging 24/7" },
        { text: "FIFO/FEFO rotation" },
      ],
      specs: [
        { label: "Temp Range", value: "-20°C to 8°C" },
        { label: "Monitoring", value: "24/7" },
        { label: "Compliance", value: "FDA / SQF" },
        { label: "Capacity", value: "50K sq ft" },
      ],
    },
    {
      id: "fulfillment",
      icon: "package",
      title: "E-Commerce Fulfillment",
      description:
        "Pick, pack, and ship solutions designed for online retail operations.",
      image: "/images/service-fulfillment.jpg",
      features: [
        { text: "Shopify / Amazon integration" },
        { text: "Branded packaging available" },
        { text: "Returns processing" },
        { text: "Real-time order tracking" },
      ],
      specs: [
        { label: "SLA", value: "Same-day" },
        { label: "Integration", value: "API" },
        { label: "Returns", value: "Full service" },
        { label: "Platforms", value: "All major" },
      ],
    },
  ],

  storage_types: [
    { label: "Pallet Storage", icon: "grid" },
    { label: "Bulk Storage", icon: "archive" },
    { label: "Shelving Systems", icon: "layers" },
    { label: "Cold Storage", icon: "snowflake" },
    { label: "Hazmat Storage", icon: "shield" },
    { label: "Container Storage", icon: "box" },
    { label: "Cross-Dock", icon: "refresh" },
    { label: "Value-Added Services", icon: "star" },
  ],

  showcase_specs: [
    { label: "Total Area", value: "500,000+ sq ft" },
    { label: "Clear Height", value: "32 feet" },
    { label: "Loading Docks", value: "12 dock-high" },
    { label: "Fire Protection", value: "ESFR Sprinklers" },
  ],
  showcase_images: [
    { image: "/images/gallery-1.jpg", alt: "Warehouse interior with organized pallet racking" },
    { image: "/images/gallery-2.jpg", alt: "Loading dock operations" },
    { image: "/images/gallery-3.jpg", alt: "Inventory management system" },
    { image: "/images/gallery-4.jpg", alt: "Climate-controlled storage area" },
    { image: "/images/gallery-5.jpg", alt: "Fleet of delivery vehicles" },
    { image: "/images/gallery-6.jpg", alt: "Secure facility entrance" },
  ],

  industries: [
    {
      name: "Retail & E-Commerce",
      icon: "shopping-cart",
      image: "/images/industry-retail.jpg",
      description:
        "Scalable storage and fulfillment for seasonal peaks and growth.",
      challenges: [
        { text: "Unpredictable demand fluctuations" },
        { text: "Fast-growing SKU counts" },
        { text: "Last-mile delivery pressure" },
      ],
      solutions: [
        { text: "Elastic storage capacity" },
        { text: "Real-time inventory visibility" },
        { text: "Integrated pick-pack-ship operations" },
      ],
      clients: "Fashion, electronics, consumer goods, and home goods retailers",
    },
    {
      name: "Manufacturing",
      icon: "cog",
      image: "/images/industry-manufacturing.jpg",
      description:
        "Just-in-time storage and parts distribution to keep production lines running.",
      challenges: [
        { text: "Just-in-time delivery requirements" },
        { text: "Oversized or heavy materials" },
        { text: "Complex bill of materials" },
      ],
      solutions: [
        { text: "Dedicated staging zones" },
        { text: "Heavy-equipment handling" },
        { text: "Barcode-linked kitting" },
      ],
      clients: "Automotive, aerospace, electronics, and industrial manufacturers",
    },
    {
      name: "Food & Beverage",
      icon: "utensils",
      image: "/images/industry-food.jpg",
      description:
        "Temperature-controlled, FDA-compliant storage with FIFO rotation.",
      challenges: [
        { text: "Temperature sensitivity" },
        { text: "Expiration date management" },
        { text: "Regulatory compliance" },
      ],
      solutions: [
        { text: "Climate-controlled zones" },
        { text: "Lot tracking and FEFO rotation" },
        { text: "FDA and SQF audit support" },
      ],
      clients: "Grocery brands, restaurants, distributors, and food processors",
    },
    {
      name: "Healthcare & Pharmaceuticals",
      icon: "heart",
      image: "/images/industry-healthcare.jpg",
      description:
        "FDA-registered, GDP-compliant storage for medical devices and pharmaceuticals.",
      challenges: [
        { text: "Strict regulatory requirements" },
        { text: "Cold chain integrity" },
        { text: "Serial number tracking" },
      ],
      solutions: [
        { text: "FDA-registered facilities" },
        { text: "2-8°C and -20°C zones" },
        { text: "Serialization and DSCSA compliance" },
      ],
      clients: "Pharmaceutical companies, medical device manufacturers, hospitals",
    },
    {
      name: "Automotive",
      icon: "car",
      image: "/images/industry-auto.jpg",
      description:
        "Parts storage and distribution for OEM and aftermarket supply chains.",
      challenges: [
        { text: "Oversized parts handling" },
        { text: "JIT delivery demands" },
        { text: "Seasonal model changeovers" },
      ],
      solutions: [
        { text: "Custom racking configurations" },
        { text: "Dedicated JIT lanes" },
        { text: "Surge capacity planning" },
      ],
      clients: "OEMs, Tier 1 suppliers, aftermarket distributors",
    },
    {
      name: "Construction",
      icon: "hard-hat",
      image: "/images/industry-construction.jpg",
      description:
        "Equipment and materials storage with flexible access hours.",
      challenges: [
        { text: "Project-based timelines" },
        { text: "Heavy equipment storage" },
        { text: "Site-to-site logistics" },
      ],
      solutions: [
        { text: "Flexible short-term storage" },
        { text: "Outdoor laydown areas" },
        { text: "Job-site delivery coordination" },
      ],
      clients: "General contractors, specialty trades, infrastructure projects",
    },
  ],

  security_features: [
    {
      icon: "video",
      title: "24/7 CCTV Monitoring",
      description:
        "High-definition cameras covering every zone of the facility with 90-day recording retention.",
    },
    {
      icon: "lock",
      title: "Biometric Access Control",
      description:
        "Fingerprint and keycard entry systems with full audit trail logging.",
    },
    {
      icon: "flame",
      title: "Fire Suppression",
      description:
        "ESFR sprinkler systems with smoke detection and alarm integration throughout.",
    },
    {
      icon: "shield",
      title: "Perimeter Security",
      description:
        "Fenced perimeter with gated entry, on-site security personnel, and vehicle inspection.",
    },
  ],

  testimonials: [
    {
      quote:
        "Switching to this facility reduced our logistics costs by 30% while improving delivery times significantly.",
      author: "Sarah Mitchell",
      title: "VP Operations, RetailCo",
    },
    {
      quote:
        "The inventory accuracy and real-time reporting have transformed how we manage our supply chain.",
      author: "James Rodriguez",
      title: "Supply Chain Director, MfgInc",
    },
    {
      quote:
        "Professional team, excellent facilities, and truly flexible terms. They scaled with our growth perfectly.",
      author: "Emily Chen",
      title: "CEO, FastGrow Commerce",
    },
  ],

  faqs: [
    {
      category: "General",
      question: "What types of businesses do you serve?",
      answer:
        "We serve businesses of all sizes across retail, manufacturing, food and beverage, healthcare, construction, and more.",
    },
    {
      category: "General",
      question: "What are your minimum storage requirements?",
      answer:
        "We have no long-term minimum commitments. You can start with a single pallet position and scale up as your needs grow.",
    },
    {
      category: "General",
      question: "Where are your facilities located?",
      answer:
        "Our primary facility is at 1234 Industrial Parkway with easy access to I-94 and I-294, 20 minutes from O'Hare International Airport.",
    },
    {
      category: "Pricing",
      question: "How is storage pricing calculated?",
      answer:
        "Pricing is based on space used (per pallet, per sq ft, or per bin), handling frequency, and any value-added services required.",
    },
    {
      category: "Pricing",
      question: "Are there long-term contract requirements?",
      answer:
        "No. We offer flexible month-to-month and annual terms. Many clients start short-term and convert as they see the value.",
    },
    {
      category: "Operations",
      question: "What are your operating hours?",
      answer:
        "Standard operations run Monday through Friday, 6 AM to 10 PM. 24/7 access is available for qualified accounts.",
    },
    {
      category: "Operations",
      question: "Do you handle receiving and shipping?",
      answer:
        "Yes. We manage inbound receiving, inspection, putaway, order picking, packing, and outbound shipping.",
    },
    {
      category: "Security",
      question: "What security measures are in place?",
      answer:
        "24/7 CCTV monitoring, biometric access control, fire suppression, fenced perimeter, and on-site security personnel.",
    },
    {
      category: "Security",
      question: "Is my inventory insured?",
      answer:
        "Basic coverage is included. We also offer expanded cargo insurance options and can work with your existing policy.",
    },
  ],

  partners: [
    { name: "PartnerCo" },
    { name: "SupplyChain Inc" },
    { name: "LogiGroup" },
    { name: "TradeFlow" },
    { name: "WarePro" },
    { name: "DistriTech" },
  ],

  services_hero_title: "Our Warehousing Services",
  services_hero_description:
    "Comprehensive storage and logistics solutions tailored to your business requirements.",

  facilities_hero_title: "Our Facility",
  facilities_hero_description:
    "A modern, purpose-built warehouse designed for maximum efficiency, security, and operational excellence.",
  facility_stats: [
    { num: "500K+", label: "Sq. Ft. Facility" },
    { num: "32ft", label: "Clear Ceiling Height" },
    { num: "12", label: "Loading Docks" },
    { num: "99.8%", label: "Inventory Accuracy" },
  ],
  gallery: [
    { image: "/images/facility-1.jpg", alt: "Main warehouse floor with racking system" },
    { image: "/images/facility-2.jpg", alt: "Loading dock area with trucks" },
    { image: "/images/facility-3.jpg", alt: "Climate-controlled storage section" },
    { image: "/images/facility-4.jpg", alt: "Office and operations center" },
    { image: "/images/facility-5.jpg", alt: "Forklift fleet in staging area" },
    { image: "/images/facility-6.jpg", alt: "Security monitoring room" },
  ],
  facility_specs: [
    {
      category: "Building",
      items: [
        { label: "Total Area", value: "500,000+ sq ft" },
        { label: "Clear Height", value: "32 feet" },
        { label: "Column Spacing", value: "50 x 50 ft" },
        { label: "Floor Load", value: "350 psf" },
      ],
    },
    {
      category: "Operations",
      items: [
        { label: "Loading Docks", value: "12 dock-high" },
        { label: "Drive-In Doors", value: "4 grade-level" },
        { label: "Office Space", value: "5,000 sq ft" },
        { label: "Staging Area", value: "15,000 sq ft" },
      ],
    },
    {
      category: "Environment",
      items: [
        { label: "Temperature", value: "55-80°F" },
        { label: "Humidity", value: "Controlled" },
        { label: "Lighting", value: "LED, 30+ foot-candles" },
        { label: "Fire Protection", value: "ESFR Sprinklers" },
      ],
    },
  ],
  location_points: [
    { icon: "map-pin", label: "Address", value: "1234 Industrial Parkway, Chicago, IL 60601" },
    { icon: "road", label: "Highway Access", value: "I-94 / I-294 interchange, 2 miles" },
    { icon: "train", label: "Rail Access", value: "BNSF Rail spur on-site" },
    { icon: "plane", label: "Airport", value: "20 minutes from O'Hare (ORD)" },
  ],

  industries_hero_title: "Industries We Serve",
  industries_hero_description:
    "Specialized warehousing solutions built around the unique requirements of each sector.",

  faq_hero_title: "Frequently Asked Questions",
  faq_hero_description:
    "Get quick answers to the most common questions about our warehousing services.",

  quote_hero_title: "Request a Quote",
  quote_hero_description:
    "Tell us about your storage needs and we will prepare a custom solution within one business day.",
  quote_form_intro:
    "Fill out the form below and a member of our team will reach out to discuss your specific warehousing requirements.",
  quote_form_button_label: "Submit Quote Request",
  quote_form_enabled_fields: [
    "contact_name",
    "email",
    "phone",
    "company_name",
    "storage_requirement",
    "requirements",
  ],
  quote_process_steps: [
    {
      title: "Tell Us About Your Needs",
      description:
        "Fill out the form with your storage requirements, volume, and timeline.",
    },
    {
      title: "Receive a Custom Proposal",
      description:
        "Our team will prepare a tailored quote within one business day.",
    },
    {
      title: "Tour & Finalize",
      description:
        "Schedule a facility tour, review the proposal, and finalize your storage plan.",
    },
    {
      title: "Get Started",
      description:
        "Begin receiving inventory and managing your stock through our platform.",
    },
  ],

  contact_hero_title: "Contact Us",
  contact_hero_description:
    "Get in touch with our team for inquiries, quotes, or to schedule a facility tour.",
  contact_form_intro:
    "Send us a message and we will get back to you within one business day.",
  tour_intro:
    "See our facility in person. Book a guided tour with one of our operations specialists.",

  about_hero_title: "About Us",
  about_hero_description:
    "A trusted warehousing partner serving businesses since 2010 with reliable, scalable storage solutions.",
  about_stats: [
    { num: "15+", label: "Years in Business" },
    { num: "200+", label: "Active Clients" },
    { num: "99.8%", label: "Accuracy Rate" },
    { num: "500K+", label: "Sq. Ft." },
  ],
  mission_values: [
    {
      icon: "check-circle",
      title: "Reliability",
      description:
        "We do what we say. Every shipment, every count, every deadline — we deliver on our commitments.",
    },
    {
      icon: "eye",
      title: "Transparency",
      description:
        "Real-time visibility into your inventory and operations. No surprises, no hidden costs.",
    },
    {
      icon: "zap",
      title: "Efficiency",
      description:
        "Continuous process improvement to reduce your costs and accelerate your supply chain.",
    },
    {
      icon: "users",
      title: "Partnership",
      description:
        "We succeed when you succeed. Dedicated account management and proactive problem-solving.",
    },
    {
      icon: "shield",
      title: "Safety",
      description:
        "OSHA-compliant operations with ongoing safety training and rigorous quality standards.",
    },
    {
      icon: "lightbulb",
      title: "Innovation",
      description:
        "Investing in technology and automation to keep our clients ahead of the curve.",
    },
  ],
  capabilities: [
    { text: "Pallet-in / pallet-out operations" },
    { text: "Case-level and each-pick fulfillment" },
    { text: "Cross-docking and transloading" },
    { text: "Kitting and light assembly" },
    { text: "Quality inspection and returns processing" },
    { text: "Custom labeling and repackaging" },
    { text: "Temperature-controlled storage" },
    { text: "Hazmat-certified handling" },
  ],
  certifications: [
    { text: "ISO 9001:2015 Certified" },
    { text: "C-TPAT Certified" },
    { text: "FDA Registered Facility" },
    { text: "OSHA VPP Star Site" },
    { text: "SQF Level 2 Certified" },
    { text: "GDP Compliant" },
  ],

  careers_hero_title: "Careers",
  careers_hero_description:
    "Join a growing team that values safety, efficiency, and professional development.",
  benefits: [
    {
      icon: "dollar-sign",
      label: "Competitive Pay",
      description:
        "Above-market wages with performance-based bonuses and annual reviews.",
    },
    {
      icon: "heart",
      label: "Health Benefits",
      description:
        "Comprehensive medical, dental, and vision coverage for employees and families.",
    },
    {
      icon: "trending-up",
      label: "Retirement Plan",
      description:
        "401(k) with company match to help you plan for the future.",
    },
    {
      icon: "calendar",
      label: "Paid Time Off",
      description:
        "Generous PTO policy including vacation, sick leave, and paid holidays.",
    },
    {
      icon: "book-open",
      label: "Training & Growth",
      description:
        "Ongoing professional development, certifications, and promotion opportunities.",
    },
    {
      icon: "shield",
      label: "Safety First",
      description:
        "OSHA-compliant workplace with regular safety training and PPE provided.",
    },
  ],
  open_roles: [
    {
      title: "Warehouse Associate",
      dept: "Operations",
      type: "Full-Time",
      location: "Chicago, IL",
      description:
        "Receive, store, and distribute inventory accurately using our WMS platform.",
    },
    {
      title: "Forklift Operator",
      dept: "Operations",
      type: "Full-Time",
      location: "Chicago, IL",
      description:
        "Safely operate forklifts for loading, unloading, and inventory movement.",
    },
    {
      title: "Inventory Control Specialist",
      dept: "Inventory",
      type: "Full-Time",
      location: "Chicago, IL",
      description:
        "Manage cycle counts, investigate discrepancies, and maintain inventory accuracy.",
    },
    {
      title: "Operations Manager",
      dept: "Management",
      type: "Full-Time",
      location: "Chicago, IL",
      description:
        "Lead daily operations, manage teams, and drive continuous improvement.",
    },
  ],

  privacy_policy_body: [
    {
      title: "Information We Collect",
      body: "We collect personal information you provide directly, such as name, email address, phone number, and company details when you submit forms, request quotes, or contact us. We also collect usage data automatically through cookies and analytics tools.",
    },
    {
      title: "How We Use Your Information",
      body: "We use your information to respond to inquiries, provide warehousing services, send operational communications, improve our website, and comply with legal obligations. We do not sell personal information to third parties.",
    },
    {
      title: "Information Sharing",
      body: "We may share your information with service providers who assist in our operations, when required by law, or with your explicit consent. All third-party providers are contractually obligated to protect your data.",
    },
    {
      title: "Data Security",
      body: "We implement industry-standard security measures including encryption, access controls, and regular security audits. While no method of transmission is 100% secure, we take reasonable precautions to protect your information.",
    },
    {
      title: "Cookies & Tracking",
      body: "Our website uses essential cookies for functionality and optional analytics cookies to understand visitor behavior. You can manage cookie preferences through your browser settings.",
    },
    {
      title: "Your Rights",
      body: "You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us using the information provided on our contact page.",
    },
    {
      title: "Contact Us",
      body: "For questions about this privacy policy or our data practices, please reach out through our contact page or email us directly.",
    },
  ],

  terms_conditions_body: [
    {
      title: "Acceptance of Terms",
      body: "By accessing our website or using our services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.",
    },
    {
      title: "Services Description",
      body: "We provide warehousing, storage, inventory management, and logistics services as described in individual service agreements. Specific terms, pricing, and SLAs are defined in signed contracts between parties.",
    },
    {
      title: "Client Responsibilities",
      body: "Clients are responsible for accurately describing stored goods, maintaining adequate insurance coverage, complying with all applicable laws regarding stored items, and providing timely payment per agreed terms.",
    },
    {
      title: "Liability & Insurance",
      body: "Our liability is limited as defined in the applicable warehouse receipt and service agreement. Clients are encouraged to maintain cargo insurance for full replacement value of stored goods.",
    },
    {
      title: "Payment Terms",
      body: "Invoices are issued monthly and payable within 30 days unless otherwise agreed in writing. Late payments may incur a 1.5% monthly service charge.",
    },
    {
      title: "Termination",
      body: "Either party may terminate services with 30 days written notice. Early termination fees may apply as specified in the service agreement.",
    },
    {
      title: "Governing Law",
      body: "These Terms and all storage agreements are governed by the laws of the State of Illinois. Any disputes shall be resolved in the courts of Cook County, Illinois, or through binding arbitration as mutually agreed.",
    },
  ],
};
