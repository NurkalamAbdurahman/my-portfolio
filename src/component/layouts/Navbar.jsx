// components/Navbar.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
  ];

  const socialItems = [
    { icon: <Github size={20} />, href: 'https://github.com/username', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/username', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:email@example.com', label: 'Email' },
  ];

  // Optimasi dengan useCallback
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    const scrollHandler = () => handleScroll();
    
    window.addEventListener('scroll', scrollHandler, { passive: true });
    
    // Cleanup lebih aman
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [handleScroll]);

  // Handle klik di mobile menu untuk smooth scroll
  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  // Handle klik di luar untuk menutup mobile menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('.navbar-container')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 navbar-container ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-sm py-1' 
          : 'bg-white/80 backdrop-blur-md py-2'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Border bottom dengan width terbatas */}
      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent transition-all duration-300 ${
        isScrolled ? 'w-4/5' : 'w-3/4'
      }`} />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          
          {/* Logo/Identitas */}
          <div className="flex items-center">
            <a 
              href="/" 
              className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
              aria-label="Home"
            >
              Nurkalam
            </a>
          </div>

          {/* Navigasi Utama (Desktop) */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group py-2 px-1"
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Social Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-2">
            {socialItems.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 visible' 
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="bg-white/90 backdrop-blur-lg border-t border-gray-100 py-3">
            {/* Navigation Items */}
            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium"
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-3 mt-4 pt-4 border-t border-gray-100 px-4">
              {socialItems.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;