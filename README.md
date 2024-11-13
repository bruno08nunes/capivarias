# Capivárias

Está é a documentação da rede social Capivárias. Aqui terá informações sobre o funcionamento do site.

## Sumário

1.      [Sumário](#sumário)
1.      [Descrição](#descrição)
1.      [Lista de Tarefas](#lista-de-tarefas)
1.      [Requisitos](#requisitos)
        1.      [Requisitos Funcionais](#requisitos-funcionais)
        1.      [Requisitos Funcionais](#requisitos-não-funcionais)
1.      [Objetivos](#objetivos)
1.      [Linguagens, Bibliotecas e Frameworks](#linguagens-bibliotecas-e-frameworks-usados)
1.      [Design](#design)
        1.      [Paleta de Cores](#paleta-de-cores)
        1       [Protótipo do Figma](#protótipo-do-figma)
        1.      [Fontes](#fontes)
1.      [Imagens](#imagens)

## Descrição

Esse site é uma rede social que tem como público alvo as mais lindas criaturas da fauna brasileira: Capivaras. Elas serão o foco da aplicação, ou seja, todas as postagens e fotos serão delas.

## Lista de Tarefas:

-   [x] -   Documentação
        -   [x] -   Descrição
        -   [x] -   Lista de Tarefas
        -   [x] -   Requisitos
        -   [x] -   Objetivos
        -   [x] -   Linguagens, bibliotecas e frameworks usados
        -   [ ] -   Imagens
        -   [ ] -   Backend
                -   [x] -   Formatação e Convenções
                -   [x] -   Explicação do código
                -   [x] -   Banco de Dados
                -   [ ] -   Coleção Postman (Rotas Servidor)
        -   [ ] -   Frontend
                -   [ ] -   Formatação e Convenções
                -   [ ] -   Explicação do código
-   [ ] -   Design
        -   [x] -   Escolha de paleta de cores
        -   [x] -   Escolha de fontes
        -   [x] -   Desing UI/UX
-   [ ] -   Implementação
        -   [x] -   Criação base para o backend (instalar dependências, configurar tsconfig, etc)
        -   [x] -   Criação do modelo do banco de dados
        -   [x] -   Criação do banco de dados
        -   [x] -   Conectar db a API
        -   [ ] -   Criação de rotas
        -   [ ] -   Criar componentes necessários

## Requisitos

Esta seção mostra as funcionalidades que o site precisa ter.

### Requisitos Funcionais

-   [rf1] - Cadastro de usuários;
-   [rf2] - Login de usuários;
-   [rf3] - Postagens, que podem conter textos, fotos, vídeos e/ou áudios;
-   [rf4] - Comentar e curtir em postagens ou outros comentários;
-   [rf5] - Personalização do perfil, com banner e foto;
-   [rf6] - Poder seguir outros usuários;
-   [rf7] - Modo claro e escuro;
-   [rf8] - Chat;
-   [rf9] - Poder deletar suas próprias postagens e perfil;
-   [rf10] - Administradores poderem deletar postagens e perfil;
-   [rf11] - Login com o Google;
-   [rf12] - Contas poderem ser privadas;
-   [rf13] - Postagens poderem bloquear comentários

### Requisitos Não Funcionais

-   [rnf1] - Responsividade. Funcionar independente do sistema operacional, tamanho de tela ou navegador;
-   [rnf2] - Pouco requisito de processamento;
-   [rnf3] - Pouco requisito de espaço;
-   [rnf4] - Pouco requisito de internet. Carregamento rápido;
-   [rnf5] - Ambiente seguro para o usuário;
-   [rnf6] - Interface fácil de manipular;
-   [rnf7] - Interface acessível;
-   [rnf8] - Disponibilidade alta; e
-   [rnf9] - Código limpo e reutilizável.

## Objetivos

O objetivo é criar uma rede social para desenvolver as habilidades em React, Node e TypeScript.

## Linguagens, bibliotecas e frameworks usados

-   HTML
-   CSS
-   JavaScript e TypeScript:
    -   Frontend:
        -   React
        -   Radix
        -   Vite
        -   React Router Dom
        -   Toaster
        -   Google Icons
    -   Backend:
        -   Node
        -   Express
        -   dotenv
        -   mysql2
        -   nodemon
        -   multer
        -   cors
-   MySQL

## Explicação do Código

Para ver a explicação do Frontend e do Backend, veja o arquivo README.md em cada um deles.
-       README.md - Documentação.
-       LICENSE - Licença do MIT
-       .prettierrc - Arquivo com configurações de estilo na IDE, para o código manter o mesmo padrão de espaçamento.
-       .gitignore - Arquivo que faz com que arquivos não necessários não sejam enviados ao Github.
-       casos-de-uso.png - Caso de uso.

## Design

### Paleta de Cores

-   #05A63A - Verde Escuro
-   #05A63A - Verde Escuro (60% de opacidade)
-   #A1F7A1 - Verde Claro
-   #9C726D - Marrom
-   #F3F3F3 - Branco

### Protótipo do Figma

[Protótipo Capivárias](https://www.figma.com/design/zIXzGiK1hOajPYg1ZHgwvv/Capivarias?node-id=0-1&t=WYirm8OJps1h4PBQ-1)

### Fontes

-   Inter

## Imagens
