"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-background via-primary/[0.02] to-accent/[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, hsl(var(--primary) / 0.05) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 20%, hsl(var(--accent) / 0.05) 0%, transparent 50%)`
        }}
      />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-primary/20 rounded-full animate-float-gentle"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {[...Array(6)].map((_, i) => (
          <Sparkles
            key={`sparkle-${i}`}
            className="absolute w-4 h-4 text-accent/30 animate-float-gentle"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Title and subtitle */}
          <div className="mb-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
              Abhyudya Bhardwaj
            </h1>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            Backend Developer |  Tech Enthusiast
          </h2>

          <p className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft exceptional digital experiences through clean code, thoughtful design, and innovative solutions. 
            Passionate about building products that make a difference.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg px-8 py-6"
            >
              View My Work
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-primary/20 text-foreground hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 hover:scale-105 text-lg px-8 py-6"
            >
              <a href="/Abhyudya_Resume.pdf" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6">
            {[
              { icon: Github, href: "https://github.com/Abhyudya21", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/abhyudya-bhardwaj-394a3821b/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:abhyudyabhardwaj.dev@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-full bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("about")}
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
          aria-label="Scroll to next section"
        >
          <ArrowDown className="w-5 h-5 text-primary" />
        </button>
      </div> */}

      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-glow-pulse pointer-events-none" />
    </section>
  );
};

export default HeroSection;
