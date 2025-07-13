import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [showGreeting, setShowGreeting] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowGreeting(true), 300),
      setTimeout(() => setShowName(true), 1500),
      setTimeout(() => setShowTitle(true), 3000),
      setTimeout(() => setShowContent(true), 4000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-primary/10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-primary/20 rounded-full animate-float blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Sparkle effects */}
        {[...Array(8)].map((_, i) => (
          <Sparkles
            key={`sparkle-${i}`}
            className="absolute w-6 h-6 text-primary/30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Greeting Animation */}
        {/* <div className="mb-8">
          {showGreeting && (
            <p className="text-2xl md:text-3xl text-muted-foreground animate-slide-up opacity-0"
               style={{ animationFillMode: 'forwards' }}>
              👋 Hi, this is
            </p>
          )}
        </div> */}

        {/* Name with Typewriter Effect */}
        <div className="mb-6 h-24 md:h-32 lg:h-40 flex items-center justify-center">
          {showName && (
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text animate-typewriter opacity-0"
                style={{ 
                  animationFillMode: 'forwards',
                  animationDelay: '0.3s'
                }}>
              Abhyudya Bhardwaj
            </h1>
          )}
        </div>

        {/* Title with Slide Animation */}
        <div className="mb-8">
          
          {showTitle && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary animate-slide-up opacity-0"
                style={{ 
                  animationFillMode: 'forwards',
                  animationDelay: '0.5s'
                }}>

              Software Developer
            </h2>
          )}
        </div>

        {/* Content Section */}
        {showContent && (
          <div className="animate-slide-up opacity-0"
               style={{ 
                 animationFillMode: 'forwards',
                 animationDelay: '0.7s'
               }}>
            <p className="text-subtitle text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Crafting digital experiences with passion and precision. 
              Bringing ideas to life through elegant code, stunning design, and innovative solutions.
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                size="lg" 
                className="bg-hero-gradient hover:shadow-primary transition-all duration-500 hover:scale-110 text-lg px-10 py-6 group relative overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:scale-110 text-lg px-10 py-6 hover:shadow-primary"
              >
                Get In Touch
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex justify-center gap-8 mb-20">
              {[
                { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-400" },
                { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
                { icon: Mail, href: "#", label: "Email", color: "hover:text-green-400" }
              ].map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  className="group relative p-4 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-125 hover:shadow-primary"
                  aria-label={label}
                >
                  <Icon className={`w-7 h-7 text-muted-foreground group-hover:text-primary-foreground transition-all duration-300 ${color}`} />
                  <div className="absolute inset-0 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </a>
              ))}
            </div>
          </div>
        )}        
      </div>

      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
    </section>
  );
};

export default HeroSection;

