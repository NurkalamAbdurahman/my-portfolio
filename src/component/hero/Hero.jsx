import {
  ArrowRight,
  Mail,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Profil from "../../assets/img/Profil.png";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-10 sm:py-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 xl:gap-20">

          {/* LEFT — TEXT */}
          <div className="lg:w-2/3 text-center lg:text-left">
            {/* Greeting - spacing diperbesar */}
            <p className="text-base font-medium text-slate-500 mb-4 tracking-wide">
              {t("hero.greeting")}
            </p>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="text-slate-900">
                {t("hero.name").split(" ")[0]}
              </span>{" "}
              <span className="text-blue-600 block lg:inline mt-2">
                {t("hero.name").split(" ").slice(1).join(" ")}
              </span>
            </h1>

            {/* Role - sama besar dengan nama */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight">
              {t("hero.role")}
            </h2>

            {/* Description - spacing diperbesar */}
            <p className="max-w-2xl text-slate-600 text-lg leading-relaxed mb-8 sm:mb-10 text-balance">
              {t("hero.description")}
            </p>

            {/* CTA + Follow - spacing diperbesar */}
            <div className="flex flex-col gap-7 sm:gap-8">
              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-3 px-8 sm:px-9 py-3 sm:py-3.5
                  rounded-xl bg-blue-600 text-white font-semibold text-base
                  shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300
                  transform hover:-translate-y-1 w-full sm:w-auto"
                >
                  {t("hero.ctaPrimary")}
                  <ArrowRight size={20} />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 text-slate-700
                  font-medium hover:text-blue-600 transition-colors duration-300
                  group w-full sm:w-auto text-base"
                >
                  <Mail size={20} className="group-hover:scale-110 transition-transform" />
                  <span>{t("hero.ctaSecondary")}</span>
                </a>
              </div>

              {/* Follow Me - diperbesar */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
                <span className="text-sm font-medium text-slate-500 whitespace-nowrap">
                  Follow me:
                </span>

                <div className="flex items-center gap-4">
                  {[
                    { icon: Instagram, link: "https://www.instagram.com/nurkalamaz/" },
                    { icon: Linkedin, link: "https://www.linkedin.com/in/nurkalam-abdurrahman-516097383/" },
                    { icon: Github, link: "https://github.com/NurkalamAbdurahman" },
                  ].map(({ icon: Icon, link }, index) => (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center
                      rounded-full border border-slate-300 text-slate-700
                      hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50
                      transition-all duration-300 transform hover:scale-110"
                    >
                      <Icon size={18} className="sm:size-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — PROFILE - Versi minimalis */}
          <div className="lg:w-1/3 flex justify-center items-center">
            <div className="relative w-full max-w-md lg:max-w-none mx-auto">
              <div>
                <img
                  src={Profil}
                  alt={t("hero.name")}
                  className="w-full h-auto object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;