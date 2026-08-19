import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

type LocationItem = {
  icon?: React.ReactNode;
  label: string;
  value: string;
};

type LocationProps = {
  items: LocationItem[];
  tour_url?: string;
  className?: string;
};

export default function Location({ items, tour_url, className = "" }: LocationProps) {
  return (
    <section className={`bg-neutral-50 py-24 ${className}`}>
      <Container>
        <SectionHeading
          overline="Location"
          heading="Find Us"
          description="Conveniently located with easy highway access for fast loading and unloading."
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            {items.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                {item.icon && (
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-500">
                    {item.icon}
                  </div>
                )}
                <div>
                  <div className="font-heading text-sm font-semibold text-neutral-900">
                    {item.label}
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">{item.value}</div>
                </div>
              </div>
            ))}
            {tour_url && (
              <div className="pt-4">
                <Button href={tour_url} variant="primary" size="md">
                  Schedule a Tour
                </Button>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center rounded-xl border border-neutral-200 bg-neutral-100 p-12 text-neutral-400">
            <p className="text-sm">Map integration available via extension</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
