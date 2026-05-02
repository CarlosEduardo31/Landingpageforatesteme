const posts = [
  {
    image: 'https://atesteme.com/wp-content/uploads/2023/03/1.png',
    date: '13, fevereiro, 2023',
    title: 'Política Nacional de Educação Digital (Pned)',
    link: '#'
  },
  {
    image: 'https://atesteme.com/wp-content/uploads/2023/02/imagem_materia.jpeg',
    date: '17, outubro, 2025',
    title: 'O Letramento Alfabético é imprescindível para o Letramento Digital?',
    link: '#'
  }
];

export default function AtestemeBlog() {
  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-[48px] font-bold text-[#12141d] leading-[60px] mb-4">
            ÚNICA plataforma alinhada à PNED
          </h2>
          <p className="text-[18px] text-[#12141d]">
            Saiba mais sobre a plataforma e o desenvolvimento de competências digitais no Brasil
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {posts.map((post, index) => (
            <div key={index} className="group cursor-pointer">
              <a href={post.link} className="block">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto rounded-lg mb-4"
                />
              </a>
              <span className="text-gray-500 text-sm">{post.date}</span>
              <h3 className="text-[24px] font-bold text-[#12141d] mt-2 group-hover:text-[#6C4CA0] transition">
                <a href={post.link} className="no-underline">
                  {post.title}
                </a>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
