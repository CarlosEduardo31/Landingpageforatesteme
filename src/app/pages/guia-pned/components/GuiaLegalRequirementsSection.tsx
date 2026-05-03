import { motion } from 'motion/react';
import { FileText } from 'lucide-react';
import { guiaObrigacoesData } from '../../../../data/guiaPnedData';

export default function GuiaLegalRequirementsSection() {
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
          <h2 className="text-4xl font-bold text-[var(--color-obsidian)] mb-8 text-center">
            Obrigações Legais dos Municípios
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-orange-200">
            <div className="space-y-6">
              {guiaObrigacoesData.map((obrigacao, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <FileText className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 leading-relaxed">{obrigacao}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
