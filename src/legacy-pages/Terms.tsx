export default function Terms() {
  return (
    <div>
      <section className="py-20 bg-[#2F3A45]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#43A047] text-sm font-semibold uppercase tracking-widest mb-3">Legal</div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Terms & Conditions</h1>
          <p className="text-white/60 mt-3 text-sm">Last updated: January 1, 2025</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-gray-600 text-sm leading-relaxed">
            {[
              { title: '1. Acceptance of Terms', content: 'By accessing and using this website, or by entering into a storage agreement with General Warehouse Provider ("GWP"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use this website or our services.' },
              { title: '2. Services', content: 'GWP provides warehousing, storage, and related logistics services as described on this website and in individual client agreements. Service availability, pricing, and terms are subject to availability and are confirmed only upon execution of a signed storage agreement. Information on this website is for general guidance and does not constitute a binding offer.' },
              { title: '3. Client Responsibilities', content: 'Clients are responsible for providing accurate descriptions of all goods stored, ensuring all stored goods comply with applicable laws and regulations, proper labeling and packaging of all inbound goods, timely payment of invoices, and notification of any hazardous or regulated materials prior to storage. Clients may not store illegal goods, prohibited materials, or goods that misrepresent their nature.' },
              { title: '4. Limitation of Liability', content: 'GWP\'s liability for loss or damage to stored goods is limited to the amount stated in the applicable storage agreement, subject to applicable law. GWP is not liable for consequential, indirect, or special damages arising from storage or service failures, except to the extent required by law. Clients are encouraged to maintain their own cargo and goods-in-transit insurance.' },
              { title: '5. Payment Terms', content: 'Storage fees are invoiced monthly in advance unless otherwise agreed in writing. Late payments are subject to a 1.5% monthly late fee. GWP reserves the right to deny access to stored goods pending resolution of outstanding balances. Continued non-payment may result in exercise of warehouseman\'s lien rights under applicable state law.' },
              { title: '6. Termination', content: 'Either party may terminate a storage agreement with written notice as specified in the individual agreement, typically 30 days for standard agreements. GWP may terminate immediately for material breach, including non-payment, storage of prohibited goods, or safety violations. Upon termination, clients must remove all goods within the notice period.' },
              { title: '7. Governing Law', content: 'These Terms and all storage agreements are governed by the laws of the State of Illinois. Any disputes shall be resolved in the courts of Cook County, Illinois, or through binding arbitration as mutually agreed.' },
              { title: '8. Changes to Terms', content: 'GWP reserves the right to modify these Terms at any time. Changes will be posted on this website with an updated effective date. Continued use of our services after such changes constitutes acceptance of the modified terms.' },
              { title: '9. Contact', content: 'For questions about these Terms, contact: General Warehouse Provider, Legal Department, 123 Industrial Blvd, Metro City 10001. Email: legal@generalwarehouse.com.' },
            ].map(section => (
              <div key={section.title}>
                <h2 className="text-[#2F3A45] font-bold text-base mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>{section.title}</h2>
                <p>{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
