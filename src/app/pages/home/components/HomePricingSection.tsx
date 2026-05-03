import { motion } from "motion/react";
import { Check } from "lucide-react";
import Section, { SectionHeader } from "../../../components/ui/Section";
import { Button } from "../../../components/ui/button";
import { pricingFeatures } from "../../../../data/homeData";

export default function HomePricingSection() {
  return (
    <Section background="gray" className="py-24" id="planos">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          badge="PACOTES"
          title={<>A proposta certa para o<br />porte da sua rede.</>}
          description="Investimento sob consulta — proposta personalizada em até 24h."
        />

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Essencial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-lg transition-shadow"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Essencial</h3>
              <p className="text-sm text-gray-500 min-h-[40px]">Para redes pequenas que querem começar com o essencial da PNED.</p>
            </div>
            <div className="mb-8">
              <p className="text-3xl font-extrabold text-gray-900">Sob consulta</p>
              <p className="text-xs text-gray-500 mt-1">Proposta personalizada por rede</p>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {pricingFeatures.essencial.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 shrink-0" style={{ color: "var(--color-purple-bluest)" }} />
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full border-2 rounded-full min-h-[3rem] h-auto py-2 whitespace-normal text-base font-semibold bg-white text-[var(--color-purple-bluest)] hover:bg-[var(--color-purple-bluest)] hover:text-white transition-colors" style={{ borderColor: "var(--color-purple-bluest)" }}>
              Falar com vendas
            </Button>
          </motion.div>

          {/* Completa (Featured) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-[2rem] p-8 shadow-xl relative flex flex-col h-full md:scale-105 z-10 shadow-[0_0_40px_rgba(139,92,246,0.3)]"
            style={{ backgroundColor: "var(--color-obsidian)" }}
          >
            <div className="absolute -top-4 inset-x-0 flex justify-center">
              <span className="bg-gradient-to-r from-[var(--color-purple-bluest)] to-[#8B5CF6] text-white text-xs font-bold uppercase tracking-wider py-2 px-6 rounded-full shadow-lg whitespace-nowrap">
                Mais indicado
              </span>
            </div>
            <div className="mb-8 mt-4">
              <h3 className="text-2xl font-bold text-white mb-2">Completa</h3>
              <p className="text-sm text-gray-300 min-h-[40px]">A escolha da maioria das prefeituras: tudo para cumprir e documentar a PNED.</p>
            </div>
            <div className="mb-8">
              <p className="text-3xl font-extrabold text-white">Sob consulta</p>
              <p className="text-xs text-gray-400 mt-1">Proposta personalizada por rede</p>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {pricingFeatures.completa.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 shrink-0" style={{ color: "var(--color-purple-bluest)" }} />
                  <span className="text-sm text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>
            <Button variant="default" className="w-full text-white hover:opacity-90 border-0 rounded-full min-h-[3rem] h-auto py-2 whitespace-normal text-base font-semibold bg-gradient-to-r from-[var(--color-purple-bluest)] to-[#8B5CF6]">
              Quero a Completa
            </Button>
          </motion.div>

          {/* Institucional */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-lg transition-shadow"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Institucional</h3>
              <p className="text-sm text-gray-500 min-h-[40px]">Para redes acima de 5.000 professores ou consórcios intermunicipais.</p>
            </div>
            <div className="mb-8">
              <p className="text-3xl font-extrabold text-gray-900">Sob consulta</p>
              <p className="text-xs text-gray-500 mt-1">Proposta personalizada por rede</p>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {pricingFeatures.institucional.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 shrink-0" style={{ color: "var(--color-purple-bluest)" }} />
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full border-2 rounded-full min-h-[3rem] h-auto py-2 whitespace-normal text-base font-semibold bg-white text-[var(--color-purple-bluest)] hover:bg-[var(--color-purple-bluest)] hover:text-white transition-colors" style={{ borderColor: "var(--color-purple-bluest)" }}>
              Apresentação para o consórcio
            </Button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
