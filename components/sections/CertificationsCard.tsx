import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type CertItem = {
  text: string;
};

type CertificationsCardProps = {
  items: CertItem[];
  className?: string;
};

export default function CertificationsCard({ items, className = "" }: CertificationsCardProps) {
  return (
    <section className={`bg-neutral-0 py-24 ${className}`}>
      <Container>
        <SectionHeading
          overline="Certifications"
          heading="Compliance & Certifications"
          description="We maintain the highest industry standards for quality and safety."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-4 rounded-xl border border-neutral-200 bg-neutral-0 p-6 shadow-card"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-500">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="font-heading text-sm font-semibold text-neutral-800">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
