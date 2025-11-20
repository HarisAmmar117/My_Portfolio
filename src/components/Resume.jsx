import React from "react";

const Education = () => {
  const education = [
    {
      title: "BSc (Hons) in Information Technology",
      institution: "SLIIT – Sri Lanka Institute of Information Technology",
      year: "2023 – Ongoing",
      description:
        "Currently pursuing a Bachelor's degree in IT with strong academic performance. Maintaining a CGPA of 3.65.",
    },
    {
      title: "GCE A/L – Combined Mathematics Stream",
      institution: "Gampola Zahira College",
      year: "2022",
      description:
        "Completed A/Ls in the Combined Maths stream with results of 3Cs.",
    },
    {
      title: "GCE O/L",
      institution: "Gampola Zahira College",
      year: "2019",
      description:
        "Achieved excellent results with 6As, 1B, and 2Cs including A passes in Mathematics, Science, IT, and English.",
    },
  ];

  return (
    <section
      id="resume"
      className="py-20 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FF8C40] mb-4">
            Resume
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A quick overview of my academic background
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mt-10">
            Education
          </h3>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((item) => (
            <div
              key={item.title}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {item.title}
              </h4>

              <p className="text-gray-600 dark:text-gray-300 font-medium mb-1">
                {item.institution}
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {item.year}
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
