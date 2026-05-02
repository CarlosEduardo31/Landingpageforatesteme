const partners = [
  { image: 'https://atesteme.com/wp-content/uploads/2025/10/2.png', alt: 'Parceiro 1' },
  { image: 'https://atesteme.com/wp-content/uploads/2026/03/images-e1773852672899.webp', alt: 'Parceiro 2' },
  { image: 'https://atesteme.com/wp-content/uploads/2023/03/sebrae.png', alt: 'Sebrae' },
  { image: 'https://atesteme.com/wp-content/uploads/2023/03/Catalisa-1.png', alt: 'Catalisa' },
  { image: 'https://atesteme.com/wp-content/uploads/2023/03/Verbus2.png', alt: 'Verbus' }
];

export default function AtestemePartners() {
  return (
    <section className="py-16 bg-[#6C4CA0]">
      <div className="container mx-auto px-6">
        <h2 className="text-[24px] font-bold text-center text-white mb-12">
          Parceiros que acreditam na Atesteme
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={partner.image}
                alt={partner.alt}
                className="max-w-[120px] h-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
