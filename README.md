# Pokédex

Uma aplicação web responsiva desenvolvida como parte do desafio técnico do DevQuest para explorar informações sobre Pokémon, consumindo a PokéAPI.

## 📖 Descrição

Esta Pokédex permite aos usuários navegar por uma lista de Pokémon, filtrar os resultados por tipo e visualizar uma página de detalhes completa para cada criatura, incluindo suas habilidades, movimentos e tipos. A aplicação foi construída com um design moderno, totalmente responsivo e com um seletor de tema claro/escuro.

## 🚀 Funcionalidades

- **Listagem Infinita:** Visualização de Pokémon com um botão "Carregar Mais" para uma navegação paginada.
- **Filtro por Tipo:** Um menu dropdown permite filtrar a lista para exibir apenas Pokémon de um tipo específico (ex: Fogo, Água, Grama).
- **Página de Detalhes:** Cada Pokémon é clicável e leva a uma página dedicada com informações detalhadas.
- **Seletor de Tema:** Um botão permite ao usuário alternar instantaneamente entre um tema claro (light) e escuro (dark).
- **Design Responsivo:** A interface se adapta perfeitamente a diferentes tamanhos de tela, de desktops a dispositivos móveis.

## 🛠️ Tecnologias Utilizadas

- **React 18 + TypeScript:** Para a construção de uma interface de usuário reativa, escalável e com segurança de tipos.
- **Vite:** Ferramenta de build moderna que proporciona um ambiente de desenvolvimento extremamente rápido com Hot Module Replacement (HMR).
- **Styled Components:** Utilizado para a estilização via CSS-in-JS, permitindo a criação de componentes com escopo de estilo e um sistema de temas dinâmico.
- **React Router DOM:** Para o gerenciamento de rotas e navegação, criando uma experiência de Single Page Application (SPA).
- **Axios:** Cliente HTTP baseado em Promises para realizar as requisições à PokéAPI de forma robusta.
- **PokéAPI:** A fonte de todos os dados sobre os Pokémon.

## 💡 Decisões Técnicas e de Arquitetura

- **Context API para Gerenciamento de Tema:** O estado do tema (light/dark) é gerenciado globalmente pela Context API do React. Isso evita "prop drilling" e permite que qualquer componente acesse e modifique o tema de forma limpa e centralizada.
- **Separação de Responsabilidades (Styled-Components):** Os componentes de estilização foram mantidos em arquivos `styles.ts` separados, desacoplando a lógica da apresentação e mantendo os arquivos de componente (`index.tsx`) mais limpos e focados em sua funcionalidade.
- **Hooks `useEffect` Refatorados:** A lógica de busca de dados na página inicial foi cuidadosamente refatorada para um `useEffect` centralizado que gerencia tanto a paginação quanto o filtro. Esta abordagem evitou bugs de renderização e a duplicação de chaves (`keys`), tornando o código mais robusto e previsível.
- **Carregamento Assíncrono com Estado de Loading:** Tanto na Home quanto nos Cards, um estado de `loading` foi implementado para melhorar a experiência do usuário, exibindo um feedback visual enquanto os dados e imagens são carregados da API.
- **Design Responsivo com CSS Grid:** A grade de Pokémon na página inicial foi construída com CSS Grid e a função `repeat(auto-fit, minmax(...))`, criando um layout fluido e adaptável que não depende de media queries manuais.

## ⚙️ Como Executar o Projeto

```bash
# 1. Clone o repositório
git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git](https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)

# 2. Navegue até o diretório do projeto
cd pokedex-react-challenge

# 3. Instale as dependências
npm install

# 4. Execute o projeto em modo de desenvolvimento
npm run dev

# 5. Abra seu navegador em http://localhost:5173