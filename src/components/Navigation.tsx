import { Scale, Phone, Instagram, Globe } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Scale className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-xl font-bold text-foreground">Advocacia Especializada</h1>
            <p className="text-xs text-muted-foreground">Desbloqueio Judicial</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/556999430176"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="WhatsApp"
          >
            <Phone className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Website"
          >
            <Globe className="h-5 w-5" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
