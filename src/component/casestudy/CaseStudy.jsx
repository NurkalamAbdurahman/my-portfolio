import React from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowLeft,
  Github,
  CheckCircle,
  Target,
  Zap,
  BarChart,
} from "lucide-react";
import { motion } from "framer-motion";


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};


const TECH_STACK = [
  "React",
  "Vite",
  "Tailwind CSS",
  "DnD Kit",
  "Axios",
  "SweetAlert2",
];

const CaseStudy = () => {
  const { t } = useTranslation();

  const problemPoints = t("caseStudy.problem.points", { returnObjects: true });
  const features = t("caseStudy.solution.features", { returnObjects: true });
  const architecture = t("caseStudy.solution.architecture", { returnObjects: true });
  const decisions = t("caseStudy.decisions.items", { returnObjects: true });
  const outcomes = t("caseStudy.outcomes.points", { returnObjects: true });

  return (
    <section
      id="case-study"
      className="py-24 bg-gradient-to-b from-white to-blue-50/20"
    >
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-10"
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="font-medium">{t("caseStudy.back")}</span>
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-14"
        >
          <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
            {t("caseStudy.label")}
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {t("caseStudy.title")}
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            {t("caseStudy.subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {["timeline", "role", "team"].map((key) => (
            <motion.div
              key={key}
              variants={fadeUp}
              className="bg-white p-6 rounded-xl border border-slate-100"
            >
              <h3 className="text-sm font-semibold text-slate-500 mb-1">
                {t(`caseStudy.overview.${key}.title`)}
              </h3>
              <p className="text-base font-medium text-slate-900">
                {t(`caseStudy.overview.${key}.value`)}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            {t("caseStudy.techStackTitle")}
          </h2>

          <motion.div
            variants={stagger}
            className="flex flex-wrap gap-3"
          >
            {TECH_STACK.map((tech) => (
              <motion.span
                key={tech}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="px-4 py-2 text-sm font-medium rounded-lg
                           bg-white border border-slate-200 text-slate-700"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-100 rounded-lg">
              <Target size={22} className="text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">
              {t("caseStudy.problem.title")}
            </h2>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-8">
            <p className="text-base text-slate-700 mb-6 leading-relaxed">
              {t("caseStudy.problem.description")}
            </p>

            <ul className="space-y-3 text-sm text-slate-700 list-disc list-inside">
              {problemPoints.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle size={22} className="text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">
              {t("caseStudy.solution.title")}
            </h2>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-8">
            <p className="text-base text-slate-700 mb-10 leading-relaxed">
              {t("caseStudy.solution.description")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  {t("caseStudy.solution.featuresTitle")}
                </h3>
                <ul className="space-y-3 text-sm list-disc list-inside text-slate-700">
                  {features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  {t("caseStudy.solution.architectureTitle")}
                </h3>
                <ul className="space-y-3 text-sm list-disc list-inside text-slate-700">
                  {architecture.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-20 space-y-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Zap size={22} className="text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">
              {t("caseStudy.decisions.title")}
            </h2>
          </div>

          {decisions.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white border border-slate-100 rounded-xl p-6"
            >
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-100 rounded-lg">
              <BarChart size={22} className="text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">
              {t("caseStudy.outcomes.title")}
            </h2>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-8">
            <ul className="space-y-3 text-sm text-slate-700 list-disc list-inside">
              {outcomes.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-between items-center gap-6 pt-8 border-t border-slate-100"
        >
          <a
            href="https://github.com/NurkalamAbdurahman/GoTask-FE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5
                       border border-slate-200 rounded-lg text-slate-700
                       hover:border-blue-600 hover:text-blue-600 transition-colors"
          >
            <Github size={18} />
            <span className="font-medium">
              {t("caseStudy.links.source")}
            </span>
          </a>

          <a
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="font-medium">
              {t("caseStudy.links.backAll")}
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default CaseStudy;
