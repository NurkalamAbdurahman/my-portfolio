import React from 'react';
import {
  Code,
  Layout,
  Paintbrush,
  Boxes,
  Zap,
  GitBranch
} from 'lucide-react';

const Skills = () => {
  const skillGroups = [
    {
      title: 'Frontend Development',
      icon: <Code size={22} />,
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript (ES6+)',
        'React.js',
        'Vite'
      ]
    },
    {
      title: 'UI & Styling',
      icon: <Paintbrush size={22} />,
      skills: [
        'Tailwind CSS',
        'Responsive Design',
        'Design System',
        'Component-based UI'
      ]
    },
    {
      title: 'State & Data Handling',
      icon: <Boxes size={22} />,
      skills: [
        'Zustand',
        'React Query',
        'API Integration (REST)',
        'Async State Management'
      ]
    },
    {
      title: 'Interaction & Performance',
      icon: <Zap size={22} />,
      skills: [
        'Drag & Drop (dnd-kit)',
        'Optimistic UI',
        'Code Splitting',
        'Lazy Loading'
      ]
    },
    {
      title: 'Tools & Workflow',
      icon: <GitBranch size={22} />,
      skills: [
        'Git & GitHub',
        'Project-based Development',
        'Collaboration with Backend',
        'Clean Code Practices'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Core frontend skills applied in real-world projects and collaborative development.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  {group.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {group.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {group.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
