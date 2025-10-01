# Mynds Company - Projeto Website

## 📋 Metadados do Projeto

**Nome:** Mynds Company - Marketing Inteligente & Tecnologia Customizada  
**Tipo:** Website Institucional/Landing Page  
**Data de Criação:** 2025  
**Versão:** 1.0.0  
**Status:** Em Desenvolvimento

## 🎨 Design System & Identidade Visual

### Paleta de Cores (HSL)
```css
/* Cores Principais */
--primary: 270 100% 65%           /* Roxo principal */
--primary-glow: 270 100% 75%      /* Roxo claro/brilho */
--secondary: 240 10% 8%           /* Preto/cinza escuro */
--accent: 45 100% 50%             /* Dourado */
--accent-glow: 45 100% 70%        /* Dourado claro */

/* Cores de Sistema */
--destructive: 0 84.2% 60.2%
--muted: 240 5% 15%
--muted-foreground: 240 5% 64.9%
--border: 240 5% 20%
--input: 240 5% 20%
--ring: 270 100% 65%
```

### Gradientes Customizados
- **gradient-brand:** Gradiente roxo (primary → primary-glow)
- **gradient-gold:** Gradiente dourado (accent → accent-glow)
- **gradient-hero:** Gradiente de fundo (secondary → muted)

### Sombras Customizadas
- **shadow-elegant:** Sombra suave com cor primária
- **shadow-gold:** Sombra com brilho dourado
- **shadow-card:** Sombra para cards

### Tipografia
- **Fonte Principal:** Inter (Google Fonts)
- **Tamanhos:** Sistema padrão do Tailwind
- **Gradientes de Texto:** text-gradient-brand, text-gradient-gold

### Transições
- **transition-smooth:** 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- **transition-fast:** 0.2s ease-in-out

## 🛠️ Stack Tecnológica

### Core
- **React** 18.3.1 - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **React Router DOM** 6.30.1 - Roteamento

### Estilização
- **Tailwind CSS** - Framework CSS utility-first
- **tailwindcss-animate** 1.0.7 - Animações
- **class-variance-authority** 0.7.1 - Gerenciamento de variantes
- **clsx** 2.1.1 - Utilitário de classes condicionais
- **tailwind-merge** 2.6.0 - Merge de classes Tailwind

### Componentes UI (shadcn/ui + Radix UI)
- @radix-ui/react-* (múltiplos componentes)
- lucide-react 0.462.0 - Ícones
- sonner 1.7.4 - Toast notifications
- vaul 0.9.9 - Drawer component
- embla-carousel-react 8.6.0 - Carousel
- recharts 2.15.4 - Gráficos

### Formulários & Validação
- **react-hook-form** 7.61.1 - Gerenciamento de formulários
- **@hookform/resolvers** 3.10.0 - Resolvers de validação
- **zod** 3.25.76 - Schema validation

### Estado & Data Fetching
- **@tanstack/react-query** 5.83.0 - Gerenciamento de estado assíncrono

### Outras Bibliotecas
- **date-fns** 3.6.0 - Manipulação de datas
- **next-themes** 0.3.0 - Gerenciamento de temas
- **react-day-picker** 8.10.1 - Seletor de datas

## 📁 Estrutura de Arquivos

### Raiz do Projeto
```
/
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── postcss.config.js
├── components.json
├── package.json
├── package-lock.json
├── bun.lockb
├── eslint.config.js
├── .gitignore
└── README.md
```

### /public
```
/public
├── favicon.ico
├── placeholder.svg
└── robots.txt
```

### /src
```
/src
├── main.tsx
├── App.tsx
├── App.css
├── index.css
├── vite-env.d.ts
```

### /src/assets
```
/src/assets
├── hero-image.jpg
├── portfolio-automation.jpg
├── portfolio-development.jpg
└── portfolio-marketing.jpg
```

### /src/components
```
/src/components
├── Header.tsx
├── Footer.tsx
├── HeroSection.tsx
├── ServicesSection.tsx
├── AboutSection.tsx
├── PortfolioSection.tsx
└── CTASection.tsx
```

