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
  MessageCircle
} from 'lucide-react';

const FloatingShape = ({ children, className = "", delay = 0 }) => (
  <div 
    className={`absolute animate-bounce ${className}`}
    style={{ animationDelay: `${delay}s`, animationDuration: '3s' }}
  >
    {children}
  </div>
);

const StatCard = ({ icon: Icon, number, label, color = "bg-blue-500" }) => (
  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
    <div className={`${color} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto`}>
      <Icon className="w-8 h-8 text-white" />
    </div>
    <div className="text-3xl font-bold text-gray-800 mb-2">{number}</div>
    <div className="text-gray-600 text-sm">{label}</div>
  </div>
);

const GameCard = ({ title, url, description, downloads }) => (
  <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors">
        <ExternalLink className="w-6 h-6" />
      </a>
    </div>
    <p className="text-white/90 mb-4 text-sm">{description}</p>
    <div className="flex items-center text-white/80 text-sm">
      <Download className="w-4 h-4 mr-2" />
      {downloads}
    </div>
  </div>
);

const ProjectCard = ({ title, url, description, status, gradient = "from-blue-400 to-cyan-400" }) => (
  <div className={`bg-gradient-to-br ${gradient} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105`}>
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors">
        <ExternalLink className="w-6 h-6" />
      </a>
    </div>
    <p className="text-white/90 mb-4 text-sm">{description}</p>
    <div className="flex items-center text-white/80 text-sm">
      <Sparkles className="w-4 h-4 mr-2" />
      {status}
    </div>
  </div>
);

const SkillBadge = ({ skill, color = "bg-blue-500" }) => (
  <span className={`${color} text-white px-4 py-2 rounded-full text-sm font-medium inline-block m-1 hover:scale-105 transition-transform`}>
    {skill}
  </span>
);

