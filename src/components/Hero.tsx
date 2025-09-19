import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Mail } from "lucide-react";
import profileImage from "@/assets/karan-profile.jpg";
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="min-h-screen relative overflow-hidden gradient-hero flex items-center">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full animate-bounce-gentle" />
      <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-white/5 rounded-full animate-float" />
      
      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white/90 text-sm mb-6">
              <div className="w-2 h-2 bg-accent rounded-full animate-glow" />
              Available for opportunities
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Hello, I'm
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent-glow">
                Karan Jachak
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-2 font-medium">Engineering Student | Software & Web Developer</p>
            
            <p className="text-lg text-white/80 mb-8 max-w-xl">
              Passionate about technology, software development, and problem solving.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="accent" size="xl" onClick={() => scrollToSection("portfolio")} className="group">
                View My Work
                <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button variant="glass" size="xl" onClick={() => scrollToSection("contact")} className="group">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="relative animate-slide-up">
            <div className="relative w-80 h-80 mx-auto">
              {/* Decorative Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-accent-glow p-1">
                <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-md" />
              </div>
              
              {/* Profile Image */}
              <div className="absolute inset-4 rounded-full overflow-hidden shadow-glow">
                <img src={profileImage} alt="Karan Jachak - Engineering Student" className="w-full h-full object-cover" />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-accent animate-glow">
                <Download className="h-8 w-8 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full animate-bounce-gentle" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <button onClick={() => scrollToSection("about")} className="text-white/70 hover:text-white transition-colors">
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>;
};
export default Hero;