import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const items = t("contact.items", { returnObjects: true });

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-blue-50/20 to-white"
    >
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
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
                className="bg-white border border-slate-100 rounded-2xl p-6 text-center"
              >
                <div
                  className="mx-auto mb-4 flex h-12 w-12 items-center justify-center
                  rounded-xl bg-blue-100/60 text-blue-600"
                >
                  <Icon size={22} />
                </div>

                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-blue-600 font-medium
                  hover:text-blue-700 transition-colors"
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
