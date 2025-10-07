import React from "react";

// Você deve importar o Header e Footer se eles fizerem parte do seu Layout Padrão.
// Caso contrário, você deve garantir que o Layout Principal os renderize.

// O Layout principal é o div com "min-h-screen bg-background"
const LegalPageTemplate = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Ajuste: Se você estiver usando o Layout Principal com Header e Footer, 
        remova o código de header e footer daqui e use apenas a <section> abaixo.
        Se esta página for renderizada SEM Layout (como o Login), mantenha o Header/Footer.
      */}

      {/* Exemplo de Layout Simples, mantendo a estética e responsividade */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Título da Página */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {title}
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              Última atualização: 06 de Outubro de 2025
            </p>
          </header>

          {/* Conteúdo (Renderizado via 'children') */}
          <div className="text-muted-foreground space-y-8 leading-relaxed">
            {children}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalPageTemplate;
