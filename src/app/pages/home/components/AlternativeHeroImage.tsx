import { motion } from "motion/react";

/**
 * Este componente contém a imagem alternativa da Hero Section
 * que foi comentada no arquivo principal. Foi mantido aqui para
 * facilitar o uso futuro.
 */
export default function AlternativeHeroImage() {
  return (
    <motion.div
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
    </motion.div>
  );
}
