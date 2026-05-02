import { FileText, Globe } from 'lucide-react';

export default function LandingPagesSection() {
  const landingPages = [
    {
      url: 'atesteme.com/gestores',
      name: 'LP 1 — Para Gestores',
      persona: 'Marcos · Objetivo: Reunião Comercial',
      sections: [
        { color: 'coral', name: 'Hero — urgência legal', desc: '"Sua prefeitura assinou a PNED. O Ateste.me é a entrega documentada."' },
        { color: 'purple', name: 'Problema — Armadilha da Infraestrutura Ideal', desc: 'Por que os municípios ficam esperando o ambiente perfeito e perdem o prazo' },
        { color: 'coral', name: 'Como funciona — Rota PNED (5 passos)', desc: 'Diagnóstico → Trilha → Tutor → Plano de Aula → Certificação' },
        { color: 'purple', name: 'Prova social — pares reais com cargo e município', desc: 'X prefeituras · 32 mil alunos · resultados documentados' },
        { color: 'gray', name: 'Qualificação + Garantia + CTA final', desc: 'Garantia de Resultado Documentado — Ou Continuamos Trabalhando' }
      ]
    },
    {
      url: 'atesteme.com/professoras',
      name: 'LP 2 — Para Professoras',
      persona: 'Márcia · Objetivo: Ativação e Engajamento',
      sections: [
        { color: 'coral', name: 'Hero — Efeito de Ponto Cego Pedagógico', desc: 'Valida a realidade dela sem expor a ignorância inicial' },
        { color: 'purple', name: 'Por que ficou para trás — não é culpa dela', desc: 'O sistema de formação falhou. Não a professora.' },
        { color: 'coral', name: 'Diagnóstico privado como entrada', desc: 'Só você vê o resultado. Funciona no celular, sem instalação.' },
        { color: 'purple', name: 'Os 5 passos da Rota PNED', desc: 'Sequência numerada, sem jargão, ritmo de avanço visível' },
        { color: 'gray', name: 'Depoimentos reais + CTA para diagnóstico', desc: 'Professoras com nome, cidade e escola — não anônimas' }
      ]
    },
    {
      url: 'atesteme.com',
      name: 'LP 3 — Página Principal',
      persona: 'Marcos + Márcia · Dupla audiência',
      sections: [
        { color: 'coral', name: 'Hero híbrido — dois caminhos no fold', desc: 'Gestor → reunião comercial | Professora → diagnóstico' },
        { color: 'purple', name: 'O produto — lei e prática', desc: 'USP completa com âncora legal e prazo de 90 dias' },
        { color: 'coral', name: 'Como funciona — Rota PNED', desc: '5 componentes visuais em sequência' },
        { color: 'gray', name: 'Prova social convergente + Garantia + CTAs segmentados', desc: '' }
      ]
    }
  ];

  return (
    <section id="lp" className="py-24 px-8 bg-[#13131f]">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-center gap-2 text-[0.67rem] font-bold tracking-[2px] uppercase text-[#E8674F] mb-3">
          <div className="w-5 h-[2px] bg-[#E8674F]" />
          Entrega 4 de 9
        </div>

        <h2 className="font-['DM_Serif_Display'] text-[clamp(1.8rem,3vw,2.75rem)] leading-tight mb-3">
          Rascunhos de Landing Pages
        </h2>

        <p className="text-white/55 text-[0.95rem] max-w-[600px] mb-4 leading-relaxed">
          Três estruturas conceituais com hierarquia de informação, sequência persuasiva por persona e direção de copy. Além dos wireframes estratégicos, os rascunhos navegáveis permitem ver o layout em funcionamento real.
        </p>

        {/* Summary Card */}
        <div className="bg-white/[0.03] border border-white/10 border-l-[3px] border-l-[#E8674F] rounded-r-xl p-5 mb-10 grid md:grid-cols-3 gap-5">
          <div>
            <div className="text-[0.65rem] font-bold tracking-wider uppercase text-white/30 mb-2">O que é</div>
            <div className="text-[0.85rem] text-white/80 leading-relaxed">
              Estrutura de 3 landing pages com copy direcional, sequência de seções e lógica de conversão por persona
            </div>
          </div>
          <div>
            <div className="text-[0.65rem] font-bold tracking-wider uppercase text-white/30 mb-2">Para quem serve</div>
            <div className="text-[0.85rem] text-white/80 leading-relaxed">
              Marcos (secretário, LP de gestores) · Márcia (professora, LP de ativação) · Ambos (página principal)
            </div>
          </div>
          <div>
            <div className="text-[0.65rem] font-bold tracking-wider uppercase text-white/30 mb-2">O que o time faz com isso</div>
            <div className="text-[0.85rem] text-white/80 leading-relaxed">
              Repassa para o desenvolvedor responsável pela implementação, ou usa como guia para montar direto em Webflow / WordPress
            </div>
          </div>
        </div>

        {/* LP Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {landingPages.map((lp, idx) => (
            <div key={idx} className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden flex flex-col">
              <div className="p-4 border-b border-white/5">
                <div className="text-[0.67rem] text-white/28 font-mono mb-2">{lp.url}</div>
                <div className="text-[0.95rem] font-bold text-white mb-1">{lp.name}</div>
                <div className="text-[0.72rem] text-[#E8674F] font-semibold">{lp.persona}</div>
              </div>

              <div className="p-4 flex-1">
                {lp.sections.map((section, sIdx) => (
                  <div key={sIdx} className="flex gap-2 py-2 border-b border-white/[0.04] last:border-0">
                    <div className={`w-[5px] h-[5px] rounded-full flex-shrink-0 mt-2 ${
                      section.color === 'coral' ? 'bg-[#E8674F]' :
                      section.color === 'purple' ? 'bg-[#7B2CBF]' :
                      'bg-white/18'
                    }`} />
                    <div className="flex-1">
                      <div className="text-[0.76rem] text-white/72 font-semibold">{section.name}</div>
                      {section.desc && (
                        <div className="text-[0.69rem] text-white/36 mt-1 leading-relaxed">{section.desc}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Document Buttons */}
        <div className="text-[0.65rem] font-semibold tracking-wider uppercase text-white/35 mb-3 flex items-center gap-2">
          <div className="w-4 h-[1px] bg-white/20" />
          Acessar materiais desta entrega
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://docs.google.com/document/d/1Uqe4X4IwQio1HeqD9Kuvy5DPnDeI3YY3/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3 rounded-xl text-[0.92rem] font-bold text-white transition-all relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #d4522c, #e8674f)',
              boxShadow: '0 0 28px rgba(232,103,79,.45), 0 4px 16px rgba(232,103,79,.3), inset 0 1px 0 rgba(255,255,255,.2)'
            }}
          >
            <FileText className="w-[18px] h-[18px]" />
            <span>Estratégias para Landing Pages</span>
          </a>

          <a
            href="https://preview--ateste-me-landing-pages.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3 rounded-xl text-[0.92rem] font-bold text-white transition-all relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #059669, #10b981)',
              boxShadow: '0 0 28px rgba(16,185,129,.4), 0 4px 16px rgba(16,185,129,.25), inset 0 1px 0 rgba(255,255,255,.18)'
            }}
          >
            <Globe className="w-[18px] h-[18px]" />
            <span>Rascunhos Navegáveis — Ver ao Vivo</span>
          </a>
        </div>

        {/* Transition Note */}
        <div className="bg-[#E8674F]/[0.06] border border-[#E8674F]/[0.14] rounded-xl p-5 text-[0.83rem] text-white/60 leading-relaxed mt-8">
          <strong className="text-[#f9a08c]">O que vem a seguir:</strong> as landing pages precisam de tráfego para converter. O Arco 2 define exatamente como gerar esse tráfego — por conteúdo orgânico, por experimentos de crescimento e por materiais ricos que capturam o lead antes mesmo de ele chegar à LP.
        </div>
      </div>
    </section>
  );
}
