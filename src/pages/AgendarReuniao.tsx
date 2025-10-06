import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
// As importações de Header e Footer foram removidas pois o componente está dentro do Layout
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import { MessageCircle, Calendar, Clock, ArrowRight, CheckCircle } from "lucide-react"; // Adicionado CheckCircle
import React, { useState, useRef } from "react"; // Adicionado React e useRef

// 1. Importação da biblioteca EmailJS
import emailjs from '@emailjs/browser';

const AgendarReuniao = () => {
  // 2. Novos estados para controlar a interface
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    mensagem: "",
  });

  // 3. Função handleSubmit totalmente substituída pela lógica do EmailJS
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setIsLoading(true);
    setError("");

    emailjs.sendForm(
      'service_r65pvvm',
      'template_6ma0fvl',
      form.current,
      'E4L60QlMlUwO8-T-w'
    )
    .then(() => {
        setIsSubmitted(true);
    }, (error) => {
        console.error('Falha no envio do e-mail:', error.text);
        setError("Ocorreu um erro ao enviar sua solicitação. Tente novamente.");
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  const handleWhatsAppDirect = () => {
    // Esta função foi mantida exatamente como era
    const whatsappNumber = "5511999999999";
    const message = "Olá! Quero agendar uma reunião com a Mynds Company.";
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            {/* ...cabeçalho da página mantido... */}
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Agende Sua <span className="gradient-text">Reunião Estratégica</span></h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Vamos conversar sobre como escalar seu negócio com estratégias comprovadas de marketing e tecnologia.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="glass-card p-8">
              {/* 4. Lógica para mostrar o formulário OU a mensagem de sucesso */}
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center h-full">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-6" />
                  <h2 className="text-2xl font-bold text-foreground mb-4">Solicitação Enviada!</h2>
                  <p className="text-muted-foreground text-lg">Obrigado! Nossa equipe entrará em contato com você em breve.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Preencha seus dados</h2>
                  {/* 5. Adicionada a referência 'ref' ao formulário */}
                  <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                    {/* 6. Adicionados os atributos 'name' a cada campo */}
                    <div>
                      <Label htmlFor="nome" className="text-foreground">Nome Completo *</Label>
                      <Input id="nome" name="nome" required value={formData.nome} onChange={(e) => setFormData({ ...formData, nome: e.target.value })} className="mt-2 bg-background/50 border-primary/20" placeholder="Seu nome" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground">Email Profissional *</Label>
                      <Input id="email" name="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="mt-2 bg-background/50 border-primary/20" placeholder="seu@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="telefone" className="text-foreground">Telefone/WhatsApp *</Label>
                      <Input id="telefone" name="telefone" required value={formData.telefone} onChange={(e) => setFormData({ ...formData, telefone: e.target.value })} className="mt-2 bg-background/50 border-primary/20" placeholder="(00) 00000-0000" />
                    </div>
                    <div>
                      <Label htmlFor="empresa" className="text-foreground">Nome da Empresa</Label>
                      <Input id="empresa" name="empresa" value={formData.empresa} onChange={(e) => setFormData({ ...formData, empresa: e.target.value })} className="mt-2 bg-background/50 border-primary/20" placeholder="Sua empresa" />
                    </div>
                    <div>
                      <Label htmlFor="mensagem" className="text-foreground">Conte-nos sobre seu desafio</Label>
                      <Textarea id="mensagem" name="mensagem" value={formData.mensagem} onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })} className="mt-2 bg-background/50 border-primary/20 min-h-[120px]" placeholder="Descreva brevemente o que você busca..." />
                    </div>
                    {/* 7. Lógica de carregamento e desativação do botão */}
                    <Button type="submit" size="lg" variant="gold" className="w-full gap-2 text-lg" disabled={isLoading}>
                      {isLoading ? 'Enviando...' : (
                        <>
                          <MessageCircle className="w-5 h-5" />
                          Agendar reunião
                        </>
                      )}
                    </Button>
                    {/* 8. Exibição de mensagem de erro */}
                    {error && <p className="text-sm text-center text-destructive mt-2">{error}</p>}
                  </form>
                </>
              )}
            </div>
            
            {/* Info & Direct WhatsApp */}
            <div className="space-y-6">
              {/* Direct WhatsApp Card */}
              <div className="glass-card p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-8 h-8 text-accent" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Prefere Falar Agora?
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Clique no botão abaixo e converse diretamente com nosso time
                  pelo WhatsApp.
                  <span className="text-foreground font-semibold">
                    {" "}
                    Estamos prontos para atender você!
                  </span>
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
                    <h4 className="text-lg font-bold text-foreground mb-2">
                      Reunião Sem Compromisso
                    </h4>
                    <p className="text-muted-foreground">
                      Uma conversa franca de 30 minutos para entender seu
                      negócio e mostrar oportunidades reais.
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
                    <h4 className="text-lg font-bold text-foreground mb-2">
                      Resposta Rápida
                    </h4>
                    <p className="text-muted-foreground">
                      Retornamos em até 2 horas durante horário comercial. Seu
                      tempo é valioso.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl">
                <p className="text-center text-foreground font-semibold text-lg">
                  🚀 Vagas limitadas para novos projetos este mês. Garanta sua
                  reunião agora!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgendarReuniao;