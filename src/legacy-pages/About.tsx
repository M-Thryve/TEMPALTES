interface AboutProps {
  setPage: (page: string) => void
}

const values = [
  { icon: '🤝', title: 'Reliability', desc: 'We honor every commitment. On-time delivery, consistent operations, and a 99.8% inventory accuracy rate reflect our promise to clients.' },
  { icon: '🔒', title: 'Security', desc: 'Multi-layered physical and digital security ensures your goods are protected around the clock, every day of the year.' },
  { icon: '📈', title: 'Scalability', desc: 'Grow from a single pallet to a full building without switching providers. Our facilities flex to your business cycle.' },
  { icon: '💡', title: 'Innovation', desc: 'From real-time inventory visibility to optimized dock scheduling, we invest in technology that makes your supply chain faster.' },
]

const capabilities = [
  'Up to 500,000 sq ft of clear-span space per campus',
  'Pallet racking, bulk floor, drive-in rack, and mezzanine storage',
  'Climate-controlled and humidity-managed units',
  'Hazmat-certified bays (Class I–VI)',
  'Bonded warehouse designation',
  '48 dock-level + 12 grade-level loading positions',
  'On-site reach forklifts, counterbalance lifts, and pallet jacks',
  'Custom racking and floor layout configurations',
  'Real-time inventory management system (IMS) access',
  'EDI and API integration with major ERP platforms',
]

export default function About({ setPage }: AboutProps) {
  const go = (page: string) => { setPage(page); window.scrollTo(0, 0) }

  return (
    <div>
      {/* Hero */}
      <section className="relative py-28 bg-[#0F4C81]">
        <div
          className="absolute inset-0 bg-center bg-cover opacity-20"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1758789667762-56175fe4601c?w=1400&h=500&fit=crop&auto=format)` }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-[#43A047] text-sm font-semibold uppercase tracking-widest mb-3">About Us</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Built on Trust. Driven by Excellence.
            </h1>
            <p className="text-white/75 text-lg leading-relaxed">
              Since 1998, General Warehouse Provider has been the storage backbone for hundreds of regional and national businesses. We do one thing and we do it right — world-class warehousing.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[#43A047] text-sm font-semibold uppercase tracking-widest mb-3">Our Story</div>
              <h2 className="text-3xl font-bold text-[#2F3A45] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                25 Years of Warehousing Leadership
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                General Warehouse Provider was founded in 1998 with a single 80,000 sq ft facility in Metro City's industrial corridor. We built our reputation on one principle: treat every client's inventory as if it were our own.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Today we operate three interconnected campuses spanning over 500,000 sq ft, serve more than 300 active clients across 12 industry sectors, and employ over 180 warehouse professionals and logistics specialists.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We are ISO 9001:2015 certified, OSHA compliant, and carry a full roster of industry accreditations that demonstrate our commitment to safe, professional, and consistent operations.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[{ n: '180+', l: 'Employees' }, { n: '3', l: 'Campuses' }, { n: '12', l: 'Sectors Served' }].map(s => (
                  <div key={s.l} className="text-center p-4 bg-[#F5F7FA] rounded-lg">
                    <div className="text-2xl font-bold text-[#0F4C81]" style={{ fontFamily: 'Poppins, sans-serif' }}>{s.n}</div>
                    <div className="text-gray-500 text-xs mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1651525670114-2b8117390b28?w=700&h=400&fit=crop&auto=format" alt="Warehouse operations team at work" className="rounded-lg w-full h-56 object-cover shadow-md"/>
              <img src="https://images.unsplash.com/photo-1586528116022-aeda1613c63d?w=700&h=300&fit=crop&auto=format" alt="Workers walking through warehouse aisle" className="rounded-lg w-full h-44 object-cover shadow-md"/>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#43A047] text-sm font-semibold uppercase tracking-widest mb-3">Our Values</div>
            <h2 className="text-3xl font-bold text-[#2F3A45]" style={{ fontFamily: 'Poppins, sans-serif' }}>What We Stand For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(v => (
              <div key={v.title} className="bg-white p-7 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-[#2F3A45] text-lg mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[#43A047] text-sm font-semibold uppercase tracking-widest mb-3">Capabilities</div>
              <h2 className="text-3xl font-bold text-[#2F3A45] mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Everything Your Operation Needs
              </h2>
              <ul className="space-y-3">
                {capabilities.map(cap => (
                  <li key={cap} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0F4C81] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1532635026-d12867005472?w=700&h=500&fit=crop&auto=format" alt="Forklift operator in warehouse" className="rounded-lg w-full h-72 object-cover shadow-lg mb-6"/>
              <div className="bg-[#0F4C81] rounded-lg p-7 text-white">
                <h3 className="font-bold text-xl mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Certifications & Compliance</h3>
                <ul className="space-y-2">
                  {['ISO 9001:2015 Quality Management', 'OSHA 1910 Compliant Operations', 'NFPA 13 Fire Protection', 'DOT Hazmat Certified Bays', 'Bonded Warehouse — CBP Authorized'].map(c => (
                    <li key={c} className="text-white/80 text-sm flex items-center gap-2">
                      <span className="text-[#43A047]">✓</span> {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-[#F5F7FA] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-xs uppercase tracking-widest mb-8 font-semibold">Clients & Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {['RetailMax Group', 'Pacific Distribution', 'ShopFast', 'MetroLogix', 'BuildCore Inc', 'AgriStore Co', 'UrbanFreight', 'NexPort Logistics'].map(name => (
              <div key={name} className="text-gray-300 font-bold text-sm uppercase tracking-wider" style={{ fontFamily: 'Poppins, sans-serif' }}>{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2F3A45] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Partner With Us</h2>
          <p className="text-white/65 mb-7">Discover how General Warehouse Provider can support your storage and logistics needs.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button onClick={() => go('quote')} className="px-7 py-3.5 bg-[#43A047] hover:bg-[#388E3C] text-white font-semibold rounded transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>Request a Quote</button>
            <button onClick={() => go('contact')} className="px-7 py-3.5 border border-white/30 text-white hover:bg-white/10 font-semibold rounded transition-colors">Get in Touch</button>
          </div>
        </div>
      </section>
    </div>
  )
}
