import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Dashboard from './pages/Dashboard';
import AuthModal from './components/AuthModal';
import DemoModal from './components/DemoModal';
import { VoiceProvider } from './context/VoiceContext';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time for the premium animation
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  const handleAuth = (userData) => {
    setUser(userData);
    setShowAuthModal(false);
  };

  const handleSignOut = () => {
    setUser(null);
  };

  return (
    <VoiceProvider>
      <Router>
        <AnimatePresence>
          {!pageLoaded && (
            <motion.div 
              className="fixed inset-0 bg-gradient-premium from-primary-600 to-blue-600 flex items-center justify-center z-50"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="bg-white rounded-3xl p-8 shadow-premium"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-24 h-24 flex items-center justify-center bg-gradient-premium from-primary-500 to-primary-700 rounded-2xl mb-4 mx-auto">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C11.4477 2 11 2.44772 11 3V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V3C13 2.44772 12.5523 2 12 2Z" fill="white"/>
                    <path d="M8 6C7.44772 6 7 6.44772 7 7V17C7 17.5523 7.44772 18 8 18C8.55228 18 9 17.5523 9 17V7C9 6.44772 8.55228 6 8 6Z" fill="white" fillOpacity="0.8"/>
                    <path d="M16 6C15.4477 6 15 6.44772 15 7V17C15 17.5523 15.4477 18 16 18C16.5523 18 17 17.5523 17 17V7C17 6.44772 16.5523 6 16 6Z" fill="white" fillOpacity="0.8"/>
                    <path d="M4 10C3.44772 10 3 10.4477 3 11V13C3 13.5523 3.44772 14 4 14C4.55228 14 5 13.5523 5 13V11C5 10.4477 4.55228 10 4 10Z" fill="white" fillOpacity="0.6"/>
                    <path d="M20 10C19.4477 10 19 10.4477 19 11V13C19 13.5523 19.4477 14 20 14C20.5523 14 21 13.5523 21 13V11C21 10.4477 20.5523 10 20 10Z" fill="white" fillOpacity="0.6"/>
                  </svg>
                </div>
                <motion.h1 
                  className="text-3xl font-bold text-center text-gradient mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  VoiceType
                </motion.h1>
                <motion.p 
                  className="text-gray-500 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Loading your experience...
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <Header 
            user={user} 
            onSignOut={handleSignOut} 
            onShowAuth={() => setShowAuthModal(true)} 
            onShowDemo={() => setShowDemoModal(true)} 
          />
          <main className="pt-16">
            <Routes>
              <Route 
                path="/" 
                element={
                  <Home 
                    onShowAuth={() => setShowAuthModal(true)} 
                    onShowDemo={() => setShowDemoModal(true)} 
                  />
                } 
              />
              <Route path="/features" element={<Features />} />
              <Route 
                path="/pricing" 
                element={<Pricing onShowAuth={() => setShowAuthModal(true)} />} 
              />
              <Route 
                path="/dashboard" 
                element={user ? <Dashboard /> : <Navigate to="/" replace />} 
              />
            </Routes>
          </main>
          
          {/* Modals */}
          <AnimatePresence>
            {showAuthModal && (
              <AuthModal 
                isOpen={showAuthModal} 
                onClose={() => setShowAuthModal(false)} 
                onAuth={handleAuth} 
              />
            )}
            
            {showDemoModal && (
              <DemoModal 
                isOpen={showDemoModal} 
                onClose={() => setShowDemoModal(false)} 
              />
            )}
          </AnimatePresence>
          
          {/* Decorative Elements */}
          <div className="fixed bottom-0 left-0 w-full h-24 pointer-events-none overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-50/50 to-transparent"></div>
            <div className="absolute bottom-[-50px] left-[-50px] w-[200px] h-[200px] rounded-full bg-primary-200/20 blur-3xl"></div>
            <div className="absolute bottom-[-30px] right-[-80px] w-[300px] h-[300px] rounded-full bg-blue-200/20 blur-3xl"></div>
          </div>
        </div>
      </Router>
    </VoiceProvider>
  );
}

export default App;