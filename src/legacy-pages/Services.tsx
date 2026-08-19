interface ServicesProps {
  setPage: (page: string) => void
}

const services = [
  {
    id: 'commercial',
    icon: '🏢',
    title: 'Commercial Storage',
    img: 'https://images.unsplash.com/photo-1684695749267-233af13276d0?w=800&h=400&fit=crop&auto=format',
    desc: 'Flexible commercial storage designed for retail, wholesale, and multi-channel businesses. Manage seasonal volume spikes with ease.',
    features: ['Pallet-in/pallet-out or full container receipt', 'Seasonal flex capacity — scale up in Q4, scale down in Q1', 'SKU-level labeling and organized pick lanes', 'Integration with major retail EDI standards', 'Monthly billing with no long-term lock-in'],
    specs: { 'Minimum Space': '10 pallets / 500 sq ft', 'Access Hours': 'Mon–Fri 6 AM–10 PM', 'Fire Class': 'NFPA Class I–III' },
  },
  {
    id: 'industrial',
    icon: '🏭',
    title: 'Industrial Storage',
    img: 'https://images.unsplash.com/photo-1620388640785-892616248ec8?w=800&h=400&fit=crop&auto=format',
    desc: 'Heavy-duty storage for oversized machinery, raw materials, steel, lumber, and manufacturing components — with crane access and reinforced flooring.',
    features: ['Floor load capacity up to 8,000 lbs/sq ft', '36 ft clear height — fits double-stacked containers', 'Overhead crane service (5-ton and 10-ton bridge cranes)', 'Grade-level drive-in access for flatbed and step-deck trucks', 'Hazmat-certified bays for Class I–VI materials'],
    specs: { 'Minimum Space': '2,000 sq ft', 'Clear Height': 'Up to 36 ft', 'Floor Load': '8,000 lbs/sq ft' },
  },
  {
    id: 'inventory',
    icon: '📦',
    title: 'Inventory Storage',
    img: 'https://images.unsplash.com/photo-1589792923962-537704632910?w=800&h=400&fit=crop&auto=format',
    desc: 'Organized, auditable inventory management for fast-moving consumer goods, spare parts, and finished goods awaiting distribution.',
    features: ['Barcode and RFID-enabled inventory tracking', 'Real-time IMS portal access for clients', 'Dedicated pick-and-pack zones available', 'Weekly cycle counts and monthly physical audits', 'Discrepancy reports within 24 hours'],
    specs: { 'Accuracy Rate': '99.8%', 'Cycle Count': 'Weekly', 'System': 'IMS portal with API access' },
  },
  {
    id: 'space',
    icon: '📐',
    title: 'Warehouse Space Lease',
    img: 'https://images.unsplash.com/photo-1586528116022-aeda1613c63d?w=800&h=400&fit=crop&auto=format',
    desc: 'Dedicated, fenced warehouse bays available for medium and long-term lease. Configure to your exact operational layout with your own team on-site.',
    features: ['Dedicated secured perimeter within shared campus', 'Exclusive dock door assignment', 'Your branding and signage within your bay', 'Option for 24/7 independent access', 'Lease terms from 6 months to 5+ years'],
    specs: { 'Min. Bay Size': '10,000 sq ft', 'Lease Terms': '6 months – 5+ years', 'Access': '24/7 optional' },
  },
  {
    id: 'solutions',
    icon: '🔧',
    title: 'Storage Solutions',
    img: 'https://images.unsplash.com/photo-1714627798569-b3e36d409c4b?w=800&h=400&fit=crop&auto=format',
    desc: 'Custom-designed storage programs for unique operational needs — climate control, bonded storage, e-commerce fulfillment prep, and value-added services.',
    features: ['Temperature: 34°F–72°F climate-controlled zones', 'Humidity management for sensitive goods', 'CBP-bonded storage for imported goods', 'Cross-docking and transloading services', 'Light assembly, kitting, and labeling services'],
    specs: { 'Temp Range': '34°F – 72°F', 'Humidity': 'Controlled 35–60% RH', 'Bonded': 'CBP Authorized' },
  },
]

export default function Services({ setPage }: ServicesProps) {
  const go = (page: string) => { setPage(page); window.scrollTo(0, 0) }

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[#2F3A45]">
        <div className="absolute inset-0 opacity-15 bg-center bg-cover" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1553413077-190dd305871c?w=1400&h=400&fit=crop&auto=format)` }}/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#43A047] text-sm font-semibold uppercase tracking-widest mb-3">Our Services</div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>Storage Solutions for Every Need</h1>
          <p className="text-white/70 text-lg max-w-2xl">Five core service lines — commercial, industrial, inventory, lease, and custom solutions — all under one professionally managed roof.</p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((s, i) => (
            <div key={s.id} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="inline-flex items-center gap-3 mb-5">
                  <span className="text-4xl">{s.icon}</span>
                  <div className="text-[#43A047] text-sm font-semibold uppercase tracking-widest">Service {String(i + 1).padStart(2, '0')}</div>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#2F3A45] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>{s.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2 mb-7">
                  {s.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-[#43A047] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="bg-[#F5F7FA] rounded-lg p-5 grid grid-cols-3 gap-3 mb-7">
                  {Object.entries(s.specs).map(([k, v]) => (
                    <div key={k}>
                      <div className="text-gray-500 text-xs mb-1">{k}</div>
                      <div className="text-[#2F3A45] font-semibold text-xs">{v}</div>
                    </div>
                  ))}
                </div>
                <button onClick={() => go('quote')} className="px-6 py-3 bg-[#0F4C81] hover:bg-[#0a3560] text-white font-semibold rounded text-sm transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Request a Quote
                </button>
              </div>
              <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <img src={s.img} alt={`${s.title} warehouse facility`} className="rounded-lg w-full h-72 lg:h-80 object-cover shadow-lg"/>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0F4C81] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Not Sure Which Service Fits?</h2>
          <p className="text-white/70 mb-7">Our team will assess your requirements and recommend the right combination of storage services for your operation.</p>
          <button onClick={() => go('quote')} className="px-8 py-4 bg-[#43A047] hover:bg-[#388E3C] text-white font-semibold rounded transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Request a Free Consultation
          </button>
        </div>
      </section>
    </div>
  )
}
