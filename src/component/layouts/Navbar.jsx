import React, { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { key: "about", href: "#about" },
    { key: "skills", href: "#skills" },
    { key: "projects", href: "#projects" },
    { key: "experience", href: "#experience" }
  ];

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const setLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition ${
      isScrolled ? "bg-white shadow-sm" : "bg-white/80 backdrop-blur"
    }`}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="text-xl font-semibold text-gray-900">
          Nurkalam
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map(item => (
            <a
              key={item.key}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </div>

        {/* Language Toggle — CLASSIC */}
        <div className="hidden md:flex items-center text-sm font-medium text-gray-600 gap-2">
          <button
            onClick={() => setLanguage("id")}
            className={`px-2 ${
              i18n.language === "id" ? "text-gray-900 underline" : ""
            }`}
          >
            ID
          </button>
          <span>|</span>
          <button
            onClick={() => setLanguage("en")}
            className={`px-2 ${
              i18n.language === "en" ? "text-gray-900 underline" : ""
            }`}
          >
            EN
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          {navItems.map(item => (
            <a
              key={item.key}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block px-4 py-3"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}

          <div className="flex justify-center gap-4 py-3 border-t text-sm">
            <button onClick={() => setLanguage("id")}>ID</button>
            <button onClick={() => setLanguage("en")}>EN</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
