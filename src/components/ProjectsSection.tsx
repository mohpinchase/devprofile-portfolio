
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform with product management, user authentication, shopping cart, and payment processing.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      techs: ["React", "Node.js", "MongoDB", "Stripe API", "Redux"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, task assignment, and progress tracking features.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      techs: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "An interactive weather dashboard that displays current weather conditions and forecasts for multiple locations.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      techs: ["JavaScript", "React", "Weather API", "Chart.js"],
      github: "https://github.com",
      live: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="container-section bg-secondary/30">
      <h2 className="section-heading">My Projects</h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Here are some of the projects I've worked on. Each project showcases different skills and 
        technologies I've used throughout my development journey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden card-hover">
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techs.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Github size={16} />
                  Code
                </a>
              </Button>
              <Button size="sm" asChild>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
