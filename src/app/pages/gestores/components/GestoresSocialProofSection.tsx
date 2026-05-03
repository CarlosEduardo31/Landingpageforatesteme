import { motion } from 'motion/react';
import { gestoresPrefeiturasData } from '../../../../data/gestoresData';

export default function GestoresSocialProofSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[var(--color-obsidian)] mb-4">
            Prefeituras que Confiam no Ateste.me
          </h2>
          <p className="text-xl text-gray-600">
            Resultados documentados de redes municipais reais
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {gestoresPrefeiturasData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--color-gestores-primary)' }}>{item.taxa}</div>
              <div className="text-sm text-gray-600 mb-4">{item.metrica}</div>
              <div className="border-t pt-4 border-gray-200">
                <div className="font-bold text-[var(--color-obsidian)]">{item.municipio}</div>
                <div className="text-sm text-gray-600">{item.detalhes}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
