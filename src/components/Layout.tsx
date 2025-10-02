import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'; // Certifique-se de que o caminho para o seu Footer está correto

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16"> {/* pt-16 (padding-top) para compensar a altura do header fixo */}
        <Outlet /> {/* O Outlet é onde o conteúdo da página (Login, Index, etc.) será renderizado */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;