import { experience } from '../data/portfolioData';
import { Briefcase as BriefcaseBusiness, FileText, Award } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <h2 className="section-title text-gray-900 dark:text-white">
          Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {experience.map((job, index) => (
            <div 
              key={job.id} 
              className="relative pl-8 pb-12 group"
            >
              {/* Timeline line */}
              {index < experience.length - 1 && (
                <div className="absolute left-3.5 top-7 h-full w-0.5 bg-blue-200 dark:bg-blue-800"></div>
              )}
              
              {/* Timeline icon */}
              <div className="absolute left-0 top-5 h-7 w-7 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center">
                <BriefcaseBusiness size={16} className="text-white" />
              </div>
              
              <div className="card p-6 ml-2 transform hover:-translate-y-1 transition-transform">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{job.position}</h3>
                  <span className="text-blue-600 dark:text-blue-400 font-medium text-sm md:text-base">
                    {job.duration}
                  </span>
                </div>
                
                <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-4">{job.company}</h4>
                
                <ul className="space-y-2 mb-4">
                  {job.description.map((item, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start">
                      <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-xs font-medium px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  {job.offerLetter && (
                    <a
                      href={job.offerLetter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <FileText size={16} className="mr-1" />
                      View Offer Letter
                    </a>
                  )}
                  {job.completionCertificate && (
                    <a
                      href={job.completionCertificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <Award size={16} className="mr-1" />
                      View Completion Certificate
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;