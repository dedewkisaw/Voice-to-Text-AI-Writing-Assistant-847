import React, { createContext, useContext, useState, useCallback } from 'react';

const VoiceContext = createContext();

export const useVoice = () => {
  const context = useContext(VoiceContext);
  if (!context) {
    throw new Error('useVoice must be used within a VoiceProvider');
  }
  return context;
};

export const VoiceProvider = ({ children }) => {
  const [transcripts, setTranscripts] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const addTranscript = useCallback((transcript) => {
    setTranscripts(prev => [transcript, ...prev]);
  }, []);

  const removeTranscript = useCallback((id) => {
    setTranscripts(prev => prev.filter(t => t.id !== id));
  }, []);

  const enhanceText = useCallback(async (text) => {
    setIsProcessing(true);
    try {
      // Simulate AI enhancement (in a real app, this would call an API)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Basic text enhancement simulation
      let enhanced = text
        .replace(/\b(i)\b/g, 'I')
        .replace(/\b(im)\b/g, "I'm")
        .replace(/\b(dont)\b/g, "don't")
        .replace(/\b(wont)\b/g, "won't")
        .replace(/\b(cant)\b/g, "can't")
        .replace(/\b(shouldnt)\b/g, "shouldn't")
        .replace(/\b(wouldnt)\b/g, "wouldn't")
        .replace(/\b(couldnt)\b/g, "couldn't")
        .replace(/\b(isnt)\b/g, "isn't")
        .replace(/\b(arent)\b/g, "aren't")
        .replace(/\b(wasnt)\b/g, "wasn't")
        .replace(/\b(werent)\b/g, "weren't")
        .replace(/\b(hasnt)\b/g, "hasn't")
        .replace(/\b(havent)\b/g, "haven't")
        .replace(/\b(hadnt)\b/g, "hadn't")
        .replace(/\b(didnt)\b/g, "didn't")
        .replace(/\b(doesnt)\b/g, "doesn't")
        .replace(/\b(youre)\b/g, "you're")
        .replace(/\b(theyre)\b/g, "they're")
        .replace(/\b(were)\b/g, "we're")
        .replace(/\b(hes)\b/g, "he's")
        .replace(/\b(shes)\b/g, "she's")
        .replace(/\b(its)\b/g, "it's")
        .replace(/\b(thats)\b/g, "that's")
        .replace(/\b(whats)\b/g, "what's")
        .replace(/\b(wheres)\b/g, "where's")
        .replace(/\b(whens)\b/g, "when's")
        .replace(/\b(hows)\b/g, "how's")
        .replace(/\b(whys)\b/g, "why's");

      // Capitalize first letter of sentences
      enhanced = enhanced.replace(/(^|\. )([a-z])/g, (match, p1, p2) => p1 + p2.toUpperCase());

      return enhanced;
    } catch (error) {
      console.error('Error enhancing text:', error);
      return text;
    } finally {
      setIsProcessing(false);
    }
  }, []);

  const value = {
    transcripts,
    addTranscript,
    removeTranscript,
    enhanceText,
    isProcessing
  };

  return (
    <VoiceContext.Provider value={value}>
      {children}
    </VoiceContext.Provider>
  );
};