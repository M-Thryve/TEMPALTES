interface FacilitiesProps {
  setPage: (page: string) => void
}

const gallery = [
  { img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop&auto=format', alt: 'Main warehouse interior with high-bay racking', span: 'col-span-2 row-span-2' },
  { img: 'https://images.unsplash.com/photo-1684695749267-233af13276d0?w=400&h=280&fit=crop&auto=format', alt: 'Warehouse filled with packaged goods on pallets', span: '' },
  { img: 'https://images.unsplash.com/photo-1586528116022-aeda1613c63d?w=400&h=280&fit=crop&auto=format', alt: 'Workers walking through organized warehouse aisle', span: '' },
  { img: 'https://images.unsplash.com/photo-1620388640785-892616248ec8?w=400&h=280&fit=crop&auto=format', alt: 'Yellow forklift in warehouse', span: '' },
  { img: 'https://images.unsplash.com/photo-1714627798569-b3e36d409c4b?w=400&h=280&fit=crop&auto=format', alt: 'Forklift parked inside warehouse bay', span: '' },
  { img: 'https://images.unsplash.com/photo-1532635026-d12867005472?w=600&h=280&fit=crop&auto=format', alt: 'Warehouse worker operating forklift with pallet', span: 'col-span-2' },
]

const specs = [
  { category: 'Capacity', items: [
    { label: 'Total Facility Area', value: '500,000+ sq ft (3 campuses)' },
    { label: 'Pallet Positions', value: '45,000+ positions' },
    { label: 'Bulk Floor Space', value: '120,000 sq ft dedicated' },
    { label: 'Climate-Controlled', value: '80,000 sq ft' },
  ]},
  { category: 'Physical Specs', items: [
    { label: 'Clear Height', value: 'Up to 36 ft' },
    { label: 'Column Spacing', value: '52 ft x 54 ft standard bay' },
    { label: 'Floor Load', value: '8,000 lbs/sq ft reinforced' },
    { label: 'Dock Doors', value: '48 dock-level + 12 grade-level' },
  ]},
  { category: 'Infrastructure', items: [
    { label: 'Power Supply', value: '3-phase 480V, 2,000A service' },
    { label: 'Lighting', value: 'LED high-bay, min. 30 fc at floor' },
    { label: 'Fire System', value: 'ESFR K-25 sprinklers per NFPA 13' },
    { label: 'HVAC', value: 'Dock levelers, vestibule air curtains' },
  ]},
  { category: 'Access & Hours', items: [
    { label: 'Operating Hours', value: 'Mon–Fri 6 AM–10 PM' },
    { label: 'Weekend Hours', value: 'Sat–Sun 8 AM–6 PM' },
    { label: '24/7 Access', value: 'Available on dedicated lease' },
    { label: 'Yard Space', value: '5-acre secured truck court' },
  ]},
]

const securityFeatures = [
  { icon: '🎥', title: '200+ CCTV Cameras', desc: 'Full perimeter and interior 4K surveillance with 90-day cloud archive and remote live feed access.' },
  { icon: '🔐', title: 'Biometric Entry', desc: 'Fingerprint and card-based multi-factor authentication with timestamped entry logs per individual.' },
  { icon: '🚨', title: 'Alarm Systems', desc: 'Motion, glass-break, and vibration sensors with direct link to local law enforcement.' },
  { icon: '👷', title: 'On-Site Security', desc: 'Licensed security personnel on-site during all operating hours, supplemented by overnight patrol.' },
  { icon: '🚒', title: 'Fire Suppression', desc: 'ESFR sprinklers, early-warning smoke detection, and quarterly fire safety audits.' },
  { icon: '🛡️', title: 'Cargo Insurance', desc: 'Up to $10M per-incident cargo coverage included. Additional coverage available on request.' },
]

export default function Facilities({ setPage }: FacilitiesProps) {
  const go = (page: string) => { setPage(page); window.scrollTo(0, 0) }

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[#0F4C81]">
        <div className="absolute inset-0 bg-center bg-cover opacity-20" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1553413077-190dd305871c?w=1400&h=400&fit=crop&auto=format)` }}/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#43A047] text-sm font-semibold uppercase tracking-widest mb-3">Our Facilities</div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>500,000 Sq Ft of Purpose-Built Space</h1>
          <p className="text-white/70 text-lg max-w-2xl">Three interconnected campuses engineered for industrial-scale warehousing. Every detail — from dock height to fire rating — built to professional standards.</p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-[#2F3A45]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { num: '3', label: 'Facility Campuses' },
              { num: '45K+', label: 'Pallet Positions' },
              { num: '60', label: 'Loading Positions' },
              { num: '36 ft', label: 'Max Clear Height' },
            ].map(s => (
              <div key={s.label} className="py-6 px-6 text-center">
                <div className="text-2xl font-bold text-[#43A047]" style={{ fontFamily: 'Poppins, sans-serif' }}>{s.num}</div>
                <div className="text-white/65 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[#43A047] text-sm font-semibold uppercase tracking-widest mb-3">Facility Gallery</div>
            <h2 className="text-3xl font-bold text-[#2F3A45]" style={{ fontFamily: 'Poppins, sans-serif' }}>See Inside Our Facilities</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {gallery.map((g, i) => (
              <div key={i} className={`rounded-lg overflow-hidden bg-gray-200 ${g.span}`}>
                <img src={g.img} alt={g.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#43A047] text-sm font-semibold uppercase tracking-widest mb-3">Specifications</div>
            <h2 className="text-3xl font-bold text-[#2F3A45]" style={{ fontFamily: 'Poppins, sans-serif' }}>Facility Specifications</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specs.map(cat => (
              <div key={cat.category} className="bg-[#F5F7FA] rounded-lg p-6">
                <div className="text-[#0F4C81] text-xs font-bold uppercase tracking-widest mb-5 pb-3 border-b border-gray-200">{cat.category}</div>
                <div className="space-y-4">
                  {cat.items.map(item => (
                    <div key={item.label}>
                      <div className="text-gray-500 text-xs mb-1">{item.label}</div>
                      <div className="text-[#2F3A45] font-semibold text-sm">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 bg-[#2F3A45]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#43A047] text-sm font-semibold uppercase tracking-widest mb-3">Security</div>
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Multi-Layer Security Protocol</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map(f => (
              <div key={f.title} className="bg-white/10 border border-white/10 rounded-lg p-6 hover:bg-white/15 transition-colors">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-white font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{f.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-[#43A047] text-sm font-semibold uppercase tracking-widest mb-3">Location</div>
              <h2 className="text-3xl font-bold text-[#2F3A45] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Strategically Located for Logistics</h2>
              <p className="text-gray-600 leading-relaxed mb-6">Our main campus sits at 123 Industrial Boulevard in Metro City's Industrial Corridor — 2 miles from I-90/94, 4 miles from Metro Intermodal Rail Yard, and 12 miles from Port Metro.</p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: '🛣️', label: 'Highway Access', value: '2 mi to I-90/94 interchange' },
                  { icon: '🚂', label: 'Rail', value: '4 mi to Metro Intermodal Yard' },
                  { icon: '⚓', label: 'Port', value: '12 mi to Port Metro' },
                  { icon: '✈️', label: 'Air Freight', value: '18 mi to Metro International Airport' },
                ].map(loc => (
                  <div key={loc.label} className="flex items-center gap-4 border-b border-gray-100 pb-4">
                    <span className="text-xl">{loc.icon}</span>
                    <div>
                      <div className="text-xs text-gray-400">{loc.label}</div>
                      <div className="text-[#2F3A45] font-semibold text-sm">{loc.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => go('contact')} className="px-7 py-3 bg-[#0F4C81] hover:bg-[#0a3560] text-white font-semibold rounded text-sm transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Get Directions
              </button>
            </div>
            <div className="rounded-lg overflow-hidden bg-gray-200 h-80 lg:h-96 flex items-center justify-center border border-gray-200">
              <div className="text-center p-8">
                <div className="text-5xl mb-4">📍</div>
                <div className="text-[#2F3A45] font-bold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>123 Industrial Blvd</div>
                <div className="text-gray-500 text-sm">Warehouse District, Metro City 10001</div>
                <div className="mt-4 text-xs text-gray-400">Map integration: replace with Google Maps or Mapbox embed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0F4C81] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Ready to Tour Our Facilities?</h2>
          <p className="text-white/70 mb-7">Schedule an on-site walk-through with our operations team — no commitment required.</p>
          <button onClick={() => go('contact')} className="px-8 py-4 bg-[#43A047] hover:bg-[#388E3C] text-white font-semibold rounded transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Schedule a Tour
          </button>
        </div>
      </section>
    </div>
  )
}
