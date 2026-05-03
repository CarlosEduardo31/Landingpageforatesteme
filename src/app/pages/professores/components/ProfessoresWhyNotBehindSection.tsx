import { motion } from 'motion/react';
import { professoresWhyNotBehindData } from '../../../../data/professoresData';

export default function ProfessoresWhyNotBehindSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-[var(--color-obsidian)] mb-6 text-center">
            Por que você se sente "perdida" no digital?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Não é culpa sua. O sistema de formação continuada não preparou você para isso.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-8 border-l-4"
              style={{ background: 'rgba(232, 103, 79, 0.1)', borderLeftColor: 'var(--color-coral)' }}
            >
              <h3 className="text-xl font-bold text-[var(--color-obsidian)] mb-4">
                O que te ensinaram
              </h3>
              <ul className="space-y-3 text-gray-700">
                {professoresWhyNotBehindData.oQueEnsinaram.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-green-50 rounded-2xl p-8 border-l-4 border-green-500"
            >
              <h3 className="text-xl font-bold text-[var(--color-obsidian)] mb-4">
                O que você vai aprender
              </h3>
              <ul className="space-y-3 text-gray-700">
                {professoresWhyNotBehindData.oQueAprender.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
