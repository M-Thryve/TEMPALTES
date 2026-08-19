import { useState } from 'react'

interface FAQProps {
  setPage: (page: string) => void
}

const categories = [
  {
    name: 'General',
    faqs: [
      { q: 'What is General Warehouse Provider?', a: 'General Warehouse Provider is a professionally managed warehousing company operating over 500,000 sq ft of storage space across three campuses in Metro City. We serve commercial, industrial, e-commerce, and logistics clients with flexible, secure, and scalable storage solutions.' },
      { q: 'How long have you been in operation?', a: 'We have been operating since 1998 — over 25 years of continuous warehouse operations in Metro City.' },
      { q: 'How many clients do you serve?', a: 'We currently serve over 300 active clients across 12 industry sectors, ranging from small businesses with a few pallets to large enterprises with dedicated facility bays.' },
      { q: 'Do you offer site tours?', a: 'Yes. We welcome prospective clients to tour our facilities with our operations team. Contact us to schedule a walk-through at a time that suits you.' },
    ],
  },
  {
    name: 'Storage',
    faqs: [
      { q: 'What types of storage do you offer?', a: 'We offer pallet racking (selective, drive-in, push-back), bulk floor storage, climate-controlled units, hazmat-certified bays (Class I–VI), bonded storage, and dedicated leased warehouse bays. We also offer cross-docking and transloading services.' },
      { q: 'What is your minimum storage requirement?', a: 'Our minimum is 10 pallets or 500 sq ft for general storage. For climate-controlled or hazmat bays, the minimum is typically 1,000 sq ft. Dedicated lease bays start at 10,000 sq ft.' },
      { q: 'Do you offer short-term or temporary storage?', a: 'Yes. We offer flexible agreements from 30-day minimums to multi-year contracts. Short-term rates are available for project-based or seasonal overflow storage.' },
      { q: 'Can I store hazardous materials?', a: 'Yes. We operate DOT and OSHA-compliant hazmat-certified bays for Class I through Class VI materials, including flammables, corrosives, and oxidizers. All hazmat storage clients must provide an SDS and comply with our hazmat storage protocol.' },
    ],
  },
  {
    name: 'Facilities',
    faqs: [
      { q: 'What are your facility operating hours?', a: 'Standard hours are Monday–Friday 6:00 AM–10:00 PM and Saturday–Sunday 8:00 AM–6:00 PM. Clients on dedicated lease agreements can access 24/7 access arrangements.' },
      { q: 'How many loading docks do you have?', a: 'Our facilities have 48 dock-level loading doors and 12 grade-level drive-in positions across three campuses, with a 5-acre secured truck court.' },
      { q: 'What equipment do you have on-site?', a: 'We maintain reach forklifts, counterbalance lifts (up to 10,000 lb capacity), electric pallet jacks, stretch wrappers, and dock levelers. Crane access (5-ton and 10-ton bridge cranes) is available in our heavy industrial bay.' },
      { q: 'Do you have climate-controlled storage?', a: 'Yes. We have 80,000 sq ft of climate-controlled space ranging from 34°F–72°F with humidity control between 35–60% RH for pharmaceutical, electronics, fine goods, and other sensitive products.' },
    ],
  },
  {
    name: 'Pricing',
    faqs: [
      { q: 'How is storage priced?', a: 'Storage is priced by pallet position (per pallet per month), square footage (per sq ft per month), or by dedicated bay lease (per sq ft per year). Pricing depends on storage type, volume, and contract length. Request a quote for a custom rate sheet.' },
      { q: 'Are there any setup or move-in fees?', a: 'Standard general storage agreements have no setup fees. Specialized configurations (custom racking, climate zones, hazmat compliance setup) may incur a one-time configuration fee, which will be quoted in advance.' },
      { q: 'Do you offer volume discounts?', a: 'Yes. Clients committing to 10,000 sq ft or more, or to multi-year terms, receive preferential rates. Contact our commercial team to discuss volume pricing.' },
      { q: 'What payment terms do you offer?', a: 'We invoice monthly in advance on standard agreements. Annual pre-payment discounts are available. We accept ACH transfer, wire transfer, and major corporate credit cards.' },
    ],
  },
  {
    name: 'Security',
    faqs: [
      { q: 'How do you secure my inventory?', a: 'We deploy 200+ 4K CCTV cameras with 90-day cloud archive, biometric and card-based access control with individual logs, perimeter motion sensors, on-site security personnel during all operating hours, and overnight mobile patrol.' },
      { q: 'Is my inventory insured?', a: 'All storage agreements include up to $10M per-incident cargo insurance. Higher coverage limits are available for additional premium. We recommend clients also maintain their own goods-in-transit insurance.' },
      { q: 'Who has access to my storage area?', a: 'Access is restricted to named individuals you authorize. All entries are logged by timestamp and individual credential. You receive access reports on request or through your IMS portal.' },
      { q: 'What happens in case of an incident?', a: 'We have an incident response protocol that includes immediate notification, CCTV footage retrieval, and claims processing support. Our emergency contact line is available 24/7 to all active clients.' },
    ],
  },
  {
    name: 'Inquiry & Onboarding',
    faqs: [
      { q: 'How do I get started?', a: 'Submit a Request a Quote form with your storage requirements. Our commercial team will respond within 24 business hours with a custom proposal and next steps.' },
      { q: 'How long does onboarding take?', a: 'For standard general storage, onboarding typically takes 2–5 business days from signed agreement to active storage availability. Custom configurations or hazmat bays may take 5–10 business days.' },
      { q: 'Can I visit before committing?', a: 'Absolutely. We encourage a facility tour before signing any agreement. Contact us to schedule a visit with our operations team.' },
      { q: 'Do you have a minimum contract length?', a: 'Standard minimum is 30 days for general storage. Dedicated bay leases start at 6 months. We also offer project-based agreements for defined durations.' },
    ],
  },
]

export default function FAQ({ setPage }: FAQProps) {
  const [activeCategory, setActiveCategory] = useState('General')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const go = (page: string) => { setPage(page); window.scrollTo(0, 0) }

  const current = categories.find(c => c.name === activeCategory)!

  return (
    <div>
      {/* Hero */}
      <section className="py-24 bg-[#0F4C81]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#43A047] text-sm font-semibold uppercase tracking-widest mb-3">FAQ</div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>Frequently Asked Questions</h1>
          <p className="text-white/70 text-lg max-w-2xl">Everything you need to know about our facilities, services, pricing, and onboarding process.</p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat.name}
                onClick={() => { setActiveCategory(cat.name); setOpenFaq(null) }}
                className={`px-5 py-2.5 rounded text-sm font-semibold transition-colors ${
                  activeCategory === cat.name
                    ? 'bg-[#0F4C81] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* FAQs */}
          <div className="space-y-3">
            {current.faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-100 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#2F3A45] text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>{faq.q}</span>
                  <svg className={`w-5 h-5 text-[#0F4C81] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 border-t border-gray-50">
                    <p className="text-gray-600 text-sm leading-relaxed pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-100 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#2F3A45] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Still Have Questions?</h2>
          <p className="text-gray-600 mb-7">Our team is ready to answer any question about our facilities, services, or pricing.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button onClick={() => go('contact')} className="px-7 py-3.5 bg-[#0F4C81] hover:bg-[#0a3560] text-white font-semibold rounded transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>Contact Us</button>
            <button onClick={() => go('quote')} className="px-7 py-3.5 bg-[#43A047] hover:bg-[#388E3C] text-white font-semibold rounded transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>Request a Quote</button>
          </div>
        </div>
      </section>
    </div>
  )
}
