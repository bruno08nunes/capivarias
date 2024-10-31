# Documentação Componentes, Hooks, Contexts, Utilities, entre outros

## Sumário

1.  [Sumário](#sumário)
1.  [Componentes](#componentes)
    1.  [layout](#layout)
        1. [IconButton](#iconbutton)
        1. [Sidebar](#sidebar)
        1. [Header](#header)
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
1.  [Hooks](#hooks)
    1.  [useAuthRedirect](#useauthredirect)
    1.  [useUser](#useuser)
1.  [Contexts](#contexts)
    1.  [UserContext](#usercontext)
1.  [Utilities](#utilities)
    1.  [getUserLoggedIn](#getuserloggedin)

## Componentes

Os componentes react podem também receber CSS próprios feitos com Módulos CSS.

### Layout

Essa pasta contem os componententes de layout da aplicação, que podem ser replicados em diversos lugares.

#### IconButton

Esse componente é um link que contém um icone do Google Icon.

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

#### form

Pasta com os componentes de layout de formulário

##### Button

Botão padrão com estilização própria.

Pode receber como parâmetro children, classname e outras props.

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

### posts

Componentes ligados aos posts

#### Post

Post principal

Recebe como parâmetro um id

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

Modal de Comentário de posts.

## Hooks

### useAuthRedirect

Recebe o id de um usuário. Caso seja passado um valor nulo, redireciona para a página de cadastro (Register.jsx)

### useUser

Retorna o valor do contexto UserContext. Caso nesse valor tenha apenas o id do usuário, faz uma requisição ao servidor para pegar os dados restantes.

### useFormProps

Gera props para um input

Recebe:
*   O valor que recebera o name e o id
*   Valor inicial do input (opcional)

Retorna:
*   InputProps - Objeto com as propriedades:
    *   value - Contém o estado com o valor atual do input
    *   onInput - Faz com que altere o valor a cada digitação
    *   id - Id do input
    *   name - name do input, com o mesmo valor do id

## Contexts

### UserContext

Contém:
*   user - Objeto do usuário com as propriedades:
    *   id - ID do usuário pego pelo localStorage
    *   name - Nome do usuário
*   setUser

## Utilities

### getUserLoggedIn

Pega o id do usuário. Por enquanto, acessa o localStorage.