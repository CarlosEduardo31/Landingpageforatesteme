import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { gestoresProblemaData } from '../../../../data/gestoresData';

export default function GestoresProblemSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6 text-center" style={{ color: 'var(--color-obsidian)' }}>
            Por que municípios ficam esperando o "ambiente perfeito"?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            A Armadilha da Infraestrutura Ideal faz gestores perderem prazos esperando laboratórios,
            equipamentos e conectividade que nunca chegam.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4" style={{ borderLeftColor: 'var(--color-gestores-primary)' }}>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[var(--color-obsidian)] mb-4 flex items-center gap-2">
                  <span className="text-red-500">✗</span> O Cenário Tradicional
                </h3>
                <ul className="space-y-3 text-gray-700">
                  {gestoresProblemaData.cenarioTradicional.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[var(--color-obsidian)] mb-4 flex items-center gap-2">
                  <span className="text-green-500">✓</span> Com o Ateste.me
                </h3>
                <ul className="space-y-3 text-gray-700">
                  {gestoresProblemaData.comAtesteme.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
