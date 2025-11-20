import React from 'react';
import { Code2, Palette, Zap } from 'lucide-react';
import profile from '../images/Profile.jpg'

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable code with best practices"
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Creating visually appealing and user-friendly interfaces"
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized applications for the best user experience"
    }
  ];

  return (
<section className="py-20 bg-gray-900">
  <div className="container mx-auto px-6">
    
    {/* Section Title */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-[#FF8C40] bg-clip-text text-transparent mb-4">
        About Me
      </h2>

      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Aspiring software developer and data enthusiast, passionate about building innovative applications and exploring the world of AI/ML.
      </p>
    </div>

    {/* Grid Layout */}
    <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 items-center gap-5 mx-auto">

      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          src={profile} 
          alt="Profile"
          className="rounded-3xl object-cover shadow-xl border border-white/10"
        />
      </div>

      {/* About Me Content */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl p-8">
        <h3 className="text-3xl font-bold text-white mb-4">Who I Am</h3>
        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          I’m Ammar Haris, an undergraduate at SLIIT pursuing a BSc in Information Technology. I am passionate about software development, data science, and AI/ML, constantly learning and improving my skills through real-world projects.
        </p>

        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          I enjoy building modern, responsive, and user-friendly applications. My focus is on writing clean, maintainable code and creating impactful digital experiences. I am also exploring machine learning and AI to develop intelligent solutions.
        </p>

        <p className="text-gray-400 text-lg leading-relaxed">
          Currently seeking opportunities to contribute to software and data-driven projects, grow professionally, and apply my skills to real-world challenges in the tech industry.
        </p>
      </div>

    </div>

  </div>
</section>


  );
};

export default About;