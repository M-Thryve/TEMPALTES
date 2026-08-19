import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "accent";
type ButtonSize = "sm" | "md" | "lg";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.ComponentProps<typeof Link>, keyof ButtonBaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-primary-500/20",
  secondary:
    "border border-neutral-300 bg-neutral-0 text-neutral-800 hover:border-primary-400 focus-visible:ring-primary-500/20",
  accent:
    "bg-accent-500 text-white hover:bg-accent-600 focus-visible:ring-accent-500/20",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3.5 py-2 text-sm",
  md: "px-4 py-3 text-base",
  lg: "px-5 py-3.5 text-lg",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-heading font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...linkRest } = rest;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  const { href: _href, ...buttonRest } = rest as ButtonAsButton & { href?: never };
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