### /src/components/ui (shadcn/ui components)
```
/src/components/ui
├── accordion.tsx
├── alert-dialog.tsx
├── alert.tsx
├── aspect-ratio.tsx
├── avatar.tsx
├── badge.tsx
├── breadcrumb.tsx
├── button.tsx
├── calendar.tsx
├── card.tsx
├── carousel.tsx
├── chart.tsx
├── checkbox.tsx
├── collapsible.tsx
├── command.tsx
├── context-menu.tsx
├── dialog.tsx
├── drawer.tsx
├── dropdown-menu.tsx
├── form.tsx
├── hover-card.tsx
├── input-otp.tsx
├── input.tsx
├── label.tsx
├── menubar.tsx
├── navigation-menu.tsx
├── pagination.tsx
├── popover.tsx
├── progress.tsx
├── radio-group.tsx
├── resizable.tsx
├── scroll-area.tsx
├── select.tsx
├── separator.tsx
├── sheet.tsx
├── sidebar.tsx
├── skeleton.tsx
├── slider.tsx
├── sonner.tsx
├── switch.tsx
├── table.tsx
├── tabs.tsx
├── textarea.tsx
├── toast.tsx
├── toaster.tsx
├── toggle-group.tsx
├── toggle.tsx
├── tooltip.tsx
└── use-toast.ts
```

### /src/pages
```
/src/pages
├── Index.tsx
├── ComoFunciona.tsx
├── AgendarReuniao.tsx
└── NotFound.tsx
```

### /src/hooks
```
/src/hooks
├── use-mobile.tsx
└── use-toast.ts
```

### /src/lib
```
/src/lib
└── utils.ts
```

## 🗺️ Estrutura de Rotas

| Rota | Componente | Descrição |
|------|-----------|-----------|
| `/` | Index | Página inicial com todas as seções |
| `/como-funciona` | ComoFunciona | Página com vídeo explicativo e CTA |
| `/agendar-reuniao` | AgendarReuniao | Formulário de agendamento + WhatsApp |
| `*` | NotFound | Página 404 |

## 📄 Páginas Implementadas

### 1. Index (Página Inicial)
**Seções:**
- Header (navegação fixa)
- HeroSection (hero com imagem e CTAs)
- ServicesSection (3 cards de serviços)
- PortfolioSection (projetos realizados)
- AboutSection (valores e estatísticas)
- CTASection (call to action final)
- Footer (links e informações)

**IDs para navegação:**
- `#servicos`
- `#portfolio`
- `#sobre-nos`

### 2. Como Funciona
**Elementos:**
- Vídeo embed (YouTube/Vimeo)
- Descrição da metodologia
- Lista de benefícios
- CTA agressivo para agendamento
- Navegação de retorno

### 3. Agendar Reunião
**Elementos:**
- Formulário de contato (Nome, Email, Telefone, Empresa, Mensagem)
- Botão de envio via WhatsApp
- CTA direto para WhatsApp
- Informações de contato alternativas

### 4. Not Found (404)
**Elementos:**
- Mensagem de erro
- Botão de retorno para home

## 🎯 Funcionalidades Implementadas

### Navegação
✅ Header fixo com scroll suave para seções  
✅ Logo clicável retorna para home  
✅ Navegação entre páginas com React Router  
✅ Links de rodapé funcionais  
✅ Scroll automático para seções ao navegar de outras páginas

### Interações
✅ Hover effects em cards e botões  
✅ Animações de entrada (fade-in, slide-up)  
✅ Transições suaves  
✅ Responsive design (mobile-first)

### Integração WhatsApp
✅ Botão de contato direto no header  
✅ Formulário envia dados via WhatsApp  
✅ CTA de WhatsApp na página de agendamento

### SEO
✅ Meta tags configuradas  
✅ Open Graph tags  
✅ Twitter cards  
✅ Robots.txt  
✅ Títulos e descrições otimizados

## 📊 Próximos Passos

### FASE 1: Conteúdo e Mídia
**Etapa 1.1: Vídeo Explicativo**
- [ ] Produzir vídeo "Como Funciona"
- [ ] Fazer upload no YouTube/Vimeo
- [ ] Integrar URL do vídeo na página ComoFunciona

**Etapa 1.2: Imagens Reais**
- [ ] Substituir hero-image.jpg por foto profissional
- [ ] Adicionar fotos reais dos projetos de portfólio
- [ ] Criar/adicionar logos de clientes (se aplicável)

**Etapa 1.3: Textos Finais**
- [ ] Revisar todos os textos com copywriter
- [ ] Ajustar CTAs para máxima conversão
- [ ] Adicionar depoimentos de clientes (se disponível)

### FASE 2: Funcionalidades Backend
**Etapa 2.1: Integração de Formulários**
- [ ] Implementar envio real de formulários
- [ ] Configurar notificações por email
- [ ] Criar dashboard de leads (opcional)

