import { motion } from 'motion/react';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { guiaTimelineData } from '../../../../data/guiaPnedData';

export default function GuiaTimelineSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-[var(--color-obsidian)] mb-8 text-center">
            Como Implementar na Sua Rede
          </h2>

          <div className="space-y-6">
            {guiaTimelineData.map((fase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl p-8 border-l-4"
                style={{ background: 'linear-gradient(to right, rgba(178, 156, 251, 0.1), rgba(110, 41, 218, 0.05))', borderLeftColor: 'var(--color-purple-bluest)' }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[var(--color-purple-bluest)] text-white rounded-full flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-bold text-[var(--color-purple-bluest-dark)]">{fase.fase}</span>
                      <span className="text-sm text-gray-600">·</span>
                      <Calendar className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-600">{fase.periodo}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-obsidian)] mb-3">{fase.titulo}</h3>
                    <ul className="space-y-2">
                      {fase.itens.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
