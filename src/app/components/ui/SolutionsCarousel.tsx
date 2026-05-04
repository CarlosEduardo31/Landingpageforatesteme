import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Gamepad2,
  BarChart3,
  Users,
  Video,
  Sparkles,
} from "lucide-react";

const slides = [
  {
    title: "Transforme sua rede com soluções completas em Educação Digital",
    description: "",
    icon: null,
    isCover: true,
    image: "/carrosel/slide1.png",
  },
  {
    title: "Caderno de aulas estruturado",
    description:
      "Materiais organizados que orientam o professor no planejamento e na execução de aulas alinhadas à BNCC Computação.",
    icon: (
      <BookOpen
        className="w-12 h-12"
        style={{ color: "var(--color-atesteme)" }}
      />
    ),
    image: "/carrosel/slide2.avif",
  },
  {
    title: "Atividades desplugadas prontas para aplicação",
    description:
      "Propostas práticas que desenvolvem pensamento computacional, mundo digital e cultura digital, mesmo sem o uso de dispositivos.",
    icon: (
      <Gamepad2
        className="w-12 h-12"
        style={{ color: "var(--color-atesteme)" }}
      />
    ),
    image: "/carrosel/slide3.png",
  },
  {
    title: "Relatórios em tempo real",
    description:
      "Dados claros e acessíveis para monitorar o progresso de professores e alunos e apoiar decisões pedagógicas.",
    icon: (
      <BarChart3
        className="w-12 h-12"
        style={{ color: "var(--color-atesteme)" }}
      />
    ),
    image: "/carrosel/slide4.avif",
  },
  {
    title: "Mentorias especializadas",
    description:
      "Acompanhamento contínuo com especialistas para apoiar professores e gestores na implementação da educação digital.",
    icon: (
      <Users className="w-12 h-12" style={{ color: "var(--color-atesteme)" }} />
    ),
    image: "/carrosel/slide5.avif",
  },
  {
    title: "Lives formativas com especialistas",
    description:
      "Encontros ao vivo para aprofundamento, troca de experiências e atualização em educação digital e metodologias inovadoras.",
    icon: (
      <Video className="w-12 h-12" style={{ color: "var(--color-atesteme)" }} />
    ),
    image: "/carrosel/slide6.avif",
  },
  {
    title: "E muito mais",
    description:
      "Uma solução completa que integra formação, tecnologia e acompanhamento contínuo para transformar a prática pedagógica.",
    icon: (
      <Sparkles
        className="w-12 h-12"
        style={{ color: "var(--color-atesteme)" }}
      />
    ),
    image: "/carrosel/slide7.avif",
  },
];

export function SolutionsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section className="py-24 bg-gray-50" id="solucoes-completas">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-block bg-[rgba(178,156,251,0.2)] text-[var(--color-purple-bluest)] px-4 py-2 rounded-full mb-4 text-sm font-semibold">
            O QUE ENTREGAMOS
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: "var(--color-obsidian)" }}
          >
            Soluções Completas
          </h2>
        </div>

        <div
          className="relative bg-white rounded-3xl overflow-hidden h-[680px] md:h-[500px] flex items-center justify-center border border-[var(--color-purple-bluest)] shadow-[0_20px_50px_-12px_rgba(110,41,218,0.25)] group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex p-6 pb-16 md:p-12 md:pb-16 w-full h-full"
            >
              {slides[currentIndex].isCover ? (
                <div className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                  <div className="flex-1 flex flex-col justify-center">
                    <h3
                      className="text-3xl md:text-5xl font-bold leading-tight mb-4"
                      style={{ color: "var(--color-obsidian)" }}
                    >
                      {slides[currentIndex].title}
                    </h3>
                  </div>
                  <div className="flex-1 w-full h-56 md:h-full relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                    <img
                      src={slides[currentIndex].image}
                      alt={slides[currentIndex].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 text-center md:text-left">
                  <div className="flex-1 flex flex-col items-center md:items-start justify-center">
                    <div className="bg-purple-50 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-sm border border-purple-100">
                      {slides[currentIndex].icon}
                    </div>
                    <h3
                      className="text-2xl md:text-3xl font-bold mb-3 md:mb-4"
                      style={{ color: "var(--color-obsidian)" }}
                    >
                      {slides[currentIndex].title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg">
                      {slides[currentIndex].description}
                    </p>
                  </div>
                  <div className="flex-1 w-full h-48 md:h-full relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                    <img
                      src={slides[currentIndex].image}
                      alt={slides[currentIndex].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-md text-[var(--color-purple-bluest)] transition-all z-10 opacity-0 md:group-hover:opacity-100"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-md text-[var(--color-purple-bluest)] transition-all z-10 opacity-0 md:group-hover:opacity-100"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === idx
                    ? "bg-[var(--color-purple-bluest)] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
