import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-white py-12 relative">
      <div className="container mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              Karan Jachak
            </h3>
            <p className="text-white/70 leading-relaxed">
              Engineering student passionate about creating innovative solutions 
              through technology and continuous learning.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {["About", "Skills", "Services", "Portfolio", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                  className="text-white/70 hover:text-accent transition-colors text-left"
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2 text-white/70">
              <p>Mumbai, Maharashtra</p>
              <p>karan.jachak@example.com</p>
              <p>+91 98765 43210</p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="flex items-center gap-2 text-white/70">
              <span>© 2024 Karan Jachak. Made with</span>
              <Heart className="h-4 w-4 text-accent animate-glow" />
              <span>and lots of coffee</span>
            </div>

            {/* Back to Top */}
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-white/70 hover:text-white hover:bg-white/10 group"
            >
              Back to Top
              <ArrowUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            </Button>

          </div>
        </div>

      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-accent/10 rounded-full animate-bounce-gentle" />
    </footer>
  );
};

export default Footer;