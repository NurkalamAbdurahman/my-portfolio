import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { skillIcons } from "./skillIcons";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 }
  }
};

const Skills = () => {
  const { t } = useTranslation();
  const groups = t("skills.groups", { returnObjects: true });

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-blue-50/20 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            {t("skills.title")}
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t("skills.subtitle")}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {groups.map((group, index) => {
            const Icon = skillIcons[group.key];

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {group.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {group.items.map((skill, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-slate-600"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
