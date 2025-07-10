import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCopy, FiTrash2, FiEdit3, FiCheck, FiX, FiEye, FiEyeOff, FiMoreVertical, FiShare2, FiDownload } = FiIcons;

const TranscriptCard = ({ transcript, isSelected, onSelect, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(transcript.enhanced);
  const [showOriginal, setShowOriginal] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleSave = () => {
    // In a real app, this would update the transcript
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedText(transcript.enhanced);
    setIsEditing(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(showOriginal ? transcript.original : transcript.enhanced);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const getLanguageFlag = (lang) => {
    const flags = {
      'en-US': '🇺🇸',
      'en-GB': '🇬🇧',
      'es-ES': '🇪🇸',
      'fr-FR': '🇫🇷',
      'de-DE': '🇩🇪',
      'it-IT': '🇮🇹',
      'pt-BR': '🇧🇷',
      'ru-RU': '🇷🇺',
      'ja-JP': '🇯🇵',
      'ko-KR': '🇰🇷',
      'zh-CN': '🇨🇳',
      'ar-SA': '🇸🇦',
      'hi-IN': '🇮🇳',
      'nl-NL': '🇳🇱',
      'sv-SE': '🇸🇪',
    };
    return flags[lang] || '🌐';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`neu-card transition-all duration-300 ${
        isSelected ? 'ring-2 ring-primary-500 bg-primary-50 shadow-md' : 'hover:shadow-lg'
      }`}
      whileHover={{ y: -5 }}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <motion.div whileTap={{ scale: 0.9 }} className="relative">
              <input
                type="checkbox"
                checked={isSelected}
                onChange={onSelect}
                className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500 transition-all cursor-pointer"
              />
            </motion.div>
            <motion.div
              className="flex items-center space-x-2 bg-gray-50 px-3 py-1.5 rounded-full"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-lg">{getLanguageFlag(transcript.language)}</span>
              <span className="text-sm font-medium text-gray-700">
                {format(new Date(transcript.timestamp), 'MMM d, yyyy h:mm a')}
              </span>
            </motion.div>
          </div>
          <div className="flex items-center space-x-2">
            <motion.button
              onClick={() => setShowOriginal(!showOriginal)}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              title={showOriginal ? 'Show enhanced' : 'Show original'}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SafeIcon icon={showOriginal ? FiEyeOff : FiEye} className="w-4 h-4" />
            </motion.button>
            <motion.button
              onClick={handleCopy}
              className={`p-2 ${
                isCopied ? 'text-green-500' : 'text-gray-400 hover:text-gray-600'
              } hover:bg-gray-100 rounded-full transition-colors`}
              title="Copy text"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SafeIcon icon={isCopied ? FiCheck : FiCopy} className="w-4 h-4" />
            </motion.button>
            <motion.button
              onClick={() => setIsEditing(!isEditing)}
              className={`p-2 ${
                isEditing ? 'text-primary-500' : 'text-gray-400 hover:text-gray-600'
              } hover:bg-gray-100 rounded-full transition-colors`}
              title="Edit text"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SafeIcon icon={FiEdit3} className="w-4 h-4" />
            </motion.button>
            <div className="relative">
              <motion.button
                onClick={() => setShowActions(!showActions)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                title="More options"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <SafeIcon icon={FiMoreVertical} className="w-4 h-4" />
              </motion.button>
              <AnimatePresence>
                {showActions && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-1 w-48 glass-panel z-10"
                    onBlur={() => setShowActions(false)}
                  >
                    <div className="py-1">
                      <button
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                        onClick={() => setShowActions(false)}
                      >
                        <SafeIcon icon={FiShare2} className="w-4 h-4 mr-3" />
                        Share
                      </button>
                      <button
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                        onClick={() => setShowActions(false)}
                      >
                        <SafeIcon icon={FiDownload} className="w-4 h-4 mr-3" />
                        Download
                      </button>
                      <button
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        onClick={() => {
                          onDelete();
                          setShowActions(false);
                        }}
                      >
                        <SafeIcon icon={FiTrash2} className="w-4 h-4 mr-3" />
                        Delete
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {showOriginal && (
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-2 flex items-center">
              <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
              Original:
            </h4>
            <p className="text-gray-600 text-sm neu-inset p-4 rounded-xl">
              {transcript.original}
            </p>
          </div>
        )}
        <div>
          <h4 className="text-sm font-medium text-gray-500 mb-2 flex items-center">
            <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
            {showOriginal ? 'Enhanced:' : 'Text:'}
          </h4>
          {isEditing ? (
            <div className="space-y-3">
              <textarea
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                className="neu-input w-full p-4 resize-none"
                rows="4"
              />
              <div className="flex space-x-2">
                <motion.button
                  onClick={handleSave}
                  className="neu-button flex items-center space-x-1 px-3 py-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SafeIcon icon={FiCheck} className="w-4 h-4" />
                  <span>Save</span>
                </motion.button>
                <motion.button
                  onClick={handleCancel}
                  className="neu-button flex items-center space-x-1 px-3 py-2 bg-gray-50 text-gray-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SafeIcon icon={FiX} className="w-4 h-4" />
                  <span>Cancel</span>
                </motion.button>
              </div>
            </div>
          ) : (
            <p className="text-gray-900 leading-relaxed p-1">
              {transcript.enhanced}
            </p>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="px-2 py-1 bg-primary-50 text-primary-600 rounded-full">
              {transcript.enhanced.split(' ').length} words
            </div>
            <div className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
              {transcript.enhanced.length} characters
            </div>
          </div>
          <div className="flex items-center">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
              99% accurate
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TranscriptCard;