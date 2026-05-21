export type PhotoItem = {
  caption: string;
  location?: string;
};

export default function PhotoGrid({ items }: { items: PhotoItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {items.map((item, i) => (
        <div
          key={`${item.caption}-${i}`}
          className="flex aspect-[4/3] flex-col justify-end rounded-xl border border-primary/10 bg-gradient-to-br from-[#E8F0FA] to-primary/15 p-3"
        >
          <span className="font-sans text-xs font-medium leading-snug text-primary">
            {item.caption}
          </span>
          {item.location && (
            <span className="mt-0.5 font-sans text-[0.65rem] text-black/40">
              {item.location}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
