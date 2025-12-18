import React from 'react';
import { Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Finalist — SEFEST 2023 Web Design Competition',
      organizer: 'Universitas Surabaya (UBAYA)',
      year: '2023',
      description:
        'Selected as a finalist in a national-level web design competition, focusing on UI/UX design, layout consistency, and visual communication.'
    },
    {
      title: '2nd Place — Invention Competition 2024',
      organizer: 'Universitas Udayana',
      year: '2024',
      description:
        'Awarded 2nd place for presenting a web-based invention project, evaluated on innovation, usability, and technical feasibility.'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Selected recognitions from national academic and innovation competitions.
          </p>
        </div>

        {/* List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-yellow-100 rounded-xl">
                  <Trophy className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium">
                    {item.organizer} • {item.year}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
