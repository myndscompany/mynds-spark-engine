import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

// Importações para autenticação
import { useAuth } from "@/context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

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
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center space-x-2 hover:opacity-80 transition-fast"
          >
            <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/favicon.ico" // 👉 coloca sua imagem aqui, de preferência dentro da pasta /public
                alt="Mynds Company Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-lg md:text-xl font-bold text-foreground">
              Mynds Company
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-muted-foreground hover:text-primary transition-fast"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-muted-foreground hover:text-primary transition-fast"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection("certificados")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Certificados
            </button>
            <button
              onClick={() => scrollToSection("sobre-nos")}
              className="text-muted-foreground hover:text-primary transition-fast"
            >
              Sobre Nós
            </button>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {user ? (
              <>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/area-do-cliente">Área do Cliente</Link>
                </Button>
                <Button variant="gold" size="sm" onClick={handleLogout}>
                  Sair
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button variant="gold" size="sm" asChild>
                  <Link to="/agendar-reuniao">Agendar Reunião</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 py-3 border-t border-border">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-muted-foreground hover:text-primary transition-fast text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-muted-foreground hover:text-primary transition-fast text-left"
              >
                Portfólio
              </button>
              <button
                onClick={() => scrollToSection("sobre-nos")}
                className="text-muted-foreground hover:text-primary transition-fast text-left"
              >
                Sobre Nós
              </button>

              <div className="flex flex-col space-y-2 pt-3">
                {user ? (
                  <>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/area-do-cliente">Área do Cliente</Link>
                    </Button>
                    <Button variant="gold" size="sm" onClick={handleLogout}>
                      Sair
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button variant="gold" size="sm" asChild>
                      <Link to="/agendar-reuniao">Agendar Reunião</Link>
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
