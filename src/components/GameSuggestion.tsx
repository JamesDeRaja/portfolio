import React, { useState } from 'react';
import { Gamepad2, Sparkles, Send, Mail, MessageSquare, Loader } from 'lucide-react';

const GameSuggestion = () => {
  const [formData, setFormData] = useState({
    email: '',
    gameType: '',
    customGameType: '',
    character: '',
    customCharacter: '',
    control: '',
    customControl: '',
    additionalInfo: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const gameTypes = [
    'Hyper Casual',
    'Hybrid Casual',
    'Puzzle',
    'Action',
    'Adventure',
    'Racing',
    'Simulation',
    'Strategy',
    'Sports',
    'Arcade',
    'Custom'
  ];

  const characters = [
    'Human Character',
    'Animal',
    'Robot/Mech',
    'Fantasy Creature',
    'Vehicle',
    'Abstract Shape',
    'Food Item',
    'Ball/Sphere',
    'Block/Cube',
    'Stick Figure',
    'Custom'
  ];

  const controls = [
    'Swipe',
    'Joystick',
    'Tap',
    'Hold',
    'Draw',
    'Drag',
    'Pinch/Zoom',
    'Tilt',
    'Multi-touch',
    'Voice Control',
    'Custom'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  type GamePreferences = {
  gameType: string;
  character: string;
  control: string;
  additionalInfo: string;
};

  const generateGameSuggestion = async (preferences: GamePreferences) => {
    try {
      const response = await fetch('/api/generate-game-suggestion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(preferences),
      });

      if (!response.ok) {
        throw new Error('Failed to generate game suggestion');
      }

      const data = await response.json();
      return data.suggestion;
    } catch (error) {
      console.error('Error generating game suggestion:', error);
      throw error;
    }
  };

  const sendEmail = async (email: string, gameSuggestion: string, preferences: GamePreferences) => {
    try {
      const response = await fetch('/api/send-game-suggestion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          gameSuggestion,
          preferences
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      return await response.json();
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.gameType || !formData.character || !formData.control) {
      setMessage('Please fill in all required fields!');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      // Prepare preferences object
      const preferences = {
        gameType: formData.gameType === 'Custom' ? formData.customGameType : formData.gameType,
        character: formData.character === 'Custom' ? formData.customCharacter : formData.character,
        control: formData.control === 'Custom' ? formData.customControl : formData.control,
        additionalInfo: formData.additionalInfo
      };

      // Generate game suggestion using Gemini AI
      const gameSuggestion = await generateGameSuggestion(preferences);

      // Send email with the suggestion
      await sendEmail(formData.email, gameSuggestion, preferences);

      setMessage('🎉 Your personalized game suggestion has been sent to your email!');
      
      // Reset form
      setFormData({
        email: '',
        gameType: '',
        customGameType: '',
        character: '',
        customCharacter: '',
        control: '',
        customControl: '',
        additionalInfo: ''
      });

    } catch {
      setMessage('❌ Sorry, there was an error generating your game suggestion. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="game-suggestion" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-16 w-8 h-8 bg-gray-200 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-6 h-6 bg-gray-300 rotate-45 animate-float-medium"></div>
        <div className="absolute top-1/3 right-1/4 w-10 h-10 bg-gray-200 rounded-full animate-float-fast"></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-gray-300 rotate-45 animate-spin-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-12 h-12 text-black mr-4 hover-spin-scale" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Get Your Game Suggestion
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us your preferences and our AI will generate a personalized game concept just for you
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Email Field */}
              <div className="mb-8">
                <div className="text-center mb-4">
                  <Mail className="w-8 h-8 text-black mx-auto mb-2 hover-rotate" />
                  <h3 className="text-lg font-bold text-gray-900">Your Email Address</h3>
                  <p className="text-gray-600 text-sm">We'll send your personalized game suggestion here</p>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 bg-white hover:border-gray-400"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Game Type */}
                <div className="space-y-4">
                  <div className="text-center">
                    <Gamepad2 className="w-12 h-12 text-black mx-auto mb-4 hover-rotate" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Type of Game</h3>
                    <p className="text-gray-600 text-sm">What genre interests you?</p>
                  </div>
                  <select
                    name="gameType"
                    value={formData.gameType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 bg-white hover:border-gray-400"
                    required
                  >
                    <option value="">Select Game Type</option>
                    {gameTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                  
                  {formData.gameType === 'Custom' && (
                    <input
                      type="text"
                      name="customGameType"
                      value={formData.customGameType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 bg-white hover:border-gray-400"
                      placeholder="Describe your custom game type"
                      required
                    />
                  )}
                </div>

                {/* Character/Toy */}
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 hover-wiggle cursor-pointer">
                      <span className="text-2xl">🎭</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Character/Toy</h3>
                    <p className="text-gray-600 text-sm">What should the player control?</p>
                  </div>
                  <select
                    name="character"
                    value={formData.character}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 bg-white hover:border-gray-400"
                    required
                  >
                    <option value="">Select Character</option>
                    {characters.map((character, index) => (
                      <option key={index} value={character}>{character}</option>
                    ))}
                  </select>
                  
                  {formData.character === 'Custom' && (
                    <input
                      type="text"
                      name="customCharacter"
                      value={formData.customCharacter}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 bg-white hover:border-gray-400"
                      placeholder="Describe your custom character"
                      required
                    />
                  )}
                </div>

                {/* Control Type */}
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 hover-pulse-grow cursor-pointer">
                      <span className="text-2xl">👆</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Control Type</h3>
                    <p className="text-gray-600 text-sm">How should players interact?</p>
                  </div>
                  <select
                    name="control"
                    value={formData.control}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 bg-white hover:border-gray-400"
                    required
                  >
                    <option value="">Select Control</option>
                    {controls.map((control, index) => (
                      <option key={index} value={control}>{control}</option>
                    ))}
                  </select>
                  
                  {formData.control === 'Custom' && (
                    <input
                      type="text"
                      name="customControl"
                      value={formData.customControl}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 bg-white hover:border-gray-400"
                      placeholder="Describe your custom control method"
                      required
                    />
                  )}
                </div>
              </div>

              {/* Additional Info */}
              <div className="space-y-4">
                <div className="text-center">
                  <MessageSquare className="w-8 h-8 text-black mx-auto mb-2 hover-wiggle" />
                  <h3 className="text-lg font-bold text-gray-900">Additional Information</h3>
                  <p className="text-gray-600 text-sm">Any specific features, themes, or ideas you'd like to include?</p>
                </div>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 bg-white hover:border-gray-400"
                  placeholder="Tell us more about your ideal game... (optional)"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-8">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:rotate-1 flex items-center justify-center space-x-3 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      <span>Generating Your Game...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 hover-wiggle" />
                      <span>Get My AI Game Suggestion</span>
                    </>
                  )}
                </button>
                
                {message && (
                  <p className={`mt-4 text-sm ${message.includes('🎉') ? 'text-green-600' : 'text-red-600'}`}>
                    {message}
                  </p>
                )}
                
                <p className="text-gray-500 text-sm mt-4">
                  Our AI will analyze your preferences and email you a detailed game concept
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameSuggestion;