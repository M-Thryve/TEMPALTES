import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type BenefitItem = {
  icon?: React.ReactNode;
  label: string;
  description: string;
};

type BenefitsGridProps = {
  items: BenefitItem[];
  className?: string;
};

export default function BenefitsGrid({ items, className = "" }: BenefitsGridProps) {
  return (
    <section className={`bg-neutral-0 py-24 ${className}`}>
      <Container>
        <SectionHeading
          overline="Benefits"
          heading="Why Work With Us"
          description="We invest in our team because our people are our greatest asset."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-neutral-200 bg-neutral-0 p-8 shadow-card"
            >
              {item.icon && (
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent-50 text-accent-500">
                  {item.icon}
                </div>
              )}
              <h3 className="font-heading text-lg font-semibold text-neutral-900">
                {item.label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
