export default function Footer() {
  return (
    <footer className="py-12" style={{ background: 'var(--color-neutral-900)', color: 'white' }}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary-400)' }}>Ateste.me</div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-neutral-400)' }}>
              Plataforma de educação digital alinhada à PNED (Lei 14.533/2023).
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--color-neutral-400)' }}>
              <li><a href="#/" className="hover:text-white transition">Início</a></li>
              <li><a href="#/gestores" className="hover:text-white transition">Para Gestores</a></li>
              <li><a href="#/professores" className="hover:text-white transition">Para Professores</a></li>
              <li><a href="#/guia-pned" className="hover:text-white transition">Guia PNED</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--color-neutral-400)' }}>
              <li><a href="#" className="hover:text-white transition">Casos de Sucesso</a></li>
              <li><a href="#" className="hover:text-white transition">Documentação</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--color-neutral-400)' }}>
              <li>contato@atesteme.com</li>
              <li>(11) 0000-0000</li>
              <li>Segunda a Sexta, 9h-18h</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: 'var(--color-neutral-800)' }}>
          <p className="text-sm" style={{ color: 'var(--color-neutral-400)' }}>
            © 2026 Ateste.me - Instituto Verbus. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm" style={{ color: 'var(--color-neutral-400)' }}>
            <a href="#" className="hover:text-white transition">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
