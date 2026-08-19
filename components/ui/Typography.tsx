type HeadingTag = "h1" | "h2" | "h3" | "h4";

type DisplayTag = "display";
type BodyTag = "body-lg" | "body" | "body-sm";
type MetaTag = "caption" | "overline";

type Tag = DisplayTag | HeadingTag | BodyTag | MetaTag;

type TypographyProps = {
  as?: Tag;
  className?: string;
  children: React.ReactNode;
};

const tagClasses: Record<Tag, string> = {
  display:
    "font-heading text-[3.5rem]/[1.1] font-semibold tracking-tight text-neutral-900",
  h1: "font-heading text-[2.75rem]/[1.15] font-semibold tracking-tight text-neutral-900",
  h2: "font-heading text-[2.25rem]/[1.2] font-semibold text-neutral-900",
  h3: "font-heading text-[1.75rem]/[1.25] font-semibold text-neutral-900",
  h4: "font-heading text-[1.25rem]/[1.3] font-semibold text-neutral-900",
  "body-lg": "text-lg/relaxed text-neutral-700",
  body: "text-base/normal text-neutral-700",
  "body-sm": "text-sm/normal text-neutral-700",
  caption: "text-xs/normal font-medium tracking-widest text-neutral-500",
  overline:
    "text-xs/normal font-semibold uppercase tracking-[0.12em] text-accent-500",
};

const headingTags: Record<DisplayTag | HeadingTag, HeadingTag> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
};

const bodyLike: Set<string> = new Set(["body-lg", "body", "body-sm"]);

export default function Typography({
  as = "body",
  className = "",
  children,
}: TypographyProps) {
  const classes = `${tagClasses[as]} ${className}`;

  if (as in headingTags) {
    const Heading = headingTags[as as DisplayTag | HeadingTag];
    return <Heading className={classes}>{children}</Heading>;
  }

  if (bodyLike.has(as)) {
    return <p className={classes}>{children}</p>;
  }

  return <span className={classes}>{children}</span>;
}
