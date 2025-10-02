import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

// Este componente recebe 'children', que será a página que queremos proteger.
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();

  // Se ainda estiver carregando a informação de auth, mostra uma mensagem
  if (isLoading) {
    return <div>Carregando...</div>;
  }

  // Se não estiver carregando e NÃO houver usuário, redireciona para a página de login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Se estiver tudo certo (não carregando e com usuário logado), mostra a página.
  return <>{children}</>;
};

export default ProtectedRoute;