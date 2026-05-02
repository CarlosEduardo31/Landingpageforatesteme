import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="text-2xl font-bold text-white">Logo</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transformando negócios digitais desde 2020. Sua parceira para o sucesso online.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-bold mb-4">Produto</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400 transition">Recursos</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Preços</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Casos de Uso</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Atualizações</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400 transition">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Carreiras</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Contato</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Receba as últimas novidades e dicas diretamente no seu email.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-indigo-600 focus:outline-none text-white"
              />
              <button className="bg-indigo-600 p-2 rounded-lg hover:bg-indigo-700 transition">
                <Mail className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Logo. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-indigo-400 transition">Política de Privacidade</a>
            <a href="#" className="hover:text-indigo-400 transition">Termos de Uso</a>
            <a href="#" className="hover:text-indigo-400 transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
