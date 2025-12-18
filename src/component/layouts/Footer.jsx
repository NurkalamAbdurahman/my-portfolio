import React from 'react';
import { Github, Linkedin, Mail, Heart, ChevronUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/NurkalamAbdurahman', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/nurkalam', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:contact@nurkalam.dev', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-gray-100 bg-gradient-to-b from-white to-gray-50/50">
      {/* Wave Decoration */}
      <div className="absolute -top-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-10"></div>
      
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10">
          
          {/* Brand Section */}
          <div className="text-center lg:text-left">
            <div className="mb-4">
              <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Nurkalam Abdurrahman
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Frontend Developer · React Specialist
              </p>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              Building scalable, user-centric web applications with modern React ecosystem.
              Focused on clean architecture and delightful user experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="font-semibold text-gray-900 mb-6 text-lg">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-all duration-300 group inline-flex items-center"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-opacity"></span>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="flex flex-col items-center lg:items-end">
            <h3 className="font-semibold text-gray-900 mb-6 text-lg">Let's Connect</h3>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-3 bg-white rounded-xl border border-gray-200 text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                  aria-label={social.label}
                  title={social.label}
                >
                  {social.icon}
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
            <a
              href="mailto:contact@nurkalam.dev"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-lg"
            >
              <Mail size={16} />
              <span className="font-medium">Get in Touch</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500 flex items-center gap-1">
            © {currentYear} Nurkalam Abdurrahman. Made with 
            <Heart size={14} className="text-red-500 mx-1 animate-pulse" />
            and React.
          </div>
          
          <div className="text-sm text-gray-500">
            <span className="inline-flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available for opportunities
            </span>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white rounded-lg border border-gray-200 transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            Back to Top
            <ChevronUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Attribution */}
        <div className="mt-6 text-center text-xs text-gray-400">
          <p>
            Built with React, Tailwind CSS, and hosted on Vercel.
            <a 
              href="https://github.com/NurkalamAbdurahman/portfolio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-1 text-blue-500 hover:text-blue-600"
            >
              View source
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;