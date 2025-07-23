import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Games from './components/Games';
import Publishers from './components/Publishers';
import GameSuggestion from './components/GameSuggestion';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Games />
      <Publishers />
      <GameSuggestion />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;