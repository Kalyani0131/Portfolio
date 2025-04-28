import { useState } from 'react';
import { certifications } from '../data/portfolioData';
import { ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react'; // Removed Maximize2

const Certifications = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % certifications.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  return (
    <>
      <section id="certifications" className="section bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="section-title text-gray-900 dark:text-white">
            Professional <span className="text-blue-600 dark:text-blue-400">Certifications</span>
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {certifications.map((cert) => (
                  <div 
                    key={cert.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="card overflow-hidden">
                      <div className="relative h-[300px] bg-gray-100 dark:bg-gray-700">
                        {cert.image && (
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{cert.title}</h3>
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                            {cert.date}
                          </span>
                        </div>
                        
                        <div className="text-gray-700 dark:text-gray-300 mb-4">{cert.issuer}</div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{cert.description}</p>
                        
                        {cert.credential && (
                          <a 
                            href={cert.credential} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mt-4"
                          >
                            View Certificate <ExternalLink size={16} className="ml-1" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {certifications.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                  aria-label="Previous certification"
                >
                  <ChevronLeft size={24} className="text-gray-800 dark:text-gray-200" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                  aria-label="Next certification"
                >
                  <ChevronRight size={24} className="text-gray-800 dark:text-gray-200" />
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Fullscreen Image Modal (optional if you still want to allow full-size viewing when clicking the image) */}
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
              alt="Certificate preview"
              className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Certifications;
