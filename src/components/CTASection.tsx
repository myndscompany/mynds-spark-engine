import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">
            Pronto para levar seu negócio para o <span className="text-gradient-gold">próximo nível</span>?
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vamos conversar sobre seus desafios e como nossa expertise pode gerar 
            resultados concretos para você. Sem compromisso, sem enrolação.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/agendar-reuniao">
              <Button variant="gold" size="lg" className="group">
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Reunião Gratuita
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/agendar-reuniao">
              <Button variant="outline" size="lg">
                <MessageCircle className="mr-2 h-5 w-5" />
                Conversar no WhatsApp
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient-brand mb-2">Consultoria Gratuita</div>
              <p className="text-sm text-muted-foreground">
                Primeira reunião sem custo para entender seu negócio
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient-gold mb-2">Proposta Personalizada</div>
              <p className="text-sm text-muted-foreground">
                Estratégia sob medida para suas necessidades específicas
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-glow mb-2">Resultados Garantidos</div>
              <p className="text-sm text-muted-foreground">
                Trabalhamos focados em métricas e resultados mensuráveis
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-64 h-64 gradient-brand rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 gradient-gold rounded-full blur-3xl opacity-10"></div>
    </section>
  );
};

export default CTASection;