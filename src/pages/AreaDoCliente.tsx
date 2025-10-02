import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { User, Shield, Briefcase } from 'lucide-react';

// --- NOVAS IMPORTAÇÕES DO FIRESTORE E HOOKS DO REACT ---
import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs, DocumentData } from 'firebase/firestore';

// --- IMPORTAÇÕES DE COMPONENTES DE UI ---
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// --- Componentes de Dashboard para cada Role ---

// Componente para o Desenvolvedor
const DeveloperDashboard = () => (
  <div className="p-8 border rounded-lg bg-card">
    <div className="flex items-center gap-4">
      <Shield className="w-8 h-8 text-primary" />
      <h2 className="text-2xl font-bold">Painel do Desenvolvedor</h2>
    </div>
    <p className="mt-4 text-muted-foreground">Área para gerenciamento de clientes, projetos e configurações do sistema.</p>
    {/* Futuramente: Listagem de usuários, logs, etc. */}
  </div>
);
// Componente para o Cliente Final (usuário do cliente Mynds)
const UserDashboard = () => (
  <div className="p-8 border rounded-lg bg-card">
    <div className="flex items-center gap-4">
      <User className="w-8 h-8 text-muted-foreground" />
      <h2 className="text-2xl font-bold">Minha Conta</h2>
    </div>
    <p className="mt-4 text-muted-foreground">Aqui você pode ver seus dados, histórico e outras informações.</p>
    {/* Futuramente: Formulário para editar dados, histórico de compras/agendamentos, etc. */}
  </div>
);

// --- COMPONENTE DO CLIENTE (MODIFICADO) ---
const ClientDashboard = () => {
  const { user } = useAuth(); // Pega o usuário logado para usar o UID dele
  const [projects, setProjects] = useState<DocumentData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      if (!user) return; // Garante que o usuário existe antes de fazer a busca

      try {
        // 1. Cria uma query para buscar na coleção 'projects'
        const projectsRef = collection(db, 'projects');
        
        // 2. Adiciona um filtro 'where' para pegar apenas os projetos
        //    cujo 'clientId' é igual ao UID do usuário logado.
        const q = query(projectsRef, where("clientId", "==", user.uid));

        // 3. Executa a query
        const querySnapshot = await getDocs(q);
        
        // 4. Mapeia os resultados e guarda no estado 'projects'
        const projectsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProjects(projectsData);

      } catch (error) {
        console.error("Erro ao buscar projetos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [user]); // Roda o efeito quando o usuário for carregado

  if (isLoading) {
    return <p>Carregando projetos...</p>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Briefcase className="w-8 h-8 text-accent" />
        <h2 className="text-2xl font-bold">Dashboard de Projetos</h2>
      </div>
      
      {projects.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <Card key={project.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{project.name}</CardTitle>
                  <Badge variant={project.status === 'Concluído' ? 'default' : 'secondary'}>
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">Nenhum projeto encontrado para sua conta.</p>
      )}
    </div>
  );
};


// --- Componente Principal da Página (sem alterações) ---
const AreaDoCliente = () => {
  const { user, userProfile } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  // Função para renderizar o dashboard correto com base na role
  const renderDashboard = () => {
    switch (userProfile?.role) {
      case 'desenvolvedor':
        return <DeveloperDashboard />;
      case 'cliente_mynds':
        return <ClientDashboard />;
      case 'cliente_usuario':
        return <UserDashboard />;
      default:
        return <p>Bem-vindo! Seu perfil não tem um painel específico.</p>;
    }
  };

  if (!user || !userProfile) {
    return <div className="container text-center py-12">Carregando informações...</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Área do Cliente</h1>
          <p className="mt-2 text-muted-foreground">Logado como: <span className="font-medium text-foreground">{user.email}</span></p>
        </div>
        <Button onClick={handleLogout} variant="outline">
          Sair da Conta
        </Button>
      </div>

      {/* Renderiza o dashboard dinâmico */}
      {renderDashboard()}
    </div>
  );
};


export default AreaDoCliente;

// Cole todo o código acima no seu arquivo, substituindo o antigo.
// Os componentes DeveloperDashboard e UserDashboard, e o componente principal
// AreaDoCliente foram omitidos por brevidade, mas devem ser mantidos como estavam.
// Apenas o ClientDashboard e as importações no topo do arquivo precisam ser atualizados.