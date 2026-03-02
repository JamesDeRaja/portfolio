import React from 'react';
import { Download, Award, Calendar } from 'lucide-react';
import SmartLink from './SmartLink';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center relative overflow-hidden pb-16 md:pb-0">
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-white/5 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-8 h-8 bg-white/10 rotate-45 animate-float-medium"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-white/5 rounded-full animate-float-fast"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-white/15 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-white/5 rounded-full animate-float-slow"></div>
        <div className="absolute top-60 left-1/3 w-4 h-4 bg-white/20 rotate-45 animate-float-medium"></div>
        <div className="absolute bottom-40 left-20 w-10 h-10 bg-white/10 rounded-full animate-float-fast"></div>
        <div className="absolute top-1/2 right-1/4 w-14 h-14 bg-white/5 rotate-45 animate-spin-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto pt-20 md:pt-0">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              AlphaDen
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
            Building addictive, satisfying games with Unity + AI.
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
            {/* Creating engaging hyper-casual and hybrid games for over a decade. 
            Trusted by top publishers worldwide with millions of downloads. */}
.
            .
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 animate-fade-in-delay-3 hover:scale-110 hover:-translate-y-3 hover:rotate-2 transition-all duration-300 cursor-pointer">
              <Download className="w-8 h-8 text-white mx-auto mb-4 hover-rotate" />
              <h3 className="text-2xl font-bold text-white mb-2">1M+</h3>
              <p className="text-gray-300">Total Downloads</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 animate-fade-in-delay-4 hover:scale-110 hover:-translate-y-3 hover:-rotate-2 transition-all duration-300 cursor-pointer">
              <Calendar className="w-8 h-8 text-gray-300 mx-auto mb-4 hover-wiggle" />
              <h3 className="text-2xl font-bold text-white mb-2">13+</h3>
              <p className="text-gray-300">Years Experience</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 animate-fade-in-delay-5 hover:scale-110 hover:-translate-y-3 hover:rotate-3 transition-all duration-300 cursor-pointer">
              <Award className="w-8 h-8 text-gray-400 mx-auto mb-4 hover-spin-scale" />
              <h3 className="text-2xl font-bold text-white mb-2">1000+</h3>
              <p className="text-gray-300">Published Hyper/Hybrid Games</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-6">
            <SmartLink
              href="https://play.google.com/store/apps/dev?id=8149791665541446457"
              className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover-rotate"
            >
              View Our Games
            </SmartLink>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 hover-tilt"
            >
              Let’s Collaborate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;