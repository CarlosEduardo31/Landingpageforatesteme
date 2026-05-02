import { ClipboardCheck, Route, UserCheck, BookOpen, Medal } from 'lucide-react';

export default function LPHowItWorks() {
  const steps = [
    {
      number: '1',
      icon: ClipboardCheck,
      title: 'Diagnóstico',
      description: 'Avaliação inicial para identificar o nível atual de competência digital de cada usuário.',
      color: 'purple'
    },
    {
      number: '2',
      icon: Route,
      title: 'Trilha Personalizada',
      description: 'Conteúdo adaptativo que se ajusta ao ritmo e nível de conhecimento de cada pessoa.',
      color: 'blue'
    },
    {
      number: '3',
      icon: UserCheck,
      title: 'Tutor Virtual',
      description: 'Acompanhamento inteligente com dicas, feedback e sugestões personalizadas.',
      color: 'green'
    },
    {
      number: '4',
      icon: BookOpen,
      title: 'Plano de Aula',
      description: 'Para professores: materiais prontos para aplicar as competências digitais em sala.',
      color: 'orange'
    },
    {
      number: '5',
      icon: Medal,
      title: 'Certificação',
      description: 'Certificado digital reconhecido nacionalmente, validando as competências desenvolvidas.',
      color: 'purple'
    }
  ];

  const colorClasses = {
    purple: {
      bg: 'bg-purple-100',
      icon: 'bg-purple-500',
      border: 'border-purple-300',
      text: 'text-purple-700'
    },
    blue: {
      bg: 'bg-blue-100',
      icon: 'bg-blue-500',
      border: 'border-blue-300',
      text: 'text-blue-700'
    },
    green: {
      bg: 'bg-green-100',
      icon: 'bg-green-500',
      border: 'border-green-300',
      text: 'text-green-700'
    },
    orange: {
      bg: 'bg-orange-100',
      icon: 'bg-orange-500',
      border: 'border-orange-300',
      text: 'text-orange-700'
    }
  };

  return (
    <section id="como-funciona" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-4 text-sm font-semibold">
            Rota PNED
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Como Funciona em 5 Passos
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Uma jornada estruturada e documentada, do ponto de partida até a certificação completa.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, index) => {
              const colors = colorClasses[step.color as keyof typeof colorClasses];
              const Icon = step.icon;

              return (
                <div key={index} className="relative">
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-14 left-[60%] w-[80%] h-[2px] bg-gray-300 z-0" />
                  )}

                  <div className="relative z-10">
                    <div className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-6 h-full hover:shadow-lg transition`}>
                      <div className="flex flex-col items-center text-center">
                        <div className={`${colors.icon} w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className={`${colors.text} text-3xl font-bold mb-2`}>{step.number}</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline visual */}
        <div className="mt-16 max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-center flex-1">
              <div className="text-3xl font-bold text-purple-600 mb-2">Dia 1</div>
              <div className="text-sm text-gray-600">Início do Diagnóstico</div>
            </div>
            <div className="flex-1 h-1 bg-gradient-to-r from-purple-500 via-orange-400 to-green-500 mx-4" />
            <div className="text-center flex-1">
              <div className="text-3xl font-bold text-green-600 mb-2">Dia 90</div>
              <div className="text-sm text-gray-600">Certificação Completa</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
