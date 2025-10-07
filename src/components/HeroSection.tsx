import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center bg-animated"
    >
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Conteúdo Principal (z-10 para ficar acima das decorações) */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Marketing que <span className="text-gradient-brand">Pensa</span>.{" "}
              {/* <br />
              Tecnologia que <span className="text-gradient-gold">Executa</span> */}
              <br />
              Resultados que <span className="text-gradient-gold">Falam</span>.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Integramos estratégias de marketing digital com desenvolvimento de
              software para escalar o seu negócio de forma inteligente e
              eficiente.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Botão Agendar Reunião - CORREÇÃO: Adicionado relative z-20 para prioridade de clique */}
            <Link
              to="/agendar-reuniao"
              className="block w-full sm:w-auto **relative z-20**"
            >
              <Button
                variant="hero"
                size="lg"
                className="w-full flex items-center justify-center group"
              >
                Agendar Reunião
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            {/* Botão Ver Como Funciona */}
            <Link
              to="/como-funciona"
              className="w-full sm:w-auto relative z-20"
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full flex items-center justify-center group"
              >
                <Play className="mr-2 h-5 w-5" /> Ver Como Funciona
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient-gold">200%</div>
              <div className="text-sm text-muted-foreground">
                Aumento em Leads
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient-brand">50+</div>
              <div className="text-sm text-muted-foreground">
                Projetos Entregues
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-glow">98%</div>
              <div className="text-sm text-muted-foreground">Satisfação</div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="absolute inset-0 gradient-brand rounded-3xl blur-3xl opacity-20 z-0"></div>
          <img
            src={heroImage}
            alt="Equipe Mynds Company trabalhando em projetos de tecnologia e marketing"
            className="relative rounded-3xl shadow-card w-full h-auto z-10"
          />
        </div>
      </div>

      {/* Background decoration (Linhas 91 e 92 - Descomentadas e com z-index baixo) */}
      <div className="absolute top-20 right-20 w-72 h-72 gradient-brand rounded-full blur-3xl opacity-10 **z-0**"></div>
      <div className="absolute bottom-20 left-20 w-56 h-56 gradient-gold rounded-full blur-3xl opacity-10 **z-0**"></div>
    </section>
  );
};

export default HeroSection;
