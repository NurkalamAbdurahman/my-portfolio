import {
  ArrowRight,
  Mail,
  Monitor,
  CheckCircle,
  Briefcase,
} from "lucide-react";
import Profil from "../../assets/img/Profil.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">

          {/* Left Content */}
          <div className="md:w-2/3">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Available for Front-End Opportunities
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nurkalam Abdurrahman
            </h1>

            {/* Value Proposition */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-8">
              Front-End Developer specializing in{" "}
              <span className="text-blue-600 font-semibold">
                scalable React interfaces
              </span>{" "}
              for dashboards, task management systems, and collaborative web
              applications.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                View Projects
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition"
              >
                <Mail size={18} />
                Discuss a Project
              </a>
            </div>

            {/* Key Strengths */}
            <div className="grid gap-4 max-w-xl">
              <div className="flex gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Monitor size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">
                    Complex dashboard interfaces
                  </p>
                  <p className="text-sm text-gray-500">
                    Designing clean, scalable admin panels and data-driven UI
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <CheckCircle size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">
                    End-to-end React development
                  </p>
                  <p className="text-sm text-gray-500">
                    From UI architecture to production-ready implementation
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Briefcase size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">
                    Collaborative web applications
                  </p>
                  <p className="text-sm text-gray-500">
                    Real-time features and team-based workflows
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content – Profile */}
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="relative aspect-square max-w-xs mx-auto">
                <div className="absolute inset-0 rounded-full bg-gray-200 blur-md opacity-30"></div>
                <img
                  src={Profil}
                  alt="Nurkalam Abdurrahman"
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>

              {/* Specialization Card */}
              <div className="mt-8 p-4 rounded-xl border border-gray-200 bg-gray-50 text-center">
                <p className="font-semibold text-gray-800 mb-1">
                  React Specialization
                </p>
                <p className="text-sm text-gray-600">
                  Focused on scalable UI architecture and maintainable front-end
                  systems.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
