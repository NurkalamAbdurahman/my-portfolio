import React from "react";
import { Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";

const Achievements = () => {
  const { t } = useTranslation();
  const items = t("achievements.items", { returnObjects: true });

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("achievements.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("achievements.subtitle")}
          </p>
        </div>

        {/* List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-yellow-100 rounded-xl">
                  <Trophy className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium">
                    {item.organizer} • {item.year}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
