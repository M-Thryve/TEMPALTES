import Typography from "@/components/ui/Typography";

type SectionHeadingProps = {
  overline?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  overline,
  heading,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass =
    align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {overline && (
        <Typography as="overline" className="mb-3 block">
          {overline}
        </Typography>
      )}
      <Typography as="h2">{heading}</Typography>
      {description && (
        <Typography as="body-lg" className="mt-4">
          {description}
        </Typography>
      )}
    </div>
  );
}
