import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function GuiaCtaSection() {
  return (
    <section className="py-20 text-white" style={{ background: 'var(--gradient-gestores)' }}>
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Implementar a PNED?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            O Ateste.me facilita a conformidade com a lei e garante resultados documentados
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contato"
            className="inline-flex items-center gap-2 bg-white text-[var(--color-purple-bluest)] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg"
          >
            Falar com Especialista
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
