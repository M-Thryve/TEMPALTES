export default function Privacy() {
  return (
    <div>
      <section className="py-20 bg-[#2F3A45]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#43A047] text-sm font-semibold uppercase tracking-widest mb-3">Legal</div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Privacy Policy</h1>
          <p className="text-white/60 mt-3 text-sm">Last updated: January 1, 2025</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <div className="space-y-10 text-gray-600 text-sm leading-relaxed">
            {[
              { title: '1. Information We Collect', content: 'We collect information you provide directly to us, such as when you fill out a contact form, request a quote, apply for a job, or communicate with us by email or phone. This information may include your name, company name, email address, phone number, and details about your storage requirements. We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages viewed.' },
              { title: '2. How We Use Your Information', content: 'We use the information we collect to respond to your inquiries, provide quotes and storage proposals, communicate about services, send relevant operational updates, improve our website and services, comply with legal obligations, and process job applications. We do not sell, rent, or trade your personal information to third parties for their marketing purposes.' },
              { title: '3. Information Sharing', content: 'We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided those parties agree to keep this information confidential. We may also disclose your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others\' rights, property, or safety.' },
              { title: '4. Data Retention', content: 'We retain personal information for as long as necessary to fulfill the purposes for which it was collected, including any legal, accounting, or reporting requirements. Quote and inquiry data is retained for 3 years from the date of last contact. Client operational data is retained for the duration of the storage agreement plus 7 years.' },
              { title: '5. Security', content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.' },
              { title: '6. Cookies', content: 'Our website may use cookies and similar tracking technologies to enhance your experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. If you do not accept cookies, some portions of our site may not function properly.' },
              { title: '7. Your Rights', content: 'Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict processing of your personal information. To exercise any of these rights, please contact us at privacy@generalwarehouse.com. We will respond to your request within 30 days.' },
              { title: '8. Contact Us', content: 'If you have questions about this Privacy Policy, please contact us at: General Warehouse Provider, 123 Industrial Blvd, Metro City 10001. Email: privacy@generalwarehouse.com. Phone: +1 (800) 555-1234.' },
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
