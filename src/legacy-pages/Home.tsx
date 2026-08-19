import { useState } from 'react'

interface HomeProps {
  setPage: (page: string) => void
}

const faqs = [
  { q: 'What types of storage do you offer?', a: 'We offer pallet racking, bulk floor storage, climate-controlled units, hazmat-certified bays, and dedicated secure vaults for high-value goods.' },
  { q: 'What are your facility operating hours?', a: 'Our facilities operate Monday–Friday 6:00 AM–10:00 PM and Saturday–Sunday 8:00 AM–6:00 PM. 24/7 emergency access is available by arrangement.' },
  { q: 'Do you offer short-term storage?', a: 'Yes. We offer flexible terms from 30-day minimums to multi-year agreements to match your operational needs.' },
  { q: 'How do you ensure security?', a: '24/7 CCTV surveillance, biometric access control, perimeter fencing, on-site security personnel, and full insurance coverage.' },
]

const services = [
  { icon: '🏢', title: 'Commercial Storage', desc: 'Scalable storage solutions for retail and commercial inventory, including seasonal flex capacity.' },
  { icon: '🏭', title: 'Industrial Storage', desc: 'Heavy-duty bays for oversized equipment, raw materials, and manufacturing components.' },
  { icon: '📦', title: 'Inventory Storage', desc: 'Organized, labeled, and auditable inventory management for fast-moving goods.' },
  { icon: '📐', title: 'Warehouse Space', desc: 'Dedicated warehouse bays available for lease—configure to your exact operational layout.' },
  { icon: '❄️', title: 'Climate-Controlled', desc: 'Temperature and humidity-controlled units for sensitive goods, pharmaceuticals, and electronics.' },
  { icon: '🔒', title: 'Secure Vaults', desc: 'High-security enclosed storage for documents, valuables, and confidential merchandise.' },
]

const storageTypes = [
  { label: 'Pallet Racking', icon: '📚' },
  { label: 'Bulk Floor', icon: '⬛' },
  { label: 'Cold Storage', icon: '🌡️' },
  { label: 'Hazmat Certified', icon: '⚠️' },
  { label: 'Bonded Storage', icon: '🔐' },
  { label: 'Cross-Docking', icon: '🔄' },
  { label: 'Drive-In Racking', icon: '🚛' },
  { label: 'Mezzanine Storage', icon: '🏗️' },
]

const industries = [
  { name: 'Retail', img: 'https://images.unsplash.com/photo-1589792923962-537704632910?w=400&h=280&fit=crop&auto=format', desc: 'Seasonal surge capacity and SKU-level inventory for retail chains.' },
  { name: 'Manufacturing', img: 'https://images.unsplash.com/photo-1651525670114-2b8117390b28?w=400&h=280&fit=crop&auto=format', desc: 'Raw materials, WIP, and finished goods storage for production lines.' },
  { name: 'E-Commerce', img: 'https://images.unsplash.com/photo-1684695749267-233af13276d0?w=400&h=280&fit=crop&auto=format', desc: 'High-velocity pick-and-pack ready facilities for online retailers.' },
  { name: 'Distribution', img: 'https://images.unsplash.com/photo-1586528116022-aeda1613c63d?w=400&h=280&fit=crop&auto=format', desc: 'Strategic hub locations with dock-level loading for distribution networks.' },
  { name: 'Logistics', img: 'https://images.unsplash.com/photo-1620388640785-892616248ec8?w=400&h=280&fit=crop&auto=format', desc: 'Integrated logistics-ready facilities with yard management and cross-docking.' },
]

const testimonials = [
  { name: 'Sarah Mitchell', title: 'VP Supply Chain, RetailMax Group', text: 'General Warehouse has been our trusted storage partner for 6 years. Their facility quality and responsiveness are unmatched in the region.' },
  { name: 'David Chen', title: 'Operations Director, Pacific Distribution', text: 'The dock capacity and turnaround times at General Warehouse have reduced our freight costs by 18%. Exceptional facility management.' },
  { name: 'Amanda Torres', title: 'Logistics Manager, ShopFast E-Commerce', text: "We scaled from 5,000 to 40,000 sq ft within the same facility in under 8 months. Their flexibility is what sets them apart." },
]

