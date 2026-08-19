import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type PartnerItem = {
  name: string;
  logo?: string;
};

type PartnersProps = {
  items: PartnerItem[];
  className?: string;
};

export default function Partners({ items, className = "" }: PartnersProps) {
  return (
    <section className={`bg-neutral-50 py-16 ${className}`}>
      <Container>
        <SectionHeading
          overline="Trusted By"
          heading="Our Partners"
        />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex h-12 items-center px-4 text-sm font-semibold text-neutral-400 transition-colors hover:text-neutral-600"
            >
              {item.name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
