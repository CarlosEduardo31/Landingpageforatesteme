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
  Check,
  MessageCircle,
  Smartphone,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Button } from "../components/ui/button";
// import Card from "../components/ui/card";
import Section, {
  SectionHeader,
} from "../components/ui/Section";
// import Badge from "../components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";

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
                Sua rede municipal certificada digitalmente {" "}
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
              <img src="/parceiros/IPESPE.png" alt="IPESPE EDUC" className="h-8 md:h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://atesteme.com/wp-content/uploads/2026/03/images-e1773852672899.webp" alt="Prefeitura A" className="h-8 md:h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://atesteme.com/wp-content/uploads/2023/03/sebrae.png" alt="Sebrae" className="h-8 md:h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://atesteme.com/wp-content/uploads/2023/03/Catalisa-1.png" alt="Catalisa" className="h-8 md:h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              {/* <img src="https://placehold.co/140x50/transparent/white?text=MEC" alt="MEC" className="h-8 md:h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" /> */}
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
          <SectionHeader
            badge="O problema silencioso"
            title="Há uma professora na sua rede que ficou para trás. E uma prefeitura que vai precisar provar que não deixou."
          />

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
      {/* <Section background="white" className="py-16">
        <div className="flex flex-wrap justify-center gap-16 max-w-4xl mx-auto">
          <StatItem
            value="8.000+"
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
      </Section> */}

      {/* Por que Ateste.me Section */}
      <Section background="gray" className="py-24" id="diferenciais">
        <SectionHeader
          badge="POR QUE ATESTE.ME"
          title="Quatro pilares que fazem toda a diferença."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 mt-12">
          {[
            {
              icon: <Target className="w-8 h-8 text-[var(--color-purple-bluest)]" />,
              title: "Começa de onde você está",
              description: "Diagnóstico individual mapeia o ponto de partida. Cada um caminha do seu nível, no seu ritmo."
            },
            {
              icon: <Smartphone className="w-8 h-8 text-[var(--color-purple-bluest)]" />,
              title: "Funciona no celular",
              description: "Mobile-first, internet fraca, sem instalação. Funciona com a infraestrutura que a sua rede tem hoje."
            },
            {
              icon: <Award className="w-8 h-8 text-[var(--color-purple-bluest)]" />,
              title: "Certificação que vale",
              description: "Reconhecida na Lei 14.533/2023, alinhada à BNCC. Vale para progressão funcional do professor."
            },
            {
              icon: <FileText className="w-8 h-8 text-[var(--color-purple-bluest)]" />,
              title: "Prefeitura documentada",
              description: "Painel com relatórios prontos para TCM, MEC, FNDE e o conselho municipal. Auditoria sem sobressaltos."
            }
          ].map((pillar, idx) => (
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

      {/* Steps Section - Rota PNED com Numbered Cards */}
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
                className="text-6xl font-extrabold mb-6 leading-none"
                style={{
                  color: "var(--primary)",
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

      {/* Pricing Section */}
      <Section background="gray" className="py-24" id="planos">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            badge="PACOTES"
            title={<>A proposta certa para o<br/>porte da sua rede.</>}
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
                {[
                  "Diagnóstico individual",
                  "Trilhas adaptativas básicas",
                  "Painel da Secretaria",
                  "Certificação nacional",
                  "Suporte por e-mail",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0" style={{ color: "var(--color-purple-bluest)" }} />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full border-2 rounded-full h-12 text-base font-semibold bg-white text-[var(--color-purple-bluest)] hover:bg-[var(--color-purple-bluest)] hover:text-white transition-colors" style={{ borderColor: "var(--color-purple-bluest)" }}>
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
                {[
                  "Tudo do Essencial",
                  "Tutoria humana por escola",
                  "Planos de aula práticos",
                  "Relatórios PNED para TCM/MEC",
                  "Onboarding presencial da equipe",
                  "Suporte WhatsApp + e-mail",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0" style={{ color: "var(--color-purple-bluest)" }} />
                    <span className="text-sm text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="default" className="w-full text-white hover:opacity-90 border-0 rounded-full h-12 text-base font-semibold bg-gradient-to-r from-[var(--color-purple-bluest)] to-[#8B5CF6]">
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
                {[
                  "Tudo da Completa",
                  "Customização da trilha por rede",
                  "Integração com sistemas da SEDUC",
                  "Gestor de conta dedicado",
                  "Relatórios sob demanda",
                  "SLA garantido",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0" style={{ color: "var(--color-purple-bluest)" }} />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full border-2 rounded-full h-12 text-base font-semibold bg-white text-[var(--color-purple-bluest)] hover:bg-[var(--color-purple-bluest)] hover:text-white transition-colors" style={{ borderColor: "var(--color-purple-bluest)" }}>
                Apresentação para o consórcio
              </Button>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white" className="py-24" id="faq">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            badge="DÚVIDAS"
            title="Perguntas Frequentes"
            description="Tire suas dúvidas sobre o Ateste.me e como podemos ajudar."
          />
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                question: "O que é a Atesteme?",
                answer: "Uma plataforma gamificada para você avaliar e desenvolver suas competências digitais."
              },
              {
                question: "Como a Atesteme funciona?",
                answer: "Quando você realiza o cadastro, recebe um teste inicial com algumas questões para que entenda como funciona o nosso sistema. Com a contratação de algum dos nossos planos, você poderá escolher seu percurso de aprendizagem por meio das 16 (dezesseis) competências disponíveis. Ao alcançar o nível desejado, você poderá realizar um Teste de Certificação, com 48 questões."
              },
              {
                question: "Qualquer pessoa pode utilizá-lo?",
                answer: "Sim. Você precisa realizar um cadastro simples para ter acesso aos conteúdos e, ao fim da sua jornada, receber um certificado."
              },
              {
                question: "Como recebo um certificado?",
                answer: "Quando alcançar o nível desejado em nosso ambiente de aprendizagem, você poderá se submeter a um Teste de Certificação, com 48 questões. Caso consiga 70% das respostas certas, você conquistará um certificado no mesmo nível que o adquirido no ambiente de aprendizagem."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border rounded-xl px-6 data-[state=open]:border-[var(--color-purple-bluest)] data-[state=open]:shadow-md transition-all">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 py-6 hover:no-underline hover:text-[var(--color-purple-bluest)] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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

            {/* Form comentado temporariamente
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
                variant="default"
                size="lg"
                className="w-full text-lg"
                type="submit"
              >
                Solicitar Apresentação
              </Button>
            </form>
            */}

            <div className="flex flex-col items-center justify-center space-y-6 mt-8">
              <Button
                variant="default"
                size="lg"
                className="w-full md:w-auto px-8 py-8 text-xl rounded-full bg-[#25D366] hover:bg-[#1ebd5a] text-white shadow-lg shadow-[#25D366]/30 border-0 flex items-center gap-3 transition-transform hover:scale-105"
                asChild
              >
                <a href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20planos%20do%20Ateste.me!" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-6 h-6" />
                  Falar no WhatsApp
                </a>
              </Button>
              {/* <p className="text-white/50 text-sm text-center">
                *Substitua o número no link do código (href) pelo número oficial da Ateste.me.
              </p> */}
            </div>
          </div>
        </motion.div>
      </Section>

      <Footer />
    </div>
  );
}