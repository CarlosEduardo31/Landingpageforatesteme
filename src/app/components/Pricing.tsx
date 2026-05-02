import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Básico',
    price: 'R$ 49',
    period: '/mês',
    description: 'Perfeito para começar',
    features: [
      { text: 'Até 1.000 visitantes/mês', included: true },
      { text: '5 páginas', included: true },
      { text: 'Suporte por email', included: true },
      { text: 'Analytics básico', included: true },
      { text: 'Integrações avançadas', included: false },
      { text: 'Suporte prioritário', included: false }
    ],
    popular: false,
    cta: 'Começar Agora'
  },
  {
    name: 'Profissional',
    price: 'R$ 99',
    period: '/mês',
    description: 'Mais popular entre profissionais',
    features: [
      { text: 'Até 10.000 visitantes/mês', included: true },
      { text: 'Páginas ilimitadas', included: true },
      { text: 'Suporte prioritário', included: true },
      { text: 'Analytics avançado', included: true },
      { text: 'Todas as integrações', included: true },
      { text: 'API personalizada', included: false }
    ],
    popular: true,
    cta: 'Mais Popular'
  },
  {
    name: 'Empresarial',
    price: 'R$ 299',
    period: '/mês',
    description: 'Para grandes empresas',
    features: [
      { text: 'Visitantes ilimitados', included: true },
      { text: 'Páginas ilimitadas', included: true },
      { text: 'Suporte 24/7 dedicado', included: true },
      { text: 'Analytics enterprise', included: true },
      { text: 'Todas as integrações', included: true },
      { text: 'API personalizada', included: true }
    ],
    popular: false,
    cta: 'Falar com Vendas'
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold uppercase tracking-wide">Preços</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
            Planos Para Todos os Tamanhos
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha o plano perfeito para suas necessidades. Sem taxas ocultas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-2xl scale-105 relative'
                  : 'bg-white border-2 border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold text-sm">
                  MAIS POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={plan.popular ? 'text-indigo-100' : 'text-gray-600'}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={plan.popular ? 'text-indigo-100' : 'text-gray-600'}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <button
                className={`w-full py-4 rounded-xl font-bold mb-8 transition ${
                  plan.popular
                    ? 'bg-white text-indigo-600 hover:bg-gray-100'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {plan.cta}
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className={`w-6 h-6 flex-shrink-0 ${plan.popular ? 'text-green-300' : 'text-green-500'}`} />
                    ) : (
                      <X className={`w-6 h-6 flex-shrink-0 ${plan.popular ? 'text-indigo-300' : 'text-gray-300'}`} />
                    )}
                    <span className={`${
                      feature.included
                        ? plan.popular ? 'text-white' : 'text-gray-700'
                        : plan.popular ? 'text-indigo-200 line-through' : 'text-gray-400 line-through'
                    }`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Todos os planos incluem <span className="font-semibold text-gray-900">14 dias de teste grátis</span>. Sem cartão de crédito necessário.
          </p>
        </div>
      </div>
    </section>
  );
}
