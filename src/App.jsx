import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Resume'; // ✅ Import Resume/Education
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-900 transition-all duration-500">

        {/* Smooth Scrolling Container */}
        <div className="relative z-10">
          <Navbar />
          
          <main className="relative">
            <section id="home">
              <Hero />
            </section>
            
            <section id="about" className="scroll-mt-20">
              <About />
            </section>

            {/* ✅ Resume / Education Section */}
            <section id="resume" className="scroll-mt-20">
              <Education />
            </section>
            
            <section id="projects" className="scroll-mt-20">
              <Projects />
            </section>
            
            <section id="skills" className="scroll-mt-20">
              <Skills />
            </section>
            
            <section id="contact" className="scroll-mt-20">
              <Contact />
            </section>
          </main>

          <Footer />
        </div>

        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              color: '#1f2937',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            },
            success: {
              iconTheme: {
                primary: '#10b981',
                secondary: 'white',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: 'white',
              },
            },
          }}
        />

        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 right-0 h-1 transform-origin-left z-50" 
             style={{ transform: 'scaleX(0)' }}
             id="progress-bar" />
      </div>
    </ThemeProvider>
  );
}

export default App;
