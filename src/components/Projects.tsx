import { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <>
      <section id="projects" className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="section-title text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setActiveIndex(0);
                  setSelectedProject(null);
                }}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {filteredProjects.map((project) => (
                  <div 
                    key={project.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="card overflow-hidden max-w-4xl mx-auto">
                      <div className="relative h-[300px] bg-gray-100 dark:bg-gray-700">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={() => setFullscreenImage(project.image)}
                          className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                          aria-label="View fullscreen"
                        >
                          <Maximize2 size={20} />
                        </button>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                        
                        <button
                          onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                          className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-flex items-center"
                        >
                          {selectedProject === project.id ? 'Hide Details' : 'View Details'}
                        </button>
                        
                        {selectedProject === project.id && (
                          <div className="mt-4 space-y-4 border-t pt-4 dark:border-gray-700">
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Problem:</h4>
                              <p className="text-gray-600 dark:text-gray-400">{project.problem}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solution:</h4>
                              <p className="text-gray-600 dark:text-gray-400">{project.solution}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Results:</h4>
                              <p className="text-gray-600 dark:text-gray-400">{project.results}</p>
                            </div>
                          </div>
                        )}
                        
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.technologies.map((tech, index) => (
                            <span 
                              key={index} 
                              className="text-xs font-medium px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-4 mt-4">
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                          >
                            <Github size={20} className="mr-1" />
                            GitHub
                          </a>
                          {project.demo && (
                            <a 
                              href={project.demo} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                            >
                              <ExternalLink size={20} className="mr-1" />
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {filteredProjects.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                  aria-label="Previous project"
                >
                  <ChevronLeft size={24} className="text-gray-800 dark:text-gray-200" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                  aria-label="Next project"
                >
                  <ChevronRight size={24} className="text-gray-800 dark:text-gray-200" />
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setFullscreenImage(null)}
        >
          <div className="relative w-[90vw] h-[90vh] flex items-center justify-center">
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close fullscreen image"
            >
              <X size={32} />
            </button>
            <img
              src={fullscreenImage}
              alt="Project preview"
              className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;