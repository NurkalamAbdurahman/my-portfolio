import React from "react";
import {
  User,
  Target,
  Layers,
  Code,
  Zap,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white to-blue-50/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            {t("about.title.primary")}{" "}
            <span>
              {t("about.title.highlight")}
            </span>
          </h2>
          <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t("about.subtitle")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6">

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Profile */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <User size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {t("about.profile.title")}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t("about.profile.desc")}
                </p>
              </div>

              {/* Tech */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <Code size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {t("about.tech.title")}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t("about.tech.desc")}
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Work */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <Layers size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {t("about.work.title")}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t("about.work.desc")}
                </p>
              </div>

              {/* Performance */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <Zap size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {t("about.performance.title")}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t("about.performance.desc")}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — GOALS */}
          <div>
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
                    <div key={index} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span className="text-sm text-slate-200">{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
