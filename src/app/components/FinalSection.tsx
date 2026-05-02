import { Check } from 'lucide-react';

export default function FinalSection() {
  const checklist = [
    'DNA de Comunicação validado',
    '3 Landing Pages estruturadas',
    'Guia Editorial completo',
    '12 Experimentos de Growth',
    '9 Materiais Ricos prontos',
    'Plano de Comunidade',
    'Framework de Execução',
    'Plano de 90 dias',
    'Time capacitado'
  ];

  return (
    <section
      id="fim"
      className="min-h-[85vh] flex items-center overflow-hidden relative py-24 px-8"
      style={{
        background: 'linear-gradient(140deg, #08081a 0%, #160830 50%, #080e1c 100%)'
      }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(123,44,191,.09) 0%, transparent 65%)' }} />

      <div className="max-w-[760px] mx-auto text-center relative z-10">
        <div className="font-['DM_Serif_Display'] text-[1rem] text-[#E8674F] mb-2">
          Ateste.me
        </div>

        <h2 className="font-['DM_Serif_Display'] text-[clamp(1.9rem,4vw,3rem)] leading-tight mb-4">
          Tudo pronto para executar.
        </h2>

        <p className="text-[1.05rem] text-white/48 italic font-['DM_Serif_Display'] mb-10 leading-relaxed max-w-[620px] mx-auto">
          "O plano não é nada. O planejamento é tudo." — Dwight Eisenhower
        </p>

        {/* Checklist Grid */}
        <div className="grid md:grid-cols-3 gap-2 mb-10">
          {checklist.map((item, idx) => (
            <div key={idx} className="bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 flex items-center gap-2 text-[0.75rem] text-white/58">
              <div className="w-[17px] h-[17px] rounded-full bg-green-500/12 border border-green-500/26 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-green-400" />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="text-[0.78rem] text-white/28 leading-loose mb-10">
          Desenvolvido por <strong className="text-white/50">Cysneiros & Consultores Associados</strong><br />
          Para <strong className="text-white/50">Instituto Verbus</strong> e <strong className="text-white/50">Ateste.me</strong><br />
          Abril de 2026
        </div>

        <div className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-[0.92rem] font-bold text-white transition-all relative overflow-hidden cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #6020a8, #7B2CBF)',
            boxShadow: '0 0 28px rgba(123,44,191,.45), 0 4px 16px rgba(123,44,191,.3), inset 0 1px 0 rgba(255,255,255,.15)'
          }}
        >
          <span>Começar Execução</span>
        </div>
      </div>
    </section>
  );
}
