const features = [
  {
    image: 'https://atesteme.com/wp-content/uploads/2023/03/Simpleseintuitiva.gif',
    title: 'Simples e adaptativa',
    description: 'A plataforma se adapta ao seu ritmo de aprendizagem.'
  },
  {
    image: 'https://atesteme.com/wp-content/uploads/2023/03/Sugestoes.gif',
    title: 'Sugestões de conteúdos',
    description: 'Realize os desafios e receba dicas para melhorar suas competências.'
  },
  {
    image: 'https://atesteme.com/wp-content/uploads/2023/03/certificado.gif',
    title: 'Certificação',
    description: 'Conquiste seu certificado digital para valorizar seu currículo.'
  },
  {
    image: 'https://atesteme.com/wp-content/uploads/2023/03/Online.gif',
    title: '100% on-line',
    description: 'Você se conecta à plataforma de onde e quando quiser.'
  },
  {
    image: 'https://atesteme.com/wp-content/uploads/2023/03/planos.gif',
    title: 'Planos sob medida',
    description: 'Temos planos acessíveis para você e sua instituição.'
  },
  {
    image: 'https://atesteme.com/wp-content/uploads/2023/03/game.gif',
    title: 'Ambiente gamificado',
    description: 'Acumule nossas Digicoins e ganhe vantagens.'
  }
];

export default function AtestemeHowItWorks() {
  return (
    <section id="howitworks" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-[48px] font-bold text-center text-[#12141d] leading-[60px] mb-12">
          Entenda como funciona
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-[150px] h-auto mx-auto mb-4"
              />
              <h3 className="text-[20px] font-bold text-[#12141d] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
