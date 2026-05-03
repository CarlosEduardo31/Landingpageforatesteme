import { Instagram, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12" style={{ background: 'var(--color-neutral-900)', color: 'white' }}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-6">
              <img src="/logo/LogoBranca.png" alt="Ateste.me" className="h-8 object-contain" />
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-neutral-400)' }}>
              Plataforma de educação digital alinhada à PNED (Lei 14.533/2023).
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="TikTok">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.97-1.561 4.795 4.795 0 0 1-1.034-3.16l-.022-.022h-3.69v15.356a3.985 3.985 0 0 1-3.994 3.978 3.96 3.96 0 0 1-3.95-3.987 3.96 3.96 0 0 1 3.95-3.987c.21 0 .416.017.618.05v3.715c-.198-.035-.401-.054-.61-.054a1.272 1.272 0 0 0-1.27 1.27 1.272 1.272 0 0 0 1.27 1.27 1.272 1.272 0 0 0 1.27-1.27V1.954h3.69c.044 1.348.53 2.58 1.34 3.553a6.76 6.76 0 0 0 4.195 2.124v3.696a10.456 10.456 0 0 1-5.789-1.928v6.78a7.653 7.653 0 0 1-7.654 7.632 7.653 7.653 0 0 1-7.653-7.632 7.653 7.653 0 0 1 7.653-7.631c.71 0 1.393.1 2.046.282V14.5a3.982 3.982 0 0 0-2.046-.554 4.025 4.025 0 0 0-4.021 4.015 4.025 4.025 0 0 0 4.021 4.015 4.025 4.025 0 0 0 4.021-4.015v-6.07a10.495 10.495 0 0 0 6.64 2.378v-3.583z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--color-neutral-400)' }}>
              <li><a href="#inicio" className="hover:text-white transition">Início</a></li>
              <li><a href="#como-funciona" className="hover:text-white transition">Como Funciona</a></li>
              <li><a href="#planos" className="hover:text-white transition">Planos</a></li>
              <li><a href="#faq" className="hover:text-white transition">Dúvidas (FAQ)</a></li>
              <li><a href="#contato" className="hover:text-white transition">Contato</a></li>
              {/* Páginas futuras
              <li><a href="#/gestores" className="hover:text-white transition">Para Gestores</a></li>
              <li><a href="#/professores" className="hover:text-white transition">Para Professores</a></li>
              <li><a href="#/guia-pned" className="hover:text-white transition">Guia PNED</a></li>
              */}
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
