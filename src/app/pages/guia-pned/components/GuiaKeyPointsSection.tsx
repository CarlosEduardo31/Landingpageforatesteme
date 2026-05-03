import { motion } from 'motion/react';
import { guiaPilaresData } from '../../../../data/guiaPnedData';

export default function GuiaKeyPointsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-[var(--color-obsidian)] mb-12 text-center">
            5 Pilares da PNED
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {guiaPilaresData.map((pilar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[var(--color-purple-blue-gray)] text-center"
              >
                <div className="w-16 h-16 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" style={{ background: 'var(--gradient-gestores)' }}>
                  {pilar.number}
                </div>
                <h3 className="font-bold text-[var(--color-obsidian)] mb-2">{pilar.title}</h3>
                <p className="text-sm text-gray-600">{pilar.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
