import { Menu } from 'lucide-react';

export default function LPNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-[#7B2CBF]">Ateste.me</div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#produto" className="text-gray-700 hover:text-[#7B2CBF] transition font-medium">
              O Produto
            </a>
            <a href="#como-funciona" className="text-gray-700 hover:text-[#7B2CBF] transition font-medium">
              Como Funciona
            </a>
            <a href="#resultados" className="text-gray-700 hover:text-[#7B2CBF] transition font-medium">
              Resultados
            </a>
            <a href="#garantia" className="text-gray-700 hover:text-[#7B2CBF] transition font-medium">
              Garantia
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="#gestores" className="text-[#7B2CBF] font-bold hover:underline">
              Sou Gestor
            </a>
            <a
              href="#professores"
              className="bg-[#E8674F] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#d45a42] transition shadow-lg"
            >
              Sou Professor(a)
            </a>
          </div>

          <button className="lg:hidden">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </nav>
  );
}
