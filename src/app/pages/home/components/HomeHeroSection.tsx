import { motion } from "motion/react";
import { CheckCircle2, Shield, FileText } from "lucide-react";
import { Button } from "../../../components/ui/button";
import Section from "../../../components/ui/Section";
import { partnersData } from "../../../../data/homeData";

export default function HomeHeroSection() {
  return (
    <Section
      background="hero"
      className="pt-32 pb-20 relative overflow-hidden min-h-[85vh] flex items-center"
      id="inicio"
    >
      <div className="relative z-10 w-full text-center">
        <div className="max-w-4xl mx-auto">
          {/* Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex justify-center"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20">
                <CheckCircle2 className="w-4 h-4" />
                <span>Lei 14.533/2023 - PNED</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white max-w-4xl mx-auto"
            >
              Sua rede municipal certificada digitalmente{" "}
              <span
                style={{
                  color: "var(--color-purple-blue-gray)",
                }}
              >
                do zero ao certificado nacional.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base md:text-lg mb-12 leading-relaxed text-white/85 font-light max-w-3xl mx-auto"
            >
              A única plataforma 100% alinhada à PNED, à BNCC
              e à Lei 14.533/2023. Diagnóstico individual,
              trilhas adaptativas, tutoria humana e painél
              para a Secretaria — tudo rodando no celular para
              a realidade brasileira.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Button
                variant="default"
                size="lg"
                asChild
              >
                <a href="#contato">Sou Gestor - Solicitar Apresentação</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[var(--color-atesteme)]"
                asChild
              >
                <a href="https://autoavaliacao.atesteme.com.br">Sou Professor - Diagnóstico Privado</a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Parceiros Institucionais */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <p className="text-xs uppercase tracking-widest text-white/50 mb-6 text-center font-semibold">
            Parceiros Institucionais
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
            {partnersData.map((partner, index) => (
              <img
                key={index}
                src={partner.src}
                alt={partner.name}
                className="h-8 md:h-10 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <Shield className="w-4 h-4 text-white/80" />
              <span className="text-white/80 text-sm font-medium">
                Alinhado à PNED
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <FileText className="w-4 h-4 text-white/80" />
              <span className="text-white/80 text-sm font-medium">
                Conforme Lei 14.533/2023
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <CheckCircle2 className="w-4 h-4 text-white/80" />
              <span className="text-white/80 text-sm font-medium">
                BNCC Computação
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
