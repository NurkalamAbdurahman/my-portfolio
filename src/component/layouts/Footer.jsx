import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();


  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="mt-8 text-center text-sm text-gray-400">
          © {year} Nurkalam Abdurrahman · Built with React & Tailwind CSS
        </div>

      </div>
    </footer>
  );
};

export default Footer;
