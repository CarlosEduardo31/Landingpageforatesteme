import { motion } from 'motion/react';
import { ArrowRight, Scale } from 'lucide-react';

export default function GestoresHeroSection() {
  return (
    <section className="pt-32 pb-20 text-white relative overflow-hidden" style={{ background: 'var(--gradient-gestores)' }}>
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: 'rgba(178, 156, 251, 0.2)' }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-8"
          >
            <Scale className="w-4 h-4" />
            <span className="text-sm font-semibold">
              Conformidade Legal Garantida
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Sua prefeitura assinou a PNED.<br />
            <span style={{ color: 'var(--color-purple-blue-gray)' }}>O Ateste.me é a entrega documentada.</span>
          </h1>

          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            Implemente a Lei 14.533/2023 com resultados documentados em 90 dias.
            Sem necessidade de infraestrutura complexa ou investimento em equipamentos.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white px-8 py-4 rounded-lg font-bold transition inline-flex items-center gap-2 shadow-lg"
            style={{ background: 'var(--color-gestores-primary)' }}
          >
            Agendar Reunião Comercial
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
