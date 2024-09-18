

import { FeaturesSection } from '../parts/features';
import { CTASection } from '../parts/CTAsection';
import { TestimonialsSection } from '../parts/Testimonials';
import HeroSection from '../parts/hero';
import { FooterSection } from '../parts/footer';
import { HeroHome } from '../data/heroData';

function LandingPage() {

  return (
    <>
      
      <HeroSection data={HeroHome} />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <FooterSection />

    </>
  );
}

export default LandingPage;
