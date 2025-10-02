import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useAuth } from '@/context/AuthContext'; // Nosso hook para pegar o usuário
import { Button } from '@/components/ui/button';

const AreaDoCliente = () => {
  const { user } = useAuth(); // Pega as informações do usuário logado
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/'); // Redireciona para a home após o logout
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  // Se 'user' ainda não carregou, não mostra nada
  if (!user) {
    return null; 
  }

  return (
    <div className="container mx-auto px-6 py-12 text-center">
      <h1 className="text-3xl font-bold">Bem-vindo à sua Área</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Você está logado como: <span className="font-semibold text-primary">{user.email}</span>
      </p>
      <Button onClick={handleLogout} className="mt-8">
        Sair da Conta
      </Button>
    </div>
  );
};

export default AreaDoCliente;