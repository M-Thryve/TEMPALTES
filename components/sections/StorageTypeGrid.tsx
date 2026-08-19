import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type StorageTypeItem = {
  label: string;
  icon?: React.ReactNode;
};

type StorageTypeGridProps = {
  items: StorageTypeItem[];
  className?: string;
};

export default function StorageTypeGrid({ items, className = "" }: StorageTypeGridProps) {
  return (
    <section className={`bg-neutral-50 py-24 ${className}`}>
      <Container>
        <SectionHeading
          overline="Storage Options"
          heading="Types of Storage We Offer"
          description="Flexible storage configurations to match your inventory requirements."
        />
        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-full border border-neutral-200 bg-neutral-0 px-6 py-3 shadow-card transition-all hover:border-primary-300 hover:shadow-raised"
            >
              {item.icon && (
                <span className="text-primary-500">{item.icon}</span>
              )}
              <span className="font-heading text-sm font-semibold text-neutral-800">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
