import LPNavbar from './landing/LPNavbar';
import LPHero from './landing/LPHero';
import LPProduct from './landing/LPProduct';
import LPHowItWorks from './landing/LPHowItWorks';
import LPProofSocial from './landing/LPProofSocial';
import LPGuarantee from './landing/LPGuarantee';
import LPFooter from './landing/LPFooter';

export default function MainLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <LPNavbar />
      <LPHero />
      <LPProduct />
      <LPHowItWorks />
      <LPProofSocial />
      <LPGuarantee />
      <LPFooter />
    </div>
  );
}
