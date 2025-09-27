import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import portfolioMarketing from "@/assets/portfolio-marketing.jpg";
import portfolioDevelopment from "@/assets/portfolio-development.jpg";
import portfolioAutomation from "@/assets/portfolio-automation.jpg";

const portfolioItems = [
  {
    image: portfolioMarketing,
    title: "E-commerce Fashion",
    category: "Performance Marketing",
    result: "+350% em Conversões",
    description: "Reestruturação completa da estratégia de marketing digital com foco em ROAS e lifetime value.",
    tags: ["Google Ads", "Meta Ads", "Analytics"]
  },
  {
    image: portfolioDevelopment,
    title: "SaaS de Gestão",
    category: "Desenvolvimento",
    result: "50k+ Usuários Ativos",
    description: "Plataforma completa de gestão empresarial com dashboard personalizado e integrações avançadas.",
    tags: ["React", "Node.js", "APIs"]
  },
  {
    image: portfolioAutomation,
    title: "Clínica Médica",
    category: "Automação",
    result: "+200% em Agendamentos",
    description: "Sistema de automação completo desde captação até agendamento e follow-up de pacientes.",
    tags: ["CRM", "WhatsApp", "Workflows"]
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Resultados que Nos <span className="text-gradient-gold">Orgulham</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada projeto é uma oportunidade de superar expectativas. 
            Veja como transformamos desafios em sucessos mensuráveis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-card transition-smooth">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={`Projeto ${item.title} - ${item.category}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                        {item.category}
                      </Badge>
                      <ExternalLink className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <div className="text-gradient-gold font-semibold text-lg mb-3">
                      {item.result}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Quer ver seu projeto aqui? Vamos conversar sobre suas metas.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient-brand">50+</div>
              <div className="text-sm text-muted-foreground">Projetos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient-gold">300%</div>
              <div className="text-sm text-muted-foreground">ROI Médio</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-glow">98%</div>
              <div className="text-sm text-muted-foreground">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">24h</div>
              <div className="text-sm text-muted-foreground">Suporte</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;