import { Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="py-12"
      style={{ background: "var(--color-neutral-900)", color: "white" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2 lg:pr-12">
            <div className="mb-6">
              <img
                src="/logo/LogoBranca.png"
                alt="Ateste.me"
                className="h-8 object-contain"
              />
            </div>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--color-neutral-400)" }}
            >
              Plataforma de educação digital alinhada à PNED (Lei 14.533/2023).
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/atesteme/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@atesteme"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@atesteme"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/atesteme/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navegação</h4>
            <ul
              className="space-y-2 text-sm"
              style={{ color: "var(--color-neutral-400)" }}
            >
              <li>
                <a href="#inicio" className="hover:text-white transition">
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#como-funciona"
                  className="hover:text-white transition"
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#parceiros" className="hover:text-white transition">
                  Parceiros
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition">
                  Dúvidas (FAQ)
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition">
                  Contato
                </a>
              </li>
              {/* Páginas futuras
              <li><a href="#/gestores" className="hover:text-white transition">Para Gestores</a></li>
              <li><a href="#/professores" className="hover:text-white transition">Para Professores</a></li>
              <li><a href="#/guia-pned" className="hover:text-white transition">Guia PNED</a></li>
              */}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul
              className="space-y-2 text-sm"
              style={{ color: "var(--color-neutral-400)" }}
            >
              <li>contato@atesteme.com</li>
              {/* <li>(1) 0000-0000</li>
              <li>Segunda a Sexta, 9h-18h</li> */}
            </ul>
          </div>
        </div>

        <div
          className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: "var(--color-neutral-800)" }}
        >
          <p className="text-sm" style={{ color: "var(--color-neutral-400)" }}>
            © 2026 Atesteme - Instituto Verbus. Todos os direitos reservados.
          </p>
          <div
            className="flex gap-6 text-sm"
            style={{ color: "var(--color-neutral-400)" }}
          >
            <a
              href="#/politica-de-privacidade"
              className="hover:text-white transition"
            >
              Política de Privacidade
            </a>
            <a href="#/termos-de-uso" className="hover:text-white transition">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
