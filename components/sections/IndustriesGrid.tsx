import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type IndustryItem = {
  name: string;
  icon?: React.ReactNode;
  image?: string;
  description: string;
};

type IndustriesGridProps = {
  items: IndustryItem[];
  className?: string;
};

export default function IndustriesGrid({ items, className = "" }: IndustriesGridProps) {
  return (
    <section className={`bg-neutral-0 py-24 ${className}`}>
      <Container>
        <SectionHeading
          overline="Industries We Serve"
          heading="Specialized Storage for Every Sector"
          description="Tailored warehousing solutions designed around industry-specific requirements."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.name}
              className="group overflow-hidden rounded-xl border border-neutral-200 bg-neutral-0 shadow-card transition-all hover:border-primary-300 hover:shadow-raised"
            >
              {item.image && (
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6">
                {item.icon && (
                  <div className="mb-3 text-primary-500">{item.icon}</div>
                )}
                <h3 className="font-heading text-lg font-semibold text-neutral-900">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
