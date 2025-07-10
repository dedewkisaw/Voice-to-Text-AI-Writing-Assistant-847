import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMic, FiMenu, FiX, FiUser, FiLogOut, FiChevronDown } = FiIcons;

const Header = ({ user, onSignOut, onShowAuth, onShowDemo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
  ];

  if (user) {
    navItems.push({ name: 'Dashboard', path: '/dashboard' });
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const handleGetStarted = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      onShowAuth();
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass-panel' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300"
            >
              <SafeIcon icon={FiMic} className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">
              VoiceType
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 relative ${
                  isActive(item.path) ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}

            {user ? (
              <div className="flex items-center space-x-4">
                <motion.div
                  className="flex items-center space-x-2 glass-button px-3 py-2"
                  whileHover={{ y: -2, boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-xs font-bold">
                    {user.name.charAt(0)}
                  </div>
                  <span className="text-sm text-gray-700">{user.name}</span>
                  <SafeIcon icon={FiChevronDown} className="w-4 h-4 text-gray-400" />
                </motion.div>
                <motion.button
                  onClick={onSignOut}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="neu-button flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <SafeIcon icon={FiLogOut} className="w-4 h-4" />
                  <span className="text-sm">Sign Out</span>
                </motion.button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <motion.button
                  onClick={onShowDemo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="neu-button text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors"
                >
                  Watch Demo
                </motion.button>
                <motion.button
                  onClick={handleGetStarted}
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 15px rgba(79,70,229,0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="neu-button bg-gradient-to-r from-primary-50 to-blue-50 text-primary-600 px-5 py-2.5 text-sm font-medium transition-all duration-300"
                >
                  Get Started
                </motion.button>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden neu-button p-2"
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden glass-panel mt-2 overflow-hidden"
            >
              <nav className="flex flex-col p-4 space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-sm font-medium transition-colors px-4 py-2 rounded-lg ${
                      isActive(item.path)
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {user ? (
                  <div className="pt-2 border-t border-gray-100">
                    <div className="flex items-center space-x-2 mb-3 px-4 py-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-medium">
                        {user.name.charAt(0)}
                      </div>
                      <span className="text-sm text-gray-700">{user.name}</span>
                    </div>
                    <button
                      onClick={onSignOut}
                      className="flex w-full items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <SafeIcon icon={FiLogOut} className="w-4 h-4" />
                      <span className="text-sm">Sign Out</span>
                    </button>
                  </div>
                ) : (
                  <div className="pt-2 border-t border-gray-100 space-y-2 p-4">
                    <motion.button
                      onClick={() => {
                        onShowDemo();
                        setIsMenuOpen(false);
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="neu-button w-full text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors"
                    >
                      Watch Demo
                    </motion.button>
                    <motion.button
                      onClick={() => {
                        handleGetStarted();
                        setIsMenuOpen(false);
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="neu-button w-full bg-gradient-to-r from-primary-50 to-blue-50 text-primary-600 px-4 py-2 text-sm font-medium"
                    >
                      Get Started
                    </motion.button>
                  </div>
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;