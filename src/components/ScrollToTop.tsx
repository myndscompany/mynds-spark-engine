import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Pega o pathname (o caminho da rota atual)
  const { pathname } = useLocation();

  useEffect(() => {
    // Rola a janela para o topo (posição 0, 0) sempre que o pathname mudar
    window.scrollTo(0, 0);

    // O array de dependências garante que a função só roda na mudança de rota
  }, [pathname]);

  return null; // Este componente não renderiza nada visualmente
};

export default ScrollToTop;
