import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiGlobe, FiChevronDown, FiSearch, FiCheck } = FiIcons;

const LanguageSelector = ({ selectedLanguage, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const languages = [
    { code: 'en-US', name: 'English (US)', flag: '🇺🇸' },
    { code: 'en-GB', name: 'English (UK)', flag: '🇬🇧' },
    { code: 'es-ES', name: 'Spanish', flag: '🇪🇸' },
    { code: 'fr-FR', name: 'French', flag: '🇫🇷' },
    { code: 'de-DE', name: 'German', flag: '🇩🇪' },
    { code: 'it-IT', name: 'Italian', flag: '🇮🇹' },
    { code: 'pt-BR', name: 'Portuguese', flag: '🇧🇷' },
    { code: 'ru-RU', name: 'Russian', flag: '🇷🇺' },
    { code: 'ja-JP', name: 'Japanese', flag: '🇯🇵' },
    { code: 'ko-KR', name: 'Korean', flag: '🇰🇷' },
    { code: 'zh-CN', name: 'Chinese (Simplified)', flag: '🇨🇳' },
    { code: 'ar-SA', name: 'Arabic', flag: '🇸🇦' },
    { code: 'hi-IN', name: 'Hindi', flag: '🇮🇳' },
    { code: 'nl-NL', name: 'Dutch', flag: '🇳🇱' },
    { code: 'sv-SE', name: 'Swedish', flag: '🇸🇪' },
  ];

  const filteredLanguages = searchTerm
    ? languages.filter(lang => 
        lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lang.code.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : languages;

  const currentLanguage = languages.find(lang => lang.code === selectedLanguage) || languages[0];

  const handleLanguageSelect = (languageCode) => {
    onLanguageChange(languageCode);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className="relative z-30">
      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
          >
            <div>
              {/* Search */}
              <div className="p-3 border-b border-gray-100">
                <div className="relative">
                  <SafeIcon
                    icon={FiSearch}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Search languages..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Languages List */}
              <div className="max-h-80 overflow-y-auto py-2 px-2">
                {filteredLanguages.length === 0 ? (
                  <div className="text-center py-6 text-gray-500">
                    No languages found
                  </div>
                ) : (
                  filteredLanguages.map((language) => (
                    <motion.button
                      key={language.code}
                      onClick={() => handleLanguageSelect(language.code)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-colors ${
                        selectedLanguage === language.code
                          ? 'bg-primary-50 text-primary-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-2xl">{language.flag}</span>
                      <span className="font-medium flex-1">{language.name}</span>
                      {selectedLanguage === language.code && (
                        <SafeIcon icon={FiCheck} className="w-5 h-5 text-primary-600" />
                      )}
                    </motion.button>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white hover:bg-gray-50 rounded-xl px-4 py-3 shadow-lg border border-gray-200 flex items-center space-x-2 transition-all duration-300"
      >
        <span className="text-xl">{currentLanguage.flag}</span>
        <SafeIcon icon={FiGlobe} className="w-4 h-4 text-gray-500" />
        <SafeIcon
          icon={FiChevronDown}
          className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </motion.button>
    </div>
  );
};

export default LanguageSelector;