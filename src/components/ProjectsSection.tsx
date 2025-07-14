import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import weev from '/weev.jpg';
import journal from '/journal.jpg';
import homiezu from '/homiezu.jpg';
import wordle from '/wordle.jpg';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "EV Platform",
      description: "Developed scalable backend services using C# and .NET to power an EV comparison platform. Built secure RESTful APIs for authentication and data handling, and optimized MySQL queries for efficient performance. Collaborated with Angular frontend to ensure smooth and responsive user experience.",
      image: weev,
      technologies: ["Angular", "C#", "MySQL", "ASP.NET"],
      github: "https://github.com/Abhyudya21",
      live: "http://weev.co.in/",
      featured: true
    },
    {
      title: "JournalApp",
      description: "Built a secure and intuitive journal application using Spring Boot. Implemented CRUD functionality for entries, user authentication, and session management. Integrated MySQL for persistent storage and used Thymeleaf for dynamic, server-side rendered views.",
      image: journal,
      technologies: ["SpringBoot", "MongoDb"],
      github: "https://github.com/Abhyudya21",
      live: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website with smooth animations, dark/light theme, and responsive design. Built with Next.js and Framer Motion.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Framer Motion", "TailwindCSS", "MDX"],
      github: "https://github.com/Abhyudya21",
      live: "#",
      featured: false
    },
    {
      title: "Homiezu",
      description: "A comprehensive real estate platform allowing users to rent, buy, sell, and lease properties with ease. Features secure user authentication, advanced property filtering, and built-in legal documentation support to streamline real estate transactions. Fully responsive and built for scalability.",
      image: homiezu,
      technologies: ["Next.js", "NextAuth.js", "Prisma", "Drizzle", "Tailwind CSS", "tRPC"],
      github: "https://github.com/Abhyudya21",
      live: "https://homiezu.com/",
      featured: false
    },
    {
      title: "Wordle Game ",
      description: "Built a fully responsive Wordle clone with six-attempt logic and real-time input feedback.Implemented core gameplay: letter evaluation (correct, present, absent) and dynamic DOM updates—no external libraries used.",
      image: wordle,
      technologies: ["React", "OpenAI API", "Socket.io", "Express"],
      github: "https://github.com/Abhyudya21/Wordle",
      live: "https://wordle-psi.vercel.app/",
      featured: true
    },
  ];

  const AllProjectsModal = () => (
    <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <div className="flex justify-between items-center">
          <DialogTitle className="text-2xl font-bold">All Projects</DialogTitle>
          <div className="flex gap-2">            
          </div>
        </div>
      </DialogHeader>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((project, index) => (
          <Card
            key={project.title}
            className="group card-gradient hover-lift border border-border/50 overflow-hidden transition-transform duration-300 flex flex-col"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative overflow-hidden h-40 flex-shrink-0">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button size="sm" variant="secondary" className="h-6 w-6 p-0" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-3 h-3" />
                  </a>
                </Button>
                <Button size="sm" className="h-6 w-6 p-0 bg-primary hover:bg-primary/90" asChild>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
              </div>
              {project.featured && (
                <div className="absolute top-2 left-2">
                  <Badge className="bg-primary text-primary-foreground text-xs">
                    Featured
                  </Badge>
                </div>
              )}
            </div>

            <CardHeader className="pb-2 flex-grow">
              <CardTitle className="text-lg text-foreground mb-2">{project.title}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-0 mt-auto">
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary"
                    className="text-xs bg-primary/10 text-primary border-primary/20"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DialogContent>
  );

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-title font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work, featuring web applications, mobile apps, and creative experiments.
              Each project represents a unique challenge and learning opportunity.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">✨ Featured Work</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.filter(project => project.featured).map((project, index) => (
                <Card 
                  key={project.title}
                  className="group card-gradient hover-lift border-border/50 overflow-hidden"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button size="sm" className="h-8 w-8 p-0 bg-primary hover:bg-primary/90" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div className="px-4 sm:px-6 lg:px-8 py-12">
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Other Projects</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {projects.filter(project => !project.featured).map((project, index) => (
                <Card
                  key={project.title}
                  className="group card-gradient hover-lift border border-border/50 overflow-hidden transition-transform duration-300 h-[300px]"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative overflow-hidden h-32">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" className="h-6 w-6 p-0" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3" />
                        </a>
                      </Button>
                      <Button size="sm" className="h-6 w-6 p-0 bg-primary hover:bg-primary/90" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-foreground">{project.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA - Updated to use Dialog */}
          <div className="text-center mt-16">
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg"
                  className="bg-hero-gradient hover:shadow-primary transition-all duration-300 hover:scale-105"
                >
                  View All Projects
                </Button>
              </DialogTrigger>
              <AllProjectsModal />
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
