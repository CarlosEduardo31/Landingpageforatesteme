import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import GestoresPage from "./pages/GestoresPage";
import ProfessoresPage from "./pages/ProfessoresPage";
import GuiaPNEDPage from "./pages/GuiaPNEDPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";

export default function App() {
  // Simple client-side routing without react-router for Figma Make
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.slice(1);
      return hash || "/";
    }
    return "/";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Rola para o topo apenas se for uma mudança de página real (rotas que começam com "/")
      // Isso evita que links de âncora (como "#parceiros") pulem para o topo
      if (currentPage.startsWith("/")) {
        window.scrollTo(0, 0);
      }
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "/gestores":
        return <GestoresPage />;
      case "/professores":
        return <ProfessoresPage />;
      case "/guia-pned":
        return <GuiaPNEDPage />;
      case "/politica-de-privacidade":
        return <PrivacyPolicyPage />;
      case "/termos-de-uso":
        return <TermsOfUsePage />;
      default:
        return <HomePage />;
    }
  };

  // Update page when hash changes
  if (typeof window !== "undefined") {
    window.onhashchange = () => {
      setCurrentPage(window.location.hash.slice(1) || "/");
    };
  }

  return renderPage();
}
