import { Menu } from 'lucide-react';

export default function AtestemeNavbar() {
  return (
    <nav className="py-12 px-6 bg-[#F3EAFA]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img
              src="https://atesteme.com/wp-content/uploads/2023/02/logo.png"
              alt="Atesteme"
              className="h-[46px] w-auto"
            />
          </a>

          <div className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-[#12141d] font-bold hover:text-[#6C4CA0] transition">
              EQUIPE
            </a>
            <a href="#howitworks" className="text-[#12141d] font-bold hover:text-[#6C4CA0] transition">
              DIFERENCIAIS
            </a>
            <a href="#blog" className="text-[#12141d] font-bold hover:text-[#6C4CA0] transition">
              NOTÍCIAS
            </a>
            <a href="#prices" className="text-[#12141d] font-bold hover:text-[#6C4CA0] transition">
              PLANOS
            </a>
            <a href="#" className="text-[#6C4CA0] font-bold hover:opacity-80 transition ml-4">
              Fazer Login
            </a>
            <a href="#" className="bg-[#6C4CA0] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#5a3d85] transition shadow-lg">
              Saber Mais
            </a>
          </div>

          <button className="lg:hidden bg-[#6C4CA0] p-2 rounded">
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </nav>
  );
}
