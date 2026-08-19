type SetPage = (page: string) => void

interface FooterProps {
  setPage: SetPage
}

export default function Footer({ setPage }: FooterProps) {
  const go = (page: string) => {
    setPage(page)
    window.scrollTo(0, 0)
  }

  return (
    <footer className="bg-[#2F3A45] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => go('home')} className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-[#43A047] rounded flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="2" y="10" width="18" height="10" rx="1" fill="white" opacity="0.9"/>
                  <path d="M1 10L11 2L21 10" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                  <rect x="8" y="13" width="6" height="7" rx="0.5" fill="#2F3A45"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>GENERAL WAREHOUSE</div>
                <div className="text-[#43A047] text-[10px] tracking-widest uppercase">Provider</div>
              </div>
            </button>
            <p className="text-white/65 text-sm leading-relaxed mb-5">
              Trusted warehousing solutions for businesses of all sizes. Secure, flexible, and professionally managed storage facilities.
            </p>
            <div className="flex gap-3">
              {['LinkedIn', 'Twitter', 'Facebook'].map(s => (
                <div key={s} className="w-9 h-9 rounded bg-white/10 hover:bg-[#43A047] flex items-center justify-center cursor-pointer transition-colors">
                  <span className="text-white text-xs font-bold">{s[0]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', page: 'home' },
                { label: 'About Us', page: 'about' },
                { label: 'Services', page: 'services' },
                { label: 'Facilities', page: 'facilities' },
                { label: 'Industries', page: 'industries' },
                { label: 'FAQs', page: 'faq' },
              ].map(l => (
                <li key={l.page}>
                  <button onClick={() => go(l.page)} className="text-white/65 hover:text-[#43A047] text-sm transition-colors">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>Services</h4>
            <ul className="space-y-3">
              {['Commercial Storage', 'Industrial Storage', 'Inventory Storage', 'Warehouse Space', 'Storage Solutions'].map(s => (
                <li key={s}>
                  <button onClick={() => go('services')} className="text-white/65 hover:text-[#43A047] text-sm transition-colors text-left">
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <svg className="w-4 h-4 text-[#43A047] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="text-white/65 text-sm">123 Industrial Blvd, Warehouse District, Metro City 10001</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-4 h-4 text-[#43A047] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:+18005551234" className="text-white/65 hover:text-[#43A047] text-sm transition-colors">+1 (800) 555-1234</a>
              </li>
              <li className="flex gap-3">
                <svg className="w-4 h-4 text-[#43A047] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:info@generalwarehouse.com" className="text-white/65 hover:text-[#43A047] text-sm transition-colors">info@generalwarehouse.com</a>
              </li>
              <li className="flex gap-3">
                <svg className="w-4 h-4 text-[#43A047] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-white/65 text-sm">Mon–Fri 6:00 AM–10:00 PM<br/>Sat–Sun 8:00 AM–6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">© 2025 General Warehouse Provider. All rights reserved.</p>
          <div className="flex gap-6">
            {[
              { label: 'Privacy Policy', page: 'privacy' },
              { label: 'Terms & Conditions', page: 'terms' },
              { label: 'Careers', page: 'careers' },
            ].map(l => (
              <button key={l.page} onClick={() => go(l.page)} className="text-white/50 hover:text-[#43A047] text-sm transition-colors">
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
