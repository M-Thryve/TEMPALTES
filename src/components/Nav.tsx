import { useState } from 'react'

type Page = string

interface NavProps {
  activePage: Page
  setPage: (page: Page) => void
}

const navLinks = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Services', page: 'services' },
  { label: 'Facilities', page: 'facilities' },
  { label: 'Industries', page: 'industries' },
  { label: 'FAQs', page: 'faq' },
  { label: 'Contact', page: 'contact' },
]

export default function Nav({ activePage, setPage }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const go = (page: Page) => {
    setPage(page)
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F4C81] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => go('home')} className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-[#43A047] rounded flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="2" y="10" width="18" height="10" rx="1" fill="white" opacity="0.9"/>
                <path d="M1 10L11 2L21 10" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                <rect x="8" y="13" width="6" height="7" rx="0.5" fill="#0F4C81"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="text-white font-bold text-sm leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>GENERAL WAREHOUSE</div>
              <div className="text-[#43A047] text-[10px] font-medium tracking-widest uppercase">Provider</div>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <button
                key={link.page}
                onClick={() => go(link.page)}
                className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                  activePage === link.page
                    ? 'text-[#43A047] bg-white/10'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => go('quote')}
              className="ml-3 px-5 py-2 bg-[#43A047] hover:bg-[#388E3C] text-white text-sm font-semibold rounded transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Request a Quote
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2 rounded hover:bg-white/10 transition-colors"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round"/>
              ) : (
                <path d="M3 7h18M3 12h18M3 17h18" strokeLinecap="round"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0a3560] border-t border-white/10 px-4 py-3 space-y-1">
          {navLinks.map(link => (
            <button
              key={link.page}
              onClick={() => go(link.page)}
              className={`w-full text-left px-4 py-3 text-sm font-medium rounded transition-colors ${
                activePage === link.page ? 'text-[#43A047] bg-white/10' : 'text-white/85 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => go('quote')}
            className="w-full mt-2 px-4 py-3 bg-[#43A047] hover:bg-[#388E3C] text-white text-sm font-semibold rounded transition-colors text-center"
          >
            Request a Quote
          </button>
        </div>
      )}
    </nav>
  )
}
