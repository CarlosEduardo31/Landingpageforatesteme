import { motion } from 'motion/react';
import { Scale } from 'lucide-react';

export default function GuiaHeroSection() {
  return (
    <section className="pt-32 pb-20 text-white relative overflow-hidden" style={{ background: 'var(--gradient-main)' }}>
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: 'rgba(178, 156, 251, 0.2)' }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
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
              Lei 14.533/2023
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Guia Completo da PNED
          </h1>

          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            Entenda a Política Nacional de Educação Digital e como implementá-la
            na sua rede municipal de ensino
          </p>
        </motion.div>
      </div>
    </section>
  );
}
