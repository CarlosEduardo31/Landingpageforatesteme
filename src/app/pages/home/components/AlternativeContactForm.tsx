import { Button } from "../../../components/ui/button";

/**
 * Este componente contém o formulário de contato original
 * que foi substituído pelo botão de WhatsApp.
 * Foi mantido aqui para facilitar o uso futuro.
 */
export default function AlternativeContactForm() {
  return (
    <form className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-semibold text-white/80"
        >
          Nome Completo
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-4 bg-white/5 border border-white/15 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-atesteme)] focus:bg-white/10 transition-all"
          placeholder="Seu nome"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-semibold text-white/80"
        >
          E-mail Profissional
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-4 bg-white/5 border border-white/15 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-atesteme)] focus:bg-white/10 transition-all"
          placeholder="seu.email@prefeitura.gov.br"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-semibold text-white/80"
        >
          Telefone/WhatsApp
        </label>
        <input
          type="tel"
          id="phone"
          className="w-full px-4 py-4 bg-white/5 border border-white/15 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-atesteme)] focus:bg-white/10 transition-all"
          placeholder="(00) 00000-0000"
        />
      </div>

      <div>
        <label
          htmlFor="city"
          className="block mb-2 text-sm font-semibold text-white/80"
        >
          Município
        </label>
        <input
          type="text"
          id="city"
          className="w-full px-4 py-4 bg-white/5 border border-white/15 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-atesteme)] focus:bg-white/10 transition-all"
          placeholder="Sua cidade"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-semibold text-white/80"
        >
          Mensagem (opcional)
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-4 bg-white/5 border border-white/15 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-atesteme)] focus:bg-white/10 transition-all resize-none"
          placeholder="Conte-nos mais sobre suas necessidades..."
        ></textarea>
      </div>

      <Button
        variant="default"
        size="lg"
        className="w-full text-lg"
        type="submit"
      >
        Solicitar Apresentação
      </Button>
    </form>
  );
}
