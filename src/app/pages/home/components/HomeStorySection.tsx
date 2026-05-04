import { motion } from "motion/react";
import Section, { SectionHeader } from "../../../components/ui/Section";

export default function HomeStorySection() {
  return (
    <Section background="white" className="py-20">
      <SectionHeader
        badge="O problema silencioso"
        title="Há professores na sua rede que não usam tecnologias digitais, mas precisam passar a usá-las já."
      />
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 text-base md:text-lg leading-relaxed"
          style={{ color: "rgba(11, 8, 21, 0.7)" }}
        >
          <p>
            Eles podem parecer satisfeitos ensinando sem tecnologias digitais. Mas agora usar tecnologias no ensino é lei, não é mais uma opção. Os professores precisam desenvolver suas competências digitais para planejar as aulas e aplicá-las com o apoio das tecnologias.
          </p>

          <p>
            A BNCC garante a todos os alunos o direito de compreender, usar, criar e avaliar os saberes e conhecimentos com o suporte da tecnologia. Entender e utilizar pensamento computacional, dominar dispositivos do mundo digital e interagir na cultura digital com ética e responsabilidade são habilidades essenciais que passam a fazer parte do currículo escolar da educação básica.
          </p>

          <p>
            Sua rede recebe incentivos e recursos do FNDE para acelerar a formação de professores e equipar suas escolas para que a Lei 14.533/2023 seja cumprida. Em 2026 haverá fiscalização e toda rede que não adotar a educação digital e midiática em seu currículo não receberá recursos do Valor Aluno Ano Resultado – VAAR.
          </p>

          <p
            className="font-semibold"
            style={{ color: "var(--color-obsidian)" }}
          >
            O Atesteme resolve os dois ao mesmo tempo. Acolhe
            a professora do nível em que ela está. Documenta
            tudo para a prefeitura cumprir a lei.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
