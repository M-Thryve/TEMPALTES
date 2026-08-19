import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type IndustryDetailItem = {
  name: string;
  icon?: React.ReactNode;
  image?: string;
  description: string;
  challenges?: { text: string }[];
  solutions?: { text: string }[];
  clients?: string;
};

type IndustryDetailProps = {
  items: IndustryDetailItem[];
  className?: string;
};

export default function IndustryDetail({ items, className = "" }: IndustryDetailProps) {
  return (
    <section className={`bg-neutral-0 py-24 ${className}`}>
      <Container>
        <SectionHeading
          overline="Industries"
          heading="Industry Expertise"
          description="Deep understanding of sector-specific storage requirements."
        />
        <div className="mt-16 space-y-20">
          {items.map((item, index) => (
            <div
              key={item.name}
              className="grid items-center gap-12 lg:grid-cols-2"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                {item.icon && (
                  <div className="mb-4 text-primary-500">{item.icon}</div>
                )}
                <h3 className="font-heading text-2xl font-semibold text-neutral-900">
                  {item.name}
                </h3>
                <p className="mt-4 text-neutral-600">{item.description}</p>

                {item.challenges && item.challenges.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      Challenges
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {item.challenges.map((c) => (
                        <li key={c.text} className="flex items-start gap-2 text-sm text-neutral-600">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-danger" />
                          {c.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.solutions && item.solutions.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      Our Solutions
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {item.solutions.map((s) => (
                        <li key={s.text} className="flex items-start gap-2 text-sm text-neutral-600">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                          {s.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.clients && (
                  <p className="mt-6 text-sm text-neutral-500">
                    <span className="font-semibold">Clients served:</span> {item.clients}
                  </p>
                )}
              </div>

              {item.image && (
                <div className={`relative overflow-hidden rounded-xl ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-[4/3]">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
