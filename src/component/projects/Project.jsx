import React from "react";
import { useTranslation } from "react-i18next";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { projectsConfig } from "./projects.config";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 }
  }
};

const Projects = () => {
  const { t } = useTranslation();
  const projects = t("projects.items", { returnObjects: true });

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-white to-blue-50/20"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            {t("projects.sectionTitle")}
          </h2>
          <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t("projects.sectionSubtitle")}
          </p>
        </motion.div>

        <motion.div
          className="space-y-12 max-w-6xl mx-auto"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => {
            const config = projectsConfig[project.id];

            return (
              <motion.article
                key={project.id}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260 }}
                className={`flex flex-col lg:flex-row gap-8 p-6 lg:p-8 rounded-2xl border
                ${config.featured
                    ? "border-blue-200 bg-blue-50/40"
                    : "border-slate-100 bg-white"
                  }`}
              >
                <div className="lg:w-2/5">
                  <div className="aspect-video lg:aspect-square rounded-xl overflow-hidden bg-slate-100">
                    <img
                      src={config.image}
                      alt={project.alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                <div className="lg:w-3/5 flex flex-col justify-between">
                  <div>
                    {config.featured && (
                      <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                        {t("projects.featuredLabel")}
                      </span>
                    )}

                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {project.title}
                    </h3>

                    <p className="text-base font-medium text-slate-700 mb-3">
                      {project.summary}
                    </p>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {config.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-medium rounded-lg
                          bg-white border border-slate-200 text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-slate-100">
                    <a
                      href={config.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5
                      border border-slate-200 rounded-lg text-slate-700
                      hover:border-blue-600 hover:text-blue-600 transition-colors"
                    >
                      <Github size={18} />
                      {t("projects.github")}
                    </a>

                    <a
                      href={config.caseStudyLink}
                      className="inline-flex items-center gap-2 px-4 py-2.5
                      rounded-lg bg-blue-600 text-white font-medium
                      hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={18} />
                      {t("projects.caseStudy")}
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3.5
            border border-slate-200 rounded-xl text-slate-700
            hover:border-blue-600 hover:text-blue-600 transition-colors"
          >
            {t("projects.viewAll")}
            <ExternalLink size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
