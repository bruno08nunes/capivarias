# Documentação Componentes, Hooks, Contexts, Utilities, entre outros

## Sumário

1.  [Componentes](#componentes)
    1.  [layout](#layout)
        1. [IconLabeledLink](#iconlabeledlink)
    1.  [sidebar](#sidebar)

## Componentes

Os componentes react podem também receber CSS próprios feitos com Módulos CSS.

### Layout

Essa pasta contem os componententes de layout da aplicação, que podem ser replicados em diversos lugares.

#### IconLabeledLink

Esse componente é um link que contém um icone do Google Icon.

Recebe como parâmetros:
*   Icon - Um objeto com as propriedades:
    *   name - Nome do ícone na biblioteca
    *   label - Nome que aparece ao lado do ícone (opcional)
    *   size - Tamanho do ícone (opcional)

### sidebar

Componentes relacionados exclusivamente a sidebar da aplicação.

#### Sidebar

Não recebe nenhum parâmetro e se posiciona na área esquerda da tela com position fixed.