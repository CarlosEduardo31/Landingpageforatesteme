import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../ui/button';

interface NavbarProps {
  variant?: 'default' | 'gestores' | 'professores';
}

export default function Navbar({ variant = 'default' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 border-b shadow-sm'
          : 'bg-transparent'
      }`}
      style={isScrolled ? { borderColor: 'var(--color-neutral-200)' } : {}}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <img
              src={isScrolled ? "/logo/LogoColorida.png" : "/logo/LogoBranca.png"}
              alt="Ateste.me"
              className="h-8 md:h-10 object-contain transition-all duration-300"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="#inicio"
              className="font-medium transition hover:opacity-70"
              style={{ color: isScrolled ? 'var(--color-text-primary)' : 'white' }}
            >
              Início
            </a>
            <a
              href="#como-funciona"
              className="font-medium transition hover:opacity-70"
              style={{ color: isScrolled ? 'var(--color-text-primary)' : 'white' }}
            >
              Como Funciona
            </a>
            <a
              href="#planos"
              className="font-medium transition hover:opacity-70"
              style={{ color: isScrolled ? 'var(--color-text-primary)' : 'white' }}
            >
              Planos
            </a>
            {/* Páginas futuras
            <a href="#/gestores" className="font-medium transition hover:opacity-70" style={{ color: isScrolled ? 'var(--color-text-primary)' : 'white' }}>
              Para Gestores
            </a>
            <a href="#/professores" className="font-medium transition hover:opacity-70" style={{ color: isScrolled ? 'var(--color-text-primary)' : 'white' }}>
              Para Professores
            </a>
            <a href="#/guia-pned" className="font-medium transition hover:opacity-70" style={{ color: isScrolled ? 'var(--color-text-primary)' : 'white' }}>
              Guia PNED
            </a>
            */}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="default" asChild>
              <a href="#contato">Solicitar demonstração</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >
            {isOpen ? (
              <X className="w-6 h-6" style={{ color: isScrolled ? 'var(--color-text-primary)' : 'white' }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: isScrolled ? 'var(--color-text-primary)' : 'white' }} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                <a
                  href="#inicio"
                  className="block font-medium transition hover:opacity-70"
                  style={{ color: isScrolled ? 'var(--color-text-primary)' : 'white' }}
                  onClick={() => setIsOpen(false)}
                >
                  Início
                </a>
                <a
                  href="#como-funciona"
                  className="block font-medium transition hover:opacity-70"
                  style={{ color: isScrolled ? 'var(--color-text-primary)' : 'white' }}
                  onClick={() => setIsOpen(false)}
                >
                  Como Funciona
                </a>
                <a
                  href="#planos"
                  className="block font-medium transition hover:opacity-70"
                  style={{ color: isScrolled ? 'var(--color-text-primary)' : 'white' }}
                  onClick={() => setIsOpen(false)}
                >
                  Planos
                </a>
                {/* Páginas futuras
                <a href="#/gestores" className="block font-medium transition hover:opacity-70" style={{ color: isScrolled ? 'var(--color-text-primary)' : 'white' }} onClick={() => setIsOpen(false)}>
                  Para Gestores
                </a>
                <a href="#/professores" className="block font-medium transition hover:opacity-70" style={{ color: isScrolled ? 'var(--color-text-primary)' : 'white' }} onClick={() => setIsOpen(false)}>
                  Para Professores
                </a>
                <a href="#/guia-pned" className="block font-medium transition hover:opacity-70" style={{ color: isScrolled ? 'var(--color-text-primary)' : 'white' }} onClick={() => setIsOpen(false)}>
                  Guia PNED
                </a>
                */}
                <Button variant="default" className="w-full" asChild>
                  <a href="#contato" onClick={() => setIsOpen(false)}>Solicitar demonstração</a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
