import Container from "@/components/ui/Container";
import Typography from "@/components/ui/Typography";

type PageHeroProps = {
  heading: string;
  description?: string;
  overline?: string;
  className?: string;
};

export default function PageHero({
  heading,
  description,
  overline,
  className = "",
}: PageHeroProps) {
  return (
    <section
      className={`bg-primary-800 py-20 sm:py-24 ${className}`}
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {overline && (
            <Typography as="overline" className="mb-4 block text-accent-400">
              {overline}
            </Typography>
          )}
          <Typography as="h1" className="text-white">
            {heading}
          </Typography>
          {description && (
            <Typography as="body-lg" className="mt-6 text-primary-100">
              {description}
            </Typography>
          )}
        </div>
      </Container>
    </section>
  );
}
