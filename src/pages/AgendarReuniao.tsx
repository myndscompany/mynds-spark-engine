import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle, Calendar, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const AgendarReuniao = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    mensagem: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // WhatsApp message
    const whatsappMessage = `Olá! Gostaria de agendar uma reunião.%0A%0ANome: ${formData.nome}%0AEmail: ${formData.email}%0ATelefone: ${formData.telefone}%0AEmpresa: ${formData.empresa}%0A%0AMensagem: ${formData.mensagem}`;
    const whatsappNumber = "5511999999999"; // Replace with actual number
    
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
    
    toast({
      title: "Redirecionando para o WhatsApp",
      description: "Vamos conversar diretamente por lá!",
    });
  };

  const handleWhatsAppDirect = () => {
    const whatsappNumber = "5511999999999"; // Replace with actual number
    const message = "Olá! Quero agendar uma reunião com a Mynds Company.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Agende Sua <span className="gradient-text">Reunião Estratégica</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Vamos conversar sobre como escalar seu negócio com estratégias comprovadas de marketing e tecnologia.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Preencha seus dados</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nome" className="text-foreground">Nome Completo *</Label>
                  <Input
                    id="nome"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="mt-2 bg-background/50 border-primary/20"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">Email Profissional *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 bg-background/50 border-primary/20"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="telefone" className="text-foreground">Telefone/WhatsApp *</Label>
                  <Input
                    id="telefone"
                    required
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    className="mt-2 bg-background/50 border-primary/20"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <Label htmlFor="empresa" className="text-foreground">Nome da Empresa</Label>
                  <Input
                    id="empresa"
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    className="mt-2 bg-background/50 border-primary/20"
                    placeholder="Sua empresa"
                  />
                </div>

                <div>
                  <Label htmlFor="mensagem" className="text-foreground">Conte-nos sobre seu desafio</Label>
                  <Textarea
                    id="mensagem"
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="mt-2 bg-background/50 border-primary/20 min-h-[120px]"
                    placeholder="Descreva brevemente o que você busca..."
                  />
                </div>

                <Button type="submit" size="lg" variant="gold" className="w-full gap-2 text-lg">
                  <MessageCircle className="w-5 h-5" />
                  Enviar via WhatsApp
                </Button>
              </form>
            </div>

            {/* Info & Direct WhatsApp */}
            <div className="space-y-6">
              {/* Direct WhatsApp Card */}
              <div className="glass-card p-8 bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-8 h-8 text-accent" />
                  <h3 className="text-2xl font-bold text-foreground">Prefere Falar Agora?</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Clique no botão abaixo e converse diretamente com nosso time pelo WhatsApp. 
                  <span className="text-foreground font-semibold"> Estamos prontos para atender você!</span>
                </p>
                <Button 
                  onClick={handleWhatsAppDirect}
                  size="lg" 
                  variant="hero" 
                  className="w-full gap-2 text-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chamar no WhatsApp Agora
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Benefits Cards */}
              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">Reunião Sem Compromisso</h4>
                    <p className="text-muted-foreground">
                      Uma conversa franca de 30 minutos para entender seu negócio e mostrar oportunidades reais.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">Resposta Rápida</h4>
                    <p className="text-muted-foreground">
                      Retornamos em até 2 horas durante horário comercial. Seu tempo é valioso.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 bg-gradient-to-br from-accent/10 to-primary/10">
                <p className="text-center text-foreground font-semibold text-lg">
                  🚀 Vagas limitadas para novos projetos este mês. Garanta sua reunião agora!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgendarReuniao;
