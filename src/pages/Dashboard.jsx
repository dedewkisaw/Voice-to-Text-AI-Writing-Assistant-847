import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useVoice } from '../context/VoiceContext';
import VoiceRecorder from '../components/VoiceRecorder';
import LanguageSelector from '../components/LanguageSelector';
import TranscriptCard from '../components/TranscriptCard';
import StatsCard from '../components/StatsCard';

const { FiMic, FiFileText, FiClock, FiTrendingUp, FiDownload, FiTrash2, FiEdit3, FiSearch, FiFilter } = FiIcons;

const Dashboard = () => {
  const { transcripts, removeTranscript, isProcessing } = useVoice();
  const [isRecording, setIsRecording] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en-US');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('all');
  const [selectedTranscripts, setSelectedTranscripts] = useState([]);

  const filteredTranscripts = transcripts.filter(transcript => {
    const matchesSearch = transcript.original.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transcript.enhanced.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterBy === 'all' || transcript.language === filterBy;
    return matchesSearch && matchesFilter;
  });

  const stats = {
    totalTranscripts: transcripts.length,
    totalWords: transcripts.reduce((acc, t) => acc + t.enhanced.split(' ').length, 0),
    totalMinutes: Math.floor(transcripts.length * 2.5), // Estimated
    accuracy: '99.5%'
  };

  const handleSelectTranscript = (id) => {
    setSelectedTranscripts(prev => 
      prev.includes(id) 
        ? prev.filter(t => t !== id)
        : [...prev, id]
    );
  };

  const handleDeleteSelected = () => {
    selectedTranscripts.forEach(id => removeTranscript(id));
    setSelectedTranscripts([]);
  };

  const handleExportSelected = () => {
    const selected = transcripts.filter(t => selectedTranscripts.includes(t.id));
    const content = selected.map(t => `${t.enhanced}\n\n---\n\n`).join('');
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'voice-transcripts.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900 mb-2"
          >
            Voice Dashboard
          </motion.h1>
          <p className="text-gray-600">
            Manage your voice transcriptions and AI-enhanced text
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatsCard
            icon={FiFileText}
            title="Total Transcripts"
            value={stats.totalTranscripts}
            color="blue"
          />
          <StatsCard
            icon={FiEdit3}
            title="Words Generated"
            value={stats.totalWords.toLocaleString()}
            color="green"
          />
          <StatsCard
            icon={FiClock}
            title="Minutes Saved"
            value={stats.totalMinutes}
            color="purple"
          />
          <StatsCard
            icon={FiTrendingUp}
            title="Accuracy"
            value={stats.accuracy}
            color="orange"
          />
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative flex-1">
                <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search transcripts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {/* Filter */}
              <div className="relative">
                <SafeIcon icon={FiFilter} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={filterBy}
                  onChange={(e) => setFilterBy(e.target.value)}
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white"
                >
                  <option value="all">All Languages</option>
                  <option value="en-US">English (US)</option>
                  <option value="es-ES">Spanish</option>
                  <option value="fr-FR">French</option>
                  <option value="de-DE">German</option>
                </select>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button
                onClick={handleExportSelected}
                disabled={selectedTranscripts.length === 0}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <SafeIcon icon={FiDownload} className="w-4 h-4" />
                <span>Export</span>
              </button>
              <button
                onClick={handleDeleteSelected}
                disabled={selectedTranscripts.length === 0}
                className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <SafeIcon icon={FiTrash2} className="w-4 h-4" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>

        {/* Transcripts */}
        <div className="space-y-6">
          {isProcessing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-50 border border-blue-200 rounded-xl p-6"
            >
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                <span className="text-blue-700 font-medium">Processing your voice input...</span>
              </div>
            </motion.div>
          )}

          {filteredTranscripts.length === 0 && !isProcessing ? (
            <div className="text-center py-12">
              <SafeIcon icon={FiMic} className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No transcripts yet</h3>
              <p className="text-gray-500 mb-6">
                Start recording your voice to see transcripts here
              </p>
              <button
                onClick={() => setIsRecording(true)}
                className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Start Recording
              </button>
            </div>
          ) : (
            <div className="grid gap-6">
              {filteredTranscripts.map((transcript) => (
                <TranscriptCard
                  key={transcript.id}
                  transcript={transcript}
                  isSelected={selectedTranscripts.includes(transcript.id)}
                  onSelect={() => handleSelectTranscript(transcript.id)}
                  onDelete={() => removeTranscript(transcript.id)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Floating Controls */}
        <div className="fixed bottom-8 right-8 flex flex-col items-end space-y-4 z-50">
          <LanguageSelector
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
          />
          <VoiceRecorder
            isRecording={isRecording}
            onRecordingChange={setIsRecording}
            language={selectedLanguage}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;