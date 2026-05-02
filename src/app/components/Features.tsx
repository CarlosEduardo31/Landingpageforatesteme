import { Zap, Shield, TrendingUp, Users, Clock, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Super Rápido',
    description: 'Performance otimizada que garante carregamento em menos de 1 segundo.',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    icon: Shield,
    title: 'Seguro e Confiável',
    description: 'Proteção de dados com criptografia de nível empresarial e backups automáticos.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: TrendingUp,
    title: 'Aumente Conversões',
    description: 'Ferramentas comprovadas para aumentar suas taxas de conversão em até 300%.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Users,
    title: 'Colaboração em Equipe',
    description: 'Trabalhe junto com sua equipe em tempo real, de qualquer lugar do mundo.',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Clock,
    title: 'Suporte 24/7',
    description: 'Nossa equipe está sempre disponível para ajudar você a ter sucesso.',
    color: 'bg-red-100 text-red-600'
  },
  {
    icon: Sparkles,
    title: 'Inteligência Artificial',
    description: 'IA avançada para automatizar tarefas e otimizar seus resultados.',
    color: 'bg-indigo-100 text-indigo-600'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold uppercase tracking-wide">Recursos</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
            Tudo que Você Precisa para Crescer
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Ferramentas poderosas e intuitivas que tornam seu trabalho mais fácil e eficiente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-indigo-200 hover:shadow-xl transition duration-300 group"
              >
                <div className={`inline-flex p-4 rounded-xl ${feature.color} mb-6 group-hover:scale-110 transition duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-indigo-100">Uptime</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10k+</div>
              <div className="text-indigo-100">Clientes Felizes</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50M+</div>
              <div className="text-indigo-100">Transações</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-indigo-100">Suporte</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
