import { useState } from 'react'

export default function Quote() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '',
    industry: '', storageReq: '', capacity: '', storageType: '',
    location: '', startDate: '', duration: '', requirements: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [step, setStep] = useState(1)

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputCls = "w-full px-4 py-3 border border-gray-200 rounded text-sm text-gray-800 focus:outline-none focus:border-[#0F4C81] focus:ring-1 focus:ring-[#0F4C81]/20 transition-colors"
  const labelCls = "block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2"

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#F5F7FA] py-20">
        <div className="bg-white rounded-xl border border-gray-100 shadow-md p-12 max-w-lg w-full text-center mx-4">
          <div className="w-16 h-16 bg-[#43A047]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[#43A047]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#2F3A45] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Quote Request Received</h2>
          <p className="text-gray-600 mb-2">Thank you, <strong>{form.name}</strong>. Your request has been submitted successfully.</p>
          <p className="text-gray-500 text-sm mb-8">A member of our commercial team will contact you at <strong>{form.email}</strong> within 24 business hours with a customized proposal.</p>
          <div className="bg-[#F5F7FA] rounded-lg p-5 text-left space-y-2 mb-8">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Summary</div>
            {[
              { l: 'Industry', v: form.industry },
              { l: 'Storage Type', v: form.storageType },
              { l: 'Capacity', v: form.capacity },
              { l: 'Start Date', v: form.startDate },
              { l: 'Duration', v: form.duration },
            ].filter(i => i.v).map(i => (
              <div key={i.l} className="flex justify-between text-sm">
                <span className="text-gray-500">{i.l}</span>
                <span className="text-[#2F3A45] font-medium">{i.v}</span>
              </div>
            ))}
          </div>
          <div className="text-sm text-gray-400">Questions? Call <a href="tel:+18005551234" className="text-[#0F4C81] font-semibold">+1 (800) 555-1234</a></div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-[#0F4C81]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-[#43A047] text-sm font-semibold uppercase tracking-widest mb-3">Request a Quote</div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Get Your Custom Storage Quote
          </h1>
          <p className="text-white/70">Complete the form below and our team will respond with a tailored proposal within 24 business hours.</p>
        </div>
      </section>

      {/* Step indicator */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-0">
            {[
              { n: 1, label: 'Your Details' },
              { n: 2, label: 'Storage Needs' },
              { n: 3, label: 'Requirements' },
            ].map((s, i) => (
              <div key={s.n} className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= s.n ? 'bg-[#0F4C81] text-white' : 'bg-gray-100 text-gray-400'}`}>{s.n}</div>
                  <span className={`text-xs font-semibold hidden sm:block ${step >= s.n ? 'text-[#0F4C81]' : 'text-gray-400'}`}>{s.label}</span>
                </div>
                {i < 2 && <div className={`w-8 sm:w-16 h-0.5 mx-2 ${step > s.n ? 'bg-[#0F4C81]' : 'bg-gray-200'}`}/>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={submit}>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
              {/* Step 1: Contact Details */}
              {step === 1 && (
                <div>
                  <h2 className="text-xl font-bold text-[#2F3A45] mb-7" style={{ fontFamily: 'Poppins, sans-serif' }}>Your Contact Details</h2>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>Full Name *</label>
                      <input required name="name" value={form.name} onChange={handle} type="text" placeholder="Sarah Mitchell" className={inputCls}/>
                    </div>
                    <div>
                      <label className={labelCls}>Company Name *</label>
                      <input required name="company" value={form.company} onChange={handle} type="text" placeholder="RetailMax Group" className={inputCls}/>
                    </div>
                    <div>
                      <label className={labelCls}>Business Email *</label>
                      <input required name="email" value={form.email} onChange={handle} type="email" placeholder="sarah@retailmax.com" className={inputCls}/>
                    </div>
                    <div>
                      <label className={labelCls}>Phone Number *</label>
                      <input required name="phone" value={form.phone} onChange={handle} type="tel" placeholder="+1 (312) 555-0000" className={inputCls}/>
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelCls}>Industry *</label>
                      <select required name="industry" value={form.industry} onChange={handle} className={inputCls + ' bg-white'}>
                        <option value="">Select your industry</option>
                        <option>Retail</option>
                        <option>Manufacturing</option>
                        <option>E-Commerce</option>
                        <option>Distribution</option>
                        <option>Logistics / 3PL</option>
                        <option>Food & Beverage</option>
                        <option>Pharmaceutical</option>
                        <option>Technology / Electronics</option>
                        <option>Construction / Building Materials</option>
                        <option>Agriculture</option>
                        <option>Government / Public Sector</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button type="button" onClick={() => { if (form.name && form.company && form.email && form.phone && form.industry) setStep(2) }} className="px-8 py-3.5 bg-[#0F4C81] hover:bg-[#0a3560] text-white font-semibold rounded transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Next: Storage Needs →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Storage Needs */}
              {step === 2 && (
                <div>
                  <h2 className="text-xl font-bold text-[#2F3A45] mb-7" style={{ fontFamily: 'Poppins, sans-serif' }}>Storage Requirements</h2>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>Storage Requirement *</label>
                      <select required name="storageReq" value={form.storageReq} onChange={handle} className={inputCls + ' bg-white'}>
                        <option value="">Select type</option>
                        <option>General Storage</option>
                        <option>Climate-Controlled Storage</option>
                        <option>Industrial / Heavy Storage</option>
                        <option>Hazmat Storage</option>
                        <option>Bonded Storage</option>
                        <option>Cross-Docking</option>
                        <option>Dedicated Warehouse Lease</option>
                        <option>Inventory Management + Storage</option>
                        <option>Not Sure — Need Consultation</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>Storage Type *</label>
                      <select required name="storageType" value={form.storageType} onChange={handle} className={inputCls + ' bg-white'}>
                        <option value="">Select storage type</option>
                        <option>Pallet Racking</option>
                        <option>Bulk Floor Storage</option>
                        <option>Drive-In Racking</option>
                        <option>Push-Back Racking</option>
                        <option>Mezzanine Storage</option>
                        <option>Cold / Freezer Storage</option>
                        <option>Multiple Types</option>
                        <option>Not Sure</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>Required Capacity *</label>
                      <select required name="capacity" value={form.capacity} onChange={handle} className={inputCls + ' bg-white'}>
                        <option value="">Select capacity range</option>
                        <option>Under 500 sq ft (10–25 pallets)</option>
                        <option>500–2,000 sq ft (25–100 pallets)</option>
                        <option>2,000–10,000 sq ft (100–500 pallets)</option>
                        <option>10,000–50,000 sq ft</option>
                        <option>50,000–100,000 sq ft</option>
                        <option>100,000+ sq ft</option>
                        <option>Flexible / Variable</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>Preferred Location / Campus</label>
                      <select name="location" value={form.location} onChange={handle} className={inputCls + ' bg-white'}>
                        <option value="">No preference</option>
                        <option>Campus A — North Industrial</option>
                        <option>Campus B — South Logistics Hub</option>
                        <option>Campus C — East Distribution</option>
                        <option>Any available</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelCls}>Target Start Date *</label>
                      <input required name="startDate" value={form.startDate} onChange={handle} type="date" className={inputCls}/>
                    </div>
                    <div>
                      <label className={labelCls}>Estimated Duration *</label>
                      <select required name="duration" value={form.duration} onChange={handle} className={inputCls + ' bg-white'}>
                        <option value="">Select duration</option>
                        <option>30–90 days (short-term)</option>
                        <option>3–6 months</option>
                        <option>6–12 months</option>
                        <option>1–2 years</option>
                        <option>2–5 years</option>
                        <option>5+ years</option>
                        <option>Open-ended / Ongoing</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-between">
                    <button type="button" onClick={() => setStep(1)} className="px-6 py-3 border border-gray-200 text-gray-600 font-semibold rounded transition-colors hover:bg-gray-50">← Back</button>
                    <button type="button" onClick={() => { if (form.storageReq && form.storageType && form.capacity && form.startDate && form.duration) setStep(3) }} className="px-8 py-3.5 bg-[#0F4C81] hover:bg-[#0a3560] text-white font-semibold rounded transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Next: Requirements →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Additional Requirements */}
              {step === 3 && (
                <div>
                  <h2 className="text-xl font-bold text-[#2F3A45] mb-7" style={{ fontFamily: 'Poppins, sans-serif' }}>Additional Information</h2>
                  <div className="space-y-5">
                    <div>
                      <label className={labelCls}>Additional Requirements or Notes</label>
                      <textarea name="requirements" value={form.requirements} onChange={handle} rows={5} placeholder="Describe any specific requirements: product type, access frequency, special handling, certifications needed, value-added services, etc." className={inputCls + ' resize-none'}/>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="p-4 bg-[#F5F7FA] rounded-lg">
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Your Request Summary</div>
                        <div className="space-y-1.5 text-sm">
                          <div className="flex justify-between"><span className="text-gray-500">Name</span><span className="font-medium text-[#2F3A45]">{form.name}</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">Industry</span><span className="font-medium text-[#2F3A45]">{form.industry}</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">Storage</span><span className="font-medium text-[#2F3A45]">{form.storageType}</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">Capacity</span><span className="font-medium text-[#2F3A45] text-xs">{form.capacity}</span></div>
                          <div className="flex justify-between"><span className="text-gray-500">Duration</span><span className="font-medium text-[#2F3A45]">{form.duration}</span></div>
                        </div>
                      </div>
                      <div className="p-4 bg-[#0F4C81]/5 border border-[#0F4C81]/20 rounded-lg">
                        <div className="text-xs font-bold text-[#0F4C81] uppercase tracking-widest mb-2">What Happens Next</div>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex gap-2"><span className="text-[#43A047] font-bold">1.</span> We review your requirements</li>
                          <li className="flex gap-2"><span className="text-[#43A047] font-bold">2.</span> Commercial team prepares proposal</li>
                          <li className="flex gap-2"><span className="text-[#43A047] font-bold">3.</span> Response within 24 business hours</li>
                          <li className="flex gap-2"><span className="text-[#43A047] font-bold">4.</span> Optional facility walk-through</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-between">
                    <button type="button" onClick={() => setStep(2)} className="px-6 py-3 border border-gray-200 text-gray-600 font-semibold rounded transition-colors hover:bg-gray-50">← Back</button>
                    <button type="submit" className="px-8 py-3.5 bg-[#43A047] hover:bg-[#388E3C] text-white font-semibold rounded transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Submit Quote Request ✓
                    </button>
                  </div>
                </div>
              )}
            </div>
          </form>

          <p className="text-center text-gray-400 text-xs mt-6">
            By submitting this form you agree to our <button className="text-[#0F4C81] hover:underline">Privacy Policy</button>. We never share your information.
          </p>
        </div>
      </section>
    </div>
  )
}
