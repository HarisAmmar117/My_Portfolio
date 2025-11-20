import React from "react";
import cPlus from "../images/skills/cplus.png";
import reactImg from "../images/skills/react.png";
import javaImg from "../images/skills/javaLogo.png";
import phythonImg from "../images/skills/python.png";
import phpImg from "../images/skills/php.jpg";
import jsImg from "../images/skills/javascript.png";
import tsImg from "../images/skills/typescript.png";
import htmlImg from "../images/skills/htmllogo.webp";
import tailwindImg from "../images/skills/tw.png";
import clang from "../images/skills/clang.webp";
import nodeImg from "../images/skills/nodejs.png";
import mongoImg from "../images/skills/mongodb.svg";
import bootstrapImg from "../images/skills/bootstrap.svg";
import kotlinImg from "../images/skills/kotlin.png";
import xmlImg from "../images/skills/xml.png";
import cssImg from "../images/skills/css.png";
import sqlImg from "../images/skills/sql.png";
import springImg from "../images/skills/springlogo.png";
import wordpressImg from "../images/skills/wordpress.png";

const Skills = () => {
  const technicalSkills = [
    { name: "Java", image: javaImg },
    { name: "Python", image: phythonImg },
    { name: "php", image: phpImg },
    { name: "React", image: reactImg },
    { name: "JavaScript", image: jsImg },
    { name: "TypeScript", image: tsImg },
    { name: "HTML", image: htmlImg },
    { name: "CSS", image: cssImg },
    { name: "Tailwind CSS", image: tailwindImg },
    { name: "C", image: clang },
    { name: "C++", image: cPlus },
    { name: "Node.js", image: nodeImg },
    { name: "MongoDB", image: mongoImg },
    { name: "Bootstrap", image: bootstrapImg },
    { name: "Kotlin", image: kotlinImg },
    { name: "xml", image: xmlImg },
    { name: "SQL", image: sqlImg },
    { name: "Spring Boot", image: springImg },
    { name: "WordPress", image: wordpressImg },
  ];

  const coreSkills = [
    { name: "Problem Solving", level: 89 },
    { name: "Team Collaboration", level: 85 },
    { name: "Communication", level: 82 },
    { name: "Project Management", level: 78 },
    { name: "Agile Methodology", level: 80 },
    { name: "Critical Thinking", level: 84 },
    { name: "Adaptability", level: 83 },
    { name: "Time Management", level: 81 },
    { name: "Leadership", level: 60 },
    { name: "Creativity", level: 89 },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-white/50 dark:bg-gray-900 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FF8C40] bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My technical expertise and professional capabilities
          </p>
        </div>

        {/* Technical Skills - Images */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-10 text-gray-800 dark:text-white text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-10 justify-center items-center">
            {technicalSkills.map(({ name, image }) => (
              <div key={name} className="flex flex-col items-center">
                <img
                  src={image}
                  alt={name}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain drop-shadow"
                />
                <span className="text-base font-medium text-gray-700 dark:text-gray-300 mt-4 text-center">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Core / Soft Skills with Progress Bars */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white text-center">
            Core Skills
          </h3>
          <div className="max-w-2xl mx-auto space-y-6">
            {coreSkills.map(({ name, level }) => (
              <div
                key={name}
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                      {name}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#FF8C41] bg-orange-50 dark:bg-orange-900/30 px-2 py-1 rounded">
                      {level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-[#FF8C41] to-orange-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
