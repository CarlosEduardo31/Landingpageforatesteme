import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Section from "../../../components/ui/Section";

// Scroll reveal hook
export function useScrollReveal() {
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
export function StatItem({
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

/**
 * Este componente contém a seção de prova social original
 * que foi comentada no arquivo principal.
 * Foi mantido aqui para facilitar o uso futuro.
 */
export default function AlternativeSocialProof() {
  return (
    <Section background="white" className="py-16">
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
    </Section>
  );
}
