
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="text-center relative z-10 max-w-4xl mx-auto">
        {/* Profile Picture */}
        <div className="mb-8 flex justify-center">
          <div className="w-56 h-56 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-white text-4xl font-bold">
              {/* Placeholder - replace with your actual image */}
              <img 
                src="/IMG_5447.jpg" 
                alt="INEZARENE Hamed Abdelaziz"
                className="w-full h-full rounded-full object-cover"
                onError={(e) => {
                  // Fallback to initials if image fails to load
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) {
                    fallback.style.display = 'flex';
                  }
                }}
              />
              <div className="w-full h-full rounded-full flex items-center justify-center text-white text-4xl font-bold" style={{display: 'none'}}>
                IH
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            INEZARENE
            <span className="block text-blue-400">Hamed Abdelaziz</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
            Full-Stack Developer | AI Enthusiast | Computer Science Graduate
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-in">
            Passionate about building scalable web applications and exploring the frontiers of artificial intelligence. 
            Ready to bring innovative solutions to your next project.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
          <Button 
            onClick={() => scrollToSection('projects')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
          >
            View My Work
          </Button>
          <Button 
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 text-lg transition-all duration-300"
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-8 animate-fade-in">
          <a href="https://github.com/Inzhamed" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/hamed-inezarene-390580249/" target="_blank" rel="noopener noreferrer"
             className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="mailto:inezarenehamed@gmail.com"
             className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
            <Mail size={24} />
          </a>
        </div>

        <div className="animate-bounce">
          <ArrowDown 
            className="text-gray-400 cursor-pointer mx-auto hover:text-blue-400 transition-colors duration-300"
            size={32}
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
