import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden parallax-container">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 animate-float">
        <div className="w-8 h-8 bg-gradient-primary rounded-full opacity-60" />
      </div>
      <div className="absolute top-40 right-32 animate-float" style={{ animationDelay: "1s" }}>
        <div className="w-6 h-6 bg-gradient-secondary rounded-full opacity-40" />
      </div>
      <div className="absolute bottom-40 left-32 animate-float" style={{ animationDelay: "2s" }}>
        <div className="w-10 h-10 bg-tertiary rounded-full opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-8">
        <div 
          className="max-w-4xl"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text animate-fade-in">
            Feel the Music
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Experience music like never before with our immersive parallax interface
          </p>
          <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:bg-primary-glow text-primary-foreground text-lg px-8 py-6 hover-glow animate-pulse-glow"
            >
              <Play className="w-6 h-6 mr-2" />
              Start Listening
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 transition-all duration-300"
            >
              Browse Music
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;