# Documentação Componentes, Hooks, Contexts, Utilities, entre outros

## Sumário

1.  [Sumário](#sumário)
1.  [Formatação e Convenções](#formatação-e-convenções)
1.  [Componentes](#componentes)
    1.  [layout](#layout)
        1. [Icon](#icon)
        1. [IconButton](#iconbutton)
        1. [Sidebar](#sidebar)
        1. [Header](#header)
        1. [UserHeader](#userheader)
        1. [Form](#form)
            1. [Button](#button)
            1. [Form](#form-1)
            1. [Input](#input)
            1. [PasswordInput](#passwordinput)
    1.  [routes](#routes)
    1.  [posts](#posts)
        1. [Post](#post)
        1. [NewPostForm](#newpostform)
        1. [NewPost](#newpost)
        1. [ProfilePicture](#profilepicture)
        1. [Recording](#recording)
        1. [CommentModal](#commentmodal)
        1. [AmazingButton](#amazingbutton)
1.  [Hooks](#hooks)
    1.  [useAuthRedirect](#useauthredirect)
    1.  [useUserContext](#useusercontext)
    1.  [useUser](#useuser)
    1.  [useFormProps](#useformprops)
    1.  [usePosts](#usePosts)
    1.  [usePost](#usePost)
    1.  [useComments](#useComments)
1.  [Contexts](#contexts)
    1.  [UserContext](#usercontext)
1.  [Utilities](#utilities)
    1.  [getUserLoggedIn](#getuserloggedin)
    1.  [fetchUserData](#fetchuserdata)
    1.  [formatFullDate](#formatfulldate)
    1.  [fetchAmazing](#fetchamazing)
    1.  [fetchPosts](#fetchposts)
    1.  [fetchPost](#fetchpost)
    1.  [fetchComments](#fetchComments)

## Formatação e Convenções

O código do frontend deve seguir as convenções abaixo:

-   Separação de componentes, utilities, contexts e hooks em pastas que façam sentido;
-   Uso de PascalCase para a nomeação dos componentes e camelCase para utilities e hooks;
-   Uso de componentes funcionais;
-   Identação seguindo 2 espaços;
-   Nome de variáveis, estados, componentes e hooks coerentes e em inglês;
-   Nome de hooks iniciando com o prefixo use; e
-   Nome de funções ativadas em eventos iniciando com handle.

## Componentes

Os componentes react podem também receber CSS próprios feitos com Módulos CSS.

### Layout

Essa pasta contem os componententes de layout da aplicação, que podem ser replicados em diversos lugares.

#### Icon

Esse componente contém um ícone do Google Icons.

Recebe como parâmetro:

-   iconName - Nome do ícone na biblioteca Google Icon
-   iconSize - Tamanho do ícone

#### IconButton

Esse componente é um botão que contém um icone do Google Icon.

Recebe como parâmetros:

-   iconName - Nome do ícone na biblioteca
-   iconLabel - Nome que aparece ao lado do ícone (opcional)
-   iconSize - Tamanho do ícone (opcional)
-   asChild - Valor booleano que indica que o filho passado será usado como componente ao invés de como filho (Slot da biblioteca Radix)
-   props - Outras props que serão passadas ao elemento

#### sidebar

Sidebar principal da aplicação.

Não recebe nenhum parâmetro e se posiciona na área esquerda da tela com position fixed.

#### Header

Cabeçalho da página de Login e Register.

Não recebe parâmetros

#### UserHeader

Parte que mostra as informações do usuário na página de conta.

Recebe como parâmetro um ID de usuário

#### form

Pasta com os componentes de layout de formulário

##### Button

Botão padrão com estilização própria.

Pode receber como parâmetro:

-   children,
-   asChild - Define se será usado como botão ou outro componente. Visto no Slot da biblioteca Radix-UI
-   classname,
-   Outras props.

##### Form

Formulário com estilizações.

Recebe os parâmetros children e handleSubmit

##### Input

Input que pode vir junto com uma label opcional.

Pode receber o texto da label, className e outras props de input.

##### PasswordInput

Input de senha, que vem junto com um botão para alterar o tipo para texto.

Recebe como parâmetro os atributos do componente Input

### routes

Contém as rotas da aplicação.

#### MainLayout

Layout principal, usado para todas as rotas menos para Login e Register

#### Home

Página principal, que mostra os posts.

#### Account

Página da conta do usuário. A rota recebe o id de um usuário.

#### AccountAmazings

Página da conta do usuário, mostrando as curtidas. A rota recebe o id de um usuário.

#### AccountAnswers

Página da conta do usuário, mostrando as respostas. A rota recebe o id de um usuário.

#### NotificationPage

Página de notificações do usuário. A rota recebe o id de um usuário.

#### SettingsPage

Página de configurações do usuário. A rota recebe o id de um usuário.

#### SearchPage

Página de pesquisa.

#### Login

Página de formulário de Login

#### Register

Página de formulário de cadastro

#### ErrorPage

Página de Erro

#### PostPage

Página de um post em específico, juntamente com seus comentários.

### posts

Componentes ligados aos posts

#### Post

Post principal

Recebe como parâmetro:

-   post - Um objeto contendo as informações da postagem
-   setCurrentPost - Uma função que altera o post que aparecerá no modal de comentários (CommentModal).

#### NewPostForm

Seção de criar um novo post

#### NewPost

Informações bases para um novo post, usado para post e comentários

#### ProfilePicture

Foto de perfil do usuário

Recebe como parâmetro o src e o alt da imagem.

#### Recording

Exibe o tempo de gravação do áudio

Recebe como parâmetro o tempo de gravação.

#### CommentModal

Modal de Comentário de posts que funciona usando a biblioteca Radix-UI.

Recebe os parâmetros:

-   post - Objeto com as informações da postagem necessários.

### AmazingButton

Botão de curtir um post/comentário.

Recebe como parâmetro:

-   isFavorited - Se está favoritado no momento
-   handleFavorite - Função ativada ao clicar no botão

## Hooks

### useAuthRedirect

Recebe o id de um usuário. Caso seja passado um valor nulo, redireciona para a página de cadastro (Register.jsx)

### useUserContext

Retorna o valor do contexto UserContext. Caso nesse valor tenha apenas o id do usuário, faz uma requisição ao servidor para pegar os dados restantes.

### useUser

Faz uma requisição ao servidor pegando o usuário com o id passado. Não está relacionado com o UserContext.

Recebe um id como parâmetro.

### useFormProps

Gera props para um input

Recebe:

-   O valor que recebera o name e o id
-   Valor inicial do input (opcional)

Retorna:

-   InputProps - Objeto com as propriedades:
    -   value - Contém o estado com o valor atual do input
    -   onInput - Faz com que altere o valor a cada digitação
    -   id - Id do input
    -   name - name do input, com o mesmo valor do id

### usePosts

Faz uma requisição ao servidor, retornando um estado com os posts e com o setter deles.

Recebe o:

-   ID do Usuário Logado - Serve para verificar curtidas; e
-   ID de Usuário Dono das Postangens - Opcional

### usePost

Faz uma requisição ao servidor, retornando um estado com o post e com seu setter.

Recebe o:

-   ID do Post.

### useComments

Faz uma requisição ao servidor, retornando um estado com os comentários e seus setters.

Recebe o:

-   ID do Post; e
-   ID do Usuário Logado - Serve para verificar curtidas.

## Contexts

### UserContext

Contém:

-   user - Objeto do usuário com as propriedades:
    -   id - ID do usuário pego na máquina do usuário
    -   name - Nome do usuário
-   setUser

## Utilities

### getUserLoggedIn

Pega o id do usuário logado. Por enquanto, acessa o localStorage.

### fetchUserData

Faz requisição ao servidor buscando dados do usuário.

Recebe um id numérico como parâmetro.

### fetchPosts

Faz uma requisição ao servidor, retornando os posts.

Recebe o:

-   ID do Usuário Logado - Serve para verificar curtidas; e
-   ID de Usuário Dono das Postangens - Opcional

### fetchPost

Faz uma requisição ao servidor, retornando o post com o id especificado.

Recebe o:

-   ID do Post;

### fetchComments

FAz uma requisição ao servidor, retornando os comentários de um post.

Recebe o:

-   Id do Post; e
-   ID do Usuário Logado - Serve para verificar curtidas.

### fetchAmazing

Faz uma requisição ao servidor enviando um amazing ou deletando um amazing.

Recebe:

-   data - Objeto com as informações necessárias. Contém:
    -   user - ID do usuário
    -   post - ID do post
-   method - Método HTTP usado. Deve ser POST ou DELETE.

### formatFullDate

Recebe uma data, tanto o objeto quanto uma string, e retorna ela formatada no formato dd/mm/yyyy.

Recebe como parâmetro uma data em formato de objeto Date ou string.

Também possui uma função formatDate, que recebe um número que, caso tenha apenas um caractere, coloca um 0 no início.

Também possui uma função countTime, que recebe uma data e faz uma contagem de quanto tempo passou dela até os dias atuais.
