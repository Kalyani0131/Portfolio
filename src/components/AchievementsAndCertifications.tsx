import { useState } from 'react';
import { achievements, certifications } from '../data/portfolioData';
import { Award, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const AchievementsAndCertifications = () => {
  const [activeSection, setActiveSection] = useState<'achievements' | 'certifications'>('achievements');
  const [activeIndex, setActiveIndex] = useState(0);

  const currentItems = activeSection === 'achievements' ? achievements : certifications;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % currentItems.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + currentItems.length) % currentItems.length);
  };

  return (
    <section id="achievements" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <h2 className="section-title text-gray-900 dark:text-white">
          <span className="text-blue-600 dark:text-blue-400">Achievements</span> & Certifications
        </h2>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => {
              setActiveSection('achievements');
              setActiveIndex(0);
            }}
            className={`px-4 py-2 rounded-full transition-all ${
              activeSection === 'achievements'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Achievements
          </button>
          <button
            onClick={() => {
              setActiveSection('certifications');
              setActiveIndex(0);
            }}
            className={`px-4 py-2 rounded-full transition-all ${
              activeSection === 'certifications'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Certifications
          </button>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {currentItems.map((item) => (
                <div 
                  key={item.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="card overflow-hidden group">
                    {activeSection === 'achievements' && 'image' in item && item.image ? (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ) : (
                      <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center p-6">
                        <Award size={48} className="text-white" />
                      </div>
                    )}
                    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          {item.date}
                        </span>
                      </div>
                      
                      {'issuer' in item && (
                        <div className="text-gray-700 dark:text-gray-300 mb-4">{item.issuer}</div>
                      )}
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                      
                      {('proof' in item && item.proof || 'credential' in item && item.credential) && (
                        <a 
                          href={'proof' in item ? item.proof : item.credential} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          View {activeSection === 'achievements' ? 'Proof' : 'Certificate'} <ExternalLink size={16} className="ml-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {currentItems.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                aria-label="Previous item"
              >
                <ChevronLeft size={24} className="text-gray-800 dark:text-gray-200" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                aria-label="Next item"
              >
                <ChevronRight size={24} className="text-gray-800 dark:text-gray-200" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AchievementsAndCertifications;