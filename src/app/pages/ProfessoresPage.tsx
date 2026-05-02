import { motion } from 'motion/react';
import { ArrowRight, GraduationCap, Heart, Sparkles, Lock, Trophy, Star } from 'lucide-react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

export default function ProfessoresPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="professores" />

      {/* Hero Section - Purple + Coral */}
      <section className="pt-32 pb-20 text-white relative overflow-hidden" style={{ background: 'var(--gradient-professores)' }}>
        <motion.div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: 'rgba(232, 103, 79, 0.2)' }}
          animate={{
            scale: [1, 1.3, 1],
            x: [-50, 50, -50],
            y: [-50, 50, -50],
          }}
          transition={{
            duration: 20,
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
              <Heart className="w-4 h-4" />
              <span className="text-sm font-semibold">
                Feito para você, professora
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Você não ficou para trás.<br />
              <span style={{ color: 'var(--color-coral)' }}>O sistema de formação falhou.</span>
            </h1>

            <p className="text-xl opacity-90 mb-10 leading-relaxed">
              Descubra suas competências digitais sem medo de julgamento.
              Diagnóstico privado, trilhas no seu ritmo e certificado reconhecido nacionalmente.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition inline-flex items-center gap-2 shadow-lg"
            >
              Fazer Diagnóstico Grátis
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <p className="text-sm mt-4 opacity-75">
              <Lock className="w-4 h-4 inline mr-1" />
              100% privado · Só você vê o resultado
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why You're Not Behind */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-[var(--color-obsidian)] mb-6 text-center">
              Por que você se sente "perdida" no digital?
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Não é culpa sua. O sistema de formação continuada não preparou você para isso.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl p-8 border-l-4"
                style={{ background: 'rgba(232, 103, 79, 0.1)', borderLeftColor: 'var(--color-coral)' }}
              >
                <h3 className="text-xl font-bold text-[var(--color-obsidian)] mb-4">
                  O que te ensinaram
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Formação focada em pedagogia tradicional</li>
                  <li>• Pouco ou nenhum conteúdo sobre tecnologia</li>
                  <li>• Expectativa de "aprender sozinha"</li>
                  <li>• Medo de parecer incompetente ao pedir ajuda</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-green-50 rounded-2xl p-8 border-l-4 border-green-500"
              >
                <h3 className="text-xl font-bold text-[var(--color-obsidian)] mb-4">
                  O que você vai aprender
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Competências digitais do básico ao avançado</li>
                  <li>• No seu ritmo, sem pressão ou julgamento</li>
                  <li>• Com validação pedagógica da BNCC</li>
                  <li>• Certificado que valoriza seu currículo</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Private Diagnosis */}
      <section className="py-20" style={{ background: 'linear-gradient(to bottom right, rgba(178, 156, 251, 0.1), rgba(171, 3, 244, 0.05))' }}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Sparkles className="w-16 h-16 mx-auto mb-6" style={{ color: 'var(--color-atesteme)' }} />
            <h2 className="text-4xl font-bold text-[var(--color-obsidian)] mb-6">
              Diagnóstico Privado: Só Você Vê
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Sem exposição, sem comparação com colegas. Descubra onde você está e para onde ir.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Lock, title: '100% Privado', desc: 'Ninguém vê seu resultado além de você' },
                { icon: GraduationCap, title: 'Sem Pré-requisitos', desc: 'Funciona para qualquer nível inicial' },
                { icon: Sparkles, title: 'Rápido e Simples', desc: '15 minutos no seu celular' }
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-2xl p-8 shadow-lg"
                  >
                    <Icon className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--color-professores-warm)' }} />
                    <h3 className="font-bold text-[var(--color-obsidian)] mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5 Steps */}
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
              Sua Jornada em 5 Passos Simples
            </h2>
            <p className="text-xl text-gray-600">
              Do diagnóstico ao certificado, tudo pensado para você
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { number: '1', title: 'Faça o Diagnóstico', desc: 'Responda perguntas simples sobre como você usa tecnologia no dia a dia' },
              { number: '2', title: 'Receba Sua Trilha', desc: 'Conteúdo personalizado baseado no seu nível atual' },
              { number: '3', title: 'Aprenda no Seu Ritmo', desc: 'Sem pressão, sem prazo. Você decide quando avançar' },
              { number: '4', title: 'Use em Sala', desc: 'Aplique o que aprendeu com seus alunos usando nossos planos de aula prontos' },
              { number: '5', title: 'Receba o Certificado', desc: 'Certificação nacional válida para progressão e currículo' }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 rounded-2xl p-6 border-l-4"
                style={{ background: 'linear-gradient(to right, rgba(171, 3, 244, 0.05), white)', borderLeftColor: 'var(--color-atesteme)' }}
              >
                <div className="w-12 h-12 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0" style={{ background: 'var(--color-atesteme)' }}>
                  {step.number}
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-obsidian)] mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
            {[
              {
                name: 'Ana Silva',
                role: 'Professora de Português',
                city: 'EMEF José de Alencar - SP',
                text: 'Descobri que tinha muito mais capacidade do que imaginava. O certificado me ajudou a ganhar mais confiança.'
              },
              {
                name: 'Maria Costa',
                role: 'Professora de Matemática',
                city: 'EMEF Santos Dumont - RJ',
                text: 'Finalmente consegui usar recursos digitais nas minhas aulas. Meus alunos amaram!'
              },
              {
                name: 'Joana Santos',
                role: 'Professora de História',
                city: 'EMEF Machado de Assis - MG',
                text: 'O melhor foi poder aprender no meu tempo, sem pressão. Recomendo para todas as colegas.'
              }
            ].map((testimonial, idx) => (
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

      {/* CTA Final */}
      <section className="py-20 text-white" style={{ background: 'var(--gradient-professores)' }}>
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Trophy className="w-16 h-16 mx-auto mb-6" style={{ color: 'var(--color-coral)' }} />
            <h2 className="text-4xl font-bold mb-6">
              Pronta para Começar?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Faça seu diagnóstico gratuito agora e descubra seu potencial
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition inline-flex items-center gap-2 shadow-lg"
            >
              Iniciar Diagnóstico Grátis
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <p className="text-sm mt-4 opacity-75">
              Sem cadastro · Sem cartão · Resultado na hora
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
