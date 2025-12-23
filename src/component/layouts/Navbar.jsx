import React, { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [clickedSection, setClickedSection] = useState(null);

  const navItems = [
    { key: "home", href: "#home" },
    { key: "about", href: "#about" },
    { key: "skills", href: "#skills" },
    { key: "projects", href: "#projects" },
    { key: "experience", href: "#experience" }
  ];

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
    
    // Update active section based on scroll position with delay
    const sections = navItems.map(item => item.href.replace('#', ''));
    const scrollPosition = window.scrollY + 150; // Offset untuk delay visual
    
    for (const section of sections.reverse()) {
      const element = document.getElementById(section);
      if (element && scrollPosition >= element.offsetTop) {
        // Hanya update jika tidak ada klik baru-baru ini
        if (!clickedSection || Date.now() - clickedSection.timestamp > 1000) {
          setActiveSection(section);
        }
        break;
      }
    }
  }, [navItems, clickedSection]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    
    // Set clicked section dengan timestamp
    setClickedSection({
      id: sectionId,
      timestamp: Date.now()
    });
    setActiveSection(sectionId);
    
    // Smooth scroll dengan sedikit delay untuk visual feedback
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }, 100);
    
    setIsMenuOpen(false);
    
    // Reset clicked section setelah 1.5 detik
    setTimeout(() => {
      setClickedSection(null);
    }, 1500);
  };

  const setLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-lg py-2" 
        : "bg-white/80 backdrop-blur-sm py-4"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-2xl font-bold tracking-tight transition-all hover:scale-105"
          >
            <span className="text-slate-900">Nurkalam</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Nav Items */}
            <div className="flex items-center gap-8">
              {navItems.map(item => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                const wasClicked = clickedSection?.id === sectionId;
                
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="relative group"
                  >
                    <span className={`text-sm font-medium transition-all duration-300 ${
                      isActive 
                        ? "text-blue-600 font-semibold" 
                        : "text-slate-600 hover:text-blue-500"
                    } ${wasClicked ? "scale-110" : ""}`}>
                      {t(`nav.${item.key}`)}
                    </span>
                    
                    {/* Animated underline for active state */}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full animate-slideIn"></span>
                    )}
                    
                    {/* Hover underline effect */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
                  </a>
                );
              })}
            </div>

            {/* Language Toggle — Clean */}
            <div className="flex items-center gap-1 ml-4 pl-4 border-l border-slate-200">
              <button
                onClick={() => setLanguage("id")}
                className={`px-3 py-1 text-sm font-medium transition-all duration-300 ${
                  i18n.language === "id" 
                    ? "text-blue-600 font-semibold" 
                    : "text-slate-500 hover:text-blue-500"
                }`}
              >
                ID
              </button>
              <span className="text-slate-300">|</span>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 text-sm font-medium transition-all duration-300 ${
                  i18n.language === "en" 
                    ? "text-blue-600 font-semibold" 
                    : "text-slate-500 hover:text-blue-500"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-xl rounded-b-2xl overflow-hidden">
            <div className="px-2 py-3">
              {navItems.map(item => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block px-4 py-3.5 my-1 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive 
                        ? "text-blue-600 font-semibold bg-blue-50" 
                        : "text-slate-600 hover:text-blue-500 hover:bg-slate-50"
                    }`}
                  >
                    {t(`nav.${item.key}`)}
                    {isActive && (
                      <span className="ml-2 inline-block w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
                    )}
                  </a>
                );
              })}
              
              {/* Language Toggle - Mobile */}
              <div className="flex items-center justify-center gap-6 px-4 py-6 mt-2 border-t border-slate-100">
                <button
                  onClick={() => setLanguage("id")}
                  className={`text-sm font-medium transition-all duration-300 ${
                    i18n.language === "id" 
                      ? "text-blue-600 font-semibold" 
                      : "text-slate-500 hover:text-blue-500"
                  }`}
                >
                  🇮🇩 Indonesia
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`text-sm font-medium transition-all duration-300 ${
                    i18n.language === "en" 
                      ? "text-blue-600 font-semibold" 
                      : "text-slate-500 hover:text-blue-500"
                  }`}
                >
                  🇺🇸 English
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;