const PersonalCard = ({ icon: Icon, title, items, color = "bg-green-500" }) => (
  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
    <div className={`${color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-gray-600 flex items-center">
          <Star className="w-4 h-4 mr-2 text-yellow-400" />
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 relative overflow-hidden">
      {/* Floating Abstract Shapes */}
      <FloatingShape className="top-20 left-20" delay={0}>
        <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20"></div>
      </FloatingShape>
      <FloatingShape className="top-40 right-32" delay={1}>
        <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 transform rotate-45 opacity-20"></div>
      </FloatingShape>
      <FloatingShape className="bottom-40 left-32" delay={2}>
        <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg opacity-20"></div>
      </FloatingShape>
      <FloatingShape className="bottom-20 right-20" delay={0.5}>
        <div className="w-18 h-18 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20"></div>
      </FloatingShape>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  James De Raja
                </h1>
                <p className="text-sm text-gray-600">Founder & Owner of AlphaDen</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="mailto:jamesderaja@gmail.com" className="text-gray-600 hover:text-purple-600 transition-colors" title="Email">
                <Mail className="w-6 h-6" />
              </a>
              <a href="tel:+917708140455" className="text-gray-600 hover:text-purple-600 transition-colors" title="Phone">
                <Phone className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/james-de-raja/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors" title="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/jamesderaja" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition-colors" title="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://alphaden.club" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors" title="AlphaDen Studio">
                <Globe className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Game Developer
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            🎮 13+ Years of Mobile Game Magic | 🚀 1M+ Downloads | 🤖 AI-Powered Development
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Founder & Owner of <a href="https://alphaden.club" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-semibold">AlphaDen Studio</a>
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="https://play.google.com/store/apps/dev?id=8149791665541446457" target="_blank" rel="noopener noreferrer" 
               className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              View Google Play Store
            </a>
            <a href="https://play.google.com/store/apps/dev?id=8149791665541446457" target="_blank" rel="noopener noreferrer" 
               className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              View App Store
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <StatCard icon={Download} number="1M+" label="Total Downloads" color="bg-green-500" />
          <StatCard icon={Eye} number="1M+" label="YouTube Views" color="bg-red-500" />
          <StatCard icon={Trophy} number="13+" label="Years Experience" color="bg-yellow-500" />
          <StatCard icon={DollarSign} number="$2500+" label="Per Prototype" color="bg-purple-500" />
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white/50 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Rocket className="w-8 h-8 mr-3 text-purple-600" />
                  Game Development Journey
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  With over 13 years of mobile game development experience and 10+ years mastering Unity, 
                  I've crafted games that have collectively reached close to a million downloads. As the founder 
                  and owner of AlphaDen Studio, I've worked with industry giants like Voodoo, Lion Studio, and 
                  Supersonic, launching successful games that captivate players worldwide.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Brain className="w-8 h-8 mr-3 text-blue-600" />
                  AI & Modern Development
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  I'm at the forefront of AI-powered game development, leveraging cutting-edge tools for 
                  game creation, art generation, and workflow automation. My latest venture, AiMatch, 
                  represents the next evolution in AI-powered social connections, demonstrating my expertise 
                  in innovative AI applications beyond gaming.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Code className="w-8 h-8 mr-3 text-green-600" />
                  Technical Expertise
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Beyond game development, I bring 8+ years of experience at Zoho, specializing in 
                  product integration through REST APIs. I've worked with platforms like Salesforce, 
                  QuickBooks, Shopify, and more, creating seamless connections between diverse systems.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Target className="w-8 h-8 mr-3 text-orange-600" />
                  Publishing & Marketing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  I'm fully experienced in the complete game lifecycle - from initial concept to store 
                  publication. My expertise includes marketing strategies, user acquisition, and working 
                  with top publishers to maximize game success and reach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Games
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GameCard 
              title="Bolt Pop 3D" 
              url="https://play.google.com/store/apps/details?id=com.AlphaDen.BoltPop3D"
              description="Addictive 3D puzzle game with satisfying bolt mechanics"
              downloads="50K+ Downloads"
            />
            <GameCard 
              title="Aqua Spin" 
              url="https://play.google.com/store/apps/details?id=com.AlphaDen.AuqaSpin"
              description="Refreshing water-based puzzle adventure"
              downloads="30K+ Downloads"
            />
            <GameCard 
              title="Collect Flowers" 
              url="https://play.google.com/store/apps/details?id=com.AlphaDen.CollectFlowers"
              description="Beautiful flower collection game"
              downloads="25K+ Downloads"
            />
            <GameCard 
              title="Newspaper Maker" 
              url="https://play.google.com/store/apps/details?id=com.AlphaDen.NewspaperMaker"
              description="Creative newspaper design simulator"
              downloads="40K+ Downloads"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-white/50 backdrop-blur-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Gamepad2 className="w-6 h-6 mr-2 text-purple-600" />
                Game Development
              </h3>
              <div className="flex flex-wrap">
                <SkillBadge skill="Unity 3D" color="bg-purple-500" />
                <SkillBadge skill="C#" color="bg-blue-500" />
                <SkillBadge skill="Mobile Games" color="bg-green-500" />
                <SkillBadge skill="Game Design" color="bg-yellow-500" />
                <SkillBadge skill="Android" color="bg-red-500" />
                <SkillBadge skill="iOS" color="bg-gray-500" />
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Brain className="w-6 h-6 mr-2 text-blue-600" />
                AI & Modern Tech
              </h3>
              <div className="flex flex-wrap">
                <SkillBadge skill="AI Game Dev" color="bg-purple-500" />
                <SkillBadge skill="AI Art Creation" color="bg-pink-500" />
                <SkillBadge skill="Workflow Automation" color="bg-green-500" />
                <SkillBadge skill="LLM Integration" color="bg-blue-500" />
                <SkillBadge skill="API Development" color="bg-red-500" />
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Zap className="w-6 h-6 mr-2 text-yellow-600" />
                Business & Marketing
              </h3>
              <div className="flex flex-wrap">
                <SkillBadge skill="Game Publishing" color="bg-purple-500" />
                <SkillBadge skill="Store Optimization" color="bg-green-500" />
                <SkillBadge skill="User Acquisition" color="bg-blue-500" />
                <SkillBadge skill="Analytics" color="bg-red-500" />
                <SkillBadge skill="Monetization" color="bg-yellow-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Innovation - AiMatch */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Current Innovation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pioneering the future of AI-powered social connections
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 p-8 text-white">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">AiMatch</h3>
                      <p className="text-white/80">Your Smart Social Companion Finder</p>
                    </div>
                  </div>
                  <a href="https://aimatch.alphaden.club" target="_blank" rel="noopener noreferrer" 
                     className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </a>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-3 flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      What is AiMatch?
                    </h4>
                    <p className="text-white/90 leading-relaxed">
                      Looking for a co-founder, creative partner, gym buddy, or movie mate? 
                      Just chat with our AI — it learns about you and helps connect you with 
                      the perfect match based on real conversations, not just profiles.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-3 flex items-center">
                      <Rocket className="w-5 h-5 mr-2" />
                      Current Status
                    </h4>
                    <div className="bg-white/20 rounded-lg p-4">
                      <p className="font-semibold mb-2">🚀 Looking for Co-Founder</p>
                      <p className="text-sm text-white/80">
                        Join me in revolutionizing how people connect and find their perfect companions
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">AI-Powered</span>
                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">Social Matching</span>
                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">Conversation-Based</span>
                  <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">Smart Connections</span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <MessageCircle className="w-6 h-6 text-purple-600" />
                    </div>
                    <h5 className="font-semibold text-gray-800 mb-2">Chat with AI</h5>
                    <p className="text-sm text-gray-600">Natural conversations that help AI understand your preferences</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Brain className="w-6 h-6 text-pink-600" />
                    </div>
                    <h5 className="font-semibold text-gray-800 mb-2">Smart Learning</h5>
                    <p className="text-sm text-gray-600">AI learns from real conversations, not just profile data</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <h5 className="font-semibold text-gray-800 mb-2">Perfect Matches</h5>
                    <p className="text-sm text-gray-600">Find co-founders, gym buddies, creative partners & more</p>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <a href="https://aimatch.alphaden.club" target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <Globe className="w-5 h-5 mr-2" />
                    Visit AiMatch
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
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Beyond Code
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PersonalCard 
              icon={Dumbbell} 
              title="Fitness Beast" 
              items={[
                "10,000+ steps daily",
                "Bench: 100kg PR",
                "Squats: 80kg PR", 
                "Deadlift: 160kg PR"
              ]}
              color="bg-red-500"
            />
            <PersonalCard 
              icon={Play} 
              title="Anime Enthusiast" 
              items={[
                "Demon Slayer ⚔️",
                "Jujutsu Kaisen 👻",
                "Re:Zero 🔄",
                "Dragon Ball Z 🐉"
              ]}
              color="bg-blue-500"
            />
            <PersonalCard 
              icon={Gamepad2} 
              title="Gaming Passion" 
              items={[
                "Fortnite (Current)",
                "Super Mario 🍄",
                "Bomberman 💣",
                "Dangerous Dave 🏃"
              ]}
              color="bg-purple-500"
            />
            <PersonalCard 
              icon={Plane} 
              title="Life Enthusiast" 
              items={[
                "Travel Explorer 🌍",
                "Food Lover 🍜",
                "Sleep Optimizer 😴",
                "Coffee Addict ☕"
              ]}
              color="bg-green-500"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Create Something Amazing</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ready to bring your game idea to life? Let's collaborate and create the next big hit!
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="mailto:jamesderaja@gmail.com" 
               className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              jamesderaja@gmail.com
            </a>
            <a href="mailto:james@alphaden.com" 
               className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              james@alphaden.com
            </a>
            <a href="tel:+917708140455" 
               className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              +91-7708140455
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://www.linkedin.com/in/james-de-raja/" target="_blank" rel="noopener noreferrer"
               className="bg-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 flex items-center">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            <a href="https://www.instagram.com/jamesderaja" target="_blank" rel="noopener noreferrer"
               className="bg-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 flex items-center">
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
            </a>
            <a href="https://alphaden.club" target="_blank" rel="noopener noreferrer"
               className="bg-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              AlphaDen Studio
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
              <Gamepad2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold">James De Raja</span>
          </div>
          <p className="text-gray-400">
            🎮 Turning Ideas into Amazing Games | 🚀 Powered by AI & Innovation | 🏢 Founder of AlphaDen Studio
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;