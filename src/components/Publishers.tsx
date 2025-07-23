import React from 'react';
import { Building, Star, Handshake } from 'lucide-react';

const Publishers = () => {
  const publishers = [
    {
      name: "Voodoo",
      description: "Leading mobile game publisher known for hyper-casual hits",
      icon: <Building className="w-12 h-12 text-white" />
    },
    {
      name: "LionStudio",
      description: "Premium publisher specializing in innovative mobile games",
      icon: <Star className="w-12 h-12 text-gray-300" />
    },
    {
      name: "SuperSonic",
      description: "Dynamic publisher where we successfully launched our games",
      icon: <Handshake className="w-12 h-12 text-gray-400" />
    }
  ];

  return (
    <section id="publishers" className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/5 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-32 left-16 w-8 h-8 bg-white/10 rotate-45 animate-float-medium"></div>
        <div className="absolute top-1/2 right-1/3 w-10 h-10 bg-white/5 rounded-full animate-float-fast"></div>
        <div className="absolute bottom-20 right-1/4 w-6 h-6 bg-white/15 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-40 left-1/3 w-12 h-12 bg-white/5 rounded-full animate-float-medium"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Top Publishers
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We've built strong partnerships with industry-leading publishers, 
            delivering successful games that achieve millions of downloads
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {publishers.map((publisher, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 border border-white/10 hover-tilt cursor-pointer"
            >
              <div className="mb-6 flex justify-center hover-pulse-grow">
                {publisher.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{publisher.name}</h3>
              <p className="text-gray-300">{publisher.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 text-center border border-gray-300">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Partner With Us?
          </h3>
          <h3 className="text-2xl font-bold text-black mb-4">
            Ready to Partner With Us?
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Join the ranks of successful publishers who trust AlphaDen for their next hit game. 
            Let's create something amazing together.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover-rotate"
          >
            Start a Partnership
          </button>
        </div>
      </div>
    </section>
  );
};

export default Publishers;