import React from "react";
import apiBlogImage from "../images/blogs/apiBlog.jpg";

const Blogs = () => {
  const blogs = [
    {
      title: "What Is an API? A Beginner-Friendly Explanation",
      description:
        "APIs (Application Programming Interfaces) let software communicate, share functions, and speed up development. This beginner-friendly guide explains endpoints, request types, and practical examples to show how APIs work.",
      image: apiBlogImage, 
      link: "https://ammar117blogs.hashnode.dev/what-is-an-api-a-beginner-friendly-explanation", 
    },
    
  ];

  return (
    <section id="blogs" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FF8C40] mb-4">
            My Blogs
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Sharing what I learn — simple IT explanations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogs.map((blog) => (
            <div
              key={blog.title}
              className="group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {blog.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {blog.description}
                </p>

                <a
                  href={blog.link}
                  className="inline-block mt-2 px-4 py-2 bg-[#FF8C40] text-white rounded-lg font-medium hover:bg-orange-500 transition"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
