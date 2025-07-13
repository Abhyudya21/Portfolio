import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const skills = [
    "Java", "SpringBoot", "MySQL", "JavaScript", "ASP>NET", "C#",
    "MongoDB"
  ];

  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with modern frameworks and tools."
    },
    {
      icon: Zap,
      title: "Backend Development", 
      description: "Creating robust APIs and server-side applications with scalable architecture."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user experiences that delight and convert."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-title font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate developer with over 5 years of experience creating digital solutions 
              that make a difference. I love turning complex problems into simple, beautiful, and intuitive designs.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Personal Story */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My journey in the world of technology began with a deep curiosity for how systems work beneath the surface. Over the years, I’ve honed my skills in Java, front-end development, and database management, applying them to real-world projects that reflect both creativity and functionality. 
                </p>
                <p>
                 From building full-stack applications to optimizing user experiences, every step has been a pursuit of excellence and growth. With a strong foundation in computer science and a commitment to continuous learning, I aim to contribute meaningfully to forward-thinking tech teams and drive impactful digital solutions. Every project is an opportunity 
                  to learn something new and push the boundaries of what's possible.
                </p>
              </div>
              
              {/* Skills */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-foreground">Technologies I Work With</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">What I Do</h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <Card 
                    key={service.title}
                    className="card-gradient hover-lift border-border/50"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <service.icon className="w-5 h-5" />
                        </div>
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Projects Completed", value: "50+" },
              { label: "Happy Clients", value: "25+" },
              { label: "Years Experience", value: "5+" },
              { label: "Code Commits", value: "1000+" }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-6 rounded-lg card-gradient hover-glow transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;