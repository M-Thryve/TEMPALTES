import Container from "@/components/ui/Container";

type LegalSection = {
  title: string;
  body: string;
};

type LegalBodyProps = {
  sections: LegalSection[];
  legal_entity?: string;
  className?: string;
};

export default function LegalBody({ sections, legal_entity, className = "" }: LegalBodyProps) {
  return (
    <section className={`bg-neutral-0 py-24 ${className}`}>
      <Container>
        <div className="mx-auto max-w-3xl">
          {legal_entity && (
            <p className="mb-8 text-sm text-neutral-500">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              {` · ${legal_entity}`}
            </p>
          )}
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-heading text-xl font-semibold text-neutral-900">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-neutral-600">
                  <p>{section.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
