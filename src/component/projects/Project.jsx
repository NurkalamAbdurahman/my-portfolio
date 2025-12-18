// components/Projects.jsx
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

// Import gambar - pastikan path benar dan file ada
import image1 from '../../assets/img/project1.jpg';

const Projects = () => {
    const projects = [
        {
            title: 'GoTask — Workspace & Task Management',
            summary:
                'A Trello-inspired task management web app focused on team collaboration and productivity.',
            description:
                'Designed and developed a modular front-end architecture using React and Vite. Implemented workspace-based task organization, drag-and-drop card management with DnD Kit, member invitation flow, and responsive UI. Emphasis on clean state handling, reusable components, and scalable UI patterns.',
            tech: [
                'React',
                'Vite',
                'Tailwind CSS',
                'DnD Kit',
                'Axios',
                'SweetAlert2'
            ],
            githubLink: 'https://github.com/NurkalamAbdurahman/GoTask-FE',
            caseStudyLink: '/case-study/gotask',
            featured: true,
            image: image1,
            alt: 'GoTask Task Management Application Interface'
        },
    ];


    return (
        <section id="projects" className="py-20 bg-white">
            <div className="mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Selected Projects
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Real-world web applications focused on scalability, usability,
                        and maintainable front-end architecture.
                    </p>
                </div>

                {/* Projects List */}
                <div className="space-y-12 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <article
                            key={index}
                            className={`flex flex-col lg:flex-row gap-8 p-8 rounded-2xl border transition-colors
                ${project.featured ? 'border-blue-200 bg-blue-50/30' : 'border-gray-200 bg-gray-50'}
              `}
                        >
                            {/* Thumbnail dengan Gambar */}
                            <div className="lg:w-2/5">
                                <div className="relative aspect-video lg:aspect-square rounded-xl overflow-hidden bg-gray-100 group">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.alt || project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <span className="text-sm font-medium text-gray-600">
                                                Project Preview
                                            </span>
                                        </div>
                                    )}
                                    {/* Overlay effect */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="lg:w-3/5 flex flex-col justify-between">
                                <div>
                                    {project.featured && (
                                        <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                                            Featured Project
                                        </span>
                                    )}

                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-700 font-medium mb-3">
                                        {project.summary}
                                    </p>

                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white border border-gray-300 text-gray-700"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                                    >
                                        <Github size={18} />
                                        <span className="font-medium">GitHub</span>
                                    </a>

                                    <a
                                        href={project.caseStudyLink}
                                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                                    >
                                        <ExternalLink size={18} />
                                        <span className="font-medium">Case Study</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="text-center mt-16">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        <span className="font-medium">View All Projects on GitHub</span>
                        <ExternalLink size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;