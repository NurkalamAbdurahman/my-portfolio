import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400">
            © {year} Nurkalam Abdurrahman. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
