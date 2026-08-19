import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type ServiceGridItem = {
  id: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
};

type ServiceGridProps = {
  items: ServiceGridItem[];
  className?: string;
};

export default function ServiceGrid({ items, className = "" }: ServiceGridProps) {
  return (
    <section className={`bg-neutral-0 py-24 ${className}`}>
      <Container>
        <SectionHeading
          overline="Our Services"
          heading="Comprehensive Storage Solutions"
          description="From bulk inventory to specialized storage, we provide the space and services your business needs."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="group rounded-xl border border-neutral-200 bg-neutral-0 p-8 shadow-card transition-all hover:border-primary-300 hover:shadow-raised"
            >
              {item.icon && (
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-500 transition-colors group-hover:bg-primary-500 group-hover:text-white">
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
