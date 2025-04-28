import { skills } from '../data/portfolioData';

const skillCategories = {
  Languages: ['C', 'Python', 'Java', 'HTML', 'CSS','SQL'],
  'Developer Tools': ['Git', 'VS Code'],
  Libraries: ['Numpy', 'Pandas', 'Matplotlib'],
  'Soft Skills': ['Team Leadership', 'Problem Solving', 'Communication', 'Time Management'],
  'Course Works': ['OS', 'OOPs', 'DBMS', 'DSA','Computer Networks','Data Science','Aritifical Intelligence','Machine Learning']
};

const Skills = () => {
  return (
    <section id="skills" className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title text-gray-900 dark:text-white">
          Technical <span className="text-blue-600 dark:text-blue-400">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillCategories).map(([category, items]) => (
            <div 
              key={category}
              className="card p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;