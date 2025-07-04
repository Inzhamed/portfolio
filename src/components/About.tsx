
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">Background</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm a Computer Science graduate from USTHB (University of Science and Technology Houari Boumediene) 
                  with a passion for full-stack development and artificial intelligence. My journey in tech has been 
                  driven by curiosity and a desire to solve real-world problems through innovative software solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">Passion & Goals</h3>
                <p className="text-gray-300 leading-relaxed">
                  I specialize in building scalable web applications and exploring AI applications in various domains. 
                  My goal is to contribute to meaningful projects that make a positive impact while continuously 
                  learning and growing as a developer.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">Education</h3>
                <div className="space-y-2">
                  <p className="text-white font-semibold">License in Computer Science</p>
                  <p className="text-gray-400">USTHB - Algiers, Algeria</p>
                  <p className="text-gray-400">Specialized in Software Engineering & AI</p>
                </div>
              </CardContent>
            </Card>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
