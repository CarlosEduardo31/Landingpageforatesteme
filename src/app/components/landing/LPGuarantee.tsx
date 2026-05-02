import { Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function LPGuarantee() {
  return (
    <section id="garantia" className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-orange-700 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Guarantee Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full">
              <Shield className="w-6 h-6 text-orange-300" />
              <span className="font-bold text-lg">Garantia de Resultado Documentado</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Ou Continuamos Trabalhando Até Alcançar
          </h2>

          <p className="text-xl text-white/90 text-center mb-12 leading-relaxed max-w-3xl mx-auto">
            Nossa garantia é simples: se sua rede não atingir os indicadores mínimos da PNED
            em 90 dias, continuamos o suporte sem custo adicional até que isso aconteça.
          </p>

          {/* Guarantee details */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">O que garantimos:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">Diagnóstico completo de 100% dos participantes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">Taxa mínima de 80% de conclusão das trilhas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">Relatórios prontos para prestação de contas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">Certificação válida de todos os concluintes</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Como funciona:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <p className="leading-relaxed">Implementamos a plataforma e capacitamos sua equipe</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <p className="leading-relaxed">Acompanhamos os indicadores semanalmente</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <p className="leading-relaxed">Se não atingir os resultados em 90 dias, continuamos sem custo</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <p className="leading-relaxed">Você só paga quando tiver os resultados documentados</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-white rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Pronto para Implementar a PNED?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Agende uma reunião e veja como podemos ajudar seu município
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#7B2CBF] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#6a26a8] transition flex items-center justify-center gap-2 group">
                Agendar Reunião (Gestores)
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
              <button className="bg-[#E8674F] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#d45a42] transition flex items-center justify-center gap-2 group">
                Fazer Diagnóstico Grátis (Professores)
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Sem compromisso · Sem cartão de crédito · Resposta em 24 horas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
