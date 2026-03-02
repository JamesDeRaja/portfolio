import React from 'react';
import { ExternalLink } from 'lucide-react';
import SmartLink from './SmartLink';

const Games = () => {
  const games = [
    {
      title: "Bolt Pop 3D",
      description: "An engaging 3D puzzle game with stunning visuals and addictive gameplay mechanics.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.AlphaDen.BoltPop3D",
      image: "public/Bolt.png"
    },
    {
      title: "Aqua Spin",
      description: "A refreshing water-based game that combines strategy with fast-paced action.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.AlphaDen.AuqaSpin",
      image: "https://images.pexels.com/photos/7915471/pexels-photo-7915471.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Collect Flowers",
      description: "A charming collection game featuring beautiful flowers and relaxing gameplay.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.AlphaDen.CollectFlowers",
      image: "https://images.pexels.com/photos/7915471/pexels-photo-7915471.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Newspaper Maker",
      description: "Create and design your own newspapers with this innovative creative tool.",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.AlphaDen.NewspaperMaker",
      image: "https://images.pexels.com/photos/7915471/pexels-photo-7915471.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="games" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-24 right-16 w-6 h-6 bg-gray-300 rotate-45 animate-float-medium"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-gray-200 rounded-full animate-float-fast"></div>
        <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-gray-300 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-48 right-1/3 w-4 h-4 bg-gray-200 rounded-full animate-float-medium"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Games
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of successful mobile games that have captivated players worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover-tilt cursor-pointer"
            >
              <div className="h-48 bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{backgroundImage: `url(${index === 1 ? '/AquaSpin.png' : index === 2 ? '/Flower.png' : index === 3 ? '/News.png' : '/Bolt.png'})`}}>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{game.title}</h3>
                <p className="text-gray-600 mb-4">{game.description}</p>
                
                <SmartLink
                  href={game.playStoreUrl}
                  className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover-rotate"
                >
                  <span>Play Now</span>
                  <ExternalLink className="w-4 h-4 hover-wiggle" />
                </SmartLink>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <SmartLink
            href="https://play.google.com/store/apps/dev?id=8149791665541446457"
            className="inline-flex items-center space-x-2 bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover-float"
          >
            <span>View All Games</span>
            <ExternalLink className="w-4 h-4 hover-spin-scale" />
          </SmartLink>
        </div>
      </div>
    </section>
  );
};

export default Games;