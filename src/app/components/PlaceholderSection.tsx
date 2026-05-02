interface PlaceholderSectionProps {
  id: string;
  title: string;
  description: string;
  bgColor?: string;
}

export default function PlaceholderSection({ id, title, description, bgColor = '#0F0F1A' }: PlaceholderSectionProps) {
  return (
    <section id={id} className="py-24 px-8" style={{ background: bgColor }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-center gap-2 text-[0.67rem] font-bold tracking-[2px] uppercase text-[#E8674F] mb-3">
          <div className="w-5 h-[2px] bg-[#E8674F]" />
          {title}
        </div>

        <h2 className="font-['DM_Serif_Display'] text-[clamp(1.8rem,3vw,2.75rem)] leading-tight mb-3">
          {description}
        </h2>

        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-12 text-center">
          <p className="text-white/40 text-lg">
            Esta seção contém informações detalhadas sobre {description.toLowerCase()}.
          </p>
        </div>
      </div>
    </section>
  );
}
