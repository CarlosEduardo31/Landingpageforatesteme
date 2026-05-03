import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { professoresTestimonialsData } from '../../../../data/professoresData';

export default function ProfessoresTestimonialsSection() {
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
            Professoras como Você
          </h2>
          <p className="text-xl text-gray-600">
            Depoimentos reais de quem já conquistou o certificado
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {professoresTestimonialsData.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5" style={{ fill: 'var(--color-coral)', color: 'var(--color-coral)' }} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4 border-gray-200">
                <div className="font-bold text-[var(--color-obsidian)]">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-sm text-gray-500">{testimonial.city}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
