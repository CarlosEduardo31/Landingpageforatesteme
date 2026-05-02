import { ArrowRight, CheckCircle2, Users, GraduationCap } from 'lucide-react';

export default function LPHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Alert Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-300 px-4 py-2 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-900">
              Plataforma alinhada à PNED (Lei 14.533/2023)
            </span>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Sua <span className="text-[#7B2CBF]">prefeitura</span> assinou a PNED.<br />
            O <span className="text-[#E8674F]">Ateste.me</span> é a entrega documentada.
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Avaliamos, desenvolvemos e certificamos as competências digitais de estudantes e professores.
            Do diagnóstico à certificação em 90 dias, com resultados documentados.
          </p>
        </div>

        {/* Dual CTA Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Card Gestores */}
          <div
            id="gestores"
            className="bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-[#7B2CBF]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Para Gestores</h3>
                <p className="text-sm text-gray-600">Secretários e coordenadores</p>
              </div>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Cumpra as exigências da PNED com uma solução completa e documentada.
              Implementação rápida, sem necessidade de infraestrutura complexa.
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Relatórios para prestação de contas</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Implementação em 90 dias</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">Suporte técnico completo</span>
              </li>
            </ul>

            <button className="w-full bg-[#7B2CBF] text-white px-6 py-4 rounded-lg font-bold hover:bg-[#6a26a8] transition flex items-center justify-center gap-2 group">
              Agendar Reunião
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
          </div>

          {/* Card Professores */}
          <div
            id="professores"
            className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 shadow-xl text-white hover:shadow-2xl transition-all transform hover:scale-105"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Para Professores(as)</h3>
                <p className="text-sm text-orange-100">Desenvolva suas competências digitais</p>
              </div>
            </div>

            <p className="text-white/95 mb-6 leading-relaxed">
              Descubra seu nível de competência digital e desenvolva-se com trilhas personalizadas.
              Certificação reconhecida nacionalmente.
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/95">Diagnóstico gratuito e privado</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/95">Trilhas adaptativas no seu ritmo</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/95">Certificado válido em todo Brasil</span>
              </li>
            </ul>

            <button className="w-full bg-white text-[#E8674F] px-6 py-4 rounded-lg font-bold hover:bg-gray-50 transition flex items-center justify-center gap-2 group">
              Iniciar Diagnóstico Grátis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Já confiaram no Ateste.me:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-xl font-bold text-gray-400">PREFEITURA A</div>
            <div className="text-xl font-bold text-gray-400">PREFEITURA B</div>
            <div className="text-xl font-bold text-gray-400">PREFEITURA C</div>
          </div>
        </div>
      </div>
    </section>
  );
}
