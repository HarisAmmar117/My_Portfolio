import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Identity Issuing System",
      tech: ["PHP", "HTML", "CSS"],
      description:
        "Developed a simple web-based identity creation and management system with form validation and a clean, responsive UI.",
      github: "https://github.com/HarisAmmar117/Identity-Isssueing-System",
      image: "/api/placeholder/400/250",
    },
    {
      title: "Hotel Reservation System",
      tech: ["Java", "Bootstrap", "HTML", "CSS"],
      description:
        "Created a system to manage room reservations, payments, and user accounts using OOP concepts and MVC-style structuring.",
      github:
        "https://github.com/HarisAmmar117/Online-Hotel-Reservation-System",
      image: "/api/placeholder/400/250",
    },
    {
      title: "Indoor Sports Complex Management System",
      tech: ["MERN", "TailwindCSS", "REST API"],
      description:
        "Built a full-stack system for booking sports facilities and managing schedules, with REST APIs and a modern React front-end.",
      github: "https://github.com/HarisAmmar117/Indoor-Sports-Complex-System",
      image: "/api/placeholder/400/250",
    },
    {
      title: "HabitFlow App",
      tech: ["Kotlin", "XML", "SQLite", "Room"],
      description:
        "Developed a mobile app for tracking and managing daily habits with local Room database storage and interactive XML UI.",
      github: "https://github.com/HarisAmmar117/HabbitFlowApp",
      image: "/api/placeholder/400/250",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FF8C40] bg-clip-text text-transparent mb-4">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Some of my recent work that I'm proud to share
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                  >
                    <Github size={20} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
