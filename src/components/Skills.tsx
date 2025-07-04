
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "Python", "TypeScript", "Ruby", "C"],
      color: "bg-blue-600/20 border-blue-600/30 text-blue-400"
    },
    {
      title: "Frontend Frameworks",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
      color: "bg-cyan-600/20 border-cyan-600/30 text-cyan-400"
    },
    {
      title: "Backend Technologies",
      skills: ["Spring Boot", "Node.js", "Express.js", "Ruby on Rails"],
      color: "bg-teal-600/20 border-teal-600/30 text-teal-400"
    },
    {
      title: "Databases & Tools",
      skills: ["MongoDB", "PostgreSQL", "Git/GitHub", "Linux", "REST APIs"],
      color: "bg-slate-600/20 border-slate-600/30 text-slate-400"
    },
    {
      title: "AI & Machine Learning",
      skills: ["TensorFlow", "OpenCV", "Computer Vision", "Data Preprocessing"],
      color: "bg-indigo-600/20 border-indigo-600/30 text-indigo-400"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-blue-400">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-sm border ${category.color}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">Always Learning</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
                Currently exploring cloud platforms, microservices architecture, and advanced AI/ML techniques.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
