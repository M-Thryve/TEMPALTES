import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type ValueItem = {
  icon?: React.ReactNode;
  title: string;
  description: string;
};

type ValuesGridProps = {
  items: ValueItem[];
  className?: string;
};

export default function ValuesGrid({ items, className = "" }: ValuesGridProps) {
  return (
    <section className={`bg-neutral-0 py-24 ${className}`}>
      <Container>
        <SectionHeading
          overline="Our Values"
          heading="What Drives Us"
          description="The principles that guide every decision we make."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-neutral-200 bg-neutral-0 p-8 shadow-card"
            >
              {item.icon && (
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-500">
                  {item.icon}
                </div>
              )}
              <h3 className="font-heading text-lg font-semibold text-neutral-900">
                {item.title}
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
