import { useState } from 'react';
import HomePage from './pages/HomePage';
import GestoresPage from './pages/GestoresPage';
import ProfessoresPage from './pages/ProfessoresPage';
import GuiaPNEDPage from './pages/GuiaPNEDPage';

export default function App() {
  // Simple client-side routing without react-router for Figma Make
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.slice(1);
      return hash || '/';
    }
    return '/';
  });

  const renderPage = () => {
    switch (currentPage) {
      case '/gestores':
        return <GestoresPage />;
      case '/professores':
        return <ProfessoresPage />;
      case '/guia-pned':
        return <GuiaPNEDPage />;
      default:
        return <HomePage />;
    }
  };

  // Update page when hash changes
  if (typeof window !== 'undefined') {
    window.onhashchange = () => {
      setCurrentPage(window.location.hash.slice(1) || '/');
    };
  }

  return renderPage();
}
