import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMic, FiEdit3, FiGlobe, FiShield, FiZap, FiUsers, FiSettings, FiCloud, FiSmartphone, FiHeadphones } = FiIcons;

const Features = () => {
  const mainFeatures = [
    {
      icon: FiMic,
      title: 'Advanced Voice Recognition',
      description: 'State-of-the-art speech recognition with 99.5% accuracy across different accents and speaking styles.',
      details: [
        'Multi-accent support',
        'Background noise filtering',
        'Real-time processing',
        'Whisper mode for quiet environments'
      ]
    },
    {
      icon: FiEdit3,
      title: 'AI-Powered Enhancement',
      description: 'Intelligent text improvement that goes beyond simple transcription to create polished content.',
      details: [
        'Grammar and spelling correction',
        'Style and tone adjustment',
        'Context-aware suggestions',
        'Professional formatting'
      ]
    },
    {
      icon: FiGlobe,
      title: 'Multilingual Support',
      description: 'Comprehensive language support with native-level understanding and cultural context.',
      details: [
        '35+ languages supported',
        'Regional dialect recognition',
        'Cultural context awareness',
        'Automatic language detection'
      ]
    },
    {
      icon: FiShield,
      title: 'Privacy & Security',
      description: 'Enterprise-grade security with end-to-end encryption and zero data retention policies.',
      details: [
        'End-to-end encryption',
        'No data storage',
        'GDPR compliant',
        'SOC 2 certified'
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: FiZap,
      title: 'Real-time Processing',
      description: 'Instant transcription and enhancement for seamless workflow integration.'
    },
    {
      icon: FiUsers,
      title: 'Team Collaboration',
      description: 'Share and collaborate on voice-generated content with your team.'
    },
    {
      icon: FiSettings,
      title: 'Custom Vocabulary',
      description: 'Add industry-specific terms and personal vocabulary for better accuracy.'
    },
    {
      icon: FiCloud,
      title: 'Cloud Sync',
      description: 'Access your transcriptions across all devices with secure cloud synchronization.'
    },
    {
      icon: FiSmartphone,
      title: 'Cross-Platform',
      description: 'Works seamlessly across desktop, mobile, and web platforms.'
    },
    {
      icon: FiHeadphones,
      title: 'Audio Import',
      description: 'Import and transcribe existing audio files with batch processing support.'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Features That
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">
              {' '}Empower Your Voice
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the comprehensive suite of features designed to transform your voice into perfect text
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={feature.icon} className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            More Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <SafeIcon icon={feature.icon} className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Feature Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Why Choose VoiceType?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">99.5%</div>
              <div className="text-gray-700">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">35+</div>
              <div className="text-gray-700">Languages Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">0ms</div>
              <div className="text-gray-700">Processing Delay</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;