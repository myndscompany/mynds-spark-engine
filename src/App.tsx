// Importações de bibliotecas e componentes
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importação do nosso novo Provedor de Autenticação
import { AuthProvider } from "./context/AuthContext";


// Importação das páginas
import Layout from "./components/Layout";
import Index from "./pages/Index";
import ComoFunciona from "./pages/ComoFunciona";
import AgendarReuniao from "./pages/AgendarReuniao";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Todas as rotas dentro deste grupo terão Header e Footer */}
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/como-funciona" element={<ComoFunciona />} />
              <Route path="/agendar-reuniao" element={<AgendarReuniao />} />
              <Route path="/cadastro" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>

            {/* Rotas que NÃO devem ter o layout (se houver alguma) podem ficar aqui fora */}
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

