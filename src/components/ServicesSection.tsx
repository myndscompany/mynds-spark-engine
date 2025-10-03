import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Code, Zap, Target } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description:
      "Estratégias de marketing digital com foco em ROI. Campanhas otimizadas, análise de dados e crescimento sustentável para seu negócio.",
    features: ["Google Ads", "Meta Ads", "Analytics", "CRO"],
  },
  {
    icon: Code,
    title: "Desenvolvimento Web/SaaS",
    description:
      "Soluções tecnológicas customizadas. Desde landing pages até sistemas complexos, desenvolvemos ferramentas que impulsionam seus resultados.",
    features: ["Websites", "Sistemas", "APIs", "Mobile"],
  },
  {
    icon: Zap,
    title: "Automação de Vendas",
    description:
      "Automatize processos e converta mais leads. Integrações inteligentes que conectam marketing, vendas e atendimento em um fluxo eficiente.",
    features: ["CRM", "Chatbots", "E-mail Marketing", "Workflows"],
  },
  {
    icon: Target,
    title: "Estratégia Digital",
    description:
      "Consultoria estratégica para escalar digitalmente. Análise completa do negócio e roadmap personalizado para crescimento acelerado.",
    features: ["Planejamento", "Análise", "Otimização", "Mentoria"],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Soluções <span className="text-gradient-brand">Sob Medida</span>{" "}
            para o Seu Crescimento
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combinamos expertise em marketing com desenvolvimento de tecnologia
            para criar ecossistemas digitais que não apenas atraem, mas
            convertem e retêm clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-card transition-smooth border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="w-12 h-12 gradient-brand rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm"
                    >
                      <div className="w-2 h-2 gradient-gold rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                {/* <Button variant="outline" size="sm" className="w-full group">
                  Saiba Mais
                  <TrendingUp className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
