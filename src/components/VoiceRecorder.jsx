import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useVoice } from '../context/VoiceContext';

const { 
  FiMic, 
  FiMicOff, 
  FiSend, 
  FiCopy, 
  FiTrash2, 
  FiMaximize2, 
  FiMinimize2,
  FiCheck 
} = FiIcons;

const VoiceRecorder = ({ isRecording, onRecordingChange, language }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [confidence, setConfidence] = useState(0);
  const [visualizer, setVisualizer] = useState([]);
  const { addTranscript, enhanceText } = useVoice();
  const [recognition, setRecognition] = useState(null);

  // Generate random visualizer data
  useEffect(() => {
    if (isListening) {
      const interval = setInterval(() => {
        const values = Array.from({ length: 20 }, () => 
          Math.random() * (isListening ? 1 : 0.3)
        );
        setVisualizer(values);
      }, 100);
      
      return () => clearInterval(interval);
    } else {
      setVisualizer(Array(20).fill(0.1));
    }
  }, [isListening]);

  const initializeRecognition = useCallback(() => {
    if ('webkitSpeechRecognition' in window) {
      const newRecognition = new window.webkitSpeechRecognition();
      newRecognition.continuous = true;
      newRecognition.interimResults = true;
      newRecognition.lang = language;

      newRecognition.onstart = () => {
        setIsListening(true);
      };

      newRecognition.onresult = (event) => {
        let finalTranscript = '';
        let interimTranscript = '';
        let currentConfidence = 0;

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          currentConfidence = event.results[i][0].confidence;
          
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interimTranscript += transcript;
          }
        }

        setConfidence(Math.round(currentConfidence * 100));
        setTranscript(prevTranscript => 
          finalTranscript ? finalTranscript : prevTranscript + interimTranscript
        );
      };

      newRecognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        onRecordingChange(false);
      };

      newRecognition.onend = () => {
        setIsListening(false);
        if (isRecording) {
          newRecognition.start();
        }
      };

      setRecognition(newRecognition);
    }
  }, [language, isRecording, onRecordingChange]);

  useEffect(() => {
    initializeRecognition();
    
    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, [initializeRecognition]);

  useEffect(() => {
    if (recognition) {
      recognition.lang = language;
    }
  }, [language, recognition]);

  useEffect(() => {
    if (recognition) {
      if (isRecording) {
        try {
          recognition.start();
        } catch (error) {
          if (error.name === 'NotAllowedError') {
            console.error('Microphone permission denied');
          }
        }
      } else {
        recognition.stop();
      }
    }
  }, [isRecording, recognition]);

  const handleToggleRecording = () => {
    if (!isRecording) {
      setIsExpanded(true);
      setTranscript('');
    }
    onRecordingChange(!isRecording);
  };

  const handleSaveTranscript = async () => {
    if (transcript.trim()) {
      const enhanced = await enhanceText(transcript);
      addTranscript({
        id: Date.now(),
        original: transcript,
        enhanced: enhanced,
        timestamp: new Date(),
        language: language,
      });
      setTranscript('');
      setIsExpanded(false);
      onRecordingChange(false);
    }
  };

  const handleCopyTranscript = () => {
    navigator.clipboard.writeText(transcript);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleClearTranscript = () => {
    setTranscript('');
  };

  return (
    <div className="relative z-40">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-24 right-0 w-96 glass-panel border border-white/20"
          >
            <div className="bg-gradient-to-r from-primary-600 to-blue-600 h-1.5"></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <motion.div 
                    animate={{ 
                      scale: isListening ? [1, 1.2, 1] : 1,
                    }}
                    transition={{ 
                      repeat: isListening ? Infinity : 0, 
                      duration: 1.5 
                    }}
                    className={`w-10 h-10 ${
                      isListening 
                        ? 'bg-red-500' 
                        : 'bg-primary-100'
                    } rounded-full flex items-center justify-center mr-3`}
                  >
                    <SafeIcon 
                      icon={isListening ? FiMic : FiMicOff} 
                      className={`w-5 h-5 ${
                        isListening ? 'text-white' : 'text-primary-600'
                      }`} 
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Voice Input</h3>
                    {isListening && (
                      <div className="flex items-center">
                        <span className="text-xs font-medium text-primary-600">
                          {confidence}% accuracy
                        </span>
                        <span className="mx-2 h-1 w-1 bg-gray-300 rounded-full"></span>
                        <span className="text-xs font-medium text-gray-500">{language}</span>
                      </div>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-full"
                >
                  <SafeIcon icon={FiMinimize2} className="w-5 h-5" />
                </button>
              </div>

              {/* Voice Visualizer */}
              {isListening && (
                <div className="flex items-center justify-center h-12 mb-4">
                  <div className="flex items-end space-x-1 h-12">
                    {visualizer.map((value, index) => (
                      <motion.div
                        key={index}
                        className="w-1.5 bg-primary-500 rounded-full"
                        animate={{ height: `${value * 100}%` }}
                        transition={{ duration: 0.2 }}
                        style={{ opacity: 0.2 + value * 0.8 }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-4">
                <div className="neu-inset p-4 min-h-[120px] max-h-[250px] overflow-y-auto">
                  {transcript ? (
                    <p className="text-sm text-gray-700 whitespace-pre-wrap">{transcript}</p>
                  ) : (
                    <p className="text-sm text-gray-400 italic">
                      {isListening ? 'Listening...' : 'Click the microphone to start speaking'}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <motion.button
                  onClick={handleCopyTranscript}
                  disabled={!transcript}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="neu-button px-4 py-2.5 text-sm font-medium disabled:opacity-50"
                >
                  <SafeIcon icon={isCopied ? FiCheck : FiCopy} className="w-4 h-4 mr-1.5" />
                  {isCopied ? 'Copied!' : 'Copy'}
                </motion.button>
                
                <motion.button
                  onClick={handleClearTranscript}
                  disabled={!transcript}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="neu-button p-2.5 text-sm font-medium disabled:opacity-50"
                >
                  <SafeIcon icon={FiTrash2} className="w-4 h-4" />
                </motion.button>
                
                <motion.button
                  onClick={handleSaveTranscript}
                  disabled={!transcript}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="neu-button bg-gradient-to-r from-primary-50 to-blue-50 px-4 py-2.5 text-primary-600 text-sm font-medium flex-1 flex items-center justify-center"
                >
                  <SafeIcon icon={FiSend} className="w-4 h-4 mr-1.5" />
                  Save
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleToggleRecording}
        className={`neu-button w-16 h-16 flex items-center justify-center ${
          isRecording
            ? 'bg-red-100 text-red-600'
            : 'bg-gradient-to-r from-blue-50 to-indigo-50 text-indigo-600'
        }`}
      >
        <SafeIcon icon={isRecording ? FiMicOff : FiMic} className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isRecording && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full animate-pulse ring-4 ring-red-200"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default VoiceRecorder;