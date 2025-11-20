import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-t border-white/20 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart size={18} className="text-red-500 animate-pulse" />
            <span>by Haris Ammar</span>
          </div>
          
          <div className="text-gray-500 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;