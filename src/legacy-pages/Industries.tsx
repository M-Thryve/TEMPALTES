interface IndustriesProps {
  setPage: (page: string) => void
}

const industries = [
  {
    name: 'Retail',
    icon: '🛍️',
    img: 'https://images.unsplash.com/photo-1589792923962-537704632910?w=700&h=420&fit=crop&auto=format',
    desc: 'We provide retail businesses with scalable storage that absorbs seasonal volume swings — from Q1 lulls to Black Friday surges — without requiring annual facility commitments.',
    challenges: ['Seasonal inventory peaks and valleys', 'SKU proliferation and accurate slot management', 'Returns processing and restocking', 'Multi-location distribution requirements'],
    solutions: ['Flexible month-to-month capacity scaling', 'Barcode and RFID inventory organization by SKU', 'Dedicated returns processing zone', 'Cross-docking for multi-store replenishment'],
    clients: 'RetailMax Group, ShopCity Stores, FreshGoods Co',
  },
  {
    name: 'Manufacturing',
    icon: '🏭',
    img: 'https://images.unsplash.com/photo-1651525670114-2b8117390b28?w=700&h=420&fit=crop&auto=format',
    desc: 'Manufacturing operations require reliable, heavy-duty storage for raw materials, work-in-process, and finished goods — often with very specific access scheduling tied to production runs.',
    challenges: ['Large and heavy raw material volumes', 'Just-in-time delivery to production line', 'Hazardous material storage compliance', 'Finished goods holding before outbound freight'],
    solutions: ['Grade-level drive-in bays for flatbeds and step-decks', 'Scheduled release windows synced to production calendar', 'Hazmat-certified bays (Class I–VI)', 'Staged outbound holding dock space'],
    clients: 'BuildCore Inc, MetalWorks USA, ProParts Manufacturing',
  },
  {
    name: 'E-Commerce',
    icon: '🛒',
    img: 'https://images.unsplash.com/photo-1684695749267-233af13276d0?w=700&h=420&fit=crop&auto=format',
    desc: 'E-commerce businesses move fast. We provide organized, accessible storage that supports high-velocity order fulfillment without the overhead of running your own distribution center.',
    challenges: ['High SKU counts with fast turnover', 'Order accuracy requirements near 100%', 'Peak season capacity beyond annual average', 'Carrier integration and parcel prep'],
    solutions: ['Slotted storage organized by velocity', '99.8% inventory accuracy with IMS audit trail', 'Flex capacity activated within 72-hour notice', 'Carrier-ready staging lanes for UPS, FedEx, and freight'],
    clients: 'ShopFast, UrbanDeals.com, QuickKit E-Commerce',
  },
  {
    name: 'Distribution',
    icon: '🚚',
    img: 'https://images.unsplash.com/photo-1586528116022-aeda1613c63d?w=700&h=420&fit=crop&auto=format',
    desc: 'Regional and national distributors rely on our hub location, large dock count, and cross-docking capability to keep product moving efficiently through the supply chain.',
    challenges: ['High inbound and outbound freight volume', 'Tight delivery windows and dock scheduling', 'Multi-tenant product segregation', 'Visibility across inventory in transit'],
    solutions: ['48 dock doors with scheduled appointment windows', 'Cross-docking — receive and dispatch same day', 'Fenced and segregated zones per client', 'Real-time IMS with inbound/outbound tracking'],
    clients: 'Pacific Distribution, MetroLogix, NexPort Logistics',
  },
  {
    name: 'Logistics',
    icon: '🌐',
    img: 'https://images.unsplash.com/photo-1620388640785-892616248ec8?w=700&h=420&fit=crop&auto=format',
    desc: 'Third-party logistics providers and freight forwarders use our facilities as a strategic node — bonded storage, transloading, and port proximity make us a natural fit.',
    challenges: ['CBP-compliant bonded storage requirements', 'Transloading between modes and containers', 'Import/export documentation coordination', 'Multimodal access — road, rail, port, air'],
    solutions: ['CBP-Bonded Warehouse authorization on-site', 'Full transloading services with container ramps', 'Customs liaison and documentation support', 'Proximity to port, rail yard, and I-90/94'],
    clients: 'AgriStore Co, FreightBridge LLC, GlobalTrans Partners',
  },
]

export default function Industries({ setPage }: IndustriesProps) {
  const go = (page: string) => { setPage(page); window.scrollTo(0, 0) }

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[#2F3A45]">
        <div className="absolute inset-0 opacity-15 bg-center bg-cover" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1651525670114-2b8117390b28?w=1400&h=400&fit=crop&auto=format)` }}/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#43A047] text-sm font-semibold uppercase tracking-widest mb-3">Industries</div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>Sector-Specific Warehousing Expertise</h1>
          <p className="text-white/70 text-lg max-w-2xl">Every industry has unique storage demands. We've built deep expertise across five core sectors so your operation gets solutions, not just space.</p>
        </div>
      </section>

      {/* Industries */}
      <div>
        {industries.map((ind, i) => (
          <section key={ind.name} className={`py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-[#F5F7FA]'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-14 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="inline-flex items-center gap-3 mb-5">
                    <span className="text-4xl">{ind.icon}</span>
                    <div className="text-[#43A047] text-sm font-semibold uppercase tracking-widest">{ind.name}</div>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#2F3A45] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>{ind.name} Storage Solutions</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{ind.desc}</p>
                  <div className="grid sm:grid-cols-2 gap-5 mb-6">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Challenges We Solve</div>
                      <ul className="space-y-2">
                        {ind.challenges.map(c => (
                          <li key={c} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-[#0F4C81] mt-0.5">→</span> {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Our Solutions</div>
                      <ul className="space-y-2">
                        {ind.solutions.map(s => (
                          <li key={s} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-[#43A047] mt-0.5">✓</span> {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 mb-5">Sample clients: <span className="text-gray-600 font-medium">{ind.clients}</span></div>
                  <button onClick={() => go('quote')} className="px-6 py-3 bg-[#0F4C81] hover:bg-[#0a3560] text-white font-semibold rounded text-sm transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Get a {ind.name} Quote
                  </button>
                </div>
                <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <img src={ind.img} alt={`${ind.name} industry warehouse operations`} className="rounded-lg w-full h-72 lg:h-80 object-cover shadow-lg"/>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-16 bg-[#0F4C81] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Your Industry, Our Expertise</h2>
          <p className="text-white/70 mb-7">Don't see your sector listed? We serve 12+ industries. Contact us to discuss your specific requirements.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button onClick={() => go('quote')} className="px-7 py-3.5 bg-[#43A047] hover:bg-[#388E3C] text-white font-semibold rounded transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>Request a Quote</button>
            <button onClick={() => go('contact')} className="px-7 py-3.5 border border-white/30 text-white hover:bg-white/10 font-semibold rounded transition-colors">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  )
}
