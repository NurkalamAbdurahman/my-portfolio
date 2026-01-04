import React from "react";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  const items = t("experience.items", { returnObjects: true });

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("experience.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("experience.subtitle")}
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-8">
          {items.map((exp, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {exp.role}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="text-sm text-gray-500 mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>

              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
