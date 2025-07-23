import React, { useState } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Gamepad2 className="w-8 h-8 text-white hover-spin-scale cursor-pointer" />
            <span className="text-xl font-bold text-white">AlphaDen</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-white transition-all duration-300 hover-float"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-all duration-300 hover-float"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('games')}
              className="text-gray-300 hover:text-white transition-all duration-300 hover-float"
            >
              Games
            </button>
            <button
              onClick={() => scrollToSection('publishers')}
              className="text-gray-300 hover:text-white transition-all duration-300 hover-float"
            >
              Publishers
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-all duration-300 hover-float"
            >
              Contact
            </button>
          </nav>

          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-white hover-wiggle"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 rounded-lg mt-2 py-2 border border-gray-700">
            <nav className="flex flex-col space-y-2 px-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-white transition-all duration-300 py-2 text-left hover-tilt"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-white transition-all duration-300 py-2 text-left hover-tilt"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('games')}
                className="text-gray-300 hover:text-white transition-all duration-300 py-2 text-left hover-tilt"
              >
                Games
              </button>
              <button
                onClick={() => scrollToSection('publishers')}
                className="text-gray-300 hover:text-white transition-all duration-300 py-2 text-left hover-tilt"
              >
                Publishers
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white transition-all duration-300 py-2 text-left hover-tilt"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;