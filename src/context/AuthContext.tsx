import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../lib/firebase';

// Define o tipo de dados que o contexto irá fornecer
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
}

// Cria o contexto com um valor padrão
const AuthContext = createContext<AuthContextType>({ user: null, isLoading: true });

// Cria o Provedor, um componente que vai "envolver" nosso app
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged é um "ouvinte" do Firebase que notifica
    // em tempo real se o usuário logou, deslogou ou se a página carregou.
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    // Limpa o "ouvinte" quando o componente é desmontado
    return () => unsubscribe();
  }, []);

  const value = { user, isLoading };

  // O valor (usuário logado e estado de carregamento) é passado para todos os componentes filhos
  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

// Hook customizado para facilitar o uso do contexto
export const useAuth = () => {
  return useContext(AuthContext);
};