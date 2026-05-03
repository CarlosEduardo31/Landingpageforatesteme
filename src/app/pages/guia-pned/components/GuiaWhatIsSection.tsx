import { motion } from 'motion/react';
import { guiaObjetivosData } from '../../../../data/guiaPnedData';

export default function GuiaWhatIsSection() {
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
          <h2 className="text-4xl font-bold text-[var(--color-obsidian)] mb-8">
            O que é a PNED?
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              A <strong>Política Nacional de Educação Digital (PNED)</strong> foi instituída pela
              Lei 14.533, de 11 de janeiro de 2023, com o objetivo de promover a inclusão digital
              e o desenvolvimento de competências digitais na educação brasileira.
            </p>

            <div className="rounded-2xl p-8 border-l-4 my-8" style={{ background: 'linear-gradient(to right, rgba(178, 156, 251, 0.1), rgba(110, 41, 218, 0.05))', borderLeftColor: 'var(--color-purple-bluest)' }}>
              <h3 className="text-2xl font-bold text-[var(--color-obsidian)] mb-4">Objetivos Principais</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {guiaObjetivosData.map((objetivo, idx) => {
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      {objetivo.icon}
                      <div>
                        <h4 className="font-bold text-[var(--color-obsidian)]">{objetivo.title}</h4>
                        <p className="text-gray-600 text-sm">{objetivo.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
