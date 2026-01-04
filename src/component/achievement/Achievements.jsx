import React from "react";
import { Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Achievements = () => {
  const { t } = useTranslation();
  const items = t("achievements.items", { returnObjects: true });

  return (
    <section
      id="achievements"
      className="py-24 bg-gradient-to-b from-white to-blue-50/20"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* =====================
            Section Header
           ===================== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            {t("achievements.title")}
          </h2>

          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t("achievements.subtitle")}
          </p>
        </motion.div>

        {/* =====================
            Achievements List
           ===================== */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {items.map((item, index) => (
            <motion.article
              key={index}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="bg-white border border-slate-100 rounded-2xl p-8"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-amber-100/70 rounded-xl">
                  <Trophy className="text-amber-600" size={24} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-sm font-medium text-slate-600">
                    {item.organizer} • {item.year}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-700 leading-relaxed">
                {item.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;
