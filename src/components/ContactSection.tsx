"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for animation
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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "abhyudya007@gmail.com",
      href: "mailto:abhyudya007@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91-8126848040",
      href: "tel:+918126848040",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Remote, India",
      href: "#",
    },
  ];

  const handleEmailClick = () => {
    const link = document.createElement('a');
    link.href = 'mailto:abhyudya007@gmail.com';
    link.click();
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6"
      aria-label="Contact section"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? I'd love to hear from you. Let's create
              something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Creative Contact Section */}
            <div className="space-y-6">
              {/* Animated Greeting Card */}
              <Card className="border-border/50 overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl animate-pulse">
                        👋
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Hello there!</h3>
                        <p className="text-muted-foreground">Ready to create something amazing?</p>
                      </div>
                    </div>
                    
                    <p className="text-lg leading-relaxed mb-6">
                      I'm a passionate developer who loves turning ideas into reality. 
                      Whether you're a startup with a vision or an established company 
                      looking to innovate, I'm here to help bring your digital dreams to life.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 rounded-lg bg-accent/10">
                        <div className="text-2xl font-bold text-accent">24h</div>
                        <div className="text-sm text-muted-foreground">Response Time</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Action Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="border-border/50 group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Mail className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold mb-2">Quick Email</h4>
                    <p className="text-sm text-muted-foreground mb-4">Drop me a line directly</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={handleEmailClick}
                    >
                      Send Email
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-border/50 group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      <Phone className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold mb-2">Schedule Call</h4>
                    <p className="text-sm text-muted-foreground mb-4">Let's talk about your project</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => window.location.href = 'tel:+918126848040'}
                    >
                      Call Now
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Fun Fact Card */}
              <Card className="border-border/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">💡</div>
                    <div>
                      <h4 className="font-semibold mb-2">Fun Fact</h4>
                      <p className="text-muted-foreground">
                        I believe the best projects come from great conversations. 
                        Every successful app starts with understanding your vision and goals.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities, creative projects, or
                  potential collaborations. Whether you have a specific project in mind or
                  just want to say hello, don't hesitate to reach out.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={info.title}
                    className="group border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CardContent className="p-6">
                      <a
                        href={info.href}
                        className="flex items-center gap-4 hover:text-primary transition-colors"
                        onClick={info.title === "Email" ? (e) => {
                          e.preventDefault();
                          handleEmailClick();
                        } : undefined}
                      >
                        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          <info.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="font-semibold">{info.title}</div>
                          <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                            {info.value}
                          </div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="border-border/50 bg-gradient-to-r from-primary/10 to-accent/10 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold mb-2">Ready to Start?</h4>
                  <p className="text-muted-foreground mb-4">
                    Let's discuss your project and see how we can work together
                  </p>
                  <Button 
                    className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 hover:scale-105"
                    size="lg"
                    onClick={() => window.open('https://wa.me/8126848040', '_blank')}
                  >
                    Start a Conversation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;