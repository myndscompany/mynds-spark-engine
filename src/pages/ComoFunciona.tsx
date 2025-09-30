import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const ComoFunciona = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Veja Como <span className="gradient-text">Transformamos</span> Seu Negócio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubra o processo completo que une marketing estratégico e tecnologia de ponta para gerar resultados mensuráveis.
            </p>
          </div>

          {/* Video Container */}
          <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden shadow-elegant mb-12 group">
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
              <Button 
                size="lg" 
                variant="gold"
                className="gap-3 text-lg px-8 py-6 h-auto"
              >
                <Play className="w-6 h-6" />
                Assistir Agora
              </Button>
            </div>
            {/* Placeholder for video - replace with actual video embed */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary opacity-20" />
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center text-2xl font-bold text-accent-foreground mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Diagnóstico Profundo</h3>
              <p className="text-muted-foreground">
                Analisamos cada detalhe do seu negócio para identificar oportunidades de crescimento exponencial.
              </p>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center text-2xl font-bold text-accent-foreground mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Estratégia Customizada</h3>
              <p className="text-muted-foreground">
                Desenvolvemos uma solução única que combina marketing de performance com automação inteligente.
              </p>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center text-2xl font-bold text-accent-foreground mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Resultados Comprovados</h3>
              <p className="text-muted-foreground">
                Implementamos, otimizamos e escalamos até você ver os números crescerem consistentemente.
              </p>
            </div>
          </div>

          {/* Aggressive CTA Section */}
          <div className="glass-card p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Chega de Perder Tempo e Dinheiro
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Enquanto você assiste, seus concorrentes estão fechando negócios. 
                <span className="text-accent font-semibold"> Não fique para trás.</span> 
                <br />Agende agora e descubra como podemos <span className="gradient-text font-bold">multiplicar seus resultados</span> nos próximos 90 dias.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/agendar-reuniao">
                  <Button size="lg" variant="gold" className="gap-2 text-lg px-8">
                    Agendar Minha Reunião Agora
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    Voltar ao Início
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComoFunciona;
