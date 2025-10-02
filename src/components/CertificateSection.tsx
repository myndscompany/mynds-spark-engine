import React from "react";
import { Award } from "lucide-react"; // Usando Lucide React, parte do seu Tech Stack
import googlePartnerImg from "../assets/googlelogofinal.png"; // Imagem do Google Partner (verifique o caminho)
import metaPartnerImg from "../assets/metalogofinal.png"; // Imagem do Meta Business Partner

// Definição da interface para os dados dos certificados, seguindo a prática TypeScript Strict
interface Certificate {
  id: number;
  name: string;
  imageUrl: string; // Caminho da imagem (deve estar em src/assets)
  link: string; // Link de verificação do certificado (opcional)
}

const certificates: Certificate[] = [
  {
    id: 1,
    name: "Google Partner",
    imageUrl: googlePartnerImg, // Caminho da imagem importada
    link: "#", // Adicione o link de verificação real
  },
  {
    id: 2,
    name: "Meta Business Partner",
    imageUrl: metaPartnerImg, // Caminho da imagem importada
    link: "#", // Adicione o link de verificação real
  },
];

/**
 * Componente da Seção de Certificados.
 * Usa o espaçamento de seção e o design system do projeto.
 */
export function CertificateSection() {
  return (
    // Usa a escala de espaçamento de seções: py-16 sm:py-20 lg:py-24 xl:py-32
    <section
      id="certificados"
      className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-[var(--primary-light)] text-[var(--foreground)]"
    >
      {/* Container: max-w-7xl com padding responsivo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da Seção */}
        <div className="text-center mb-12 lg:mb-16">
          {/* Foreground primário em modo claro (se aplicável), ou modo escuro (padrão) */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
            Nossas Certificações
          </h2>
          {/* Muted Foreground para texto secundário */}
          <p className="mt-3 text-xl text-[var(--muted-foreground)]">
            Validamos nosso conhecimento com as maiores plataformas do mercado.
          </p>
        </div>

        {/* Grid de Certificados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {certificates.map((cert) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              // Usa primary-dark no hover para dar feedback visual, primary-light no fundo
              className="group flex flex-col items-center p-8 bg-white/90 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-[var(--border)]"
            >
              {/* Imagem do Certificado */}
              <div className="mb-4 w-60 h-60 overflow-hidden rounded-xl">
                {/* O atributo 'alt' é crucial para Acessibilidade (ARIA Labels) */}
                <img
                  src={cert.imageUrl}
                  alt={`Certificado ${cert.name}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Nome do Certificado e Ícone */}
              {/* <div className="flex items-center space-x-2 mt-4">
                <p className="text-xl font-semibold text-[var(--primary-dark)]">
                  {cert.name}
                </p> */}

              {/* Ícone de âncora do Lucide React, parte do seu Tech Stack */}
              {/* <Award className="w-5 h-5 text-[var(--primary)] group-hover:text-[var(--primary-dark)] transition-colors" />
              </div> */}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
