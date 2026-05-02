export default function LPFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold text-[#E8674F] mb-4">Ateste.me</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Plataforma de inclusão e educação digital alinhada à PNED.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Para Gestores</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Agendar Reunião</a></li>
              <li><a href="#" className="hover:text-white transition">Cases de Sucesso</a></li>
              <li><a href="#" className="hover:text-white transition">Documentação PNED</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Para Professores</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Fazer Diagnóstico</a></li>
              <li><a href="#" className="hover:text-white transition">Como Funciona</a></li>
              <li><a href="#" className="hover:text-white transition">Certificação</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>contato@atesteme.com</li>
              <li>(11) 0000-0000</li>
              <li>Segunda a Sexta, 9h-18h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2026 Ateste.me. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
