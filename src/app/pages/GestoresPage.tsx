import { motion } from 'motion/react';
import { ArrowRight, Scale, Clock, FileText, TrendingUp, CheckCircle2, Shield } from 'lucide-react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

export default function GestoresPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="gestores" />

      {/* Hero Section - Cores Frias */}
      <section className="pt-32 pb-20 text-white relative overflow-hidden" style={{ background: 'var(--gradient-gestores)' }}>
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'rgba(178, 156, 251, 0.2)' }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
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
                Conformidade Legal Garantida
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Sua prefeitura assinou a PNED.<br />
              <span style={{ color: 'var(--color-purple-blue-gray)' }}>O Ateste.me é a entrega documentada.</span>
            </h1>

            <p className="text-xl opacity-90 mb-10 leading-relaxed">
              Implemente a Lei 14.533/2023 com resultados documentados em 90 dias.
              Sem necessidade de infraestrutura complexa ou investimento em equipamentos.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white px-8 py-4 rounded-lg font-bold transition inline-flex items-center gap-2 shadow-lg"
              style={{ background: 'var(--color-gestores-primary)' }}
            >
              Agendar Reunião Comercial
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Problem Section - Armadilha da Infraestrutura Ideal */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 text-center" style={{ color: 'var(--color-obsidian)' }}>
              Por que municípios ficam esperando o "ambiente perfeito"?
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              A Armadilha da Infraestrutura Ideal faz gestores perderem prazos esperando laboratórios,
              equipamentos e conectividade que nunca chegam.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4" style={{ borderLeftColor: 'var(--color-gestores-primary)' }}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-obsidian)] mb-4 flex items-center gap-2">
                    <span className="text-red-500">✗</span> O Cenário Tradicional
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Aguardar licitação de equipamentos (12-18 meses)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Construir laboratórios de informática</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Depender de conectividade estável em todas as escolas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Contratar equipe técnica especializada</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[var(--color-obsidian)] mb-4 flex items-center gap-2">
                    <span className="text-green-500">✓</span> Com o Ateste.me
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Funciona em qualquer dispositivo com internet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Professores e alunos usam seus próprios celulares</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Implementação em 48 horas após contratação</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Suporte técnico completo incluído</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works - Rota PNED */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--color-obsidian)] mb-4">
              Rota PNED: 5 Passos para Conformidade Total
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Um processo estruturado e documentado, do diagnóstico à certificação
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-4">
            {[
              { number: '1', title: 'Diagnóstico', desc: 'Avaliação inicial de todos os participantes' },
              { number: '2', title: 'Trilha', desc: 'Conteúdo adaptativo personalizado' },
              { number: '3', title: 'Tutor', desc: 'Acompanhamento inteligente' },
              { number: '4', title: 'Plano de Aula', desc: 'Materiais prontos para professores' },
              { number: '5', title: 'Certificação', desc: 'Certificado nacional válido' }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative"
              >
                {idx < 4 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] z-0" style={{ background: 'var(--color-purple-blue-gray)' }} />
                )}
                <div className="relative z-10 rounded-2xl p-6 border-2 text-center" style={{ background: 'rgba(178, 156, 251, 0.1)', borderColor: 'var(--color-purple-blue-gray)' }}>
                  <div className="w-16 h-16 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3" style={{ background: 'var(--color-gestores-primary)' }}>
                    {step.number}
                  </div>
                  <h3 className="font-bold text-[var(--color-obsidian)] mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Social */}
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
              Prefeituras que Confiam no Ateste.me
            </h2>
            <p className="text-xl text-gray-600">
              Resultados documentados de redes municipais reais
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="text-4xl font-bold mb-2" style={{ color: 'var(--color-gestores-primary)' }}>98%</div>
                <div className="text-sm text-gray-600 mb-4">Taxa de adesão</div>
                <div className="border-t pt-4 border-gray-200">
                  <div className="font-bold text-[var(--color-obsidian)]">Município Exemplo</div>
                  <div className="text-sm text-gray-600">32 escolas · 1.200 professores</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 text-white" style={{ background: 'var(--color-obsidian)' }}>
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Shield className="w-16 h-16 mx-auto mb-6" style={{ color: 'var(--color-purple-blue-gray)' }} />
            <h2 className="text-4xl font-bold mb-6">
              Garantia de Resultado Documentado
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Ou continuamos trabalhando até alcançar, sem custo adicional
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white px-8 py-4 rounded-lg font-bold transition inline-flex items-center gap-2 shadow-lg"
              style={{ background: 'var(--color-gestores-primary)' }}
            >
              Agendar Reunião
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
