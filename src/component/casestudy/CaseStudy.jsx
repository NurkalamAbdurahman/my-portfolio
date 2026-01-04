// components/CaseStudy.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  ArrowLeft,
  Github,
  CheckCircle,
  Target,
  Zap,
  BarChart
} from 'lucide-react';

const TECH_STACK = [
  'React',
  'Vite',
  'Tailwind CSS',
  'DnD Kit',
  'Axios',
  'SweetAlert2'
];

const CaseStudy = () => {
  const { t } = useTranslation();

  const problemPoints = t('caseStudy.problem.points', { returnObjects: true });
  const features = t('caseStudy.solution.features', { returnObjects: true });
  const architecture = t('caseStudy.solution.architecture', { returnObjects: true });
  const decisions = t('caseStudy.decisions.items', { returnObjects: true });
  const outcomes = t('caseStudy.outcomes.points', { returnObjects: true });

  return (
    <section id="case-study" className="py-20 bg-white">
      <div className="mx-auto max-w-5xl px-6">

        {/* Back */}
        <div className="mb-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft size={18} />
            <span className="font-medium">{t('caseStudy.back')}</span>
          </a>
        </div>

        {/* Header */}
        <div className="mb-12">
          <span className="inline-block mb-4 px-3 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
            {t('caseStudy.label')}
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('caseStudy.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('caseStudy.subtitle')}
          </p>
        </div>

        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {['timeline', 'role', 'team'].map((key) => (
            <div
              key={key}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200"
            >
              <h3 className="font-bold text-gray-900 mb-2">
                {t(`caseStudy.overview.${key}.title`)}
              </h3>
              <p className="text-gray-600">
                {t(`caseStudy.overview.${key}.value`)}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {t('caseStudy.techStackTitle')}
          </h2>
          <div className="flex flex-wrap gap-3">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Problem */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-50 rounded-lg">
              <Target className="text-red-600" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {t('caseStudy.problem.title')}
            </h2>
          </div>

          <div className="bg-red-50/30 border border-red-100 rounded-xl p-8">
            <p className="text-lg text-gray-700 mb-6">
              {t('caseStudy.problem.description')}
            </p>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              {problemPoints.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Solution */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-50 rounded-lg">
              <CheckCircle className="text-green-600" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {t('caseStudy.solution.title')}
            </h2>
          </div>

          <div className="bg-green-50/30 border border-green-100 rounded-xl p-8">
            <p className="text-lg text-gray-700 mb-8">
              {t('caseStudy.solution.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-lg">
                  {t('caseStudy.solution.featuresTitle')}
                </h3>
                <ul className="space-y-3 list-disc list-inside">
                  {features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-lg">
                  {t('caseStudy.solution.architectureTitle')}
                </h3>
                <ul className="space-y-3 list-disc list-inside">
                  {architecture.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Decisions */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Zap className="text-blue-600" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {t('caseStudy.decisions.title')}
            </h2>
          </div>

          <div className="space-y-6">
            {decisions.map((item, i) => (
              <div
                key={i}
                className="bg-blue-50/30 border border-blue-100 rounded-xl p-6"
              >
                <h3 className="font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Outcomes */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-50 rounded-lg">
              <BarChart className="text-purple-600" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {t('caseStudy.outcomes.title')}
            </h2>
          </div>

          <div className="bg-purple-50/30 border border-purple-100 rounded-xl p-8">
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              {outcomes.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Links */}
        <div className="flex flex-wrap justify-between items-center gap-6 pt-8 border-t border-gray-200">
          <a
            href="https://github.com/NurkalamAbdurahman/GoTask-FE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            <Github size={18} />
            <span className="font-medium">
              {t('caseStudy.links.source')}
            </span>
          </a>

          <a
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft size={18} />
            <span className="font-medium">
              {t('caseStudy.links.backAll')}
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default CaseStudy;
