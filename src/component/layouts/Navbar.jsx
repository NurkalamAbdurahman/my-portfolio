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
    { key: "experience", href: "#experience" },
  ];

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);

    const sections = navItems.map((item) =>
      item.href.replace("#", "")
    );
    const scrollPosition = window.scrollY + 150;

    for (const section of sections.reverse()) {
      const element = document.getElementById(section);
      if (element && scrollPosition >= element.offsetTop) {
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
    const id = href.replace("#", "");

    setClickedSection({ id, timestamp: Date.now() });
    setActiveSection(id);

    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);

    setIsMenuOpen(false);

    setTimeout(() => setClickedSection(null), 1500);
  };

  const setLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "h-14 bg-white/95 backdrop-blur-md shadow-sm"
          : "h-16 bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo — Fibonacci Primary */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-xl lg:text-2xl font-bold tracking-tight text-slate-900 transition-opacity hover:opacity-80"
          >
            Nurkalamaz
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;

              return (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative px-1 py-2"
                >
                  <span
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-blue-600"
                        : "text-slate-600 hover:text-blue-500"
                    }`}
                  >
                    {t(`nav.${item.key}`)}
                  </span>

                  {isActive && (
                    <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-blue-600 rounded-full" />
                  )}
                </a>
              );
            })}

            {/* Language — Lowest Priority */}
            <div className="flex items-center gap-2 pl-4 border-l border-slate-200">
              <button
                onClick={() => setLanguage("id")}
                className={`text-sm font-medium transition-colors ${
                  i18n.language === "id"
                    ? "text-blue-600"
                    : "text-slate-500 hover:text-blue-500"
                }`}
              >
                ID
              </button>
              <span className="text-slate-300">/</span>
              <button
                onClick={() => setLanguage("en")}
                className={`text-sm font-medium transition-colors ${
                  i18n.language === "en"
                    ? "text-blue-600"
                    : "text-slate-500 hover:text-blue-500"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Trigger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-600 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
