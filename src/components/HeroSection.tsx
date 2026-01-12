
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useEffect } from "react";

const HeroSection = () => {
  // Add smooth scroll behavior when component mounts
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background gradient elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/10 rounded-full filter blur-3xl -z-10" />
      
      <div className="container mx-auto px-6 md:px-8 flex flex-col items-center text-center max-w-5xl">
        <div className="flex flex-col md:flex-row w-full items-center md:items-start justify-center gap-10 mb-8">
          {/* Photo on the left - now bigger */}
          <div className="avatar-container relative group order-2 md:order-1">
            {/* Enhanced dynamic glow effect with animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-700 rounded-full opacity-0 group-hover:opacity-70 
              transition-all duration-500 blur-lg scale-90 group-hover:scale-125 -z-10 animate-pulse"></div>
            {/* Secondary glow layer for more depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full opacity-0 group-hover:opacity-60 
              transition-all duration-700 delay-75 blur-xl scale-75 group-hover:scale-110 -z-10"></div>
            {/* Larger avatar with enhanced hover effect */}
            <Avatar className="w-48 h-48 md:w-72 md:h-72 border-2 border-primary shadow-lg transition-all duration-500 
              group-hover:scale-110 group-hover:border-accent group-hover:shadow-xl">
              <AvatarImage src="/Pictures/5e422a5a-bd4f-4bec-80d3-b42ab5fda13e.png" alt="Harish" />
              <AvatarFallback>H</AvatarFallback>
            </Avatar>
          </div>
          
          {/* Name and intro content */}
          <div className="flex flex-col md:text-left text-center order-1 md:order-2">
            <h2 className="text-xl md:text-2xl font-medium text-primary/80 mb-2 animate-fade-in">
              Welcome, I'm
            </h2>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <span className="gradient-text">Harish</span>
            </h1>
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Crafting Intelligent AI Systems & Innovative Tech Solutions
            </h3>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 animate-fade-in leading-relaxed" style={{ animationDelay: "0.6s" }}>
              A dedicated Computer Science professional specializing in AI/ML and voice assistant technologies.
              I transform complex challenges into elegant, user-focused applications that make a meaningful impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <Button asChild size="lg" className="text-lg px-8">
                <a href="#projects">
                  View Projects
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator with more dynamic animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" 
           onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
        <div className="w-1 h-16 relative">
          <div className="absolute top-0 w-1 h-8 bg-gradient-to-b from-primary to-transparent rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
