import { useState } from 'react';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { Services } from '@/app/components/Services';
import { Pricing } from '@/app/components/Pricing';
import { About } from '@/app/components/About';
import { Contact } from '@/app/components/Contact';
import { Impressum } from '@/app/components/Impressum';
import { Privacy } from '@/app/components/Privacy';
import { Footer } from '@/app/components/Footer';

export default function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
    const element = document.getElementById(section);
    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigate} />
      
      <main>
        <Hero onNavigateToContact={() => handleNavigate('contact')} />
        <Services />
        <Pricing onNavigateToContact={() => handleNavigate('contact')} />
        <About />
        <Contact />
        <Impressum />
        <Privacy />
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
