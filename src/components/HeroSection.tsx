import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Marketing que <span className="text-gradient-brand">Pensa</span>.
              <br />
              Tecnologia que <span className="text-gradient-gold">Executa</span>.
              <br />
              Resultados que <span className="text-primary-glow">Falam</span>.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Integramos estratégias de marketing digital com desenvolvimento de software 
              para escalar o seu negócio de forma inteligente e eficiente.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="group">
              Agendar Reunião
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Play className="mr-2 h-5 w-5" />
              Ver Como Funciona
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient-gold">200%</div>
              <div className="text-sm text-muted-foreground">Aumento em Leads</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient-brand">50+</div>
              <div className="text-sm text-muted-foreground">Projetos Entregues</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-glow">98%</div>
              <div className="text-sm text-muted-foreground">Satisfação</div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="absolute inset-0 gradient-brand rounded-3xl blur-3xl opacity-20"></div>
          <img 
            src={heroImage} 
            alt="Equipe Mynds Company trabalhando em projetos de tecnologia e marketing"
            className="relative rounded-3xl shadow-card w-full h-auto"
          />
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-72 h-72 gradient-brand rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 left-20 w-56 h-56 gradient-gold rounded-full blur-3xl opacity-10"></div>
    </section>
  );
};

export default HeroSection;