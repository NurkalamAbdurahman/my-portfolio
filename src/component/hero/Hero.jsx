import {
  ArrowRight,
  Mail,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Profil from "../../assets/img/Profil.png";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const image = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

          <motion.div
            className="lg:w-2/3 text-center lg:text-left"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={item}
              className="text-sm font-medium text-slate-500 mb-4 tracking-wide"
            >
              {t("hero.greeting")}
            </motion.p>

            <motion.h1
              variants={item}
              className="font-bold leading-tight mb-4"
            >
              <span className="text-5xl sm:text-6xl lg:text-6xl text-slate-900">
                {t("hero.name").split(" ")[0]}
              </span>{" "}
              <span className="text-5xl sm:text-6xl lg:text-6xl text-blue-600">
                {t("hero.name").split(" ").slice(1).join(" ")}
              </span>
            </motion.h1>

            <motion.h2
              variants={item}
              className="text-3xl sm:text-4xl font-semibold text-slate-800 mb-6"
            >
              {t("hero.role")}
            </motion.h2>

            <motion.p
              variants={item}
              className="max-w-2xl mx-auto lg:mx-0 text-slate-600 text-base sm:text-lg mb-8"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div variants={item} className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-3 px-8 py-3
                  rounded-xl bg-blue-600 text-white font-semibold
                  shadow-md hover:bg-blue-700 transition-colors
                  w-full sm:w-auto"
                >
                  {t("hero.ctaPrimary")}
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 text-slate-700
                  font-medium hover:text-blue-600 transition-colors
                  w-full sm:w-auto justify-center sm:justify-start"
                >
                  <Mail size={18} />
                  {t("hero.ctaSecondary")}
                </a>
              </div>

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
                    <motion.a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-10 h-10 flex items-center justify-center
                      rounded-full border border-slate-300 text-slate-700
                      hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50"
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-1/3 flex justify-center"
            variants={image}
            initial="hidden"
            animate="visible"
          >
            <div className="w-full max-w-sm">
              <img
                src={Profil}
                alt={t("hero.name")}
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
