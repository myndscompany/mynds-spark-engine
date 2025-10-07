import React from "react";
import LegalPageTemplate from "./LegalPageTemplate"; // Ajuste o caminho conforme necessário

const PoliticaPrivacidade = () => {
  return (
    <LegalPageTemplate title="Política de Privacidade">
      {/* Introdução */}
      <h2 className="text-2xl font-bold text-foreground">Introdução</h2>
      <p>
        Bem-vindo(a) à Mynds Company ("Mynds", "nós", "nosso" ou "nos"). A sua
        privacidade é importante para nós. Esta Política de Privacidade explica
        quais dados pessoais coletamos, como os utilizamos, com quem os
        compartilhamos e os direitos que você tem em relação a esses dados,
        conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD) e
        demais legislações aplicáveis.
      </p>

      {/* 1. Dados que coletamos */}
      <h2 className="text-2xl font-bold text-foreground">
        1. Dados que coletamos
      </h2>
      <p>
        Podemos coletar as seguintes categorias de dados pessoais quando você
        interage com nosso site, produtos e serviços:
      </p>
      <ul className="list-disc list-inside space-y-2 pl-4">
        <li>
          <strong>Identificação e contato:</strong> nome, e-mail, telefone,
          cargo e informações fornecidas em formulários de contato ou
          agendamento.
        </li>
        <li>
          <strong>Dados profissionais:</strong> empresa, função e informações
          relevantes para prestação de serviços ou comunicação comercial.
        </li>
        <li>
          <strong>Dados técnicos e de uso:</strong> endereço IP, tipo de
          dispositivo, navegador, páginas visitadas, tempo de sessão e cookies
          (outras tecnologias de rastreamento).
        </li>
        <li>
          <strong>Comunicações:</strong> registros de e-mails, mensagens de
          suporte e histórico de atendimento.
        </li>
      </ul>

      {/* 2. Finalidades do tratamento */}
      <h2 className="text-2xl font-bold text-foreground">
        2. Finalidades do tratamento
      </h2>
      <p>
        Utilizamos os dados coletados para finalidades legítimas e específicas,
        incluindo:
      </p>
      <ul className="list-disc list-inside space-y-2 pl-4">
        <li>
          Responder a solicitações, agendar reuniões e prestar serviços
          contratados.
        </li>
        <li>
          Enviar comunicações operacionais e administrativas relacionadas aos
          serviços.
        </li>
        <li>
          Enviar comunicações de marketing e novidades somente quando houver
          consentimento prévio.
        </li>
        <li>
          Melhorar nossos produtos, serviços e a experiência do usuário no site.
        </li>
        <li>
          Garantir segurança e prevenir fraudes, abusos ou atividades ilegais.
        </li>
        <li>Atender obrigações legais e regulatórias.</li>
      </ul>

      {/* 3. Base legal */}
      <h2 className="text-2xl font-bold text-foreground">
        3. Base legal para o tratamento
      </h2>
      <p>As bases legais que legitimam o tratamento dos seus dados incluem:</p>
      <ul className="list-disc list-inside space-y-2 pl-4">
        <li>
          Execução de contrato ou procedimentos preliminares relacionados a
          contrato.
        </li>
        <li>
          Consentimento, quando solicitado (ex.: envio de marketing ou
          comunicações comerciais).
        </li>
        <li>Cumprimento de obrigação legal ou regulatória.</li>
        <li>
          Interesse legítimo da Mynds para fins de segurança, melhoria de
          produto e prevenção de fraudes, desde que não se sobreponha aos seus
          direitos fundamentais.
        </li>
      </ul>

      {/* 4. Compartilhamento de dados */}
      <h2 className="text-2xl font-bold text-foreground">
        4. Compartilhamento de dados
      </h2>
      <p>
        Podemos compartilhar seus dados com terceiros nas seguintes situações:
      </p>
      <ul className="list-disc list-inside space-y-2 pl-4">
        <li>
          Prestadores de serviços que operam em nosso nome (ex.: provedores de
          hospedagem, plataformas de CRM, serviços de e-mail e analytics).
        </li>
        <li>
          Quando exigido por lei, ordem judicial ou autoridade competente.
        </li>
        <li>
          No contexto de reorganizações societárias, fusões ou aquisições,
          mediante garantias contratuais apropriadas.
        </li>
      </ul>
      <p>
        Exigimos que terceiros adotem medidas de segurança e obrigações
        contratuais para proteger os dados que processam em nosso nome.
      </p>

      {/* 5. Cookies e tecnologias similares */}
      <h2 className="text-2xl font-bold text-foreground">
        5. Cookies e tecnologias similares
      </h2>
      <p>
        Utilizamos cookies e tecnologias semelhantes para melhorar sua
        experiência, entender como o site é utilizado e personalizar
        comunicações. Você pode controlar suas preferências de cookies através
        das configurações do seu navegador ou do banner de cookies do site.
        Cookies estritamente necessários são essenciais para o funcionamento do
        site.
      </p>

      {/* 6. Consentimento para comunicações e marketing */}
      <h2 className="text-2xl font-bold text-foreground">
        6. Consentimento para comunicações e marketing
      </h2>
      <p>
        Ao preencher formulários ou fornecer seus dados de contato, você poderá
        optar por receber comunicações da Mynds Company, incluindo mensagens via
        e-mail, WhatsApp ou outros meios eletrônicos. Essas comunicações podem
        conter informações sobre nossos produtos, serviços, eventos ou conteúdos
        relevantes.
      </p>
      <p>
        O envio dessas comunicações ocorre somente mediante o seu consentimento,
        que pode ser retirado a qualquer momento, bastando seguir as instruções
        de descadastramento presentes nas mensagens recebidas ou entrar em
        contato conosco pelo e-mail indicado nesta política.
      </p>
      <p>
        A Mynds se compromete a não enviar comunicações não solicitadas e a
        tratar suas informações de contato exclusivamente para as finalidades
        autorizadas.
      </p>

      {/* 7. Segurança */}
      <h2 className="text-2xl font-bold text-foreground">7. Segurança</h2>
      <p>
        Adotamos medidas técnicas e administrativas adequadas para proteger seus
        dados contra acesso não autorizado, perda, alteração ou divulgação
        indevida. Entretanto, nenhum método de transmissão pela Internet ou de
        armazenamento eletrônico é 100% seguro; portanto, não podemos garantir
        segurança absoluta.
      </p>

      {/* 8. Retenção */}
      <h2 className="text-2xl font-bold text-foreground">
        8. Retenção de dados
      </h2>
      <p>
        Reteremos seus dados pelo tempo necessário para cumprir as finalidades
        descritas nesta política, atender obrigações legais, resolver disputas e
        fazer cumprir nossos acordos. Critérios específicos de retenção (por
        exemplo, prazos legais fiscais) poderão ser aplicados.
      </p>

      {/* 9. Direitos dos titulares */}
      <h2 className="text-2xl font-bold text-foreground">
        9. Direitos dos titulares
      </h2>
      <p>De acordo com a LGPD, você tem direito a:</p>
      <ul className="list-disc list-inside space-y-2 pl-4">
        <li>Confirmar a existência de tratamento de seus dados.</li>
        <li>Acessar os dados que tratamos sobre você.</li>
        <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
        <li>
          Solicitar anonimização, bloqueio ou eliminação de dados desnecessários
          ou excessivos.
        </li>
        <li>
          Portabilidade dos dados a outro fornecedor de serviço, quando
          aplicável.
        </li>
        <li>
          Revogar o consentimento a qualquer momento (quando o tratamento for
          baseado em consentimento).
        </li>
        <li>
          Solicitar a eliminação dos dados tratados com base em consentimento,
          salvo exceções legais.
        </li>
      </ul>
      <p>
        Para exercer seus direitos, entre em contato com nosso Encarregado de
        Proteção de Dados através dos canais indicados abaixo. Atenderemos sua
        solicitação conforme a legislação vigente e mediante verificação de
        identidade, quando necessário.
      </p>

      {/* 10. Transferência internacional */}
      <h2 className="text-2xl font-bold text-foreground">
        10. Transferência internacional de dados
      </h2>
      <p>
        Quando necessário, seus dados podem ser transferidos para provedores em
        outros países. Nesses casos adotamos salvaguardas adequadas (contratos,
        cláusulas-padrão ou outras garantias) para assegurar proteção compatível
        com a legislação aplicável.
      </p>

      {/* 11. Menores */}
      <h2 className="text-2xl font-bold text-foreground">11. Menores</h2>
      <p>
        Nosso site e serviços não são destinados a menores de 18 anos. Não
        coletamos intencionalmente dados pessoais de menores. Se tomarmos
        conhecimento da coleta não autorizada de dados de menores, tomaremos
        providências para excluir essas informações.
      </p>

      {/* 12. Links e terceiros */}
      <h2 className="text-2xl font-bold text-foreground">
        12. Links e serviços de terceiros
      </h2>
      <p>
        O site pode conter links para sites de terceiros. Não somos responsáveis
        pelas práticas de privacidade desses sites. Recomendamos que leia as
        políticas de privacidade dos sites que visita.
      </p>

      {/* 13. Alterações */}
      <h2 className="text-2xl font-bold text-foreground">
        13. Alterações desta política
      </h2>
      <p>
        Podemos atualizar esta Política de Privacidade periodicamente. Quando
        houver mudanças relevantes, informaremos por meio do site ou por
        comunicações diretas, indicando a data de vigência da nova versão.
      </p>

      {/* 14. Contato */}
      <h2 className="text-2xl font-bold text-foreground">14. Contato</h2>
      <p>
        Para dúvidas, solicitações relacionadas aos seus dados pessoais ou para
        exercer seus direitos, entre em contato:
      </p>
      <ul className="list-disc list-inside space-y-2 pl-4">
        <li>
          Email:{" "}
          <a href="mailto:myndscompany@gmail.com">myndscompany@gmail.com</a>
        </li>
        <li>Assunto: Proteção de Dados / LGPD</li>
      </ul>

      {/* Rodapé */}
      <p className="mt-4 text-sm text-muted-foreground">
        Esta Política de Privacidade é efetiva a partir de 06 de outubro de
        2025.
      </p>
    </LegalPageTemplate>
  );
};

export default PoliticaPrivacidade;
