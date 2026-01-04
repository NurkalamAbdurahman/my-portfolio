import React from 'react';
import { useTranslation } from 'react-i18next';
import { skillIcons } from './skillIcons';

const Skills = () => {
  const { t } = useTranslation();

  const groups = t('skills.groups', { returnObjects: true });

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map((group, index) => {
            const Icon = skillIcons[group.key];

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {group.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {group.items.map((skill, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
