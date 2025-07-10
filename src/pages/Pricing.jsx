import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiX, FiStar } = FiIcons;

const Pricing = ({ onShowAuth }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      price: { monthly: 0, annual: 0 },
      description: 'Perfect for trying out VoiceType',
      features: [
        { name: '100 minutes per month', included: true },
        { name: 'Basic voice recognition', included: true },
        { name: '5 languages', included: true },
        { name: 'Standard accuracy', included: true },
        { name: 'Basic formatting', included: true },
        { name: 'Email support', included: true },
        { name: 'AI enhancement', included: false },
        { name: 'Custom vocabulary', included: false },
        { name: 'Team collaboration', included: false },
        { name: 'Priority support', included: false },
      ],
      popular: false,
      cta: 'Start Free'
    },
    {
      name: 'Pro',
      price: { monthly: 19, annual: 15 },
      description: 'For professionals and power users',
      features: [
        { name: '1000 minutes per month', included: true },
        { name: 'Advanced voice recognition', included: true },
        { name: '35+ languages', included: true },
        { name: '99.5% accuracy', included: true },
        { name: 'AI enhancement', included: true },
        { name: 'Custom vocabulary', included: true },
        { name: 'Priority support', included: true },
        { name: 'Cloud sync', included: true },
        { name: 'Team collaboration', included: false },
        { name: 'API access', included: false },
      ],
      popular: true,
      cta: 'Start Pro Trial'
    },
    {
      name: 'Enterprise',
      price: { monthly: 49, annual: 39 },
      description: 'For teams and organizations',
      features: [
        { name: 'Unlimited minutes', included: true },
        { name: 'Advanced voice recognition', included: true },
        { name: '35+ languages', included: true },
        { name: '99.9% accuracy', included: true },
        { name: 'AI enhancement', included: true },
        { name: 'Custom vocabulary', included: true },
        { name: 'Team collaboration', included: true },
        { name: 'API access', included: true },
        { name: 'Dedicated support', included: true },
        { name: 'Custom integrations', included: true },
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const faqs = [
    {
      question: 'How accurate is VoiceType?',
      answer: 'VoiceType achieves 99.5% accuracy for clear speech in supported languages. Our AI continuously learns and improves accuracy over time.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use end-to-end encryption and follow a zero data retention policy. Your voice data is processed securely and never stored on our servers.'
    },
    {
      question: 'Can I use VoiceType offline?',
      answer: 'VoiceType requires an internet connection for real-time processing and AI enhancement features. However, we\'re working on offline capabilities for basic transcription.'
    },
    {
      question: 'What languages are supported?',
      answer: 'We support 35+ languages including English, Spanish, French, German, Chinese, Japanese, and many more. New languages are added regularly.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. You\'ll continue to have access to paid features until the end of your billing period.'
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
            Simple,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">
              {' '}Transparent Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your needs. All plans include our core features with no hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-primary-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded-full text-xs font-medium">
                Save 20%
              </span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-br from-primary-50 to-blue-50 ring-2 ring-primary-500'
                  : 'bg-white shadow-lg'
              } hover:shadow-xl transition-shadow`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <SafeIcon icon={FiStar} className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center space-x-1">
                  <span className="text-4xl font-bold text-gray-900">
                    ${isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="text-gray-500">/month</span>
                </div>
                {isAnnual && plan.price.annual < plan.price.monthly && (
                  <p className="text-sm text-primary-600 mt-2">
                    Save ${(plan.price.monthly - plan.price.annual) * 12}/year
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <SafeIcon
                      icon={feature.included ? FiCheck : FiX}
                      className={`w-5 h-5 ${
                        feature.included ? 'text-green-500' : 'text-gray-400'
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        feature.included ? 'text-gray-700' : 'text-gray-400'
                      }`}
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={onShowAuth}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who trust VoiceType for their voice-to-text needs
          </p>
          <button
            onClick={onShowAuth}
            className="bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Start Your Free Trial
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;