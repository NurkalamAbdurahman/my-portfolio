import React from "react";
import {
  User,
  Target,
  Layers,
  Code,
  Zap,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

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

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white to-blue-50/20"
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
            {t("about.title.primary")}{" "}
            <span>{t("about.title.highlight")}</span>
          </h2>
          <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t("about.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <motion.div
            className="lg:col-span-2 space-y-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: User, title: "about.profile.title", desc: "about.profile.desc" },
                { icon: Code, title: "about.tech.title", desc: "about.tech.desc" },
              ].map(({ icon: Icon, title, desc }, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {t(title)}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t(desc)}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Layers, title: "about.work.title", desc: "about.work.desc" },
                { icon: Zap, title: "about.performance.title", desc: "about.performance.desc" },
              ].map(({ icon: Icon, title, desc }, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {t(title)}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {t(desc)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-slate-900 rounded-2xl p-6 text-white h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/20 text-blue-300 rounded-lg">
                  <Target size={20} />
                </div>
                <h3 className="text-lg font-semibold">
                  {t("about.goals.title")}
                </h3>
              </div>

              <p className="text-sm text-slate-200 leading-relaxed mb-6">
                {t("about.goals.desc")}
              </p>

              <div className="space-y-3">
                {t("about.goals.list", { returnObjects: true }).map(
                  (item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span className="text-sm text-slate-200">
                        {item}
                      </span>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
