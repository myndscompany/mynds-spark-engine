import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, getDoc, DocumentData } from 'firebase/firestore'; // Importações do Firestore
import { auth, db } from '../lib/firebase';

// 1. (Opcional, mas boa prática) Definimos um tipo para o nosso perfil de usuário
interface UserProfile extends DocumentData {
  email: string;
  role: 'desenvolvedor' | 'cliente_mynds' | 'cliente_usuario';
  createdAt: any;
}

// 2. Atualizamos o tipo do nosso contexto para incluir o perfil
interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null; // Adicionamos o perfil do usuário
  isLoading: boolean;
}

// Cria o contexto com os novos valores padrão
const AuthContext = createContext<AuthContextType>({ user: null, userProfile: null, isLoading: true });

// Componente Provedor
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null); // 3. Novo estado para o perfil
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      // 4. Se um usuário estiver logado, buscamos seu perfil no Firestore
      if (currentUser) {
        const docRef = doc(db, 'users', currentUser.uid); // Cria a referência para o documento do usuário
        const docSnap = await getDoc(docRef);             // Busca o documento

        if (docSnap.exists()) {
          // Se o documento existir, salvamos os dados no nosso estado 'userProfile'
          setUserProfile(docSnap.data() as UserProfile);
        } else {
          // Caso o usuário exista no Auth mas não no Firestore (ex: login social)
          console.log("Não foi encontrado um perfil para este usuário no Firestore.");
          setUserProfile(null);
        }
      } else {
        // Se não houver usuário logado, limpamos o perfil
        setUserProfile(null);
      }
      
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // 5. Passamos o userProfile para o resto da aplicação
  const value = { user, userProfile, isLoading };

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