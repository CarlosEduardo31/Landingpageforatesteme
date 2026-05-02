export default function AtestemePricing() {
  return (
    <section id="prices" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-[48px] font-bold text-center text-[#12141d] leading-[60px] mb-12">
          Plano
        </h2>

        <div className="max-w-md mx-auto">
          <div className="bg-[#F3EAFA] rounded-2xl p-8 text-center">
            <button className="bg-[#FFC700] text-[#12141d] px-8 py-3 rounded-full font-bold mb-6">
              Recomendado
            </button>

            <h3 className="text-[48px] font-bold text-[#12141d] mb-4">
              Plano Individual
            </h3>

            <p className="text-gray-600 mb-6">
              Acesso completo à plataforma com todos os recursos
            </p>

            <div className="mb-6">
              <span className="text-[40px] font-bold text-[#6C4CA0]">R$ 49</span>
              <span className="text-gray-600">/mês</span>
            </div>

            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Avaliação completa de competências digitais</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Certificado digital reconhecido</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Sugestões personalizadas de conteúdo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Ambiente gamificado com Digicoins</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Acesso ilimitado 24/7</span>
              </li>
            </ul>

            <button className="w-full bg-[#6C4CA0] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#5a3d85] transition shadow-lg">
              Assinar Agora
            </button>
          </div>
        </div>

        <p className="text-center mt-8 text-gray-600">
          Para planos institucionais, <a href="#" className="text-[#6C4CA0] font-bold hover:underline">entre em contato</a>
        </p>
      </div>
    </section>
  );
}
