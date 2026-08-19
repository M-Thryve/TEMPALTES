import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type SecurityItem = {
  icon?: React.ReactNode;
  title: string;
  description: string;
};

type SecurityStripProps = {
  items: SecurityItem[];
  className?: string;
};

export default function SecurityStrip({ items, className = "" }: SecurityStripProps) {
  return (
    <section className={`bg-secondary-500 py-24 ${className}`}>
      <Container>
        <SectionHeading
          overline="Security"
          heading="Facility Security & Safety"
          description="Round-the-clock protection for your valuable inventory."
          className="[&_h2]:text-white [&_p]:text-neutral-300 [&_span]:text-accent-400"
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="text-center">
              {item.icon && (
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-accent-400">
                  {item.icon}
                </div>
              )}
              <h3 className="font-heading text-sm font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
