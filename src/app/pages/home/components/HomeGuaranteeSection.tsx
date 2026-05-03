import { motion } from "motion/react";
import { Shield } from "lucide-react";
import Section from "../../../components/ui/Section";

export default function HomeGuaranteeSection() {
  return (
    <Section background="white" className="py-24" id="garantia">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[var(--color-obsidian)] to-[#2A2140] rounded-[2rem] p-10 md:p-14 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-[var(--color-purple-bluest)] rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-40 h-40 bg-[#8B5CF6] rounded-full blur-3xl opacity-30"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="bg-white/10 backdrop-blur-md rounded-full w-20 h-20 flex items-center justify-center mb-6 border border-white/20">
              <Shield className="w-10 h-10 text-[#A78BFA]" />
            </div>

            <span className="text-[var(--color-purple-blue-gray)] text-sm font-bold tracking-widest uppercase mb-4">
              Nossa garantia
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight max-w-2xl">
              Garantia de Resultado Documentado <br className="hidden md:block" />
              <span className="text-[#A78BFA]"> Ou Continuamos Trabalhando.</span>
            </h2>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl">
              Se em 90 dias sua rede não tiver os indicadores PNED documentados, com diagnóstico aplicado, trilhas em andamento e dashboard ativo, nossa equipe permanece sem custo adicional até o resultado acontecer.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
