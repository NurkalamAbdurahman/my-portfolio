import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const items = t("contact.items", { returnObjects: true });

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-5xl px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const Icon =
              item.type === "email"
                ? Mail
                : item.type === "github"
                ? Github
                : Linkedin;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={22} />
                </div>

                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  {item.description}
                </p>

                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="text-blue-600 font-medium hover:underline"
                >
                  {item.label}
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Contact;
