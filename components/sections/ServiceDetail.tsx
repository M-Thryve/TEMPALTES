import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type ServiceSpec = {
  label: string;
  value: string;
};

type ServiceDetailItem = {
  id: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  image?: string;
  features?: { text: string }[];
  specs?: ServiceSpec[];
};

type ServiceDetailProps = {
  items: ServiceDetailItem[];
  className?: string;
};

export default function ServiceDetail({ items, className = "" }: ServiceDetailProps) {
  return (
    <section className={`bg-neutral-0 py-24 ${className}`}>
      <Container>
        <SectionHeading
          overline="Our Services"
          heading="What We Offer"
          description="Each service is backed by decades of operational expertise and purpose-built facilities."
        />
        <div className="mt-16 space-y-20">
          {items.map((item, index) => {
            const reversed = index % 2 === 1;
            return (
            <div
              key={item.id}
              className="grid items-center gap-12 lg:grid-cols-2"
            >
              <div className={reversed ? "lg:order-2" : ""}>
                {item.icon && (
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-500">
                    {item.icon}
                  </div>
                )}
                <h3 className="font-heading text-2xl font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-neutral-600">{item.description}</p>

                {item.features && item.features.length > 0 && (
                  <ul className="mt-6 space-y-3">
                    {item.features.map((feature) => (
                      <li
                        key={feature.text}
                        className="flex items-start gap-3 text-sm text-neutral-700"
                      >
                        <svg
                          className="mt-0.5 h-5 w-5 shrink-0 text-accent-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                )}

                {item.specs && item.specs.length > 0 && (
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {item.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="rounded-lg bg-neutral-50 p-4"
                      >
                        <div className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                          {spec.label}
                        </div>
                        <div className="mt-1 font-heading text-sm font-semibold text-neutral-900">
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {item.image && (
                <div className={`relative overflow-hidden rounded-xl ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
