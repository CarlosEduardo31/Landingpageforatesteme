import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import GuiaHeroSection from './guia-pned/components/GuiaHeroSection';
import GuiaWhatIsSection from './guia-pned/components/GuiaWhatIsSection';
import GuiaKeyPointsSection from './guia-pned/components/GuiaKeyPointsSection';
import GuiaTimelineSection from './guia-pned/components/GuiaTimelineSection';
import GuiaLegalRequirementsSection from './guia-pned/components/GuiaLegalRequirementsSection';
import GuiaCtaSection from './guia-pned/components/GuiaCtaSection';

export default function GuiaPNEDPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <GuiaHeroSection />
      <GuiaWhatIsSection />
      <GuiaKeyPointsSection />
      <GuiaTimelineSection />
      <GuiaLegalRequirementsSection />
      <GuiaCtaSection />
      <Footer />
    </div>
  );
}
