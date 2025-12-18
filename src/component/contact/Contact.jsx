import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Contact
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Interested in working together or discussing a project?
            Feel free to reach out through the channels below.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Mail size={22} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-sm text-gray-600 mb-4">
              For project discussions or opportunities
            </p>
            <a
              href="mailto:your-email@example.com"
              className="text-blue-600 font-medium hover:underline"
            >
              your-email@example.com
            </a>
          </div>

          {/* GitHub */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Github size={22} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">GitHub</h3>
            <p className="text-sm text-gray-600 mb-4">
              View code, projects, and contributions
            </p>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              github.com/yourusername
            </a>
          </div>

          {/* LinkedIn */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Linkedin size={22} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">LinkedIn</h3>
            <p className="text-sm text-gray-600 mb-4">
              Professional profile and experience
            </p>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              linkedin.com/in/yourusername
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
