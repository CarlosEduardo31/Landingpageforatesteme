export default function AtestemeCompetencies() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[48px] font-bold text-[#12141d] leading-[60px] mb-6">
              5 áreas,<br />
              16 competências,<br />
              5 níveis
            </h2>
            <p className="text-[24px] text-[#6C4CA0] leading-[31px] mb-4">
              A Atesteme foi construída sob um método científico. Nossos indicadores de desempenho estão associados à BNCC (2017) e à PNED (2023).
            </p>
            <p className="text-gray-600">
              <small>Certificação válida em todo o território nacional.</small>
            </p>
          </div>

          <div>
            <img
              src="https://atesteme.com/wp-content/uploads/2023/03/Areas.png"
              alt="Áreas de Competência"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