**Etapa 2.2: Analytics e Tracking**
- [ ] Integrar Google Analytics 4
- [ ] Configurar Facebook Pixel
- [ ] Implementar heatmaps (Hotjar/Microsoft Clarity)
- [ ] Configurar conversões e eventos

**Etapa 2.3: Chat ao Vivo** (Opcional)
- [ ] Integrar widget de chat (Tawk.to, Tidio, etc.)
- [ ] Configurar respostas automáticas
- [ ] Treinar equipe para atendimento

### FASE 3: Otimização e Performance
**Etapa 3.1: SEO Técnico**
- [ ] Criar sitemap.xml
- [ ] Configurar Google Search Console
- [ ] Otimizar velocidade de carregamento
- [ ] Implementar lazy loading em imagens
- [ ] Adicionar Schema.org markup

**Etapa 3.2: Performance**
- [ ] Otimizar imagens (WebP, compressão)
- [ ] Implementar CDN
- [ ] Minificar assets
- [ ] Code splitting avançado
- [ ] Análise com Lighthouse

**Etapa 3.3: Acessibilidade**
- [ ] Auditoria WCAG 2.1
- [ ] Adicionar ARIA labels onde necessário
- [ ] Testar navegação por teclado
- [ ] Validar contraste de cores

### FASE 4: Marketing e Conversão
**Etapa 4.1: Landing Pages Adicionais**
- [ ] Criar landing pages para campanhas específicas
- [ ] Implementar A/B testing
- [ ] Páginas de serviços individuais detalhadas

**Etapa 4.2: Lead Magnets**
- [ ] Criar materiais para download (ebooks, checklists)
- [ ] Implementar formulários de captura
- [ ] Configurar email marketing (integração com Mailchimp/etc)

**Etapa 4.3: Prova Social**
- [ ] Adicionar seção de depoimentos com fotos
- [ ] Integrar reviews (Google, Trustpilot)
- [ ] Exibir logos de clientes atendidos
- [ ] Adicionar cases de sucesso detalhados

### FASE 5: Expansão
**Etapa 5.1: Blog** (Opcional)
- [ ] Criar estrutura de blog
- [ ] Sistema de categorias e tags
- [ ] Implementar CMS (Supabase/Strapi)
- [ ] Estratégia de conteúdo SEO

**Etapa 5.2: Área do Cliente** (Opcional)
- [ ] Sistema de login/autenticação
- [ ] Dashboard do cliente
- [ ] Portal de acompanhamento de projetos

**Etapa 5.3: Integrações**
- [ ] CRM (HubSpot, Pipedrive, etc.)
- [ ] Calendário online (Calendly)
- [ ] Pagamentos online (Stripe)

### FASE 6: Deploy e Manutenção
**Etapa 6.1: Deploy em Produção**
- [ ] Configurar domínio personalizado
- [ ] Configurar SSL/HTTPS
- [ ] Deploy na Lovable ou outro hosting
- [ ] Configurar backups automáticos

**Etapa 6.2: Monitoramento**
- [ ] Configurar alertas de erro (Sentry)
- [ ] Monitoramento de uptime
- [ ] Análise de performance contínua

**Etapa 6.3: Manutenção**
- [ ] Plano de atualizações de conteúdo
- [ ] Atualizações de dependências
- [ ] Testes regulares de funcionalidades

## 🚀 Como Executar

### Desenvolvimento
```bash
npm install
npm run dev
```

### Build para Produção
```bash
npm run build
npm run preview
```

## 📝 Notas Importantes

### Configurações de SEO
- Title e meta descriptions estão em `index.html`
- Cada página deve ter meta tags específicas (implementar futuramente)
- robots.txt configurado para indexação completa

### Responsividade
- Mobile-first approach
- Breakpoints do Tailwind padrão
- Testado em viewports: 320px, 768px, 1024px, 1440px+

### Integração WhatsApp
- Número atual: placeholder (+5511999999999)
- Atualizar com número real antes do deploy

### Personalização de Cores
- Todas as cores estão em `src/index.css`
- Usar variáveis CSS para manter consistência
- Suporta dark mode (atualmente forçado)

## 🔒 Segurança
- [ ] Implementar rate limiting em formulários
- [ ] Adicionar CAPTCHA em formulários públicos
- [ ] Validar todos os inputs no frontend e backend
- [ ] Configurar CORS apropriadamente

## 📞 Contato e Suporte
Para dúvidas sobre o desenvolvimento, entrar em contato com a equipe de desenvolvimento.

---

**Última atualização:** 2025-10-01  
**Desenvolvido com:** Lovable AI Platform  
**Versão do documento:** 1.0.0