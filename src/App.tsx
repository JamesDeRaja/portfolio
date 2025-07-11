import React, { useState, useEffect } from 'react';
import { 
  Gamepad2, 
  Download, 
  Eye, 
  Smartphone, 
  Trophy, 
  Code, 
  Brain, 
  Dumbbell, 
  Plane, 
  Coffee,
  Mail,
  Phone,
  ExternalLink,
  Youtube,
  Zap,
  Target,
  Sparkles,
  Rocket,
  Star,
  Play,
  Users,
  DollarSign,
  Activity,
  Linkedin,
  Instagram,
  Globe,
  Heart,
  MessageCircle,
  Droplets,
  Flower,
  Newspaper,
  Smile,
  Sun,
  Rainbow,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Diamond
} from 'lucide-react';

const FloatingShape = ({ children, className = "", delay = 0 }) => (
  <div 
    className={`absolute animate-bounce ${className}`}
    style={{ animationDelay: `${delay}s`, animationDuration: '2s' }}
  >
    {children}
  </div>
);

const AnimatedBackgroundShape = ({ shape, className, delay = 0, duration = 8 }) => {
  const shapes = {
    circle: <div className="w-16 h-16 bg-gradient-to-br from-pink-400/30 to-purple-500/30 rounded-full" />,
    square: <div className="w-14 h-14 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 transform rotate-45" />,
    triangle: <div className="w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-blue-400/30" />,
    star: <Star className="w-12 h-12 text-pink-400/40" />,
    heart: <Heart className="w-10 h-10 text-red-400/40" />,
    diamond: <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 transform rotate-45" />,
    hexagon: <div className="w-12 h-12 bg-gradient-to-br from-green-400/30 to-teal-500/30 rounded-lg transform rotate-12" />,
    sparkle: <Sparkles className="w-8 h-8 text-yellow-400/50" />
  };

  return (
    <div 
      className={`absolute pointer-events-none ${className}`}
      style={{
        animation: `floatAround ${duration}s infinite linear`,
        animationDelay: `${delay}s`
      }}
    >
      {shapes[shape]}
    </div>
  );
};

const BackgroundShapes = () => (
  <>
    {/* Floating shapes with different animations */}
    <AnimatedBackgroundShape shape="circle" className="top-20 left-10" delay={0} duration={12} />
    <AnimatedBackgroundShape shape="square" className="top-40 right-20" delay={2} duration={15} />
    <AnimatedBackgroundShape shape="star" className="top-60 left-1/4" delay={4} duration={10} />
    <AnimatedBackgroundShape shape="heart" className="top-80 right-1/3" delay={1} duration={18} />
    <AnimatedBackgroundShape shape="diamond" className="top-32 left-2/3" delay={3} duration={14} />
    <AnimatedBackgroundShape shape="hexagon" className="top-96 right-10" delay={5} duration={16} />
    <AnimatedBackgroundShape shape="triangle" className="top-52 left-1/2" delay={2.5} duration={11} />
    <AnimatedBackgroundShape shape="sparkle" className="top-72 right-1/4" delay={6} duration={9} />
    
    {/* More shapes for different sections */}
    <AnimatedBackgroundShape shape="circle" className="top-[500px] left-20" delay={7} duration={13} />
    <AnimatedBackgroundShape shape="star" className="top-[600px] right-32" delay={1.5} duration={17} />
    <AnimatedBackgroundShape shape="heart" className="top-[700px] left-1/3" delay={4.5} duration={12} />
    <AnimatedBackgroundShape shape="diamond" className="top-[800px] right-1/5" delay={8} duration={15} />
    <AnimatedBackgroundShape shape="square" className="top-[900px] left-3/4" delay={3.5} duration={14} />
    <AnimatedBackgroundShape shape="hexagon" className="top-[1000px] right-1/2" delay={6.5} duration={11} />
    <AnimatedBackgroundShape shape="sparkle" className="top-[1100px] left-1/5" delay={2.8} duration={16} />
    <AnimatedBackgroundShape shape="triangle" className="top-[1200px] right-1/3" delay={5.2} duration={13} />
    
    {/* Additional scattered shapes */}
    <AnimatedBackgroundShape shape="circle" className="top-[1300px] left-1/2" delay={9} duration={10} />
    <AnimatedBackgroundShape shape="star" className="top-[1400px] right-20" delay={0.8} duration={18} />
    <AnimatedBackgroundShape shape="heart" className="top-[1500px] left-1/4" delay={7.2} duration={12} />
    <AnimatedBackgroundShape shape="diamond" className="top-[1600px] right-2/3" delay={4.8} duration={15} />
    <AnimatedBackgroundShape shape="square" className="top-[1700px] left-3/5" delay={1.2} duration={14} />
    <AnimatedBackgroundShape shape="hexagon" className="top-[1800px] right-1/4" delay={6.8} duration={11} />
    <AnimatedBackgroundShape shape="sparkle" className="top-[1900px] left-2/3" delay={3.2} duration={17} />
    <AnimatedBackgroundShape shape="triangle" className="top-[2000px] right-1/5" delay={8.5} duration={13} />
  </>
);

