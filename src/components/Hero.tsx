import { Link } from 'react-scroll';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen pt-20 flex items-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">{personalInfo.name}</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              {personalInfo.about}
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="btn btn-primary"
              >
                View Projects
              </Link>
              <a
                href="https://drive.google.com/file/d/1eRsXrzKr7pP3gCDLsWRaIxpPcftMW8w6/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Resume
              </a>
            </div>
            
            {/* Social links for mobile */}
            <div className="flex md:hidden items-center gap-6 mb-8">
              <a
                href="https://github.com/Kalyani0131"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/vadakala-kalyani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:kalyani.vadakala@gmail.com"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                aria-label="Email Contact"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>
          
          {/* Social links for desktop */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-20 blur-3xl animate-pulse"></div>
              <div className="absolute inset-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 opacity-30 blur-xl animate-pulse delay-100"></div>
              <div className="absolute inset-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 opacity-40 blur-lg animate-pulse delay-200"></div>
              <div className="absolute inset-0 flex items-center justify-center gap-6">
                <a
                  href="https://github.com/Kalyani0131"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-200 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={32} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vadakala-kalyani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-200 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={32} />
                </a>
                <a
                  href="mailto:kalyani.vadakala@gmail.com"
                  className="text-white hover:text-blue-200 transition-colors"
                  aria-label="Email Contact"
                >
                  <Mail size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;