export default function AtestemeFooter() {
  return (
    <footer className="bg-[#12141d] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://atesteme.com/wp-content/uploads/2023/02/logo.png"
              alt="Atesteme"
              className="h-[40px] w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-400 text-sm">
              Plataforma de inclusão e educação digital. Avaliamos as competências digitais de estudantes, professores e profissionais.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Equipe</a></li>
              <li><a href="#howitworks" className="text-gray-400 hover:text-white transition">Diferenciais</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white transition">Notícias</a></li>
              <li><a href="#prices" className="text-gray-400 hover:text-white transition">Planos</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contato</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Política de Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#6C4CA0] transition">
                <span>f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#6C4CA0] transition">
                <span>in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#6C4CA0] transition">
                <span>yt</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© 2026 Atesteme. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
