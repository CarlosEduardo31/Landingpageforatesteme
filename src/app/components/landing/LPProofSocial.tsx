import { Quote, TrendingUp, Users, BookOpen } from 'lucide-react';

export default function LPProofSocial() {
  const testimonials = [
    {
      name: 'Maria Santos',
      role: 'Secretária de Educação',
      city: 'Município de Exemplo - SP',
      content: 'Conseguimos implementar a PNED em todas as escolas municipais em menos de 3 meses. Os relatórios facilitaram muito a prestação de contas.',
      type: 'gestor'
    },
    {
      name: 'João Silva',
      role: 'Professor de Matemática',
      city: 'EMEF José de Alencar - RJ',
      content: 'Descobri que tinha dificuldades que nem sabia que existiam. A plataforma me ajudou a melhorar e agora uso recursos digitais nas minhas aulas.',
      type: 'professor'
    },
    {
      name: 'Ana Costa',
      role: 'Coordenadora Pedagógica',
      city: 'Rede Municipal de Ensino - MG',
      content: 'A certificação dos nossos professores aumentou a credibilidade do nosso programa de formação continuada.',
      type: 'gestor'
    }
  ];

  const stats = [
    { icon: Users, value: '32.000+', label: 'Alunos Certificados' },
    { icon: BookOpen, value: '1.500+', label: 'Professores Formados' },
    { icon: TrendingUp, value: '95%', label: 'Taxa de Conclusão' }
  ];

  return (
    <section id="resultados" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4 text-sm font-semibold">
            Resultados Comprovados
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Prefeituras e Professores que Confiam
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Resultados reais de municípios que implementaram a PNED com o Ateste.me
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 shadow-lg border-2 ${
                testimonial.type === 'gestor'
                  ? 'bg-purple-50 border-purple-200'
                  : 'bg-orange-50 border-orange-200'
              }`}
            >
              <Quote className={`w-10 h-10 mb-4 ${
                testimonial.type === 'gestor' ? 'text-purple-400' : 'text-orange-400'
              }`} />
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="border-t pt-4 border-gray-300">
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-sm text-gray-500">{testimonial.city}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof badges */}
        <div className="mt-16 bg-gradient-to-r from-purple-100 to-orange-100 rounded-2xl p-8 border border-purple-200">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-2">✓ Alinhado à BNCC</div>
              <p className="text-gray-600 text-sm">Base Nacional Comum Curricular</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-2">✓ Conformidade PNED</div>
              <p className="text-gray-600 text-sm">Lei 14.533/2023</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-2">✓ Certificação Nacional</div>
              <p className="text-gray-600 text-sm">Válido em todo território brasileiro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
