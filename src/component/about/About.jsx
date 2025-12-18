import React from 'react';
import { User, Target, Layers } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A brief overview of who I am, how I work, and what I focus on as a frontend developer.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Profile Summary */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                <User size={22} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Profile
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              I am a frontend developer focused on building clean, scalable, and user-centric web interfaces.
              My primary work revolves around React-based applications, particularly dashboards,
              task management systems, and collaborative web products.
            </p>
          </div>

          {/* Work Approach */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                <Layers size={22} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                How I Work
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              I approach development with a strong emphasis on structure, maintainability,
              and collaboration. I prefer component-based architecture, clear state management,
              and close coordination with backend developers to ensure smooth integration
              and predictable application behavior.
            </p>
          </div>

          {/* Goals */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                <Target size={22} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Focus & Goals
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              My current focus is deepening my expertise in frontend architecture,
              performance optimization, and real-time interaction patterns.
              Long term, I aim to contribute to products that solve real problems
              through thoughtful interface design and solid engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
