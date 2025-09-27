import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Lightbulb, Target, Rocket } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Sempre em busca das tecnologias e estratégias mais avançadas do mercado."
  },
  {
    icon: Target,
    title: "Resultados",
    description: "Foco obsessivo em métricas que realmente importam para o seu negócio."
  },
  {
    icon: Users,
    title: "Parceria",
    description: "Trabalhamos lado a lado com nossos clientes, como uma extensão da sua equipe."
  },
  {
    icon: Rocket,
    title: "Escalabilidade",
    description: "Construímos soluções que crescem junto com o seu negócio."
  }
];

const AboutSection = () => {
  return (
    <section id="sobre-nos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Os <span className="text-gradient-brand">Cérebros</span> por Trás da Operação
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  A <strong className="text-foreground">Mynds Company</strong> nasceu da união entre dois mundos: 
                  marketing estratégico e desenvolvimento de tecnologia. Nossa missão é simples, 
                  mas ambiciosa: criar ecossistemas digitais que transformam visitantes em clientes fiéis.
                </p>
                <p>
                  Combinamos <span className="text-gradient-gold">expertise em marketing de performance</span> com 
                  <span className="text-gradient-brand"> capacidade de desenvolvimento de software customizado</span>, 
                  oferecendo soluções que não existem em nenhuma outra agência do mercado.
                </p>
                <p>
                  Nosso diferencial está na capacidade de não apenas identificar oportunidades, 
                  mas também <strong className="text-primary">criar as ferramentas necessárias</strong> para 
                  aproveitá-las ao máximo.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Conheça Nossa Metodologia
              </Button>
              <Button variant="outline" size="lg">
                Fale Conosco
              </Button>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-card transition-smooth border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 gradient-brand rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Nossa Equipe em Números</h3>
            <p className="text-muted-foreground">
              Profissionais especializados trabalhando para o seu sucesso
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-brand mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-gold mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Especialistas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Certificações</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Suporte</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;