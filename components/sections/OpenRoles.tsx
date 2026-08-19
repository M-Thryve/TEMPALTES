import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

type RoleItem = {
  title: string;
  dept: string;
  type: string;
  location: string;
  description: string;
};

type OpenRolesProps = {
  items: RoleItem[];
  contact_email?: string;
  className?: string;
};

export default function OpenRoles({ items, contact_email, className = "" }: OpenRolesProps) {
  return (
    <section className={`bg-neutral-50 py-24 ${className}`}>
      <Container>
        <SectionHeading
          overline="Careers"
          heading="Open Positions"
          description="Join our team and help shape the future of warehousing."
        />
        <div className="mt-14 space-y-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 rounded-xl border border-neutral-200 bg-neutral-0 p-6 shadow-card sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-heading text-lg font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <div className="mt-2 flex flex-wrap gap-3">
                  <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-600">
                    {item.dept}
                  </span>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
                    {item.type}
                  </span>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
                    {item.location}
                  </span>
                </div>
                <p className="mt-3 text-sm text-neutral-600">{item.description}</p>
              </div>
              {contact_email && (
                <Button
                  href={`mailto:${contact_email}?subject=Application: ${item.title}`}
                  variant="secondary"
                  size="sm"
                >
                  Apply
                </Button>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
