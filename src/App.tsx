import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileContactBar } from '@/components/MobileContactBar';
import { EnquireModal } from '@/components/EnquireModal';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { Hero } from '@/components/Hero';
import { IntroSection } from '@/components/sections/IntroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { PregnancySection } from '@/components/sections/PregnancySection';
import { PatientInfoSection } from '@/components/sections/PatientInfoSection';
import { LocationSection } from '@/components/sections/LocationSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { ContactSection } from '@/components/sections/ContactSection';
import type { Service } from '@/data/services';

function App() {
  const [enquireService, setEnquireService] = useState<Service | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <IntroSection />
        <ServicesSection onEnquire={setEnquireService} />
        <WhyChooseSection />
        <AboutSection />
        <PregnancySection />
      
        <PatientInfoSection />
        <LocationSection />
    
        <ContactSection />
      </main>
      <Footer />
      <MobileContactBar />
      <EnquireModal service={enquireService} onClose={() => setEnquireService(null)} />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
