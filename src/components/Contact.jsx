import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 🔍 Validation Rules
  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Name is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Enter a valid email address");
      return false;
    }
    if (!formData.subject.trim()) {
      toast.error("Subject is required");
      return false;
    }
    if (formData.message.trim().length < 10) {
      toast.error("Message must be at least 10 characters");
      return false;
    }
    return true;
  };

  // 📨 Submit handler with EmailJS (hardcoded keys)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_zol3j6b",           // Your service ID
        "template_v117jp5",          // Your template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "N/A",
          subject: formData.subject,
          message: `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "N/A"}
Subject: ${formData.subject}
Message: ${formData.message}
          `
        },
        "6cBk8Y1qS09Pcmyh_"          // Your public key
      );

      setIsSubmitted(true);
      toast.success("Message sent successfully!");
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.");
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'mhmammar19@gmail.com', href: 'mailto:mhmammar19@gmail.com', color: 'from-red-500 to-pink-500' },
    { icon: Phone, label: 'Phone', value: '+94 78 442 3204', href: 'tel:+94784423204', color: 'from-green-500 to-teal-500' },
    { icon: MapPin, label: 'Location', value: 'No 21/16, Gelioya Waththa, Gelioya', href: '#', color: 'from-blue-500 to-cyan-500' }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/HarisAmmar117', color: 'hover:bg-gray-900 hover:text-white' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/haris-ammar117', color: 'hover:bg-blue-600 hover:text-white' },
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/94784423204', color: 'hover:bg-green-500 hover:text-white' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/hrs_ammar', color: 'hover:bg-pink-500 hover:text-white' },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-purple-900/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FF8C40] bg-clip-text text-transparent mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let's work together! I'm always open to discussing new opportunities and creative projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* CONTACT INFO */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Let's start a conversation</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                I'm currently available for freelance work and full-time opportunities. Whether you have a project in mind or just want to say hello, I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <a key={item.label} href={item.href} className="group flex items-center gap-6 p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Follow me on</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                     className={`p-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-600 dark:text-gray-400 ${social.color}`}>
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
                <button onClick={() => setIsSubmitted(false)}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required
                           className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                           placeholder="John Doe"/>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required
                           className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                           placeholder="john@example.com"/>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label>
                  <input type="text" name="phone" value={formData.phone} onChange={handleChange}
                         className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                         placeholder="+94 78 123 4567"/>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject *</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required
                         className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                         placeholder="Project Collaboration"/>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows="6"
                            className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                            placeholder="Tell me about your project or just say hello..."/>
                </div>

                <button type="submit" disabled={isSubmitting}
                        className="w-full group [background-image:linear-gradient(135deg,#FF4E00,#FF8C42)] text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"/>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="group-hover:translate-x-1 transition-transform duration-300" size={20}/>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
