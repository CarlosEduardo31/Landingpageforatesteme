import { motion } from "motion/react";
import Section, { SectionHeader } from "../../../components/ui/Section";
import { differentialsData } from "../../../../data/homeData";

export default function HomeDifferentialsSection() {
  return (
    <Section background="gray" className="py-20" id="diferenciais">
      <SectionHeader
        badge="POR QUE ATESTEME"
        title="5 Pilares para implementação do Programa de Educação Digital"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 xl:gap-8 max-w-[1400px] mx-auto px-4 mt-12">
        {differentialsData.map((pillar, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
          >
            <div className="bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              {pillar.icon}
            </div>
            <h3 className="text-xl font-bold mb-4" style={{ color: "var(--color-obsidian)" }}>
              {pillar.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-base flex-1">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
