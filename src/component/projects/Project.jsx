import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, ExternalLink } from 'lucide-react';
import { projectsConfig } from './projects.config';

const Projects = () => {
  const { t } = useTranslation();
  const projects = t('projects.items', { returnObjects: true });

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('projects.sectionTitle')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('projects.sectionSubtitle')}
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {projects.map((project) => {
            const config = projectsConfig[project.id];

            return (
              <article
                key={project.id}
                className={`flex flex-col lg:flex-row gap-8 p-8 rounded-2xl border
                ${config.featured ? 'border-blue-200 bg-blue-50/30' : 'border-gray-200 bg-gray-50'}`}
              >
                {/* Image */}
                <div className="lg:w-2/5">
                  <div className="aspect-video lg:aspect-square rounded-xl overflow-hidden bg-gray-100">
                    <img
                      src={config.image}
                      alt={project.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-3/5 flex flex-col justify-between">
                  <div>
                    {config.featured && (
                      <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                        {t('projects.featuredLabel')}
                      </span>
                    )}

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>

                    <p className="text-gray-700 font-medium mb-3">
                      {project.summary}
                    </p>

                    <p className="text-gray-600 mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {config.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t">
                    <a
                      href={config.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 border rounded-lg"
                    >
                      <Github size={18} />
                      {t('projects.github')}
                    </a>

                    <a
                      href={config.caseStudyLink}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white"
                    >
                      <ExternalLink size={18} />
                      {t('projects.caseStudy')}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <span className="inline-flex items-center gap-2 px-6 py-3.5 border rounded-lg">
            {t('projects.viewAll')}
            <ExternalLink size={18} />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
