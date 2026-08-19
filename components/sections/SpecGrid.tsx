import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type SpecItem = {
  label: string;
  value: string;
};

type SpecCategory = {
  category: string;
  items: SpecItem[];
};

type SpecGridProps = {
  items: SpecCategory[];
  className?: string;
};

export default function SpecGrid({ items, className = "" }: SpecGridProps) {
  return (
    <section className={`bg-neutral-0 py-24 ${className}`}>
      <Container>
        <SectionHeading
          overline="Specifications"
          heading="Facility Specifications"
          description="Detailed specifications of our warehouse infrastructure."
        />
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((group) => (
            <div key={group.category}>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-500">
                {group.category}
              </h3>
              <div className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between border-b border-neutral-100 pb-3"
                  >
                    <span className="text-sm text-neutral-600">{item.label}</span>
                    <span className="font-heading text-sm font-semibold text-neutral-900">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
