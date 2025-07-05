
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Get In Touch</h2>

        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-blue-400 mb-4">Let's Connect</CardTitle>
            <p className="text-gray-300 text-lg">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
            </p>
          </CardHeader>

          <CardContent className="space-y-8">
            <div className="text-center">
              <p className="text-white text-lg mb-2">📍 Based in Algiers, Algeria</p>
              <p className="text-gray-400">Open to remote work and relocation opportunities</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-400">Contact Information</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:inezarenehamed@gmail.com"
                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    <Mail size={20} />
                    <span>inezarenehamed@gmail.com</span>
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-400">Professional Links</h3>
                <div className="space-y-3">
                  <a
                    href="https://github.com/Inzhamed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    <Github size={20} />
                    <span>GitHub Profile</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hamed-inezarene-390580249/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-slate-700">
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
              >
                <a href="INEZARENE_CV.pdf" download>
                  <FileText className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
              <p className="text-gray-400 mt-4">
                Looking forward to hearing from you!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
