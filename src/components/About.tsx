import React from 'react';
import { Target, Users, Trophy, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-12 h-12 bg-gray-100 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 left-10 w-8 h-8 bg-gray-200 rotate-45 animate-float-medium"></div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-gray-150 rounded-full animate-float-fast"></div>
        <div className="absolute top-32 right-1/4 w-4 h-4 bg-gray-200 rounded-full animate-float-medium"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About AlphaDen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a professional game development studio with over 13 years of experience in creating 
            engaging mobile games. Specializing in hyper-casual and hybrid games for the past 10 years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover-float cursor-pointer">
            <Target className="w-12 h-12 text-black mx-auto mb-4 hover-spin-scale" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Focus</h3>
            <p className="text-gray-600">
              10+ years specialized in hyper-casual and hybrid game development
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover-float cursor-pointer">
            <Users className="w-12 h-12 text-gray-700 mx-auto mb-4 hover-wiggle" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted Partners</h3>
            <p className="text-gray-600">
              Working with top publishers like Voodoo, LionStudio, and SuperSonic
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover-float cursor-pointer">
            <Trophy className="w-12 h-12 text-gray-800 mx-auto mb-4 hover-rotate" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Success</h3>
            <p className="text-gray-600">
              Over 1 million downloads across our game portfolio
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover-float cursor-pointer">
            <Zap className="w-12 h-12 text-black mx-auto mb-4 hover-pulse-grow" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">
              13+ years of continuous innovation in game development
            </p>
          </div>
        </div>

        <div className="bg-black rounded-lg p-8 text-white text-center border border-gray-300">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-lg max-w-2xl mx-auto">
            To create engaging, innovative mobile games that captivate players worldwide. 
            We combine creativity with technical expertise to deliver exceptional gaming experiences 
            that publishers and players love.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;