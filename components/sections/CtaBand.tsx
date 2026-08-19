import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Typography from "@/components/ui/Typography";

type CtaBandProps = {
  heading?: string;
  description?: string;
  cta: {
    label: string;
    href: string;
  };
  className?: string;
};

export default function CtaBand({
  heading = "Ready to Find Your Storage Solution?",
  description = "Get a custom quote tailored to your business needs. Our team is standing by to help you find the perfect warehousing solution.",
  cta,
  className = "",
}: CtaBandProps) {
  return (
    <section className={`bg-primary-500 py-16 ${className}`}>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Typography as="h2" className="text-white">
            {heading}
          </Typography>
          <Typography as="body-lg" className="mt-4 text-primary-100">
            {description}
          </Typography>
          <div className="mt-8">
            <Button href={cta.href} variant="accent" size="lg">
              {cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
