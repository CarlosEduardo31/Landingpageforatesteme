import { motion } from 'motion/react';
import { professoresStepsData } from '../../../../data/professoresData';

export default function ProfessoresStepsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[var(--color-obsidian)] mb-4">
            Sua Jornada em 5 Passos Simples
          </h2>
          <p className="text-xl text-gray-600">
            Do diagnóstico ao certificado, tudo pensado para você
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {professoresStepsData.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-start gap-4 rounded-2xl p-6 border-l-4"
              style={{ background: 'linear-gradient(to right, rgba(171, 3, 244, 0.05), white)', borderLeftColor: 'var(--color-atesteme)' }}
            >
              <div className="w-12 h-12 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0" style={{ background: 'var(--color-atesteme)' }}>
                {step.number}
              </div>
              <div>
                <h3 className="font-bold text-[var(--color-obsidian)] mb-1">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
