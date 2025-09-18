import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Code, Smartphone, Palette, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Building modern, responsive websites using the latest technologies and best practices for optimal performance.",
      features: ["Responsive Design", "Modern Frameworks", "Performance Optimization", "Cross-browser Compatibility"],
      color: "gradient-primary"
    },
    {
      icon: Palette,
      title: "Web Design",
      description: "Creating beautiful, user-friendly interfaces that provide exceptional user experiences and drive engagement.",
      features: ["UI/UX Design", "Visual Identity", "Prototyping", "User Research"],
      color: "gradient-accent"
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Developing custom software solutions tailored to your specific needs with clean, maintainable code.",
      features: ["Custom Solutions", "Clean Code", "Problem Solving", "Documentation"],
      color: "bg-gradient-to-br from-purple-600 to-blue-600"
    },
    {
      icon: Smartphone,
      title: "UI/UX (Basic)",
      description: "Designing intuitive user interfaces and experiences that are both functional and aesthetically pleasing.",
      features: ["User Interface", "User Experience", "Wireframing", "Design Systems"],
      color: "bg-gradient-to-br from-pink-500 to-rose-500"
    }
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 gradient-subtle">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My <span className="text-transparent bg-clip-text gradient-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development solutions to bring your digital ideas to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="shadow-elegant hover:shadow-glow transition-all duration-500 transform hover:scale-105 animate-slide-up group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Features List */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                      style={{ animationDelay: `${(index * 0.1) + (featureIndex * 0.05)}s` }}
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  onClick={scrollToContact}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center animate-fade-in">
          <div className="bg-white rounded-2xl p-8 shadow-elegant max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's work together to create something amazing. I'm committed to delivering 
              high-quality solutions that exceed your expectations.
            </p>
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToContact}
              className="group"
            >
              Let's Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;