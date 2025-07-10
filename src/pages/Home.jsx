import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMic, FiEdit3, FiGlobe, FiShield, FiZap, FiUsers, FiCheckCircle, FiArrowRight } = FiIcons;

const Home = ({ onShowAuth, onShowDemo }) => {
  const features = [
    {
      icon: FiMic,
      title: 'Voice-to-Text Conversion',
      description: 'Convert spoken words into text with 99% accuracy using advanced AI technology.',
    },
    {
      icon: FiEdit3,
      title: 'AI Writing Enhancement',
      description: 'Automatically improve your writing with grammar corrections and style suggestions.',
    },
    {
      icon: FiGlobe,
      title: '35+ Languages',
      description: 'Support for over 35 languages with native-level understanding and context.',
    },
    {
      icon: FiShield,
      title: 'Privacy First',
      description: 'End-to-end encryption ensures your data remains private and secure.',
    },
    {
      icon: FiZap,
      title: 'Real-time Processing',
      description: 'Instant transcription and enhancement for seamless workflow integration.',
    },
    {
      icon: FiUsers,
      title: 'Team Collaboration',
      description: 'Share and collaborate on voice-generated content with your team.',
    },
  ];

  const integrations = [
    'Notion', 'Linear', 'Slack', 'Microsoft Teams', 'Google Docs',
    'Zoom', 'Discord', 'Telegram', 'WhatsApp', 'Email Clients', 'VS Code', 'Figma'
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full mb-6 shadow-sm"
              >
                <span className="text-sm font-semibold flex items-center">
                  <span className="mr-2">🎉</span> AI-Powered Voice Recognition
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Transform Your Voice Into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">
                  Perfect Text
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-600 mb-8 max-w-xl"
              >
                VoiceType uses advanced AI to convert your speech into polished, professional text 
                across 35+ languages with seamless integration into your favorite apps.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button 
                  onClick={onShowAuth}
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 15px rgba(79, 70, 229, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary-600 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Free Trial
                </motion.button>
                
                <motion.button 
                  onClick={onShowDemo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center bg-white text-primary-600 border border-primary-200 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-50 transition-colors shadow-md"
                >
                  <SafeIcon icon={FiZap} className="w-5 h-5 mr-2" />
                  Watch Demo
                </motion.button>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 flex items-center space-x-2 text-gray-500"
              >
                <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500" />
                <span>No credit card required</span>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-primary-600 to-blue-600 h-3"></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                          <SafeIcon icon={FiMic} className="w-5 h-5 text-primary-600" />
                        </div>
                        <span className="font-medium">Voice Recording</span>
                      </div>
                      <div className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                        Recording
                      </div>
                    </div>
                    
                    <div className="mb-6 bg-gray-50 rounded-xl p-4">
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="h-2 w-20 bg-primary-200 rounded-full mb-3"
                      ></motion.div>
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                        className="h-2 w-40 bg-primary-300 rounded-full mb-3"
                      ></motion.div>
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                        className="h-2 w-32 bg-primary-200 rounded-full"
                      ></motion.div>
                    </div>
                    
                    <div className="border-t border-gray-100 pt-4">
                      <h3 className="text-sm font-medium text-gray-500 mb-2">Enhanced Text</h3>
                      <p className="text-gray-800">
                        The quarterly report shows a 27% increase in revenue compared to last year's projections.
                      </p>
                      <div className="mt-4 flex justify-end">
                        <button className="px-3 py-2 bg-primary-600 text-white text-sm rounded-lg">
                          Save & Share
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <motion.div 
                  className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-full z-0"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                ></motion.div>
                
                <motion.div 
                  className="absolute -top-6 -left-6 w-20 h-20 bg-primary-100 rounded-full z-0"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 -z-10 w-[400px] h-[400px] bg-primary-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[300px] h-[300px] bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full mb-4">
              <span className="text-sm font-semibold">Powerful Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Designed for Modern Productivity
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of voice-to-text technology with AI-powered enhancements
            </p>
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <SafeIcon icon={feature.icon} className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-blue-50 -z-10"></div>
        <div className="absolute top-0 right-0 -z-10 w-[300px] h-[300px] bg-primary-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[300px] h-[300px] bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-white text-primary-600 rounded-full mb-4 shadow-sm">
              <span className="text-sm font-semibold">Seamless Integration</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Works With Your Favorite Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              VoiceType integrates with the apps you already use
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {integrations.map((integration, index) => (
              <motion.div 
                key={index}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
                }}
                className="bg-white rounded-xl p-4 shadow-md text-center flex items-center justify-center hover:bg-gradient-to-br hover:from-gray-50 hover:to-white transition-all duration-300"
              >
                <span className="text-sm font-medium text-gray-700">
                  {integration}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-blue-600 -z-10"></div>
        <div className="absolute top-0 right-0 -z-10 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who've revolutionized their productivity with VoiceType
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                onClick={onShowAuth}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg"
              >
                Start Free Trial
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-700/50 transition-colors border border-white/30 backdrop-blur-sm"
              >
                <span>Contact Sales</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
            <p className="mt-6 text-primary-100">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;