import { motion } from 'motion/react';
import { ArrowRight, Trophy } from 'lucide-react';

export default function ProfessoresCtaSection() {
  return (
    <section className="py-20 text-white" style={{ background: 'var(--gradient-professores)' }}>
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Trophy className="w-16 h-16 mx-auto mb-6" style={{ color: 'var(--color-coral)' }} />
          <h2 className="text-4xl font-bold mb-6">
            Pronta para Começar?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Faça seu diagnóstico gratuito agora e descubra seu potencial
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[var(--color-obsidian)] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition inline-flex items-center gap-2 shadow-lg"
          >
            Iniciar Diagnóstico Grátis
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          <p className="text-sm mt-4 opacity-75">
            Sem cadastro · Sem cartão · Resultado na hora
          </p>
        </motion.div>
      </div>
    </section>
  );
}
