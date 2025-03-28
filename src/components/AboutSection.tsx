
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Layout, Database } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "Next.js",
    "Redux",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Git",
    "RESTful APIs",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "AWS",
  ];

  return (
    <section id="about" className="container-section">
      <h2 className="section-heading">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg mb-6">
            I'm a passionate software developer with over 5 years of experience
            building web applications. My journey in software development began
            during college where I discovered my passion for creating elegant
            solutions to complex problems.
          </p>
          <p className="text-lg mb-6">
            I specialize in frontend development with React and have extensive
            experience with backend technologies using Node.js. I enjoy working
            in collaborative environments and constantly strive to improve my
            skills and learn new technologies.
          </p>
          <p className="text-lg">
            When I'm not coding, you'll find me hiking, reading tech blogs, or
            contributing to open-source projects.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="section-subheading">My Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-3 py-1 text-sm bg-secondary hover:bg-secondary/80"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Code className="text-primary" size={28} />
                </div>
                <h4 className="font-medium text-lg mb-2">Frontend</h4>
                <p className="text-muted-foreground text-sm">
                  Modern, responsive UI with React, Next.js and Tailwind CSS
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Server className="text-primary" size={28} />
                </div>
                <h4 className="font-medium text-lg mb-2">Backend</h4>
                <p className="text-muted-foreground text-sm">
                  Scalable APIs with Node.js, Express, and cloud services
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Layout className="text-primary" size={28} />
                </div>
                <h4 className="font-medium text-lg mb-2">UI/UX</h4>
                <p className="text-muted-foreground text-sm">
                  Intuitive interfaces with focus on accessibility and usability
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Database className="text-primary" size={28} />
                </div>
                <h4 className="font-medium text-lg mb-2">Database</h4>
                <p className="text-muted-foreground text-sm">
                  Efficient data management with SQL and NoSQL databases
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
