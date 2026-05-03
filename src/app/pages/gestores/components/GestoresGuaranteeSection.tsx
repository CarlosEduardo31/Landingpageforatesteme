import { motion } from 'motion/react';
import { Shield, ArrowRight } from 'lucide-react';

export default function GestoresGuaranteeSection() {
  return (
    <section className="py-20 text-white" style={{ background: 'var(--color-obsidian)' }}>
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Shield className="w-16 h-16 mx-auto mb-6" style={{ color: 'var(--color-purple-blue-gray)' }} />
          <h2 className="text-4xl font-bold mb-6">
            Garantia de Resultado Documentado
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ou continuamos trabalhando até alcançar, sem custo adicional
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white px-8 py-4 rounded-lg font-bold transition inline-flex items-center gap-2 shadow-lg"
            style={{ background: 'var(--color-gestores-primary)' }}
          >
            Agendar Reunião
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
