export default function AtestemeHero() {
  return (
    <section className="bg-[#F3EAFA] pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-[40px] md:text-[48px] leading-[50px] md:leading-[60px] font-bold text-[#12141d] mb-6">
              Plataforma de Inclusão e Educação Digital
            </h1>
            <p className="text-[24px] text-[#6C4CA0] mb-4 leading-[31px]">
              Avaliamos, desenvolvemos e certificamos suas competências digitais.
            </p>
            <p className="text-[24px] text-[#6C4CA0] mb-8">
              <small>Faça sua autoavaliação grátis agora mesmo!</small>
            </p>
            <div className="max-w-[400px]">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Insira seu e-mail"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#6C4CA0]"
                />
                <button className="bg-[#FFC700] text-[#12141d] px-6 py-3 rounded-lg font-bold hover:bg-[#e6b300] transition whitespace-nowrap">
                  Iniciar Autodiagnóstico
                </button>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://atesteme.com/wp-content/uploads/2023/03/herook.png"
              alt="Hero"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
