import { Scale, Clock, Award, Target } from 'lucide-react';

export default function LPProduct() {
  return (
    <section id="produto" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4 text-sm font-semibold">
            A Solução Completa
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lei + Prática em Uma Única Plataforma
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            O Ateste.me não é apenas uma ferramenta. É a implementação completa da PNED,
            do diagnóstico inicial até a certificação final, com todo o processo documentado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
            <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
              <Scale className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Conformidade Legal</h3>
            <p className="text-gray-700 leading-relaxed">
              100% alinhado à Lei 14.533/2023 e às diretrizes da PNED. Relatórios prontos para prestação de contas.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
            <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">90 Dias de Prazo</h3>
            <p className="text-gray-700 leading-relaxed">
              Da avaliação inicial à certificação completa. Implementação rápida sem necessidade de infraestrutura complexa.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
            <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mb-4">
              <Award className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Certificação Reconhecida</h3>
            <p className="text-gray-700 leading-relaxed">
              Certificados válidos em todo o território nacional, baseados na BNCC e PNED.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
            <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Resultados Documentados</h3>
            <p className="text-gray-700 leading-relaxed">
              Dashboard completo com métricas, evolução e relatórios exportáveis para gestão pública.
            </p>
          </div>
        </div>

        {/* USP Box */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-orange-500 rounded-2xl p-1">
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                O Diferencial do Ateste.me
              </h3>
              <p className="text-lg text-gray-700 text-center leading-relaxed">
                Enquanto outras soluções exigem laboratórios, equipamentos e infraestrutura cara,
                o Ateste.me funciona <strong>em qualquer dispositivo com internet</strong>.
                Seus professores e alunos começam hoje, do celular que já têm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
