import { education } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title text-gray-900 dark:text-white">
          <span className="text-blue-600 dark:text-blue-400">Education</span> Background
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <div 
              key={edu.id} 
              className="relative pl-8 pb-12 group"
            >
              {/* Timeline line */}
              {index < education.length - 1 && (
                <div className="absolute left-3.5 top-7 h-full w-0.5 bg-blue-200 dark:bg-blue-800"></div>
              )}
              
              {/* Timeline icon */}
              <div className="absolute left-0 top-5 h-7 w-7 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                <GraduationCap size={16} className="text-white" />
              </div>
              
              <div className="card p-6 ml-2 transform hover:-translate-y-1 transition-transform">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                  <span className="text-blue-600 dark:text-blue-400 font-medium text-sm md:text-base">
                    {edu.duration}
                  </span>
                </div>
                
                <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-2">{edu.institution}</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-1">{edu.description}</p>

                {/* CGPA Line */}
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  <strong>CGPA:</strong> {edu.cgpa}/10
                  <strong>Percentage:</strong>  {edu.percentage ??  (edu.cgpa * 9.5).toFixed(2)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
