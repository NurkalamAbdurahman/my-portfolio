import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 }
  }
};

const Experience = () => {
  const { t } = useTranslation();
  const items = t("experience.items", { returnObjects: true });

  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-b from-blue-50/20 to-white"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <motion.div
          className="mb-16 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            {t("experience.title")}
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t("experience.subtitle")}
          </p>
        </motion.div>

        <motion.div
          className="relative"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="absolute left-4 sm:left-1/2 top-0 h-full w-px bg-slate-200" />

          <div className="space-y-12">
            {items.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="relative flex flex-col sm:flex-row sm:items-start"
              >
                <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2">
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-blue-600" />
                  </div>
                </div>

                <div
                  className={`mt-10 sm:mt-0 sm:w-1/2 ${index % 2 === 0
                      ? "sm:pr-12 sm:text-right"
                      : "sm:pl-12 sm:ml-auto"
                    }`}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 280 }}
                    className="bg-white border border-slate-100 rounded-2xl p-6"
                  >
                    <span className="block text-sm font-medium text-slate-500 mb-2">
                      {exp.period}
                    </span>

                    <h3 className="text-xl font-bold text-slate-900">
                      {exp.role}
                    </h3>

                    <p className="text-base font-medium text-slate-600 mb-4">
                      {exp.company}
                    </p>

                    <ul className="space-y-2 list-disc list-inside text-sm text-slate-700 leading-relaxed">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
