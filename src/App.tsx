// Importações de bibliotecas e componentes
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PoliticaPrivacidade from "@/pages/PoliticaPrivacidade";
import TermosDeUso from "@/pages/TermosDeUso";
import ScrollToTop from "@/components/ScrollToTop"; // Importação do novo componente

// Importação do nosso novo Provedor de Autenticação (CORRIGIDO: usando alias @/)
import { AuthProvider } from "@/context/AuthContext";

// Importação das páginas (CORRIGIDO: usando alias @/)
import Layout from "@/components/Layout";
import Index from "@/pages/Index";
import ComoFunciona from "@/pages/ComoFunciona";
import AgendarReuniao from "@/pages/AgendarReuniao";
import NotFound from "@/pages/NotFound";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import AreaDoCliente from "@/pages/AreaDoCliente";
import ProtectedRoute from "@/components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* O ScrollToTop garante que, ao mudar a rota, a página volte ao topo */}
          <ScrollToTop />

          <Routes>
            <Route element={<Layout />}>
              {/* Rotas Públicas */}
              <Route path="/" element={<Index />} />
              <Route path="/como-funciona" element={<ComoFunciona />} />
              <Route path="/agendar-reuniao" element={<AgendarReuniao />} />
              <Route path="/cadastro" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/politica-de-privacidade"
                element={<PoliticaPrivacidade />}
              />
              <Route path="/termos-de-uso" element={<TermosDeUso />} />

              {/* 2. Adicione a nova Rota Protegida aqui */}
              <Route
                path="/area-do-cliente"
                element={
                  <ProtectedRoute>
                    <AreaDoCliente />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
