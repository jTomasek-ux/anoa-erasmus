export default function Prose({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`prose-content space-y-5 font-sans text-base leading-relaxed text-black/75 ${className}`}
    >
      {children}
    </div>
  );
}

export function ProseHeading({
  children,
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  as?: "h2" | "h3";
}) {
  const className =
    Tag === "h2"
      ? "font-heading text-2xl text-black md:text-3xl"
      : "font-heading text-xl text-black";
  return <Tag className={`${className} mt-10 mb-4 first:mt-0`}>{children}</Tag>;
}
