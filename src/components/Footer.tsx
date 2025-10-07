import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#" + id);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <footer className="bg-muted/10 border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center space-x-2 hover:opacity-80 transition-fast"
            >
              <div className="w-8 h-8 gradient-brand rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  M
                </span>
              </div>
              <span className="text-xl font-bold text-foreground">
                Mynds Company
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Marketing estratégico e desenvolvimento de tecnologia para escalar
              seu negócio digital.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-fast"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-fast"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection("servicos")}
                className="block text-muted-foreground hover:text-primary transition-fast text-sm"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block text-muted-foreground hover:text-primary transition-fast text-sm"
              >
                Portfólio
              </button>
              <button
                onClick={() => scrollToSection("sobre-nos")}
                className="block text-muted-foreground hover:text-primary transition-fast text-sm"
              >
                Sobre Nós
              </button>
              <button
                onClick={() => scrollToSection("certificados")}
                className="block text-muted-foreground hover:text-primary transition-fast text-sm"
              >
                Certificados
              </button>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <nav className="space-y-2">
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary transition-fast text-sm"
              >
                Performance Marketing
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary transition-fast text-sm"
              >
                Desenvolvimento Web
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary transition-fast text-sm"
              >
                Automação de Vendas
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary transition-fast text-sm"
              >
                Estratégia Digital
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <a
                href="mailto:contato@myndscompany.com"
                className="flex items-center text-muted-foreground hover:text-primary transition-fast text-sm"
              >
                <Mail className="h-4 w-4 mr-2" />
                contato@myndscompany.com
              </a>
              <a
                href="tel:+5511999999999"
                className="flex items-center text-muted-foreground hover:text-primary transition-fast text-sm"
              >
                <Phone className="h-4 w-4 mr-2" />
                (11) 99999-9999
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Mynds Company. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* LINK CORRIGIDO: Política de Privacidade */}
            <Link
              to="/politica-de-privacidade" // Aponta para a nova rota
              className="text-muted-foreground hover:text-primary transition-fast text-sm"
            >
              Política de Privacidade
            </Link>

            {/* LINK CORRIGIDO: Termos de Uso */}
            <Link
              to="/termos-de-uso" // Aponta para a nova rota
              className="text-muted-foreground hover:text-primary transition-fast text-sm"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
