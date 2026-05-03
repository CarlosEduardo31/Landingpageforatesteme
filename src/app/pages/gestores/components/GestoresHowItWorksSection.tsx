import { motion } from 'motion/react';
import { gestoresRotaPnedData } from '../../../../data/gestoresData';

export default function GestoresHowItWorksSection() {
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
            Rota PNED: 5 Passos para Conformidade Total
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Um processo estruturado e documentado, do diagnóstico à certificação
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-4">
          {gestoresRotaPnedData.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              {idx < 4 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] z-0" style={{ background: 'var(--color-purple-blue-gray)' }} />
              )}
              <div className="relative z-10 rounded-2xl p-6 border-2 text-center" style={{ background: 'rgba(178, 156, 251, 0.1)', borderColor: 'var(--color-purple-blue-gray)' }}>
                <div className="w-16 h-16 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3" style={{ background: 'var(--color-gestores-primary)' }}>
                  {step.number}
                </div>
                <h3 className="font-bold text-[var(--color-obsidian)] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
