import { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CatalogSection from './components/CatalogSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

export default function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Approximate header height
      const targetPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleCatalogClick = () => {
    scrollToSection('catalog');
  };

  useEffect(() => {
    // Add smooth scrolling behavior to the document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header onSectionClick={scrollToSection} />
      <main>
        <HeroSection onCatalogClick={handleCatalogClick} />
        <CatalogSection />
        <AboutSection />
        <Footer />
      </main>
    </div>
  );
}