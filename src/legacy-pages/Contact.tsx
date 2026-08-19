import { useState } from 'react'

interface ContactProps {
  setPage: (page: string) => void
}

export default function Contact({ setPage }: ContactProps) {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const go = (page: string) => { setPage(page); window.scrollTo(0, 0) }

  return (
    <div>
      {/* Hero */}
      <section className="py-24 bg-[#2F3A45]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#43A047] text-sm font-semibold uppercase tracking-widest mb-3">Contact</div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>Get in Touch</h1>
          <p className="text-white/70 text-lg max-w-xl">We respond to all inquiries within 24 business hours. For urgent matters, call us directly.</p>
        </div>
      </section>

      {/* Contact body */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Info */}
            <div>
              <h2 className="text-xl font-bold text-[#2F3A45] mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>Contact Information</h2>
              <div className="space-y-7">
                {[
                  { icon: '📍', title: 'Address', lines: ['123 Industrial Blvd', 'Warehouse District', 'Metro City 10001'] },
                  { icon: '📞', title: 'Phone', lines: ['+1 (800) 555-1234', '+1 (312) 555-9876 (direct)'] },
                  { icon: '✉️', title: 'Email', lines: ['info@generalwarehouse.com', 'sales@generalwarehouse.com'] },
                  { icon: '🕐', title: 'Hours', lines: ['Mon–Fri: 6:00 AM – 10:00 PM', 'Sat–Sun: 8:00 AM – 6:00 PM', '24/7 emergency line available'] },
                ].map(item => (
                  <div key={item.title} className="flex gap-4">
                    <div className="text-2xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <div className="font-semibold text-[#2F3A45] text-sm mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.title}</div>
                      {item.lines.map(l => <div key={l} className="text-gray-600 text-sm">{l}</div>)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-5 bg-[#0F4C81] rounded-lg">
                <h3 className="text-white font-bold mb-2 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>Schedule a Tour</h3>
                <p className="text-white/70 text-sm mb-4">Book a facility walk-through with our operations team.</p>
                <button onClick={() => go('quote')} className="w-full py-2.5 bg-[#43A047] hover:bg-[#388E3C] text-white text-sm font-semibold rounded transition-colors">
                  Book Appointment
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-lg border border-gray-100 p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-5">✅</div>
                  <h3 className="text-xl font-bold text-[#2F3A45] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Message Received</h3>
                  <p className="text-gray-600 mb-6">Thank you, {form.name}. We'll respond to your inquiry within 24 business hours.</p>
                  <button onClick={() => setSubmitted(false)} className="text-[#0F4C81] font-semibold text-sm hover:underline">Send another message</button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-[#2F3A45] mb-7" style={{ fontFamily: 'Poppins, sans-serif' }}>Send Us a Message</h2>
                  <form onSubmit={submit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Full Name *</label>
                        <input required name="name" value={form.name} onChange={handle} type="text" placeholder="John Smith" className="w-full px-4 py-3 border border-gray-200 rounded text-sm text-gray-800 focus:outline-none focus:border-[#0F4C81] transition-colors"/>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Company</label>
                        <input name="company" value={form.company} onChange={handle} type="text" placeholder="Company Name" className="w-full px-4 py-3 border border-gray-200 rounded text-sm text-gray-800 focus:outline-none focus:border-[#0F4C81] transition-colors"/>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Email *</label>
                        <input required name="email" value={form.email} onChange={handle} type="email" placeholder="john@company.com" className="w-full px-4 py-3 border border-gray-200 rounded text-sm text-gray-800 focus:outline-none focus:border-[#0F4C81] transition-colors"/>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Phone</label>
                        <input name="phone" value={form.phone} onChange={handle} type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 border border-gray-200 rounded text-sm text-gray-800 focus:outline-none focus:border-[#0F4C81] transition-colors"/>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Subject *</label>
                      <select required name="subject" value={form.subject} onChange={handle} className="w-full px-4 py-3 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-[#0F4C81] transition-colors bg-white">
                        <option value="">Select a subject</option>
                        <option>Storage Inquiry</option>
                        <option>Pricing / Quote</option>
                        <option>Facility Tour</option>
                        <option>Existing Client Support</option>
                        <option>Partnership / Referral</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Message *</label>
                      <textarea required name="message" value={form.message} onChange={handle} rows={5} placeholder="Describe your storage needs or inquiry..." className="w-full px-4 py-3 border border-gray-200 rounded text-sm text-gray-800 focus:outline-none focus:border-[#0F4C81] transition-colors resize-none"/>
                    </div>
                    <button type="submit" className="w-full py-3.5 bg-[#0F4C81] hover:bg-[#0a3560] text-white font-semibold rounded transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Send Message
                    </button>
                    <p className="text-xs text-gray-400 text-center">We respond within 24 business hours. For urgent inquiries, call +1 (800) 555-1234.</p>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Map placeholder */}
          <div className="mt-10 rounded-lg overflow-hidden bg-gray-200 h-64 flex items-center justify-center border border-gray-200">
            <div className="text-center">
              <div className="text-4xl mb-3">🗺️</div>
              <div className="text-gray-500 font-medium text-sm">123 Industrial Blvd, Metro City 10001</div>
              <div className="text-gray-400 text-xs mt-1">Replace with Google Maps or Mapbox embed</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
