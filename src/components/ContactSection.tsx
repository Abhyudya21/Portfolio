import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from 'react-toastify';


const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5000/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    const data = await response.json();

    if (data.success) {
      // 🎉 Custom Toast Here
     toast.success('🎉 Got it! I’ll reply soon!', {
  icon: <span>🚀</span>, // ✅ works in TypeScript
});

        
    

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      toast.error('❌ Failed to send message: ' + data.error);
    }
  } catch (err) {
    toast.error('❌ Something went wrong. Try again later.');
    console.error(err);
  }
};



  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "abhyudya007@gmail.com",
      href: "mailto:abhyudya007@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91-8126848040",
      href: "tel:+918126848040"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Rishikesh, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-title font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? I'd love to hear from you. 
              Let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-background/50 border-border focus:border-primary transition-colors"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-background/50 border-border focus:border-primary transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border focus:border-primary transition-colors resize-none"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-hero-gradient hover:shadow-primary transition-all duration-300 hover:scale-105"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities, creative projects, 
                  or potential collaborations. Whether you have a specific project in mind 
                  or just want to say hello, don't hesitate to reach out.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={info.title}
                    className="group card-gradient hover-lift border-border/50 cursor-pointer"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CardContent className="p-6">
                      <a 
                        href={info.href}
                        className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
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

              {/* Availability */}
              <Card className="card-gradient border-border/50">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-foreground">Availability</h4>
                  <p className="text-muted-foreground">
                    Currently available for freelance projects and full-time opportunities. 
                    Response time is typically within 24 hours.
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm text-green-400 font-medium">Available now</span>
                  </div>
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