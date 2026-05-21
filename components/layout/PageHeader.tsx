import Link from "next/link";

export default function PageHeader({
  title,
  description,
  breadcrumb,
}: {
  title: string;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
}) {
  return (
    <header className="border-b border-primary/10 bg-[#E8F0FA]">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav
            aria-label="Drobečková navigace"
            className="mb-6 flex flex-wrap items-center gap-2 font-sans text-sm text-black/45"
          >
            {breadcrumb.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden>/</span>}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-black/70">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-heading text-[clamp(2.25rem,5vw,3.5rem)] leading-tight tracking-tight text-black">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-3xl font-sans text-lg leading-relaxed text-black/60">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
