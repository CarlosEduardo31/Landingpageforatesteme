export default function PresentationNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F1A]/95 backdrop-blur-md border-b border-[#7B2CBF]/15 px-8">
      <div className="max-w-[1140px] mx-auto flex items-center justify-between h-[52px]">
        <div className="font-['DM_Serif_Display'] text-[0.92rem] text-[#E8674F]">
          Ateste.me — Entregas Finais
        </div>
        <div className="flex gap-1">
          {[
            { href: '#hero', label: 'Início' },
            { href: '#lp', label: 'LP' },
            { href: '#conteudo', label: 'Conteúdo' },
            { href: '#growth', label: 'Growth' },
            { href: '#materiais', label: 'Materiais' },
            { href: '#comunidade', label: 'Comunidade' },
            { href: '#execucao', label: 'Execução' },
            { href: '#dna', label: 'DNA' },
            { href: '#fim', label: 'Encerramento' }
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.68rem] text-white/45 px-2 py-1 rounded-md hover:text-white hover:bg-white/6 transition font-semibold tracking-wide whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
