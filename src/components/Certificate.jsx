import React from "react";

const Certificates = () => {
  const certificates = [

    {
      title: "Advanced Learning Algorithms",
      issuer: "deeplearning.AI, Coursera",
      year: "2026",
      description: "Completed a course on building and training neural networks with TensorFlow for multi-class classification, applying best practices in machine learning, and implementing decision trees and ensemble methods including random forests and boosted trees.",
      url: "https://www.coursera.org/account/accomplishments/verify/DUJMSHYJFC7M?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    },

    {
      title: "Java Spring Boot Microservices eCommerce Project Masterclass",
      issuer: "EmbarkX, Udemy",
      year: "2026",
      description:
        "Completed a hands-on masterclass building a real-world eCommerce application using Java Spring Boot microservices. Gained practical experience with Spring REST clients, Docker, Kubernetes, Kafka, RabbitMQ, PostgreSQL, MongoDB, and secure API design (OAuth2, JWT, Keycloak).",
      url: "https://ude.my/UC-56349bee-a1ef-447a-a5be-87f8ef971dae",
    },
        {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Coursera (Stanford University & DeepLearning.AI)",
      year: "2026",
      description:
        "Learned the fundamentals of supervised machine learning, including building and training regression and classification models using Python, NumPy, and scikit-learn. Covered linear regression, logistic regression, feature engineering, and model evaluation.",
      url: "https://coursera.org/share/ec8ca040ae621fdde41470fab5ac4464",
    },
    {
      title: "Java (Basics)",
      issuer: "HackerRank",
      year: "2025",
      description:
        "Completed hands-on exercises to learn core Java concepts including variables, loops, conditionals, functions, object-oriented programming, and basic problem-solving.",
      url: "https://www.hackerrank.com/certificates/78e4bef96955",
    },
    {
      title: "Python (Basics)",
      issuer: "HackerRank",
      year: "2025",
      description:
        "Gained hands-on experience with Python fundamentals including data types, loops, conditionals, functions, and basic problem-solving.",
      url: "https://www.hackerrank.com/certificates/0c13dd002982",
    },


  ];

  return (
    <section id="certificates" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FF8C40] mb-4">
            Certificates
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of certifications I've earned to strengthen my skills
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
            >
              <h4 className="text-2xl font-bold text-white mb-2">
                {cert.title}
              </h4>

              <p className="text-gray-300 font-medium mb-1">{cert.issuer}</p>

              <p className="text-sm text-gray-400 mb-4">{cert.year}</p>

              <p className="text-gray-300 leading-relaxed mb-4">
                {cert.description}
              </p>

              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#FF8C40] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#ff9c5a] transition"
              >
                View Credential
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
