import { motion } from "motion/react";
import {
  CheckCircle2,
  Users,
  GraduationCap,
  Target,
  Award,
  TrendingUp,
  Shield,
  FileText,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Section, {
  SectionHeader,
} from "../components/ui/Section";
import Badge from "../components/ui/Badge";

// Scroll reveal hook
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
}

// StatItem component for social proof
function StatItem({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="text-center"
    >
      <h4
        className="text-5xl font-extrabold mb-2"
        style={{ color: "var(--color-obsidian)" }}
      >
        {value}
      </h4>
      <p
        className="text-sm font-semibold uppercase tracking-wide"
        style={{ color: "var(--color-purple-bluest)" }}
      >
        {label}
      </p>
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Simpler, Cleaner */}
      <Section
        background="hero"
        className="pt-32 pb-20 relative overflow-hidden min-h-[85vh] flex items-center"
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
                Sua rede municipal certificada digitalmente —{" "}
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
                  variant="primary"
                  size="lg"
                  showArrow
                  href="#contato"
                >
                  Sou Gestor - Solicitar Apresentação
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-[var(--color-atesteme)]"
                  href="https://autoavaliacao.atesteme.com.br"
                >
                  Sou Professor - Diagnóstico Privado
                </Button>
              </motion.div>
            </div>

            {/* Right Column - Image */}
            {/* <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-3xl blur-2xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1758685848226-eedca8f6bce7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Professora usando tecnologia"
                  className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                  style={{ aspectRatio: "16/9" }}
                />
              </div>
            </motion.div> */}
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
              <span className="text-white/70 text-sm font-semibold">
                Instituto Verbus
              </span>
              <span className="text-white/70 text-sm font-semibold">
                Prefeitura A
              </span>
              <span className="text-white/70 text-sm font-semibold">
                Prefeitura B
              </span>
              <span className="text-white/70 text-sm font-semibold">
                FNDE
              </span>
              <span className="text-white/70 text-sm font-semibold">
                MEC
              </span>
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

      {/* Story Section */}
      <Section background="white" className="py-20">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center leading-tight"
            style={{ color: "var(--color-obsidian)" }}
          >
            Há uma professora na sua rede que ficou para trás. E
            uma prefeitura que vai precisar provar que não
            deixou.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(11, 8, 21, 0.7)" }}
          >
            <p>
              Ela pode parecer radiosa ensinando suas
              professoras que ela domina muito bem, sem
              tecnologia. Mas agora ela precisa incluir
              competências digitais naquilo que ensina,
              atingindo, nada de absurdo, um perfume veio com ou
              da formação. Ninguém pediu pra ela aprender —
              pedirão para ela prestar contas.
            </p>

            <p>
              A sua prefeitura, por outro lado, recebeu recursos
              federais via FNDE ou até patrimônio próprio, e
              precisa dar realce. Comprar equipamentos ou
              contratar uma sala cheia não resolve. O MEC quer
              prova que FNDE é consultado se formação digital. A
              secretaria precisa evidência auditável — não só
              certificado de esforço.
            </p>

            <p>
              Os dois problemas têm a mesma origem: a formação
              digital nunca foi feita pela secretaria de saúde
              até agora, e existe uma lei criada em 2024 — PNED
              — que torna obrigatória ela. Ela torna obrigatória
              de saúde a professora em nível que não está.
              Documente tudo para a prefeitura cumprir a lei.
            </p>

            <p
              className="font-semibold"
              style={{ color: "var(--color-obsidian)" }}
            >
              O Ateste.me resolve os dois ao mesmo tempo. Acolhe
              a professora do nível em que ela está. Documenta
              tudo para a prefeitura cumprir a lei.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Social Proof - Stats */}
      <Section background="white" className="py-16">
        <div className="flex flex-wrap justify-center gap-16 max-w-4xl mx-auto">
          <StatItem
            value="32.000+"
            label="Usuários Licenciados"
            delay={0}
          />
          <StatItem
            value="2.000+"
            label="Desafios Interativos"
            delay={0.1}
          />
          <StatItem
            value="100%"
            label="Alinhamento PNED/BNCC"
            delay={0.2}
          />
        </div>
      </Section>

      {/* Problem Section - Infrastructure Barrier */}
      <Section background="gray" className="py-24">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: "var(--color-obsidian)" }}
          >
            A infraestrutura não pode ser a desculpa.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl mb-6 leading-relaxed"
            style={{ color: "rgba(11, 8, 21, 0.7)" }}
          >
            A principal objeção para não implementar tecnologia
            nas escolas é a falta de computadores modernos e
            internet rápida. O Ateste.me foi construído para a
            realidade brasileira.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: "rgba(11, 8, 21, 0.7)" }}
          >
            Não espere o ambiente ideal para cumprir a
            legislação. A nossa plataforma roda direto no
            navegador do smartphone do professor, sem instalar
            nada, respeitando o ritmo e a conexão da sua rede.
          </motion.p>
        </div>
      </Section>

      {/* Steps Section - Rota PNED com Numbered Cards */}
      <Section
        background="white"
        className="py-24"
        id="como-funciona"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-2"
            style={{ color: "var(--color-obsidian)" }}
          >
            Rota PNED
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl font-semibold mb-4"
            style={{ color: "var(--color-obsidian)" }}
          >
            Como funciona — em 4 passos.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg max-w-3xl mx-auto"
            style={{ color: "rgba(11, 8, 21, 0.7)" }}
          >
            Do diagnóstico à certificação nacional. Tudo documentado para a prefeitura, tudo simples para a professora.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            {
              number: "01",
              title: "Diagnóstico",
              description:
                "Mapeamos as competências digitais de cada professor da rede municipal.",
            },
            {
              number: "02",
              title: "Trilha Adaptativa",
              description:
                "Cada professor recebe uma jornada personalizada no celular, com tutor humano.",
            },
            {
              number: "03",
              title: "Plano de Aula",
              description:
                "Materiais práticos que o professor leva para a sala no dia seguinte.",
            },
            {
              number: "04",
              title: "Painel + Certificação",
              description:
                "A prefeitura documenta o cumprimento da PNED. O professor recebe certificado nacional.",
            },
          ].map((step, idx) => (
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
                className="text-6xl font-extrabold mb-6 opacity-60 leading-none"
                style={{
                  color: "var(--color-purple-blue-gray)",
                }}
              >
                {step.number}
              </div>
              <h3
                className="text-2xl font-bold mb-4"
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

      {/* Contact Section - B2G Form on Obsidian Background */}
      <Section background="dark" className="py-24" id="contato">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-[var(--color-obsidian)] bg-opacity-85 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">
              Pronto para iniciar?
            </h2>
            <p className="text-white/70 mb-10 text-center text-lg">
              Fale com a nossa equipe de especialistas e garanta
              o cumprimento documentado da PNED na sua
              prefeitura.
            </p>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-semibold text-white/80"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-4 bg-white/5 border border-white/15 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-atesteme)] focus:bg-white/10 transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-semibold text-white/80"
                >
                  E-mail Profissional
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-4 bg-white/5 border border-white/15 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-atesteme)] focus:bg-white/10 transition-all"
                  placeholder="seu.email@prefeitura.gov.br"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-semibold text-white/80"
                >
                  Telefone/WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-4 bg-white/5 border border-white/15 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-atesteme)] focus:bg-white/10 transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block mb-2 text-sm font-semibold text-white/80"
                >
                  Município
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-full px-4 py-4 bg-white/5 border border-white/15 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-atesteme)] focus:bg-white/10 transition-all"
                  placeholder="Sua cidade"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-semibold text-white/80"
                >
                  Mensagem (opcional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-4 bg-white/5 border border-white/15 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[var(--color-atesteme)] focus:bg-white/10 transition-all resize-none"
                  placeholder="Conte-nos mais sobre suas necessidades..."
                ></textarea>
              </div>

              <Button
                variant="primary"
                size="lg"
                className="w-full text-lg"
                type="submit"
              >
                Solicitar Apresentação
              </Button>
            </form>
          </div>
        </motion.div>
      </Section>

      <Footer />
    </div>
  );
}