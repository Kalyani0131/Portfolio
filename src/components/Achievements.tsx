import { useState } from 'react';
import { achievements } from '../data/portfolioData';
import { ExternalLink, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

const Achievements = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedAchievement, setSelectedAchievement] = useState<number | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % achievements.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  return (
    <>
      <section id="achievements" className="section bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="section-title text-gray-900 dark:text-white">
            <span className="text-blue-600 dark:text-blue-400">Achievements</span> & Recognition
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {achievements.map((achievement) => (
                  <div 
                    key={achievement.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="card overflow-hidden">
                      <div className="relative h-[300px] bg-gray-100 dark:bg-gray-700">
                        {achievement.image && (
                          <>
                            <img
                              src={achievement.image}
                              alt={achievement.title}
                              className="w-full h-full object-cover"
                            />
                            <button
                              onClick={() => setFullscreenImage(achievement.image)}
                              className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2"
                            >
                              <Maximize2 size={16} />
                              View Image
                            </button>
                          </>
                        )}
                      </div>
                      
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{achievement.title}</h3>
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                            {achievement.date}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{achievement.description}</p>
                        
                        {selectedAchievement === achievement.id && achievement.image && (
                          <div className="mt-6 space-y-4">
                            <div className="border-t dark:border-gray-700 pt-4">
                              <img
                                src={achievement.image}
                                alt={achievement.title}
                                className="w-full rounded-lg shadow-lg"
                              />
                            </div>
                          </div>
                        )}
                        
                        {achievement.proof && (
                          <a 
                            href={achievement.proof} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mt-4"
                          >
                            Know More <ExternalLink size={16} className="ml-1" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {achievements.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                  aria-label="Previous achievement"
                >
                  <ChevronLeft size={24} className="text-gray-800 dark:text-gray-200" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                  aria-label="Next achievement"
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
              alt="Achievement preview"
              className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Achievements;