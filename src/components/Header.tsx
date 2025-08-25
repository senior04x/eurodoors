import React from 'react';
import { useState } from 'react';
import logo from '@/assets/logo1.png';

interface HeaderProps {
  onSectionClick: (section: string) => void;
}

export default function Header({ onSectionClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    onSectionClick(section);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-2xl bg-black/50 border-b border-white/20 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div 
              className="cursor-pointer"
              onClick={() => handleNavClick('hero')}
            >
              <img src={logo} alt="Eurodoor" className="h-8 w-auto" />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => handleNavClick('catalog')}
                className="text-white hover:text-white/90 transition-colors duration-200 backdrop-blur-xl bg-black/40 hover:bg-black/50 px-4 py-2 rounded-lg border border-white/20"
              >
                Каталог
              </button>
              <button 
                onClick={() => handleNavClick('about')}
                className="text-white hover:text-white/90 transition-colors duration-200 backdrop-blur-xl bg-black/40 hover:bg-black/50 px-4 py-2 rounded-lg border border-white/20"
              >
                О нас
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className="text-white hover:text-white/90 transition-colors duration-200 backdrop-blur-xl bg-black/40 hover:bg-black/50 px-4 py-2 rounded-lg border border-white/20"
              >
                Контакты
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white hover:text-white/90 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 backdrop-blur-2xl bg-black/50 rounded-lg p-4 border border-white/20">
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={() => handleNavClick('catalog')}
                  className="text-white hover:text-white/90 transition-colors duration-200 text-left p-2 rounded-lg hover:bg-black/40"
                >
                  Каталог
                </button>
                <button 
                  onClick={() => handleNavClick('about')}
                  className="text-white hover:text-white/90 transition-colors duration-200 text-left p-2 rounded-lg hover:bg-black/40"
                >
                  О нас
                </button>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="text-white hover:text-white/90 transition-colors duration-200 text-left p-2 rounded-lg hover:bg-black/40"
                >
                  Контакты
                </button>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}