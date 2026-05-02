import { motion } from 'motion/react';
import { BookOpen, Scale, Target, Users, CheckCircle2, FileText, Calendar, ArrowRight } from 'lucide-react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

export default function GuiaPNEDPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-white relative overflow-hidden" style={{ background: 'var(--gradient-main)' }}>
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'rgba(178, 156, 251, 0.2)' }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-8"
            >
              <Scale className="w-4 h-4" />
              <span className="text-sm font-semibold">
                Lei 14.533/2023
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Guia Completo da PNED
            </h1>

            <p className="text-xl opacity-90 mb-10 leading-relaxed">
              Entenda a Política Nacional de Educação Digital e como implementá-la
              na sua rede municipal de ensino
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is PNED */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-[var(--color-obsidian)] mb-8">
              O que é a PNED?
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                A <strong>Política Nacional de Educação Digital (PNED)</strong> foi instituída pela
                Lei 14.533, de 11 de janeiro de 2023, com o objetivo de promover a inclusão digital
                e o desenvolvimento de competências digitais na educação brasileira.
              </p>

              <div className="rounded-2xl p-8 border-l-4 my-8" style={{ background: 'linear-gradient(to right, rgba(178, 156, 251, 0.1), rgba(110, 41, 218, 0.05))', borderLeftColor: 'var(--color-purple-bluest)' }}>
                <h3 className="text-2xl font-bold text-[var(--color-obsidian)] mb-4">Objetivos Principais</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: Target, title: 'Inclusão Digital', desc: 'Garantir acesso e uso de tecnologias digitais na educação' },
                    { icon: Users, title: 'Competências Digitais', desc: 'Desenvolver habilidades tecnológicas em estudantes e professores' },
                    { icon: BookOpen, title: 'Recursos Educacionais', desc: 'Promover uso de recursos digitais no processo de ensino-aprendizagem' },
                    { icon: Scale, title: 'Equidade', desc: 'Reduzir desigualdades no acesso à educação digital' }
                  ].map((objetivo, idx) => {
                    const Icon = objetivo.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <Icon className="w-6 h-6 text-[var(--color-purple-bluest)] flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-[var(--color-obsidian)]">{objetivo.title}</h4>
                          <p className="text-gray-600 text-sm">{objetivo.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-[var(--color-obsidian)] mb-12 text-center">
              5 Pilares da PNED
            </h2>

            <div className="grid md:grid-cols-5 gap-6">
              {[
                { number: '1', title: 'Infraestrutura', desc: 'Conectividade e equipamentos' },
                { number: '2', title: 'Competências', desc: 'Formação de estudantes e professores' },
                { number: '3', title: 'Recursos', desc: 'Conteúdos educacionais digitais' },
                { number: '4', title: 'Pesquisa', desc: 'Inovação e evidências' },
                { number: '5', title: 'Governança', desc: 'Gestão e monitoramento' }
              ].map((pilar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[var(--color-purple-blue-gray)] text-center"
                >
                  <div className="w-16 h-16 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" style={{ background: 'var(--gradient-gestores)' }}>
                    {pilar.number}
                  </div>
                  <h3 className="font-bold text-[var(--color-obsidian)] mb-2">{pilar.title}</h3>
                  <p className="text-sm text-gray-600">{pilar.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-[var(--color-obsidian)] mb-8 text-center">
              Como Implementar na Sua Rede
            </h2>

            <div className="space-y-6">
              {[
                {
                  fase: 'Fase 1',
                  periodo: 'Meses 1-2',
                  titulo: 'Diagnóstico e Planejamento',
                  itens: [
                    'Avaliação da situação atual da rede',
                    'Identificação de necessidades de infraestrutura',
                    'Mapeamento de competências dos professores'
                  ]
                },
                {
                  fase: 'Fase 2',
                  periodo: 'Meses 3-4',
                  titulo: 'Capacitação e Estruturação',
                  itens: [
                    'Formação inicial dos professores',
                    'Implementação de plataformas e recursos',
                    'Criação de políticas internas'
                  ]
                },
                {
                  fase: 'Fase 3',
                  periodo: 'Meses 5-6',
                  titulo: 'Execução e Monitoramento',
                  itens: [
                    'Aplicação das competências digitais em sala',
                    'Acompanhamento de indicadores',
                    'Ajustes e melhorias contínuas'
                  ]
                },
                {
                  fase: 'Fase 4',
                  periodo: 'Meses 7-12',
                  titulo: 'Certificação e Consolidação',
                  itens: [
                    'Certificação de professores e alunos',
                    'Relatórios de prestação de contas',
                    'Expansão para toda a rede'
                  ]
                }
              ].map((fase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-2xl p-8 border-l-4"
                  style={{ background: 'linear-gradient(to right, rgba(178, 156, 251, 0.1), rgba(110, 41, 218, 0.05))', borderLeftColor: 'var(--color-purple-bluest)' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[var(--color-purple-bluest)] text-white rounded-full flex items-center justify-center font-bold">
                        {idx + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-bold text-[var(--color-purple-bluest-dark)]">{fase.fase}</span>
                        <span className="text-sm text-gray-600">·</span>
                        <Calendar className="w-4 h-4 text-gray-600" />
                        <span className="text-sm text-gray-600">{fase.periodo}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[var(--color-obsidian)] mb-3">{fase.titulo}</h3>
                      <ul className="space-y-2">
                        {fase.itens.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legal Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-[var(--color-obsidian)] mb-8 text-center">
              Obrigações Legais dos Municípios
            </h2>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-orange-200">
              <div className="space-y-6">
                {[
                  'Garantir formação continuada em competências digitais para professores',
                  'Implementar recursos educacionais digitais alinhados à BNCC',
                  'Promover inclusão digital de estudantes e professores',
                  'Estabelecer indicadores de monitoramento e avaliação',
                  'Prestar contas dos resultados alcançados'
                ].map((obrigacao, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <FileText className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed">{obrigacao}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-white" style={{ background: 'var(--gradient-gestores)' }}>
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Pronto para Implementar a PNED?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              O Ateste.me facilita a conformidade com a lei e garante resultados documentados
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contato"
              className="inline-flex items-center gap-2 bg-white text-[var(--color-purple-bluest)] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg"
            >
              Falar com Especialista
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
