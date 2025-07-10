import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';

const StatsCard = ({ icon, title, value, color }) => {
  const colorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600',
    red: 'text-red-600',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="neu-card relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full -mr-16 -mt-16" />
      
      <div className="flex items-center justify-between relative z-10">
        <div>
          <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
          <p className={`text-3xl font-bold ${colorClasses[color]}`}>{value}</p>
        </div>
        
        <div className="neu-button w-14 h-14 flex items-center justify-center">
          <SafeIcon icon={icon} className={`w-7 h-7 ${colorClasses[color]}`} />
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r"
        style={{
          background: `linear-gradient(to right, var(--whitewash-bg), ${getComputedStyle(document.documentElement).getPropertyValue(`--${color}-600`)}, var(--whitewash-bg))`
        }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </motion.div>
  );
};

export default StatsCard;