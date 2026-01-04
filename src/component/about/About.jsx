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
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t("about.title.primary")}{" "}
            <span className="text-blue-600">
              {t("about.title.highlight")}
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t("about.subtitle")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-8">

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Profile */}
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                    <User size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {t("about.profile.title")}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {t("about.profile.desc")}
                </p>
              </div>

              {/* Tech Focus */}
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-100 text-green-600 rounded-xl">
                    <Code size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {t("about.tech.title")}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {t("about.tech.desc")}
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Work */}
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
                    <Layers size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {t("about.work.title")}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {t("about.work.desc")}
                </p>
              </div>

              {/* Performance */}
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {t("about.performance.title")}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {t("about.performance.desc")}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/20 text-blue-300 rounded-xl">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-bold">
                  {t("about.goals.title")}
                </h3>
              </div>

              <p className="text-slate-200 leading-relaxed mb-8">
                {t("about.goals.desc")}
              </p>

              <div className="space-y-4">
                {t("about.goals.list", { returnObjects: true }).map(
                  (item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <span className="text-sm">{item}</span>
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
