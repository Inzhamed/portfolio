
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Development Intern",
      company: "FlamboSoft",
      period: "2023",
      location: "Algiers, Algeria",
      description: "Developed full-stack web applications using modern technologies including React, Node.js, and PostgreSQL. Collaborated with senior developers on client projects and gained experience in agile development methodologies.",
      skills: ["React", "Node.js", "PostgreSQL", "Git", "Ruby on Rails"]
    },
    {
      title: "AI Research Intern",
      company: "Advanced Technology Development Center",
      period: "2025",
      location: "Algiers, Algeria",
      description: "Worked on AI-based solutions for railway infrastructure monitoring. Developed computer vision models for defect detection and implemented the machine learning models for data analysis and pattern recognition.",
      skills: ["Python", "TensorFlow", "Computer Vision", "Machine Learning", "Data Analysis"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Professional Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl text-blue-400 mb-2">{exp.title}</CardTitle>
                    <p className="text-lg text-white font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400">{exp.period}</p>
                    <p className="text-gray-400">{exp.location}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Key Technologies & Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-600/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
