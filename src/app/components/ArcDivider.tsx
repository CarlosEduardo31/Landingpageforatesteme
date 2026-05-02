interface ArcDividerProps {
  num: string;
  label: string;
  title: string;
  description: string;
  tags: string[];
}

export default function ArcDivider({ num, label, title, description, tags }: ArcDividerProps) {
  return (
    <div className="py-8 px-8 bg-[#13131f] border-t border-b border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-100" style={{ background: 'linear-gradient(90deg, rgba(123,44,191,.06) 0%, rgba(232,103,79,.06) 100%)' }} />

      <div className="max-w-[1100px] mx-auto flex items-center gap-8 relative z-10">
        <div className="font-['DM_Serif_Display'] text-[3.5rem] text-white/[0.06] leading-none flex-shrink-0">
          {num}
        </div>

        <div className="flex-1">
          <div className="text-[0.65rem] font-bold tracking-[2px] uppercase text-[#E8674F] mb-1">
            {label}
          </div>
          <h2 className="font-['DM_Serif_Display'] text-[1.6rem] text-white leading-tight mb-1">
            {title}
          </h2>
          <p className="text-[0.88rem] text-white/55 leading-relaxed">
            {description}
          </p>
          <div className="flex gap-2 mt-3 flex-wrap">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[0.68rem] font-semibold px-3 py-1 rounded-full bg-white/6 border border-white/10 text-white/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
