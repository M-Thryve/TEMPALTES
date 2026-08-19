import Container from "@/components/ui/Container";

type StatItem = {
  num: string;
  label: string;
};

type StatsStripProps = {
  items: StatItem[];
  className?: string;
};

export default function StatsStrip({ items, className = "" }: StatsStripProps) {
  return (
    <section className={`bg-primary-500 py-12 ${className}`}>
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="text-center">
              <div className="font-heading text-3xl font-bold text-white">
                {item.num}
              </div>
              <div className="mt-1 text-sm text-primary-100">{item.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
