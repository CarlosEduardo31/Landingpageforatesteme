import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'CEO da TechStart',
    content: 'Esta plataforma transformou completamente nosso negócio. Aumentamos nossas vendas em 250% nos primeiros 3 meses.',
    avatar: 'MS',
    rating: 5
  },
  {
    name: 'João Santos',
    role: 'Diretor de Marketing',
    content: 'A melhor decisão que tomamos este ano. A interface é intuitiva e os resultados são impressionantes.',
    avatar: 'JS',
    rating: 5
  },
  {
    name: 'Ana Costa',
    role: 'Empreendedora Digital',
    content: 'Suporte incrível e funcionalidades que realmente fazem a diferença. Recomendo de olhos fechados!',
    avatar: 'AC',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold uppercase tracking-wide">Depoimentos</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Veja como estamos ajudando empresas a alcançarem resultados extraordinários.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-indigo-100" />

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Confiado por empresas de todos os tamanhos</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            <div className="text-3xl font-bold text-gray-400">EMPRESA 1</div>
            <div className="text-3xl font-bold text-gray-400">EMPRESA 2</div>
            <div className="text-3xl font-bold text-gray-400">EMPRESA 3</div>
            <div className="text-3xl font-bold text-gray-400">EMPRESA 4</div>
          </div>
        </div>
      </div>
    </section>
  );
}
