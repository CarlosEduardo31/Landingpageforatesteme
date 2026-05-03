import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import ProfessoresHeroSection from './professores/components/ProfessoresHeroSection';
import ProfessoresWhyNotBehindSection from './professores/components/ProfessoresWhyNotBehindSection';
import ProfessoresPrivateDiagnosisSection from './professores/components/ProfessoresPrivateDiagnosisSection';
import ProfessoresStepsSection from './professores/components/ProfessoresStepsSection';
import ProfessoresTestimonialsSection from './professores/components/ProfessoresTestimonialsSection';
import ProfessoresCtaSection from './professores/components/ProfessoresCtaSection';

export default function ProfessoresPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="professores" />
      <ProfessoresHeroSection />
      <ProfessoresWhyNotBehindSection />
      <ProfessoresPrivateDiagnosisSection />
      <ProfessoresStepsSection />
      <ProfessoresTestimonialsSection />
      <ProfessoresCtaSection />
      <Footer />
    </div>
  );
}
