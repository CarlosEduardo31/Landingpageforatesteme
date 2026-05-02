export default function PresentationHero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center overflow-hidden relative pt-24 px-8 pb-20"
      style={{
        background: 'linear-gradient(140deg, #0d0c1d 0%, #16082e 45%, #270a1c 100%)'
      }}
    >
      {/* Background Gradients */}
      <div className="absolute top-[-20%] right-[-10%] w-[650px] h-[650px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,44,191,.18) 0%, transparent 65%)' }} />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(232,103,79,.11) 0%, transparent 65%)' }} />

      <div className="max-w-[980px] mx-auto w-full relative z-10 pt-8">
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 bg-[#7B2CBF]/13 border border-[#7B2CBF]/30 px-4 py-2 rounded-full text-[0.7rem] text-white/60 mb-7 font-semibold tracking-wider uppercase">
          <span className="w-[5px] h-[5px] bg-[#E8674F] rounded-full animate-pulse" />
          Contrato Nº 010/2026 — Cysneiros & Consultores Associados
        </div>

        {/* Title */}
        <h1 className="font-['DM_Serif_Display'] text-[clamp(2.8rem,5.5vw,4.8rem)] leading-[1.08] mb-6">
          Estratégia construída.<br />
          <em className="italic text-[#E8674F]">Agora é executar.</em>
        </h1>

        {/* Subtitle */}
        <p className="text-[1.05rem] text-white/58 max-w-[640px] mb-8 font-light leading-relaxed">
          Estas são as entregas finais do projeto de posicionamento digital do Ateste.me. Tudo o que está aqui foi construído para ser executado pelo time interno, sem dependência de agência ou consultoria recorrente.
        </p>

        {/* Context Box */}
        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 mb-10 max-w-[680px]">
          <p className="text-[0.85rem] text-white/55 leading-relaxed">
            O <strong className="text-white/85 font-semibold">DNA de Comunicação</strong> — posicionamento, personas (Marcos e Márcia), mecanismos e USP — foi validado e entregue nas Entregas 1 a 3. A partir daqui, entramos na fase de <strong className="text-white/85 font-semibold">como colocar essa estratégia para funcionar na prática:</strong> onde o lead chega, como ele é nutrido, como a comunidade cresce e como o time opera com autonomia.
          </p>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="px-4 py-2 rounded-full text-[0.72rem] font-semibold bg-[#E8674F]/13 border border-[#E8674F]/25 text-[#f9a08c]">
            Entregas 4 a 9
          </span>
          <span className="px-4 py-2 rounded-full text-[0.72rem] font-semibold bg-[#7B2CBF]/13 border border-[#7B2CBF]/25 text-[#b07de8]">
            Fases 3 e 4 do Projeto
          </span>
          <span className="px-4 py-2 rounded-full text-[0.72rem] font-semibold bg-white/6 border border-white/10 text-white/60">
            Instituto Verbus + Ateste.me
          </span>
          <span className="px-4 py-2 rounded-full text-[0.72rem] font-semibold bg-white/6 border border-white/10 text-white/60">
            Abril 2026
          </span>
        </div>

        {/* Arcs Preview */}
        <div className="text-[0.65rem] font-bold tracking-widest uppercase text-white/30 mb-4 mt-8">
          A apresentação está organizada em três arcos
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              arc: 'Arco 1 — Entrega 4',
              title: 'Onde o lead chega',
              tags: 'Landing pages · Rascunhos navegáveis · Estrutura por persona',
              href: '#lp'
            },
            {
              arc: 'Arco 2 — Entregas 5, 6 e 7',
              title: 'Como vocês crescem',
              tags: 'Conteúdo · Growth hacking · Materiais ricos',
              href: '#conteudo'
            },
            {
              arc: 'Arco 3 — Entregas 8 e 9',
              title: 'Como vocês retêm e escalam',
              tags: 'Comunidade de professoras · Guia de execução autônoma',
              href: '#comunidade'
            }
          ].map((arc, idx) => (
            <a
              key={idx}
              href={arc.href}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 transition-all hover:bg-white/[0.07] hover:-translate-y-1 block"
            >
              <div className="text-[0.63rem] font-bold tracking-wider uppercase text-[#E8674F] mb-2">
                {arc.arc}
              </div>
              <div className="text-[0.92rem] font-bold text-white mb-2 leading-snug">
                {arc.title}
              </div>
              <div className="text-[0.72rem] text-white/38">
                {arc.tags}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
