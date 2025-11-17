import StatusBadge from "./StatusBadge";

const HeroContent = () => {
  return (
    <div className="max-w-2xl">
      <StatusBadge/>
      
      <h1 className="mt-6 mb-6">
        <span className="block text-6xl font-bold text-[#0D0D0D] leading-tight">
          Nurkalam{' '}
          <span className="text-[#9B59B6]">Abdurrahman</span>
        </span>
      </h1>
      
      <p className="text-xl text-[#6C6C8C] mb-8 leading-relaxed">
        Front-End Developer crafting clean, performant interfaces with React, TypeScript, and modern CSS.
      </p>
      
      <div className="flex items-center gap-4">
        <button className="px-6 py-3 bg-gradient-to-r from-[#9B59B6] to-[#4B70E2] text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all">
          View Projects
        </button>
        <button className="px-6 py-3 bg-white text-[#0D0D0D] rounded-lg font-medium border border-gray-200 hover:border-[#9B59B6] hover:text-[#9B59B6] transition-all">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default HeroContent()