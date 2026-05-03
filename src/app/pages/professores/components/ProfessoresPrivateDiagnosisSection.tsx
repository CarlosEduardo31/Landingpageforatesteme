import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { professoresDiagnosisData } from '../../../../data/professoresData';

export default function ProfessoresPrivateDiagnosisSection() {
  return (
    <section className="py-20" style={{ background: 'linear-gradient(to bottom right, rgba(178, 156, 251, 0.1), rgba(171, 3, 244, 0.05))' }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Sparkles className="w-16 h-16 mx-auto mb-6" style={{ color: 'var(--color-atesteme)' }} />
          <h2 className="text-4xl font-bold text-[var(--color-obsidian)] mb-6">
            Diagnóstico Privado: Só Você Vê
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Sem exposição, sem comparação com colegas. Descubra onde você está e para onde ir.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {professoresDiagnosisData.map((feature, idx) => {
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  {feature.icon}
                  <h3 className="font-bold text-[var(--color-obsidian)] mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
