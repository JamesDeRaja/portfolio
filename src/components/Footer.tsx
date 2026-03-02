import React from 'react';
import { Gamepad2, ExternalLink } from 'lucide-react';
import SmartLink from './SmartLink';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Gamepad2 className="w-8 h-8 text-white hover-spin-scale cursor-pointer" />
              <span className="text-2xl font-bold">AlphaDen</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Professional game development studio with 13+ years of experience. 
              Creating engaging mobile games that captivate millions of players worldwide.
            </p>
            <div className="flex space-x-4">
              <SmartLink
                href="https://play.google.com/store/apps/dev?id=8149791665541446457"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 hover-float"
              >
                <span>Google Play</span>
                <ExternalLink className="w-4 h-4 hover-wiggle" />
              </SmartLink>
              <SmartLink
                href="https://play.google.com/store/apps/dev?id=8149791665541446457"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 hover-float"
              >
                <span>App Store</span>
                <ExternalLink className="w-4 h-4 hover-wiggle" />
              </SmartLink>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-all duration-300 hover-tilt"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-all duration-300 hover-tilt"
                >
                  Our Games
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('publishers')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-all duration-300 hover-tilt"
                >
                  Publishers
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-all duration-300 hover-tilt"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:alphadenthj@gmail.com"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover-float"
                >
                  alphadenthj@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                +91 7708140455
              </li>
              <li className="text-gray-400">
                Tamil Nadu, India
              </li>
              <li className="text-gray-400">
                Pin: 627002
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 AlphaDen. All rights reserved. Professional game development studio.
          </p>
          <p className="text-gray-400 mt-4">
            Want to see more? 
            <SmartLink 
              href="https://james.alphaden.club" 
              className="text-white hover:text-gray-300 transition-all duration-300 ml-1 underline hover-rotate"
            >
              Visit my full portfolio here.
            </SmartLink>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
