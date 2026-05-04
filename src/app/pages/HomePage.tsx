import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import HomeHeroSection from "./home/components/HomeHeroSection";
import HomeStorySection from "./home/components/HomeStorySection";
import HomeDifferentialsSection from "./home/components/HomeDifferentialsSection";
import HomeStepsSection from "./home/components/HomeStepsSection";
import HomePricingSection from "./home/components/HomePricingSection";
import HomeGuaranteeSection from "./home/components/HomeGuaranteeSection";
import HomeFaqSection from "./home/components/HomeFaqSection";
import HomeContactSection from "./home/components/HomeContactSection";
import { SolutionsCarousel } from "../components/ui/SolutionsCarousel";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HomeHeroSection />
      <HomeStorySection />
      <HomeDifferentialsSection />
      <HomeStepsSection />
      <HomeFaqSection />
      <SolutionsCarousel />
      <HomeContactSection />
      <Footer />
    </div>
  );
}
