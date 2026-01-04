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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

          {/* LEFT — TEXT */}
          <div className="lg:w-2/3 text-center lg:text-left">
            {/* Greeting */}
            <p className="text-sm font-medium text-slate-500 mb-4 tracking-wide">
              {t("hero.greeting")}
            </p>

            {/* Name — Primary Fibonacci */}
            <h1 className="font-bold leading-tight mb-4">
              <span className="text-5xl sm:text-6xl lg:text-6xl text-slate-900">
                {t("hero.name").split(" ")[0]}
              </span>
              <span> </span>
              <span className="text-5xl sm:text-6xl lg:text-6xl text-blue-600 mt-1">
                {t("hero.name").split(" ").slice(1).join(" ")}
              </span>
            </h1>

            {/* Role — Secondary */}
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-800 mb-6 leading-snug">
              {t("hero.role")}
            </h2>

            {/* Description */}
            <p className="max-w-2xl mx-auto lg:mx-0 text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              {t("hero.description")}
            </p>

            {/* CTA + Social */}
            <div className="flex flex-col gap-6">
              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-3 px-8 py-3
                  rounded-xl bg-blue-600 text-white font-semibold text-base
                  shadow-md hover:bg-blue-700 transition-colors duration-300
                  w-full sm:w-auto"
                >
                  {t("hero.ctaPrimary")}
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 text-slate-700
                  font-medium text-base hover:text-blue-600 transition-colors
                  w-full sm:w-auto justify-center sm:justify-start"
                >
                  <Mail size={18} />
                  {t("hero.ctaSecondary")}
                </a>
              </div>

              {/* Social */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <span className="text-sm font-medium text-slate-500">
                  Follow me
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
                      className="w-10 h-10 flex items-center justify-center
                      rounded-full border border-slate-300 text-slate-700
                      hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50
                      transition-colors duration-300"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="w-full max-w-sm">
              <img
                src={Profil}
                alt={t("hero.name")}
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
