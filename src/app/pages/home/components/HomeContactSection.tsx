import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import Section from "../../../components/ui/Section";
import { Button } from "../../../components/ui/button";

export default function HomeContactSection() {
  return (
    <Section background="dark" className="py-24" id="contato">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <div className="bg-[var(--color-obsidian)] bg-opacity-85 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">
            Pronto para iniciar?
          </h2>
          <p className="text-white/70 mb-10 text-center text-lg">
            Fale com a nossa equipe de especialistas e garanta
            o cumprimento documentado da PNED na sua
            prefeitura.
          </p>

          <div className="flex flex-col items-center justify-center space-y-6 mt-8">
            <Button
              variant="default"
              size="lg"
              className="w-full md:w-auto px-8 py-8 text-xl rounded-full bg-[#25D366] hover:bg-[#1ebd5a] text-white shadow-lg shadow-[#25D366]/30 border-0 flex items-center gap-3 transition-transform hover:scale-105"
              asChild
            >
              <a href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20planos%20do%20Ateste.me!" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
