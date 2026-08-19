interface CareersProps {
  setPage: (page: string) => void
}

const openings = [
  { title: 'Warehouse Supervisor', dept: 'Operations', type: 'Full-Time', loc: 'Metro City — Campus A', desc: 'Lead a team of 12–18 warehouse associates across receiving, put-away, picking, and shipping operations. 3+ years warehouse leadership required.' },
  { title: 'Forklift Operator', dept: 'Operations', type: 'Full-Time', loc: 'Metro City — Campus B', desc: 'Operate counterbalance and reach forklifts for pallet movement, racking, and loading dock operations. Certified license required.' },
  { title: 'Inventory Control Specialist', dept: 'Inventory', type: 'Full-Time', loc: 'Metro City — Campus A', desc: 'Conduct cycle counts, investigate discrepancies, and maintain 99.8%+ inventory accuracy using our IMS platform.' },
  { title: 'Dock Coordinator', dept: 'Logistics', type: 'Full-Time', loc: 'Metro City — Campus C', desc: 'Schedule inbound and outbound dock appointments, coordinate carrier communication, and manage dock door assignments.' },
  { title: 'Commercial Sales Associate', dept: 'Sales', type: 'Full-Time', loc: 'Metro City (Remote Eligible)', desc: 'Prospect and develop new warehouse clients across retail, e-commerce, and industrial sectors. 2+ years B2B sales experience preferred.' },
  { title: 'Facility Maintenance Technician', dept: 'Maintenance', type: 'Full-Time', loc: 'Metro City — All Campuses', desc: 'Maintain facility equipment, dock levelers, fire suppression systems, and building infrastructure across three campuses.' },
]

const benefits = [
  { icon: '🏥', label: 'Health & Dental', desc: 'Full medical, dental, and vision coverage for employees and dependents' },
  { icon: '💰', label: 'Competitive Pay', desc: 'Market-rate wages with annual performance reviews and merit increases' },
  { icon: '📅', label: 'PTO + Holidays', desc: '15 days PTO in year 1, scaling to 25 days, plus 10 paid holidays' },
  { icon: '🎓', label: 'Training', desc: 'Paid forklift certification, OSHA training, and professional development' },
  { icon: '🤝', label: 'Retirement Plan', desc: '401(k) with 4% company match starting after 90 days' },
  { icon: '📈', label: 'Growth', desc: 'Promote-from-within culture — 70% of supervisors started on the floor' },
]

export default function Careers({ setPage }: CareersProps) {
  const go = (page: string) => { setPage(page); window.scrollTo(0, 0) }
  void go

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[#0F4C81]">
        <div className="absolute inset-0 opacity-15 bg-center bg-cover" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1586528116022-aeda1613c63d?w=1400&h=400&fit=crop&auto=format)` }}/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#43A047] text-sm font-semibold uppercase tracking-widest mb-3">Careers</div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>Build Your Career With Us</h1>
          <p className="text-white/70 text-lg max-w-2xl">We're a growing team of 180+ professionals. We invest in our people with competitive compensation, real training, and genuine opportunities to advance.</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-[#43A047] text-sm font-semibold uppercase tracking-widest mb-3">Why Join Us</div>
            <h2 className="text-3xl font-bold text-[#2F3A45]" style={{ fontFamily: 'Poppins, sans-serif' }}>Benefits & Culture</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(b => (
              <div key={b.label} className="flex gap-4 bg-[#F5F7FA] rounded-lg p-6">
                <span className="text-3xl flex-shrink-0">{b.icon}</span>
                <div>
                  <div className="font-bold text-[#2F3A45] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{b.label}</div>
                  <div className="text-gray-600 text-sm">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-[#43A047] text-sm font-semibold uppercase tracking-widest mb-3">Open Positions</div>
            <h2 className="text-3xl font-bold text-[#2F3A45]" style={{ fontFamily: 'Poppins, sans-serif' }}>Current Openings</h2>
          </div>
          <div className="space-y-4">
            {openings.map(job => (
              <div key={job.title} className="bg-white rounded-lg border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-[#2F3A45] text-lg mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-[#0F4C81]/10 text-[#0F4C81] text-xs font-semibold rounded-full">{job.dept}</span>
                      <span className="px-3 py-1 bg-[#43A047]/10 text-[#43A047] text-xs font-semibold rounded-full">{job.type}</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">{job.loc}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{job.desc}</p>
                  </div>
                  <button className="flex-shrink-0 px-5 py-2.5 bg-[#0F4C81] hover:bg-[#0a3560] text-white text-sm font-semibold rounded transition-colors whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 p-8 bg-white rounded-lg border border-gray-100">
            <p className="text-gray-600 mb-4">Don't see a role that matches your skills?</p>
            <p className="text-gray-500 text-sm mb-5">Send your resume to <a href="mailto:careers@generalwarehouse.com" className="text-[#0F4C81] font-semibold">careers@generalwarehouse.com</a> — we keep qualified candidates on file.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
