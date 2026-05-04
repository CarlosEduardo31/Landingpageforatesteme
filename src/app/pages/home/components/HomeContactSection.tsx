import { motion } from "motion/react";
import { MessageCircle, Mail } from "lucide-react";
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
            Fale com nossos especialistas e
            garanta mais recursos do Fundeb/VAAR para sua rede de ensino
          </p>

          <div className="flex flex-col items-center justify-center space-y-6 mt-8">
            <Button
              variant="default"
              size="lg"
              className="w-full md:w-auto px-8 py-8 text-xl rounded-full bg-[#25D366] hover:bg-[#1ebd5a] text-white shadow-lg shadow-[#25D366]/30 border-0 flex items-center gap-3 transition-transform hover:scale-105"
              asChild
            >
              <a href="https://wa.me/5581981313852" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6" />
                Falar no WhatsApp
              </a>
            </Button>

            <a
              href="mailto:contato@atesteme.com"
              className="text-white/70 hover:text-white flex items-center gap-2 transition-colors mt-2"
            >
              <Mail className="w-5 h-5" />
              <span>Enviar e-mail para contato@atesteme.com</span>
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
