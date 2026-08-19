import Image from "next/image";
import Container from "@/components/ui/Container";
import Typography from "@/components/ui/Typography";

type ChecklistItem = {
  text: string;
};

type BadgeItem = {
  num: string;
  label: string;
};

type StatItem = {
  num: string;
  label: string;
};

type CompanyOverviewProps = {
  body: string;
  image?: string;
  checklist?: ChecklistItem[];
  badge?: BadgeItem[];
  stats?: StatItem[];
  className?: string;
};

export default function CompanyOverview({
  body,
  image,
  checklist,
  badge,
  stats,
  className = "",
}: CompanyOverviewProps) {
  return (
    <section className={`bg-neutral-0 py-24 ${className}`}>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Typography as="overline" className="mb-3 block">
              About Us
            </Typography>
            <Typography as="h2">Your Trusted Storage Partner</Typography>
            <Typography as="body" className="mt-6">
              {body}
            </Typography>

            {checklist && checklist.length > 0 && (
              <ul className="mt-8 space-y-3">
                {checklist.map((item) => (
                  <li
                    key={item.text}
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
                    {item.text}
                  </li>
                ))}
              </ul>
            )}

            {badge && badge.length > 0 && (
              <div className="mt-8 flex gap-8">
                {badge.map((b) => (
                  <div key={b.label}>
                    <div className="font-heading text-2xl font-bold text-primary-500">
                      {b.num}
                    </div>
                    <div className="text-xs text-neutral-500">{b.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {image && (
            <div className="relative overflow-hidden rounded-xl">
              <div className="aspect-[4/3]">
                <Image
                  src={image}
                  alt="Company overview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {stats && stats.length > 0 && (
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-neutral-200 pt-12 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-3xl font-bold text-primary-500">
                  {stat.num}
                </div>
                <div className="mt-1 text-sm text-neutral-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
