import { motion } from "motion/react";
import Section, { SectionHeader } from "../../../components/ui/Section";
import { stepsData } from "../../../../data/homeData";

export default function HomeStepsSection() {
  return (
    <Section
      background="white"
      className="py-24"
      id="como-funciona"
    >
      <SectionHeader
        badge="ROTA PNED"
        title="Como funciona em 4 passos."
        description="Do diagnóstico à certificação nacional. Tudo documentado para a prefeitura, tudo simples para a professora."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {stepsData.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-white border border-gray-100 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 hover:border-purple-200 hover:shadow-xl"
            style={{
              boxShadow: "0 4px 6px rgba(11, 8, 21, 0.02)",
            }}
          >
            <div
              className="text-6xl font-extrabold mb-6 leading-none"
              style={{
                color: "var(--primary)",
              }}
            >
              {step.number}
            </div>
            <h3
              className="text-2xl font-bold mb-4 min-h-[4rem]"
              style={{ color: "var(--color-obsidian)" }}
            >
              {step.title}
            </h3>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "rgba(11, 8, 21, 0.7)" }}
            >
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
