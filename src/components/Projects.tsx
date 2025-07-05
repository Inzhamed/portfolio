
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "iPhone 15 Pro Website",
      description: "A high-fidelity clone of the iPhone 15 Pro product page demonstrating advanced frontend techniques, including complex scroll animations, interactive 3D models, and smooth transitions. Designed to replicate a real-world production-level marketing site.",
      techStack: ["React", "Tailwind CSS", "Three.js", "GSAP"],
      github: "https://github.com/Inzhamed/iphone15pro-website",
      liveDemo: "https://inzhamed.github.io/iphone15pro-website/",
      image: "iphone15clone.png"
    },
    {
      title: "Railway Inspection Dashboard",
      description: "Developed a web dashboard with a map interface (defect location visualization), Integrated secure access for on-site and remote users, Managed historical data and enabled dynamic filtering by defect type or region ",
      techStack: ["React", "TypeScript", "Node.js", "MongoDB", "leaflet.js"],
      github: "https://github.com/Inzhamed/pfc",
      liveDemo: "https://inzhamed.github.io/pfc/#/dashboard", // Replace with actual URL
      image: "CDTA_DEV.png"
    },
    {
      title: "Medical Office Management System",
      description: "Comprehensive management system for medical practices with patient records, appointment scheduling, and billing features.",
      techStack: ["Java", "Spring Boot", "MongoDB", "React"],
      github: "https://github.com/Inzhamed/medicalOffice",
      liveDemo: null, // No live demo available
      image: "Medic.png"
    },
    {
      title: "Server Monitoring Web App",
      description: "Real-time server monitoring application with alerts, performance metrics, and automated reporting for system administrators.",
      techStack: ["Express.js", "WebSocket", "SSH"],
      github: "https://github.com/Inzhamed/server-monitor",
      liveDemo: null, // Replace with actual URL
      image: "server_monitor.png"
    },
    {
      title: "AI-Based Railway Defect Detection",
      description: "Advanced computer vision system for automated railway track inspection using deep learning algorithms to detect and classify track defects.",
      techStack: ["Python", "TensorFlow", "OpenCV", "Machine Learning"],
      github: "https://github.com/inezarenehamed/railway-defect-detection",
      liveDemo: null, 
      image: "CDTA_AI.png"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group"
              onClick={() => {
                if (project.liveDemo) {
                  window.open(project.liveDemo, '_blank');
                } else {
                  window.open(project.github, '_blank');
                }
              }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  {project.liveDemo && (
                    <div className="bg-blue-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink size={16} />
                    </div>
                  )}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button 
                    asChild
                    className="bg-gray-700 hover:bg-gray-600 text-white"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
