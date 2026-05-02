export default function AtestemeAdvantages() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://atesteme.com/wp-content/uploads/2023/03/visual.png"
              alt="Vantagens"
              className="w-full"
            />
          </div>

          <div>
            <h2 className="text-[48px] font-bold text-[#12141d] leading-[60px] mb-6">
              Vantagens de assinar nossa plataforma:
            </h2>
            <div className="text-[24px] text-[#6C4CA0] leading-[31px] space-y-4">
              <p>Engaja e melhora a performance dos estudantes!</p>
              <p>Pode ser utilizado como Recurso Didático pelo Professor!</p>
              <p>Aumenta a empregabilidade para todos, inclusive, 50+!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
