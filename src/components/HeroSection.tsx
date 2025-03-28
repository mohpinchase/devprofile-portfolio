
import React from "react";
import { ArrowRight, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-20 pt-28 relative overflow-hidden"
    >
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100 -z-10"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 animate-fade-in">
          <h4 className="text-primary font-medium mb-2">Hi there, I'm</h4>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            John Doe
          </h1>
          <h2 className="text-2xl sm:text-3xl text-muted-foreground font-semibold mb-6">
            Software Developer
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            I build exceptional and accessible digital experiences for the web.
            Specializing in modern JavaScript frameworks and UI/UX design.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="btn-primary">
              View My Work
              <ArrowRight size={18} />
            </Button>
            <Button variant="outline" className="inline-flex items-center gap-2">
              <Download size={18} />
              Download CV
            </Button>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center animate-fade-in">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 bg-white p-2 rounded-full shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
              alt="John Doe - Software Developer"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-full shadow-lg">
              <Github size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
