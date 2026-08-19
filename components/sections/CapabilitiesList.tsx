import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type CapabilityItem = {
  text: string;
};

type CapabilitiesListProps = {
  items: CapabilityItem[];
  className?: string;
};

export default function CapabilitiesList({ items, className = "" }: CapabilitiesListProps) {
  return (
    <section className={`bg-neutral-50 py-24 ${className}`}>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              overline="Capabilities"
              heading="What We Can Do"
              align="left"
            />
          </div>
          <div>
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.text}
                  className="flex items-start gap-3 text-neutral-700"
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
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
