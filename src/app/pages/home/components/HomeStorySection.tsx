import { motion } from "motion/react";
import Section, { SectionHeader } from "../../../components/ui/Section";

export default function HomeStorySection() {
  return (
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
  );
}
