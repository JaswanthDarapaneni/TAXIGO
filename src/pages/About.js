import HeroSection from "../parts/hero";
import HeroAboutUsSection from "../parts/HeroAboutUs";
import { AboutHome } from '../data/heroData'
import { features } from '../data/aboutData'
import { CTASection } from "../parts/CTAsection";
import { FooterSection } from "../parts/footer";
function AboutPage() {

  return (
    <>
      <HeroSection data={AboutHome} />
      <HeroAboutUsSection features={features} />
      <CTASection />
      <FooterSection />
    </>

  );
}

export default AboutPage;
