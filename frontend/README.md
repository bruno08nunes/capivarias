# Documentação Componentes, Hooks, Contexts, Utilities, entre outros

## Sumário

1.  [Sumário](#sumário)
1.  [Componentes](#componentes)
    1.  [layout](#layout)
        1. [IconLabeledLink](#iconlabeledlink)
        1. [Sidebar](#sidebar)
    1.  [routes](#routes)

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

#### Button

Botão padrão com estilização própria.

Pode receber como parâmetro children, classname e outras props.

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