import React from "react";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import bgImage from "../images/bg2.png";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = `${import.meta.env.BASE_URL}myCV.pdf`;
    link.download = "Ammar-Haris-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black/60"
    >
      <div className="w-full flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6 relative z-10">

          {/* Title */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-10
                       [background-image:linear-gradient(135deg,#FF4E00,#FFB685)]
                       bg-clip-text text-transparent leading-tight"
          >
            Hi, I'm <span className="block mt-2">Ammar Haris</span>
          </h1>

          {/* Subtitle */}
          <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-10 font-semibold">
            SLIIT IT Undergraduate | Software Developer & AI/ML Enthusiast
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            {/* View Work */}
            <button
              onClick={scrollToProjects}
              className="group relative 
                         bg-gradient-to-r from-[#FF4E00] to-[#FF8C42]
                         text-white px-10 py-5 rounded-2xl font-semibold text-lg
                         shadow-xl hover:shadow-3xl hover:scale-105
                         transition-all duration-300 flex items-center gap-3 overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                            -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] 
                            transition-transform duration-1000"
              />
              View My Work
              <ArrowDown size={20} className="group-hover:animate-bounce" />
            </button>

            {/* Download CV */}
            <button
              onClick={downloadCV}
              className="group relative border-2 border-gray-600
                         hover:border-blue-400
                         text-gray-300 px-10 py-5 
                         rounded-2xl font-semibold text-lg
                         hover:bg-gray-700/80
                         transition-all duration-300 flex items-center gap-3"
            >
              Download CV
              <Download size={20} className="group-hover:scale-110 duration-300" />
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-8 mb-10">
            {[
              {
                icon: Github,
                href: "https://github.com/HarisAmmar117",
                label: "GitHub",
                color: "hover:text-white",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/haris-ammar117",
                label: "LinkedIn",
                color: "hover:text-blue-500",
              },
              {
                icon: Mail,
                href: "mailto:harisammar117@gmail.com",
                label: "Email",
                color: "hover:text-red-500",
              },
            ].map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`group p-4 rounded-2xl bg-gray-800/70 
                           backdrop-blur-sm shadow-lg hover:shadow-2xl
                           transform hover:scale-110 hover:-translate-y-1
                           transition-all duration-300 
                           text-gray-400 ${color}
                           border border-gray-700`}
              >
                <Icon
                  size={28}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
