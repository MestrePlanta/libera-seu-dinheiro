import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import heroImage from "@/assets/hero-law.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Seu dinheiro foi bloqueado de forma ilegal?
          </h1>
          
          <p className="text-2xl md:text-3xl text-primary-foreground/90 font-light">
            Nós fazemos a Justiça liberar.
          </p>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Especialistas em desbloqueio judicial de valores. Atuamos com rapidez e eficiência 
            para recuperar seus recursos bloqueados indevidamente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6"
            >
              Fale com um Especialista
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 border-2 border-blue-500 text-blue-500 hover:bg-blue-100 hover:text-blue-600"
              asChild
            >
              <a href="https://wa.me/556999430176">
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-8 text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>contato@danielschafer.com.br</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>(69) 99943-0176</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
