import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type ExploreCard = {
  title: string;
  description: string;
  href: string;
  tag?: string;
};

export default function ExploreGrid({ cards }: { cards: ExploreCard[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <Link
          key={card.href}
          href={card.href}
          className="group flex flex-col rounded-2xl border border-primary/10 bg-white p-6 transition-all hover:border-primary/25 hover:shadow-md"
        >
          {card.tag && (
            <span className="mb-3 font-sans text-xs font-medium uppercase tracking-wider text-primary/60">
              {card.tag}
            </span>
          )}
          <h3 className="font-heading text-xl text-black group-hover:text-primary">
            {card.title}
          </h3>
          <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-black/55">
            {card.description}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 font-sans text-sm font-medium text-primary">
            Zjistit více
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </span>
        </Link>
      ))}
    </div>
  );
}
