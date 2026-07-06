# 🍔 Dev Burguer - Front End

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled Components" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
  <img src="https://img.shields.io/badge/Context_API-3178C6?style=for-the-badge&logo=react&logoColor=white" alt="Context API" />
  <img src="https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white" alt="React Hook Form" />
  <img src="https://img.shields.io/badge/Yup-111827?style=for-the-badge&logoColor=white" alt="Yup" />
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white" alt="Render" />
</p>

O **Dev Burguer** é um ecossistema completo de cardápio digital, checkout de pagamentos e gerenciamento de pedidos para uma hamburgueria. Ele foi desenvolvido como uma Single Page Application (SPA) robusta e escalável, totalmente conectada a uma API REST com rotas autenticadas, carrinho de compras e fluxos de validação em tempo real.

---

## 🌐 Link do Projeto na Nuvem

Você pode testar e visualizar a aplicação rodando ao vivo diretamente no seu navegador:

👉 **[Acessar o Dev Burguer no Render](https://dev-burguer-web.onrender.com)**

---

## 🚀 Principais Funcionalidades Implementadas

* **Carrossel de Categorias Inteligente**: Navegação inicial intuitiva com tratamento nativo de cliques para redirecionamento.
* **Cardápio com Filtro Dinâmico**: Sincronização automática entre os parâmetros da URL e os estados do React para exibir apenas os produtos selecionados.
* **Consumo de API Assíncrono**: Integração completa com o banco de dados via Axios para renderizar produtos e categorias atualizados.
* **Armazenamento de Imagens em Nuvem (Cloudinary)**: Integração com o serviço de CDN do Cloudinary para hospedagem, otimização e entrega rápida das imagens dos produtos e categorias.

---


## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes ferramentas, divididas por suas responsabilidades no ecossistema do app:

### 📦 Core & Roteamento
* **[React 19](https://react.dev)** - Biblioteca principal para construção da interface baseada em componentes.
* **[Vite](https://vite.dev)** - Ferramenta de build ultra-rápida para o ambiente de desenvolvimento.
* **[React Router Dom](https://reactrouter.com)** - Gerenciamento de rotas e navegação declarativa da aplicação.
* **[Axios](https://axios-http.com)** - Cliente HTTP para requisições assíncronas à API do Back-end.

### 🎨 Design & Estilização
* **[Styled Components](https://styled-components.com)** - Estilização modular com CSS-in-JS.
* **[Material UI (MUI) & Emotion](https://mui.com)** - Componentes de interface ricos e estilização de elementos complexos como selects e grids.
* **[React Select](https://react-select.com)** - Menus de seleção customizados e amigáveis para o usuário.
* **[Phosphor Icons](https://phosphoricons.com)** - Biblioteca flexível de ícones vetoriais modernos.
* **[React Multi Carousel](https://github.com)** - Componente de carrossel responsivo para a exibição de categorias.

### 🛡️ Formulários, Validações e Notificações
* **[React Hook Form](https://react-hook-form.com)** - Gerenciamento de estado de formulários focado em performance.
* **[Yup](https://github.com)** - Esquema de validação de dados integrado aos formulários do sistema.
* **[React Toastify](https://github.io)** - Notificações flutuantes e alertas visuais elegantes em tempo real.

### 💳 Meios de Pagamento & Mídia
* **[Stripe React SDK](https://stripe.com)** - Integração completa e segura com a plataforma de pagamentos Stripe.
* **[Cloudinary](https://cloudinary.com)** - Provedor de nuvem terceirizado integrado para hospedagem rápida e gerenciamento das imagens dos produtos.

---

## 🔗 Repositório do Back-End

Como a aplicação é Full-Stack e está dividida em microsserviços, você pode conferir o código fonte responsável pela API, banco de dados (PostgreSQL/Sequelize) e regras de negócio acessando o repositório abaixo:

📦 **[Acessar Repositório do Back-End](https://dev-burguer-api-thkn.onrender.com)**

---

## 💻 Como Rodar este Projeto Localmente

Se você deseja baixar e executar este repositório na sua máquina, siga os passos abaixo:
1. Clone o repositório do Front-end:
   ```bash
   git clone https://github.com/Gabrielalmeida49/Dev-Burguer-web.git
   ```
2. Entre na pasta do projeto:
   ```bash
   cd: dev-burguer-front-end
   ```
3. Instale todas as dependências necessárias utilizando o pnpm:
   ```bash
   pnpm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   pnpm dev
   ```
5. Abra o seu navegador no endereço indicado no terminal (geralmente `http://localhost:5173`).

<p align="center">Desenvolvido com 💜 focado em entregar a melhor experiência de usuário.</p>

