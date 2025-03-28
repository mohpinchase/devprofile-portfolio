
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const TimelineItem = ({
  title,
  company,
  date,
  description,
  isJob = true,
}) => {
  return (
    <div className="relative pl-8 sm:pl-12 py-6 group">
      <div className="flex flex-col sm:flex-row items-start mb-1 group-hover:text-primary transition-colors duration-200">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className="sm:ml-2 text-muted-foreground">at {company}</span>
      </div>
      <time className="text-xs tracking-wide uppercase text-muted-foreground">
        {date}
      </time>
      <p className="mt-3 text-muted-foreground">{description}</p>

      {/* Timeline elements */}
      <div className="absolute left-0 top-7 sm:left-4 h-full w-px bg-muted-foreground/20 group-last:h-0"></div>
      <div className="absolute left-0 sm:left-4 top-7 -ml-1.5 sm:-ml-2 h-4 w-4 rounded-full border border-primary bg-background transition-colors duration-200 group-hover:border-primary/70"></div>
      <div className="absolute left-0 sm:left-4 top-7 -ml-3 sm:-ml-3.5 h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center">
        {isJob ? (
          <Briefcase size={14} className="text-primary" />
        ) : (
          <GraduationCap size={14} className="text-primary" />
        )}
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      date: "2021 - Present",
      description:
        "Lead the frontend development team in building responsive and accessible web applications. Implemented new features and optimized existing ones resulting in a 30% increase in performance.",
      isJob: true,
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Solutions LLC",
      date: "2018 - 2021",
      description:
        "Developed and maintained full-stack applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality software solutions on time.",
      isJob: true,
    },
    {
      id: 3,
      title: "Junior Web Developer",
      company: "Web Crafters",
      date: "2016 - 2018",
      description:
        "Created responsive websites and implemented UI components. Worked closely with designers to ensure pixel-perfect implementation of designs.",
      isJob: true,
    },
    {
      id: 4,
      title: "Master's in Computer Science",
      company: "Tech University",
      date: "2014 - 2016",
      description:
        "Specialized in Software Engineering and Web Technologies. Thesis focused on optimization techniques for Single Page Applications.",
      isJob: false,
    },
    {
      id: 5,
      title: "Bachelor's in Computer Science",
      company: "State University",
      date: "2010 - 2014",
      description:
        "Graduated with honors. Coursework included Data Structures, Algorithms, Database Systems, and Web Development.",
      isJob: false,
    },
  ];

  return (
    <section id="experience" className="container-section">
      <h2 className="section-heading">Experience & Education</h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="section-subheading flex items-center gap-2">
            <Briefcase size={20} /> Work Experience
          </h3>
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                {experiences
                  .filter((exp) => exp.isJob)
                  .map((exp) => (
                    <TimelineItem
                      key={exp.id}
                      title={exp.title}
                      company={exp.company}
                      date={exp.date}
                      description={exp.description}
                      isJob={exp.isJob}
                    />
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className="section-subheading flex items-center gap-2">
            <GraduationCap size={20} /> Education
          </h3>
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                {experiences
                  .filter((exp) => !exp.isJob)
                  .map((exp) => (
                    <TimelineItem
                      key={exp.id}
                      title={exp.title}
                      company={exp.company}
                      date={exp.date}
                      description={exp.description}
                      isJob={exp.isJob}
                    />
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
