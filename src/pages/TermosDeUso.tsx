import React from "react";
import LegalPageTemplate from "./LegalPageTemplate"; // Ajuste o caminho conforme necessário

const TermosDeUso = () => {
  return (
    <LegalPageTemplate title="Termos de Uso do Site">
      {/* Introdução */}
      <h2 className="text-2xl font-bold text-foreground">Introdução</h2>
      <p>
        Bem-vindo(a) ao site da Mynds Company ("Mynds", "nós" ou "nosso"). Ao
        acessar, navegar ou utilizar este site, você concorda integralmente com
        os presentes Termos de Uso. Caso não concorde com qualquer parte destes
        termos, recomendamos que não utilize nossos serviços.
      </p>
      <p>
        Estes Termos regem o uso do website, seus conteúdos e funcionalidades, e
        estabelecem as responsabilidades, deveres e direitos de ambas as partes.
        A Mynds poderá atualizar este documento a qualquer momento, mediante
        publicação da nova versão neste mesmo endereço eletrônico.
      </p>

      {/* 1. Aceitação dos Termos */}
      <h2 className="text-2xl font-bold text-foreground">
        1. Aceitação dos Termos
      </h2>
      <p>
        Ao utilizar o site, você declara que leu, compreendeu e concorda em se
        vincular a estes Termos de Uso, bem como à nossa{" "}
        <a
          href="/politica-de-privacidade"
          className="underline text-primary hover:text-primary/80"
        >
          Política de Privacidade
        </a>
        . Caso utilize o site em nome de uma empresa ou organização, você
        declara estar autorizado(a) a aceitar estes Termos em nome dela.
      </p>

      {/* 2. Modificações dos Termos */}
      <h2 className="text-2xl font-bold text-foreground">
        2. Modificações dos Termos
      </h2>
      <p>
        A Mynds reserva-se o direito de modificar, atualizar ou remover partes
        destes Termos de Uso a qualquer momento, sem aviso prévio. As versões
        atualizadas entrarão em vigor na data de sua publicação. É sua
        responsabilidade revisar periodicamente esta página para se manter
        informado sobre quaisquer alterações.
      </p>

      {/* 3. Uso do Site */}
      <h2 className="text-2xl font-bold text-foreground">3. Uso do Site</h2>
      <p>O usuário compromete-se a:</p>
      <ul className="list-disc list-inside space-y-2 pl-4">
        <li>
          Utilizar o site apenas para fins lícitos e de acordo com estes Termos.
        </li>
        <li>
          Não tentar obter acesso não autorizado a sistemas, dados ou servidores
          da Mynds.
        </li>
        <li>
          Não disseminar conteúdo malicioso, spam, vírus ou qualquer código que
          possa comprometer a segurança do site.
        </li>
        <li>
          Não reproduzir, duplicar, copiar, vender ou explorar o conteúdo do
          site para fins comerciais sem autorização prévia e por escrito.
        </li>
      </ul>

      {/* 4. Propriedade Intelectual */}
      <h2 className="text-2xl font-bold text-foreground">
        4. Propriedade Intelectual
      </h2>
      <p>
        Todo o conteúdo disponível neste site, incluindo textos, imagens,
        vídeos, logotipos, ícones, gráficos, código-fonte e layout, é de
        propriedade da Mynds Company ou de seus licenciadores e é protegido por
        leis nacionais e internacionais de direitos autorais, marcas registradas
        e propriedade intelectual.
      </p>
      <p>
        É expressamente proibida a cópia, modificação, distribuição ou qualquer
        outro uso não autorizado desse conteúdo sem o consentimento expresso e
        por escrito da Mynds Company.
      </p>

      {/* 5. Conteúdo de Terceiros */}
      <h2 className="text-2xl font-bold text-foreground">
        5. Conteúdo e links de terceiros
      </h2>
      <p>
        O site pode conter links, integrações ou referências a sites de
        terceiros. Esses sites não estão sob o controle da Mynds, e não nos
        responsabilizamos por seus conteúdos, políticas ou práticas. O acesso a
        qualquer site de terceiro é por conta e risco do usuário.
      </p>

      {/* 6. Limitação de Responsabilidade */}
      <h2 className="text-2xl font-bold text-foreground">
        6. Limitação de Responsabilidade
      </h2>
      <p>
        A Mynds Company não se responsabiliza por quaisquer danos diretos,
        indiretos, incidentais, consequenciais ou punitivos decorrentes do uso
        ou da impossibilidade de uso deste site, incluindo, mas não se limitando
        a, falhas técnicas, indisponibilidade, perda de dados ou lucros
        cessantes.
      </p>
      <p>
        Embora adotemos boas práticas de segurança e desempenho, não garantimos
        que o site funcionará sem interrupções, erros ou vulnerabilidades.
      </p>

      {/* 7. Comunicações e consentimento */}
      <h2 className="text-2xl font-bold text-foreground">
        7. Comunicações e consentimento
      </h2>
      <p>
        Ao preencher formulários de contato, solicitar demonstrações ou
        interagir conosco por e-mail, WhatsApp ou outros canais, você autoriza o
        envio de comunicações relacionadas aos serviços da Mynds Company.
      </p>
      <p>
        O envio de materiais promocionais e informativos (como newsletters,
        ofertas e convites) depende do seu consentimento, conforme a Política de
        Privacidade. Você poderá revogar esse consentimento a qualquer momento,
        clicando em “descadastrar” nas comunicações ou enviando um e-mail para{" "}
        <a
          href="mailto:myndscompany@gmail.com"
          className="underline text-primary hover:text-primary/80"
        >
          myndscompany@gmail.com
        </a>
        .
      </p>

      {/* 8. Privacidade */}
      <h2 className="text-2xl font-bold text-foreground">
        8. Privacidade e Proteção de Dados
      </h2>
      <p>
        O tratamento de dados pessoais pela Mynds é realizado conforme a{" "}
        <a
          href="/politica-de-privacidade"
          className="underline text-primary hover:text-primary/80"
        >
          Política de Privacidade
        </a>
        , que integra e complementa estes Termos de Uso. Recomendamos que você
        leia atentamente a política antes de utilizar o site.
      </p>

      {/* 9. Suspensão ou encerramento de acesso */}
      <h2 className="text-2xl font-bold text-foreground">
        9. Suspensão ou encerramento de acesso
      </h2>
      <p>
        A Mynds poderá suspender, limitar ou encerrar o acesso ao site, total ou
        parcialmente, a qualquer momento, em caso de violação destes Termos,
        prática de atividades ilegais ou quando julgar necessário para proteger
        a integridade do sistema, dos usuários ou de terceiros.
      </p>

      {/* 10. Disposições gerais */}
      <h2 className="text-2xl font-bold text-foreground">
        10. Disposições gerais
      </h2>
      <p>
        Estes Termos constituem o acordo integral entre você e a Mynds Company
        quanto ao uso do site. Caso qualquer disposição seja considerada
        inválida ou inexequível, as demais permanecerão em pleno vigor e efeito.
      </p>
      <p>
        O não exercício de qualquer direito ou disposição destes Termos não
        constitui renúncia, e a Mynds poderá exercer seus direitos a qualquer
        momento.
      </p>

      {/* 11. Legislação aplicável */}
      <h2 className="text-2xl font-bold text-foreground">
        11. Legislação aplicável e foro
      </h2>
      <p>
        Estes Termos são regidos pelas leis da República Federativa do Brasil.
        Em caso de controvérsias, as partes elegem o foro da Comarca de São
        Paulo/SP, com renúncia a qualquer outro, por mais privilegiado que seja.
      </p>

      {/* 12. Contato */}
      <h2 className="text-2xl font-bold text-foreground">12. Contato</h2>
      <p>
        Para dúvidas, solicitações ou esclarecimentos sobre estes Termos de Uso,
        entre em contato conosco:
      </p>
      <ul className="list-disc list-inside space-y-2 pl-4">
        <li>
          Email:{" "}
          <a href="mailto:myndscompany@gmail.com">myndscompany@gmail.com</a>
        </li>
        <li>Assunto: Termos de Uso / Dúvidas Legais</li>
      </ul>

      {/* Rodapé */}
      <p className="mt-4 text-sm text-muted-foreground">
        Estes Termos de Uso foram atualizados em 06 de outubro de 2025.
      </p>
    </LegalPageTemplate>
  );
};

export default TermosDeUso;
