import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import GestoresHeroSection from './gestores/components/GestoresHeroSection';
import GestoresProblemSection from './gestores/components/GestoresProblemSection';
import GestoresHowItWorksSection from './gestores/components/GestoresHowItWorksSection';
import GestoresSocialProofSection from './gestores/components/GestoresSocialProofSection';
import GestoresGuaranteeSection from './gestores/components/GestoresGuaranteeSection';

export default function GestoresPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="gestores" />
      <GestoresHeroSection />
      <GestoresProblemSection />
      <GestoresHowItWorksSection />
      <GestoresSocialProofSection />
      <GestoresGuaranteeSection />
      <Footer />
    </div>
  );
}
