import React, { useState } from 'react';
import { Mail, Send, MessageSquare, User, Building } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [copyMessage, setCopyMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('alphadenthj@gmail.com');
      setCopyMessage('copied!');
      setTimeout(() => setCopyMessage(''), 2000);
    } catch (err) {
      console.error('Failed to copy email: ', err);
      setCopyMessage('Failed to copy email');
      setTimeout(() => setCopyMessage(''), 2000);
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send contact form data to your email
    sendContactForm();
  };

  const sendContactForm = async () => {
    try {
      const response = await fetch('/api/send-contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully! We\'ll get back to you soon.');
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending contact form:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-12 left-12 w-10 h-10 bg-gray-100 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-16 right-12 w-6 h-6 bg-gray-200 rotate-45 animate-float-medium"></div>
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-gray-150 rounded-full animate-float-fast"></div>
        <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-gray-200 rotate-45 animate-spin-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your next gaming project? Let's discuss how we can bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Start a Conversation</h3>
            <p className="text-gray-600 mb-8">
              Whether you're a publisher looking for your next hit game or have a unique project in mind, 
              we'd love to hear from you. Our team is ready to discuss how we can collaborate.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gray-100 p-3 rounded-lg border border-gray-200 hover-float cursor-pointer">
                  <Mail className="w-6 h-6 text-black hover-wiggle" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email Us</h4>
                  <button
                    onClick={copyEmailToClipboard}
                    className="text-black hover:text-gray-700 transform transition-all duration-300 hover:scale-110"
                  >
                    alphadenthj@gmail.com{copyMessage && (
                      <span className={copyMessage === 'copied!' ? 'text-green-600' : 'text-red-600'}>
                        {` - ${copyMessage}`}
                      </span>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-gray-100 p-3 rounded-lg border border-gray-200 hover-float cursor-pointer">
                  <MessageSquare className="w-6 h-6 text-gray-700 hover-rotate" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Quick Response</h4>
                  <p className="text-gray-600">We typically respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-lg p-8 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2 hover-wiggle" />
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2 hover-rotate" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  <Building className="w-4 h-4 inline mr-2 hover-spin-scale" />
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2 hover-pulse-grow" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
               className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 hover-rotate"
              >
                <Send className="w-5 h-5 hover-wiggle" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;