const StatCard = ({ icon: Icon, number, label, color = "bg-gradient-to-br from-pink-400 to-purple-500" }) => (
  <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:rotate-2 border-4 border-yellow-300">
    <div className={`${color} w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg transform hover:scale-110 transition-transform`}>
      <Icon className="w-10 h-10 text-white" />
    </div>
    <div className="text-4xl font-black text-gray-800 mb-2 font-comic">{number}</div>
    <div className="text-gray-600 text-sm font-bold uppercase tracking-wide">{label}</div>
  </div>
);

const GameCard = ({ title, url, description, icon: Icon }) => (
  <div className="bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-400 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:rotate-1 border-4 border-white">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-black text-white drop-shadow-lg">{title}</h3>
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-200 transition-colors transform hover:scale-125 duration-300">
        <ExternalLink className="w-6 h-6 drop-shadow-lg" />
      </a>
    </div>
    <p className="text-white/95 mb-4 text-sm font-medium drop-shadow">{description}</p>
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-200 fill-current" />
      ))}
    </div>
  </div>
);

const ProjectCard = ({ title, url, description, status, gradient = "from-blue-400 to-cyan-400" }) => (
  <div className={`bg-gradient-to-br ${gradient} rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:rotate-1 border-4 border-white`}>
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-black text-white drop-shadow-lg">{title}</h3>
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-200 transition-colors transform hover:scale-125 duration-300">
        <ExternalLink className="w-6 h-6 drop-shadow-lg" />
      </a>
    </div>
    <p className="text-white/95 mb-4 text-sm font-medium drop-shadow">{description}</p>
    <div className="flex items-center text-white/90 text-sm font-bold">
      <Sparkles className="w-4 h-4 mr-2" />
      {status}
    </div>
  </div>
);

const SkillBadge = ({ skill, color = "bg-gradient-to-r from-pink-500 to-purple-500" }) => (
  <span className={`${color} text-white px-4 py-2 rounded-full text-sm font-bold inline-block m-1 hover:scale-110 transition-transform shadow-lg border-2 border-white/50`}>
    {skill}
  </span>
);

const PersonalCard = ({ icon: Icon, title, items, color = "bg-gradient-to-br from-green-400 to-teal-500" }) => (
  <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1 border-4 border-yellow-300">
    <div className={`${color} w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg transform hover:scale-110 transition-transform`}>
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-black text-gray-800 mb-3">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-gray-700 flex items-center font-medium">
          <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mr-3 animate-pulse"></div>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-300 relative overflow-hidden">
      {/* Playful Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.3)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.3)_0%,transparent_50%),radial-gradient(circle_at_40%_80%,rgba(255,255,255,0.3)_0%,transparent_50%)]"></div>
      
      {/* Animated Background Shapes */}
      <BackgroundShapes />
      
      {/* Floating Fun Shapes */}
      <FloatingShape className="top-20 left-20" delay={0}>
        <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full shadow-xl opacity-80 animate-spin" style={{ animationDuration: '8s' }}></div>
      </FloatingShape>
      <FloatingShape className="top-40 right-32" delay={1}>
        <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 transform rotate-45 shadow-xl opacity-80"></div>
      </FloatingShape>
      <FloatingShape className="bottom-40 left-32" delay={2}>
        <div className="w-28 h-28 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl shadow-xl opacity-80 animate-pulse"></div>
      </FloatingShape>
      <FloatingShape className="bottom-20 right-20" delay={0.5}>
        <div className="w-22 h-22 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full shadow-xl opacity-80"></div>
      </FloatingShape>
      <FloatingShape className="top-1/2 left-1/4" delay={1.5}>
        <Star className="w-16 h-16 text-yellow-400 opacity-60 animate-spin" style={{ animationDuration: '6s' }} />
      </FloatingShape>
      <FloatingShape className="top-1/3 right-1/4" delay={2.5}>
        <Heart className="w-14 h-14 text-pink-400 opacity-60 animate-pulse" />
      </FloatingShape>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-2xl sticky top-0 z-50 border-b-4 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform border-4 border-white">
                <Gamepad2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  James De Raja 🎮
                </h1>
                <p className="text-sm text-gray-600 font-bold">🚀 Founder & Owner of AlphaDen ✨</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center space-x-4">
              <a href="mailto:jamesderaja@gmail.com" className="text-gray-600 hover:text-pink-600 transition-colors transform hover:scale-125 duration-300" title="Email">
                <Mail className="w-7 h-7" />
              </a>
              <a href="tel:+917708140455" className="text-gray-600 hover:text-pink-600 transition-colors transform hover:scale-125 duration-300" title="Phone">
                <Phone className="w-7 h-7" />
              </a>
              <a href="https://www.linkedin.com/in/james-de-raja/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-125 duration-300" title="LinkedIn">
                <Linkedin className="w-7 h-7" />
              </a>
              <a href="https://www.instagram.com/jamesderaja" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition-colors transform hover:scale-125 duration-300" title="Instagram">
                <Instagram className="w-7 h-7" />
              </a>
              <a href="https://alphaden.club" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors transform hover:scale-125 duration-300" title="AlphaDen Studio">
                <Globe className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="mb-8">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-xl border-4 border-yellow-300 mb-6">
              <Smile className="w-6 h-6 text-yellow-500 mr-2 animate-bounce" />
              <span className="text-gray-700 font-bold">Welcome to my fun world! 🌈</span>
            </div>
          </div>
          <h2 className="text-6xl md:text-8xl font-black mb-6 transform hover:scale-105 transition-transform">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
              Game Developer! 🎮
            </span>
          </h2>
          <p className="text-2xl text-gray-700 mb-4 max-w-4xl mx-auto font-bold">
            🎮 13+ Years of Mobile Game Magic ✨ | 🚀 1M+ Downloads 📱 | 🤖 AI-Powered Fun! 
          </p>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-medium">
            Founder & Owner of <a href="https://alphaden.club" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-black underline decoration-wavy decoration-pink-400">AlphaDen Studio</a> 🏢
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a href="https://play.google.com/store/apps/dev?id=8149791665541446457" target="_blank" rel="noopener noreferrer" 
               className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-4 rounded-full font-black hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-rotate-2 text-lg border-4 border-white shadow-xl">
              🎮 Google Play Store
            </a>
            <a href="https://play.google.com/store/apps/dev?id=8149791665541446457" target="_blank" rel="noopener noreferrer" 
               className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-10 py-4 rounded-full font-black hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-2 text-lg border-4 border-white shadow-xl">
               📱 App Store
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <StatCard icon={Download} number="1M+" label="Downloads 📥" color="bg-gradient-to-br from-green-400 to-teal-500" />
          <StatCard icon={Eye} number="1M+" label="YouTube Views 👀" color="bg-gradient-to-br from-red-400 to-pink-500" />
          <StatCard icon={Trophy} number="13+" label="Years Experience 🏆" color="bg-gradient-to-br from-yellow-400 to-orange-500" />
          <StatCard icon={DollarSign} number="$2500+" label="Per Prototype 💰" color="bg-gradient-to-br from-purple-400 to-pink-500" />
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white/70 backdrop-blur-sm py-16 border-y-8 border-yellow-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            About Me! 🌟
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl p-8 shadow-xl border-4 border-white transform hover:-rotate-1 transition-transform">
                <h3 className="text-3xl font-black text-gray-800 mb-4 flex items-center">
                  <Rocket className="w-10 h-10 mr-3 text-purple-600" />
                  Game Dev Journey 🚀
                </h3>
                <p className="text-gray-700 leading-relaxed font-medium">
                  With over 13 years of mobile game development experience and 10+ years mastering Unity, 
                  I've crafted games that have collectively reached close to a million downloads! 🎉 As the founder 
                  and owner of AlphaDen Studio, I've worked with industry giants like Voodoo, Lion Studio, and 
                  Supersonic, launching successful games that captivate players worldwide! ✨
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-200 to-cyan-200 rounded-3xl p-8 shadow-xl border-4 border-white transform hover:rotate-1 transition-transform">
                <h3 className="text-3xl font-black text-gray-800 mb-4 flex items-center">
                  <Brain className="w-10 h-10 mr-3 text-blue-600" />
                  AI & Modern Magic 🤖
                </h3>
                <p className="text-gray-700 leading-relaxed font-medium">
                  I'm at the forefront of AI-powered game development, leveraging cutting-edge tools for 
                  game creation, art generation, and workflow automation! 🎨 My latest venture, AiMatch, 
                  represents the next evolution in AI-powered social connections, demonstrating my expertise 
                  in innovative AI applications beyond gaming! 🌈
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-200 to-teal-200 rounded-3xl p-8 shadow-xl border-4 border-white transform hover:-rotate-1 transition-transform">
                <h3 className="text-3xl font-black text-gray-800 mb-4 flex items-center">
                  <Code className="w-10 h-10 mr-3 text-green-600" />
                  Technical Wizardry 🧙‍♂️
                </h3>
                <p className="text-gray-700 leading-relaxed font-medium">
                  Beyond game development, I bring 8+ years of experience at Zoho, specializing in 
                  product integration through REST APIs! 🔗 I've worked with platforms like Salesforce, 
                  QuickBooks, Shopify, and more, creating seamless connections between diverse systems! ⚡
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-200 to-red-200 rounded-3xl p-8 shadow-xl border-4 border-white transform hover:rotate-1 transition-transform">
                <h3 className="text-3xl font-black text-gray-800 mb-4 flex items-center">
                  <Target className="w-10 h-10 mr-3 text-orange-600" />
                  Publishing & Marketing 📈
                </h3>
                <p className="text-gray-700 leading-relaxed font-medium">
                  I'm fully experienced in the complete game lifecycle - from initial concept to store 
                  publication! 🎯 My expertise includes marketing strategies, user acquisition, and working 
                  with top publishers to maximize game success and reach! 🌟
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Latest Game - Bolt Pop 3D */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-6 shadow-2xl border-4 border-white transform hover:scale-110 transition-transform">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Latest Game Release! 🎮✨
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto font-bold text-xl">
              Experience the most addictive 3D puzzle game that's taking the mobile gaming world by storm! 🌪️
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 border-8 border-yellow-300">
              <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.2)_0%,transparent_50%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.2)_0%,transparent_50%)]"></div>
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
                    <div className="flex items-center space-x-6 mb-6 lg:mb-0">
                      <div className="w-24 h-24 bg-white/30 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-white/50 backdrop-blur-sm">
                        <Gamepad2 className="w-12 h-12 text-white" />
                      </div>
                      <div>
                        <h3 className="text-5xl font-black mb-2 drop-shadow-lg">Bolt Pop 3D! ⚡</h3>
                        <p className="text-white/90 text-xl font-bold drop-shadow">The Ultimate 3D Puzzle Experience! 🧩</p>
                        <div className="flex items-center mt-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 text-yellow-300 mr-1 fill-current drop-shadow" />
                          ))}
                          <span className="text-white font-black ml-3 text-lg drop-shadow">50K+ Downloads! 🎉</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href="https://play.google.com/store/apps/details?id=com.AlphaDen.BoltPop3D" 
                         target="_blank" rel="noopener noreferrer"
                         className="bg-white/30 hover:bg-white/40 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-110 flex items-center justify-center font-black border-4 border-white/50 backdrop-blur-sm shadow-xl">
                        <Download className="w-6 h-6 mr-2" />
                        Play Store! 📱
                      </a>
                      <a href="https://www.youtube.com/watch?v=CF7oYY80WUM" 
                         target="_blank" rel="noopener noreferrer"
                         className="bg-red-500/80 hover:bg-red-500 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-110 flex items-center justify-center font-black border-4 border-white/50 shadow-xl">
                        <Youtube className="w-6 h-6 mr-2" />
                        Watch Trailer! 🎬
                      </a>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white/20 border-4 border-white/40 rounded-2xl p-6 text-center backdrop-blur-sm shadow-xl">
                      <div className="text-3xl font-black mb-2 drop-shadow">50K+</div>
                      <div className="text-sm text-white/90 font-bold drop-shadow">Downloads! 📥</div>
                    </div>
                    <div className="bg-white/20 border-4 border-white/40 rounded-2xl p-6 text-center backdrop-blur-sm shadow-xl">
                      <div className="text-3xl font-black mb-2 drop-shadow">4.5★</div>
                      <div className="text-sm text-white/90 font-bold drop-shadow">Rating! ⭐</div>
                    </div>
                    <div className="bg-white/20 border-4 border-white/40 rounded-2xl p-6 text-center backdrop-blur-sm shadow-xl">
                      <div className="text-3xl font-black mb-2 drop-shadow">100+</div>
                      <div className="text-sm text-white/90 font-bold drop-shadow">Levels! 🎯</div>
                    </div>
                    <div className="bg-white/20 border-4 border-white/40 rounded-2xl p-6 text-center backdrop-blur-sm shadow-xl">
                      <div className="text-3xl font-black mb-2 drop-shadow">3D</div>
                      <div className="text-sm text-white/90 font-bold drop-shadow">Graphics! 🎨</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-yellow-50 to-pink-50">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h4 className="text-3xl font-black text-gray-800 mb-6">Game Features! 🌟</h4>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mt-1 shadow-lg">
                          <Zap className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h5 className="font-black text-gray-800 text-lg">Satisfying 3D Mechanics! ⚡</h5>
                          <p className="text-gray-600 font-medium">Experience the most satisfying bolt-popping mechanics in stunning 3D!</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mt-1 shadow-lg">
                          <Target className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h5 className="font-black text-gray-800 text-lg">Challenging Puzzles! 🧩</h5>
                          <p className="text-gray-600 font-medium">Over 100 carefully crafted levels that test your problem-solving skills!</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mt-1 shadow-lg">
                          <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h5 className="font-black text-gray-800 text-lg">Stunning Visuals! 🎨</h5>
                          <p className="text-gray-600 font-medium">Beautiful 3D graphics with smooth animations and particle effects!</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mt-1 shadow-lg">
                          <Activity className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h5 className="font-black text-gray-800 text-lg">Addictive Gameplay! 🎮</h5>
                          <p className="text-gray-600 font-medium">Easy to learn, hard to master - perfect for quick sessions or long plays!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 text-center border-4 border-white shadow-xl">
                    <div className="aspect-video bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden border-4 border-white shadow-xl">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <a href="https://www.youtube.com/watch?v=CF7oYY80WUM" 
                         target="_blank" rel="noopener noreferrer"
                         className="relative z-10 bg-white/30 hover:bg-white/40 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-125 border-4 border-white/50 backdrop-blur-sm shadow-xl">
                        <Play className="w-10 h-10 text-white ml-1" />
                      </a>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black/70 rounded-2xl px-4 py-3 border-2 border-white/50">
                          <p className="text-white text-sm font-black">🎮 Gameplay Trailer!</p>
                        </div>
                      </div>
                    </div>
                    <h5 className="font-black text-gray-800 mb-3 text-xl">Watch the Action! 🎬</h5>
                    <p className="text-gray-600 text-sm mb-6 font-medium">See Bolt Pop 3D in action with our exciting gameplay trailer!</p>
                    <a href="https://www.youtube.com/watch?v=CF7oYY80WUM" 
                       target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-black transition-all duration-300 transform hover:scale-110 shadow-xl border-4 border-white">
                      <Youtube className="w-5 h-5 mr-2" />
                      Watch on YouTube! 📺
                    </a>
                  </div>
                </div>
                
                <div className="mt-12 text-center">
                  <p className="text-gray-700 mb-6 font-bold text-xl">Ready to experience the most addictive puzzle game? 🎯</p>
                  <a href="https://play.google.com/store/apps/details?id=com.AlphaDen.BoltPop3D" 
                     target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-12 py-5 rounded-full font-black hover:shadow-2xl transition-all duration-300 transform hover:scale-110 text-xl border-4 border-white shadow-xl">
                    <Download className="w-8 h-8 mr-3" />
                    Download Now - FREE! 🎉
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-16 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Featured Games! 🎮✨
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <GameCard 
              title="Bolt Pop 3D ⚡" 
              url="https://play.google.com/store/apps/details?id=com.AlphaDen.BoltPop3D"
              description="Addictive 3D puzzle game with satisfying bolt mechanics! 🧩"
              icon={Zap}
            />
            <GameCard 
              title="Aqua Spin 💧" 
              url="https://play.google.com/store/apps/details?id=com.AlphaDen.AuqaSpin"
              description="Refreshing water-based puzzle adventure! 🌊"
              icon={Droplets}
            />
            <GameCard 
              title="Collect Flowers 🌸" 
              url="https://play.google.com/store/apps/details?id=com.AlphaDen.CollectFlowers"
              description="Beautiful flower collection game! 🌺"
              icon={Flower}
            />
            <GameCard 
              title="Newspaper Maker 📰" 
              url="https://play.google.com/store/apps/details?id=com.AlphaDen.NewspaperMaker"
              description="Creative newspaper design simulator! ✍️"
              icon={Newspaper}
            />
          </div>
        </div>
      </section>

      {/* Website Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/95 backdrop-blur-sm border border-gray-700/30 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want to Know More?
            </h2>
            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
              To learn more about our games and discover what our studio is all about, visit our official 
              website for the latest updates, behind-the-scenes content, and exclusive insights into our 
              development process.
            </p>
            <a
              href="https://alphaden.club"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Globe className="w-5 h-5" />
              Visit alphaden.club
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise! 🚀
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-yellow-300 transform hover:-rotate-1 transition-transform">
              <h3 className="text-2xl font-black text-gray-800 mb-6 flex items-center">
                <Gamepad2 className="w-8 h-8 mr-3 text-pink-600" />
                Game Development! 🎮
              </h3>
              <div className="flex flex-wrap">
                <SkillBadge skill="Unity 3D ⚡" color="bg-gradient-to-r from-purple-500 to-purple-600" />
                <SkillBadge skill="C# 💻" color="bg-gradient-to-r from-blue-500 to-blue-600" />
                <SkillBadge skill="Mobile Games 📱" color="bg-gradient-to-r from-green-500 to-green-600" />
                <SkillBadge skill="Game Design 🎨" color="bg-gradient-to-r from-yellow-500 to-yellow-600" />
                <SkillBadge skill="Android 🤖" color="bg-gradient-to-r from-red-500 to-red-600" />
                <SkillBadge skill="iOS 🍎" color="bg-gradient-to-r from-gray-500 to-gray-600" />
                <SkillBadge skill="Blender 🎭" color="bg-gradient-to-r from-orange-500 to-orange-600" />
                <SkillBadge skill="Photoshop 🖼️" color="bg-gradient-to-r from-indigo-500 to-indigo-600" />
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-yellow-300 transform hover:rotate-1 transition-transform">
              <h3 className="text-2xl font-black text-gray-800 mb-6 flex items-center">
                <Brain className="w-8 h-8 mr-3 text-blue-600" />
                AI & Modern Tech! 🤖
              </h3>
              <div className="flex flex-wrap">
                <SkillBadge skill="AI Game Dev 🧠" color="bg-gradient-to-r from-purple-500 to-purple-600" />
                <SkillBadge skill="AI Art Creation 🎨" color="bg-gradient-to-r from-pink-500 to-pink-600" />
                <SkillBadge skill="Workflow Auto ⚡" color="bg-gradient-to-r from-green-500 to-green-600" />
                <SkillBadge skill="LLM Integration 🔗" color="bg-gradient-to-r from-blue-500 to-blue-600" />
                <SkillBadge skill="API Development 🌐" color="bg-gradient-to-r from-red-500 to-red-600" />
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-yellow-300 transform hover:-rotate-1 transition-transform">
              <h3 className="text-2xl font-black text-gray-800 mb-6 flex items-center">
                <Zap className="w-8 h-8 mr-3 text-yellow-600" />
                Business & Marketing! 📈
              </h3>
              <div className="flex flex-wrap">
                <SkillBadge skill="Game Publishing 🚀" color="bg-gradient-to-r from-purple-500 to-purple-600" />
                <SkillBadge skill="Store Optimization 📱" color="bg-gradient-to-r from-green-500 to-green-600" />
                <SkillBadge skill="User Acquisition 👥" color="bg-gradient-to-r from-blue-500 to-blue-600" />
                <SkillBadge skill="Analytics 📊" color="bg-gradient-to-r from-red-500 to-red-600" />
                <SkillBadge skill="Monetization 💰" color="bg-gradient-to-r from-yellow-500 to-yellow-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Innovation - AiMatch */}
      <section className="py-16 bg-white/70 backdrop-blur-sm border-y-8 border-yellow-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mb-6 shadow-2xl border-4 border-white transform hover:scale-110 transition-transform">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Current Innovation! 🚀
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto font-bold text-xl">
              Pioneering the future of AI-powered social connections! 🤖💕
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 border-8 border-yellow-300">
              <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.2)_0%,transparent_50%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.2)_0%,transparent_50%)]"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/50 backdrop-blur-sm">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-4xl font-black drop-shadow-lg">AiMatch! 💕</h3>
                        <p className="text-white/90 font-bold text-lg drop-shadow">Your Smart Social Companion Finder! 🤖</p>
                      </div>
                    </div>
                    <a href="https://aimatch.alphaden.club" target="_blank" rel="noopener noreferrer" 
                       className="bg-white/30 hover:bg-white/40 p-4 rounded-full transition-all duration-300 transform hover:scale-125 border-4 border-white/50 backdrop-blur-sm shadow-xl">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </a>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-2xl font-black mb-4 flex items-center drop-shadow">
                        <Users className="w-6 h-6 mr-2" />
                        What is AiMatch? 🤔
                      </h4>
                      <p className="text-white/95 leading-relaxed font-medium drop-shadow">
                        Looking for a co-founder, creative partner, gym buddy, or movie mate? 🎬💪
                        Just chat with our AI — it learns about you and helps connect you with 
                        the perfect match based on real conversations, not just profiles! ✨
                      </p>
                    </div>
                    <div>
                      <h4 className="text-2xl font-black mb-4 flex items-center drop-shadow">
                        <Rocket className="w-6 h-6 mr-2" />
                        Current Status! 📊
                      </h4>
                      <div className="bg-white/20 rounded-2xl p-6 border-4 border-white/40 backdrop-blur-sm shadow-xl">
                        <p className="font-black mb-3 text-lg drop-shadow">🚀 Looking for Co-Founder!</p>
                        <p className="text-sm text-white/90 font-medium drop-shadow">
                          Join me in revolutionizing how people connect and find their perfect companions! 🌟
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <span className="bg-white/20 px-6 py-3 rounded-full text-sm font-black border-4 border-white/40 backdrop-blur-sm shadow-lg">AI-Powered! 🤖</span>
                    <span className="bg-white/20 px-6 py-3 rounded-full text-sm font-black border-4 border-white/40 backdrop-blur-sm shadow-lg">Social Matching! 💕</span>
                    <span className="bg-white/20 px-6 py-3 rounded-full text-sm font-black border-4 border-white/40 backdrop-blur-sm shadow-lg">Conversation-Based! 💬</span>
                    <span className="bg-white/20 px-6 py-3 rounded-full text-sm font-black border-4 border-white/40 backdrop-blur-sm shadow-lg">Smart Connections! ⚡</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-yellow-50 to-pink-50">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl border-4 border-white">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="font-black text-gray-800 mb-3 text-lg">Chat with AI! 🤖</h5>
                    <p className="text-sm text-gray-600 font-medium">Natural conversations that help AI understand your preferences!</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl border-4 border-white">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="font-black text-gray-800 mb-3 text-lg">Smart Learning! 🧠</h5>
                    <p className="text-sm text-gray-600 font-medium">AI learns from real conversations, not just profile data!</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl border-4 border-white">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h5 className="font-black text-gray-800 mb-3 text-lg">Perfect Matches! 💕</h5>
                    <p className="text-sm text-gray-600 font-medium">Find co-founders, gym buddies, creative partners & more!</p>
                  </div>
                </div>
                
                <div className="mt-12 text-center">
                  <a href="https://aimatch.alphaden.club" target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-4 rounded-full font-black hover:shadow-2xl transition-all duration-300 transform hover:scale-110 text-lg border-4 border-white shadow-xl">
                    <Globe className="w-6 h-6 mr-3" />
                    Visit AiMatch! 🚀
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Beyond Code! 🌟
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PersonalCard 
              icon={Dumbbell} 
              title="Fitness Beast! 💪" 
              items={[
                "10,000+ steps daily! 🚶‍♂️",
                "Bench: 100kg PR! 🏋️‍♂️",
                "Squats: 80kg PR! 🦵", 
                "Deadlift: 160kg PR! 💀"
              ]}
              color="bg-gradient-to-br from-red-400 to-pink-500"
            />
            <PersonalCard 
              icon={Play} 
              title="Anime Enthusiast! 🎌" 
              items={[
                "Demon Slayer ⚔️",
                "Jujutsu Kaisen 👻",
                "Re:Zero 🔄",
                "Dragon Ball Z 🐉"
              ]}
              color="bg-gradient-to-br from-blue-400 to-purple-500"
            />
            <PersonalCard 
              icon={Gamepad2} 
              title="Gaming Passion! 🎮" 
              items={[
                "Fortnite (Current) 🏆",
                "Super Mario 🍄",
                "Bomberman 💣",
                "Dangerous Dave 🏃"
              ]}
              color="bg-gradient-to-br from-purple-400 to-pink-500"
            />
            <PersonalCard 
              icon={Plane} 
              title="Life Enthusiast! ✨" 
              items={[
                "Travel Explorer 🌍",
                "Food Lover 🍜",
                "Sleep Optimizer 😴",
                "Coffee Addict ☕"
              ]}
              color="bg-gradient-to-br from-green-400 to-teal-500"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.2)_0%,transparent_50%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.2)_0%,transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black text-white mb-8 drop-shadow-lg">Let's Create Something Amazing! 🚀✨</h2>
          <p className="text-2xl text-white/95 mb-12 max-w-3xl mx-auto font-bold drop-shadow">
            Ready to bring your game idea to life? Let's collaborate and create the next big hit! 🎮🌟
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a href="mailto:jamesderaja@gmail.com" 
               className="bg-white text-purple-600 px-8 py-4 rounded-full font-black hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center border-4 border-white/50 shadow-xl">
              <Mail className="w-6 h-6 mr-2" />
              jamesderaja@gmail.com 📧
            </a>
            <a href="mailto:james@alphaden.com" 
               className="bg-white text-purple-600 px-8 py-4 rounded-full font-black hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center border-4 border-white/50 shadow-xl">
              <Mail className="w-6 h-6 mr-2" />
              james@alphaden.com 💼
            </a>
            <a href="tel:+917708140455" 
               className="bg-white text-purple-600 px-8 py-4 rounded-full font-black hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center border-4 border-white/50 shadow-xl">
              <Phone className="w-6 h-6 mr-2" />
              +91-7708140455 📞
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://www.linkedin.com/in/james-de-raja/" target="_blank" rel="noopener noreferrer"
               className="bg-white/30 text-white px-8 py-4 rounded-full font-black hover:bg-white/40 transition-all duration-300 transform hover:scale-110 flex items-center border-4 border-white/50 backdrop-blur-sm shadow-xl">
              <Linkedin className="w-6 h-6 mr-2" />
              LinkedIn! 💼
            </a>
            <a href="https://www.instagram.com/jamesderaja" target="_blank" rel="noopener noreferrer"
               className="bg-white/30 text-white px-8 py-4 rounded-full font-black hover:bg-white/40 transition-all duration-300 transform hover:scale-110 flex items-center border-4 border-white/50 backdrop-blur-sm shadow-xl">
              <Instagram className="w-6 h-6 mr-2" />
              Instagram! 📸
            </a>
            <a href="https://alphaden.club" target="_blank" rel="noopener noreferrer"
               className="bg-white/30 text-white px-8 py-4 rounded-full font-black hover:bg-white/40 transition-all duration-300 transform hover:scale-110 flex items-center border-4 border-white/50 backdrop-blur-sm shadow-xl">
              <Globe className="w-6 h-6 mr-2" />
              AlphaDen Studio! 🏢
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t-8 border-yellow-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4 shadow-xl border-4 border-white">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black">James De Raja! 🎮</span>
          </div>
          <p className="text-gray-300 font-bold text-lg">
            🎮 Turning Ideas into Amazing Games! | 🚀 Powered by AI & Innovation! | 🏢 Founder of AlphaDen Studio! ✨
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
