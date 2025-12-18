const Experience = () => {
  const experiences = [
    {
      role: 'Frontend Developer — Team Project',
      company: 'GoTask (Academic Project)',
      period: '2024',
      description: [
        'Developed responsive user interfaces using React and Tailwind CSS for a task management web application.',
        'Collaborated closely with a backend developer to integrate REST APIs and manage application state.',
        'Implemented core features such as task boards, workspace management, and interactive UI components.',
        'Focused on clean component structure, maintainability, and consistent UI behavior.'
      ]
    },
    {
      role: 'Intern — Production Division',
      company: 'Laptop Manufacturing Company',
      period: '2023',
      description: [
        'Assisted in laptop production and assembly processes following industrial SOP standards.',
        'Participated in quality control checks to ensure product accuracy and reliability.',
        'Worked collaboratively within a production team to meet daily operational targets.',
        'Developed strong discipline, responsibility, and understanding of industrial workflows.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hands-on experience from team-based development projects and real-world industrial environments.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {exp.role}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="text-sm text-gray-500 mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>

              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
