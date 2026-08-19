type ContainerProps = {
  as?: "div" | "section" | "article";
  className?: string;
  children: React.ReactNode;
};

export default function Container({
  as: Tag = "div",
  className = "",
  children,
}: ContainerProps) {
  return <Tag className={`container-page ${className}`}>{children}</Tag>;
}
