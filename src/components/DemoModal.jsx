import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiPlay, FiMic, FiCheckCircle, FiAward, FiGlobe } = FiIcons;

const DemoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] relative"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-1.5 bg-gradient-to-r from-primary-500 to-blue-500" />
          
          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <motion.h2 
                className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                See VoiceType in Action
              </motion.h2>
              
              <motion.button
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100"
              >
                <SafeIcon icon={FiX} className="w-6 h-6" />
              </motion.button>
            </div>
            
            <div className="space-y-8">
              {/* Video Section */}
              <motion.div 
                className="relative overflow-hidden rounded-2xl aspect-video bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <motion.div 
                    className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-blue-600 rounded-full flex items-center justify-center">
                      <SafeIcon icon={FiPlay} className="w-8 h-8 text-white ml-1" />
                    </div>
                  </motion.div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <h3 className="text-xl font-bold mb-2">VoiceType Demo</h3>
                  <p className="text-white/80">Watch how VoiceType transforms voice into perfect text</p>
                </div>
              </motion.div>
              
              {/* Features Grid */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="space-y-6">
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <SafeIcon icon={FiMic} className="w-5 h-5 text-primary-600 mr-2" />
                    How It Works
                  </motion.h3>
                  
                  <motion.ul 
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {[
                      'Speak naturally into your device',
                      'Watch real-time transcription as you talk',
                      'AI automatically enhances your text',
                      'Edit, save, and share your content',
                      'Integrate with your favorite apps'
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <div className="mt-1 mr-3 flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-primary-600 text-sm font-bold">{index + 1}</span>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
                
                <div className="space-y-6">
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <SafeIcon icon={FiAward} className="w-5 h-5 text-primary-600 mr-2" />
                    Key Benefits
                  </motion.h3>
                  
                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {[
                      { title: 'Save 75% of typing time', desc: 'Speak 3x faster than you type' },
                      { title: '99.5% accuracy rate', desc: 'Industry-leading precision' },
                      { title: '35+ languages supported', desc: 'Global communication coverage' },
                      { title: 'Enterprise-grade security', desc: 'End-to-end encryption' }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start bg-gradient-to-r from-gray-50 to-white p-3 rounded-xl border border-gray-100"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ y: -2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)' }}
                      >
                        <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-gray-900">{item.title}</h4>
                          <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Language Support */}
              <motion.div 
                className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center mb-4">
                  <SafeIcon icon={FiGlobe} className="w-5 h-5 text-primary-600 mr-2" />
                  <h3 className="text-lg font-bold text-gray-900">Global Language Support</h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
                  {['English 🇺🇸', 'Spanish 🇪🇸', 'French 🇫🇷', 'German 🇩🇪', 'Chinese 🇨🇳', 
                    'Japanese 🇯🇵', 'Russian 🇷🇺', 'Arabic 🇸🇦', 'Hindi 🇮🇳', 'Portuguese 🇧🇷'
                  ].map((lang, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white px-3 py-2 rounded-lg text-sm text-center border border-gray-100 shadow-sm"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.05 }}
                      whileHover={{ y: -2, backgroundColor: '#f5f7ff' }}
                    >
                      {lang}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* CTA */}
              <motion.div 
                className="flex flex-col md:flex-row justify-center items-center gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.button 
                  onClick={onClose}
                  className="bg-gradient-to-r from-primary-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg w-full md:w-auto"
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(79, 70, 229, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                </motion.button>
                
                <motion.button 
                  onClick={onClose}
                  className="px-8 py-4 border border-gray-200 rounded-xl font-semibold text-gray-600 hover:bg-gray-50 transition-colors w-full md:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DemoModal;