export default function Home({ setPage }: HomeProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const go = (page: string) => {
    setPage(page)
    window.scrollTo(0, 0)
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center" style={{ minHeight: '90vh' }}>
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&h=900&fit=crop&auto=format)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a3560]/90 via-[#0F4C81]/75 to-[#0F4C81]/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#43A047]/20 border border-[#43A047]/40 text-[#43A047] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#43A047]"/>
              Trusted Warehousing Since 1998
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Secure Storage.<br />
              <span className="text-[#43A047]">Reliable</span> Partnerships.
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl">
              Over 500,000 sq ft of professionally managed warehouse space for commercial, industrial, and logistics operations across Metro City.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => go('quote')}
                className="px-8 py-4 bg-[#43A047] hover:bg-[#388E3C] text-white font-semibold rounded transition-colors text-base"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Request a Quote
              </button>
              <button
                onClick={() => go('facilities')}
                className="px-8 py-4 border-2 border-white/40 text-white hover:bg-white/10 font-semibold rounded transition-colors text-base"
              >
                Tour Our Facilities
              </button>
            </div>
          </div>
        </div>
        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#2F3A45]/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {[
                { num: '500K+', label: 'Sq Ft of Storage' },
                { num: '25+', label: 'Years in Operation' },
                { num: '300+', label: 'Active Clients' },
                { num: '99.8%', label: 'Inventory Accuracy' },
              ].map(stat => (
                <div key={stat.label} className="py-5 px-6 text-center">
                  <div className="text-2xl font-bold text-[#43A047]" style={{ fontFamily: 'Poppins, sans-serif' }}>{stat.num}</div>
                  <div className="text-white/65 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[#43A047] text-sm font-semibold uppercase tracking-widest mb-3">Who We Are</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2F3A45] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Metro City's Premier Warehouse Partner
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                General Warehouse Provider has served regional and national businesses since 1998, delivering flexible, secure, and cost-effective warehousing solutions. From single pallet to full-building leases, we tailor storage to your operational requirements.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our facilities are strategically located near major transport corridors with direct highway access, rail proximity, and port connections — making inbound and outbound logistics faster and more affordable.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'ISO 9001:2015 Certified' },
                  { label: '24/7 CCTV Monitoring' },
                  { label: 'Fire-Suppression Systems' },
                  { label: 'Full Cargo Insurance' },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#43A047]/15 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#43A047]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => go('about')} className="text-[#0F4C81] font-semibold flex items-center gap-2 hover:gap-3 transition-all group">
                Learn more about us
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1758789667762-56175fe4601c?w=700&h=500&fit=crop&auto=format"
                alt="General Warehouse modern industrial facility exterior"
                className="rounded-lg w-full h-80 lg:h-96 object-cover shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#0F4C81] text-white rounded-lg p-5 shadow-xl hidden sm:block">
                <div className="text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>25+</div>
                <div className="text-sm text-white/80 mt-1">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-[#43A047] text-sm font-semibold uppercase tracking-widest mb-3">Our Services</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2F3A45]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              End-to-End Storage Solutions
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.title} className="bg-white rounded-lg p-7 hover:shadow-lg hover:-translate-y-1 transition-all border border-gray-100 group cursor-pointer" onClick={() => go('services')}>
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-[#2F3A45] font-bold text-lg mb-3 group-hover:text-[#0F4C81] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex items-center text-[#0F4C81] text-sm font-semibold gap-1 group-hover:gap-2 transition-all">
                  Learn more <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button onClick={() => go('services')} className="px-8 py-3.5 bg-[#0F4C81] hover:bg-[#0a3560] text-white font-semibold rounded transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Storage Types */}
      <section className="py-20 bg-[#0F4C81]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[#43A047] text-sm font-semibold uppercase tracking-widest mb-3">Storage Types</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Every Storage Format, Under One Roof
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {storageTypes.map(t => (
              <div key={t.label} className="bg-white/10 hover:bg-white/20 border border-white/15 rounded-lg p-5 text-center transition-colors cursor-default">
                <div className="text-3xl mb-3">{t.icon}</div>
                <div className="text-white font-semibold text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1684695749267-233af13276d0?w=400&h=320&fit=crop&auto=format" alt="Warehouse storage racks with boxes" className="rounded-lg w-full h-48 lg:h-60 object-cover"/>
              <img src="https://images.unsplash.com/photo-1586528116022-aeda1613c63d?w=400&h=320&fit=crop&auto=format" alt="Workers in warehouse aisle" className="rounded-lg w-full h-48 lg:h-60 object-cover mt-8"/>
              <img src="https://images.unsplash.com/photo-1620388640785-892616248ec8?w=400&h=320&fit=crop&auto=format" alt="Forklift in warehouse" className="rounded-lg w-full h-48 lg:h-60 object-cover -mt-4"/>
              <img src="https://images.unsplash.com/photo-1714627798569-b3e36d409c4b?w=400&h=320&fit=crop&auto=format" alt="Forklift parked inside warehouse" className="rounded-lg w-full h-48 lg:h-60 object-cover mt-4"/>
            </div>
            <div>
              <div className="text-[#43A047] text-sm font-semibold uppercase tracking-widest mb-3">Our Facilities</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2F3A45] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Purpose-Built for Industrial Scale
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Three interconnected facilities totaling over 500,000 sq ft of clear-span warehouse space, with dock-level and grade-level loading bays, heavy-duty flooring rated to 8,000 lbs/sqft, and 36-ft clear heights.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { label: 'Total Facility Area', value: '500,000+ sq ft' },
                  { label: 'Clear Height', value: 'Up to 36 ft' },
                  { label: 'Loading Docks', value: '48 dock doors + 12 grade-level' },
                  { label: 'Power', value: '3-phase 480V, 2,000A service' },
                ].map(spec => (
                  <div key={spec.label} className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-gray-600 text-sm">{spec.label}</span>
                    <span className="text-[#2F3A45] font-semibold text-sm">{spec.value}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => go('facilities')} className="px-7 py-3.5 bg-[#0F4C81] hover:bg-[#0a3560] text-white font-semibold rounded transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Explore Facilities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-[#43A047] text-sm font-semibold uppercase tracking-widest mb-3">Industries We Serve</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2F3A45]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Expertise Across Every Sector
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {industries.map(ind => (
              <div key={ind.name} className="rounded-lg overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-shadow" onClick={() => go('industries')}>
                <div className="relative h-44 bg-gray-200 overflow-hidden">
                  <img src={ind.img} alt={`${ind.name} industry warehouse storage`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C81]/80 to-transparent"/>
                  <div className="absolute bottom-3 left-3 text-white font-bold text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>{ind.name}</div>
                </div>
                <div className="bg-white p-4">
                  <p className="text-gray-600 text-xs leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Strip */}
      <section className="py-16 bg-[#2F3A45]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🎥', title: '24/7 CCTV', desc: 'Full perimeter and interior surveillance with 90-day cloud archiving.' },
              { icon: '🔐', title: 'Biometric Access', desc: 'Multi-factor authentication with individual access logs for every entry.' },
              { icon: '🚒', title: 'Fire Suppression', desc: 'NFPA-compliant sprinkler systems with early-warning smoke detection.' },
              { icon: '🛡️', title: 'Cargo Insurance', desc: 'Up to $10M per incident coverage included with all storage agreements.' },
            ].map(item => (
              <div key={item.title} className="flex gap-4">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-white font-bold mb-1.5" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#43A047] text-sm font-semibold uppercase tracking-widest mb-3">Client Testimonials</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2F3A45]" style={{ fontFamily: 'Poppins, sans-serif' }}>What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {testimonials.map(t => (
              <div key={t.name} className="bg-[#F5F7FA] rounded-lg p-8 border border-gray-100">
                <div className="flex gap-0.5 mb-5">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-[#43A047] text-lg">★</span>)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <div className="font-bold text-[#2F3A45] text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>{t.name}</div>
                  <div className="text-gray-500 text-xs mt-1">{t.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[#43A047] text-sm font-semibold uppercase tracking-widest mb-3">FAQ</div>
            <h2 className="text-3xl font-bold text-[#2F3A45]" style={{ fontFamily: 'Poppins, sans-serif' }}>Common Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4"
                >
                  <span className="font-semibold text-[#2F3A45] text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>{faq.q}</span>
                  <svg className={`w-5 h-5 text-[#0F4C81] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button onClick={() => go('faq')} className="text-[#0F4C81] font-semibold text-sm hover:underline">
              View all FAQs →
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#0F4C81] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}/>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to Secure Your Storage?
          </h2>
          <p className="text-white/75 text-lg mb-8">
            Request a customized quote today. Our team responds within 24 business hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => go('quote')} className="px-8 py-4 bg-[#43A047] hover:bg-[#388E3C] text-white font-semibold rounded transition-colors text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Request a Quote
            </button>
            <button onClick={() => go('contact')} className="px-8 py-4 border-2 border-white/40 text-white hover:bg-white/10 font-semibold rounded transition-colors text-base">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-xs uppercase tracking-widest mb-8 font-semibold">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {['RetailMax Group', 'Pacific Distribution', 'ShopFast', 'MetroLogix', 'BuildCore Inc', 'AgriStore Co'].map(name => (
              <div key={name} className="text-gray-300 font-bold text-sm uppercase tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>{name}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
