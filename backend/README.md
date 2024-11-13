# Documentação API

## Sumário

1.  [Sumário](#sumário)
1.  [Formatação e Convenções](#formatação-e-convenções)
1.  [Explicação do Código](#explicação-do-código)
    1.  [README.md](#readmemd)
    1.  [node_modules](#node_modules)
    1.  [package.json](#packagejson)
    1.  [package-lock.json](#package-lockjson)
    1.  [tsconfig.json](#tsconfigjson)
    1.  [db.sql](#dbsql)
    1.  [modelo-capivarias-db.mwb](#modelo-capivarias-dbmwb)
    1.  [.env.example](#envexample)
    1.  [src](#src)
        1.  [server.ts](#serverts)
        1.  [db_config.ts](#db_configts)
        1.  [multer.ts](#multerts)
        1.  [public](#public)
        1.  [routes](#routes)
        1.  [controllers](#controllers)
        1.  [validations](#validations)
    1.  [dist](#dist)
1.  [Banco de Dados](#banco-de-dados)
    1.  [Entidades](#entidades)
1.  [Coleção Postman (rotas do servidor)](#coleção-postman-rotas-servidor)
    1.  [Users](#users)
        1.  [Cadastro (Register)](#cadastro-register)
        1.  [Login](#login)
        1.  [Informações](#informações)
        1.  [Listar Posts](#listar-posts)
    1.  [Posts](#posts)
        1.  [Criação](#criação)
        1.  [Informações](#informações-1)
        1.  [Listar](#listar)
        1.  [Enviar Mídia](#enviar-mídia)
        1.  [Resgatar Mídia](#resgatar-mídias)
    1.  [Amazings](#amazings)
        1.  [Criação](#criação-1)
        1.  [Remoção](#remoção)
        1.  [Criação em Comentário](#criação-em-comentário)
        1.  [Remoção em Comentário](#remoção-em-comentário)

## Formatação e Convenções

O código da API deve seguir as convenções abaixo:
-   Uso de TypeScript
-   Evitar o uso de variáveis do tipo any ou similar
-   Identificadores de variáveis em inglês, separadas por camelCase e com nomes coerentes
-   Variáveis declaradas com `let` e `const`

## Explicação do Código

Essa parte terá a descrição de pastas e arquivos.

### README.md

Documentação do backend.

### node_modules

Deve ser instalado com NPM utilizando o comando:

```
npm i
```

Esse comando pega todas as informações no arquivo package.json e package-lock.json.

Contém os códigos das dependências necessárias.

### package.json

Esse arquivo contém as informações necessárias para o funcionamento do NodeJS e as dependências que devem ser instaladas com NPM. Nunca alterá-lo diretamente.

### package-lock.json

Contém, em ordem, os arquivos no node_modules, para evitar erros. Nunca alterá-lo diretamente.

### tsconfig.json

Contém as informações do funcionamento do TypeScript.

### db.sql

Contém o código SQL que gera as entidades necessárias no banco de dados MySQL.

### modelo-capivarias-db.mwb

Contém o modelo do banco de dados.

### .env.example

Contém as variáveis de ambiente. É necessário colocar as informações que estão ali, porém com os valores adequados em um arquivo .env.

### src

Contém os arquivos TS de desenvolvimento para o funcionamento do servidor.

#### server.ts

Inicia o servidor e as rotas.

#### db_config.ts

Faz a configuração com o banco de dados MySQL atráves do arquivo .env. Utliza a biblioteca MySQL2.

#### multer.ts

Configura o armazenamento de imagens no servidor através da biblioteca multer

#### public

Pasta com as imagens salvas no servidor através da biblioteca multer

#### routes

Pasta que contém o caminho das rotas e os middlewares aplicados a elas. Elas serão melhor explicadas na parte de Coleção Postman

#### controllers

Funções chamadas pelas rotas que lidam com o banco de dados. Elas serão melhor explicadas na parte de Coleção Postman

#### validations

Utiliza a biblioteca express-validator para validação dos dados passados nas rotas. Eles serão melhor explicados na parte de Coleção Postman

### dist

Pasta com os arquivos compilados de TS para JS, para poderem ser interpretados pelo Node.

## Banco de Dados

Essa parte conterá a descrição do banco de dados e suas entidades.

### Entidades

users - Usuários da aplicação. Contém os atributos:
-   id - Valor inteiro adicionado automaticamente para identificação única no banco;
-   username - Nome de usuário até 50 caracteres;
-   capy_code - Valor público de identificação única de usuário. Até 30 caracteres. É um index do banco de dados;
-   email - Email do usuário. É um index do banco de dados;
-   password - Senha do usuário;
-   birthday - Data de nascimento do usuário. Em formato date;
-   bio - Biografia do usuário até 220 caracteres. Opcional;
-   profile_picture - Nome da foto de perfil do usuário no servidor. Opcional;
-   role - Cargo do usuário. Aceita os valores "A" para administarado e "U" para usuário comum. "U" é o valor padrão;
-   is_private - Indica se a conta do usuário é privada ou não. False é o valor padrão;
-   is_active - Indica se a conta do usuário está ativa ou não. False é o valor padrão;
-   created_at - Mostra a data de criação da conta do usuário. O tempo atual é o valor padrão; e
-   updated_at - Mostra a data de última alteração da conta do usuário. O tempo atual é o valor padrão.

posts - Postagem de usuários. Contém os atributos:
-   id - Valor inteiro adicionado automaticamente para identificação única no banco;
-   content - Conteúdo de texto da postagem. Até 220 caracteres. Opcional;
-   user_id - Id do usuário que realizou a postagem. É um index;
-   is_private - Indica se a postagem está privada. False é o valor padrão;
-   created_at - Mostra a data de criação da postagem do usuário. O tempo atual é o valor padrão; e
-   updated_at - Mostra a data de última alteração da postagem do usuário. O tempo atual é o valor padrão.

posts_medias - Imagens, vídeos, PDFs e áudios das postagens. Contém os atributos:
-   id - Valor inteiro adicionado automaticamente para identificação única no banco;
-   post_id - Id do post relacionado com ele. É um index; e
-   url - Nome do arquivo no servidor. Gerado automaticamente pelo servidor (multer).

amazings - Likes dos posts. Contém os atributos:
-   user_id - Chave primária que faz referência ao usuário;
-   post_id - Chave primária que faz referência ao post; e
-   created_at - Quando o post foi curtido. Tem o valor padrão do tempo atual.

comments - Comentários dos posts. Contém os atributos:
-   id - Valor inteiro adicionado automaticamente para identificação única no banco;
-   user_id - Usuário que fez o comentário;
-   post_id - Post no qual o comentário foi feito. É um index;
-   content - Conteúdo do comentário;
-   created_at - Mostra a data de criação do comentário. O tempo atual é o valor padrão; e
-   updated_at - Mostra a data de última alteração do comentário. O tempo atual é o valor padrão.

amazings_comments - Likes dos comentários. Contém os atributos:
-   user_id - Chave primária que faz referência ao usuário;
-   comment_id - Chave primária que faz referência ao comentário; e
-   created_at - Quando o post foi curtido. Tem o valor padrão do tempo atual.

follows - Tabela de relação entre usuários. Contém os atributos:
-   follower - ID do usuário que está seguindo. É uma chave primária;
-   following - ID do usuário que está sendo seguido. É uma chave primária; e
-   created_at - Data de seguimento entre os usuários.

## Coleção Postman (Rotas Servidor)

Essa parte conterá a descrição das rotas do servidor e seus controllers.

### users

Essas rotas estão relacionadas com os usuários da aplicação.

#### Cadastro (register)

Informações:
-   Caminho: /users/register
-   Método: POST
-   Validação - validationRegister. Acontece por meio da biblioteca express-validator. Deve ter:
    -   username - De 3 a 50 caracteres;
    -   capyCode - De 5 a 30 caracteres;
    -   email - Ser um email válido;
    -   password - De 8 a 25 caracteres; e
    -   birthday - Ser uma data no formato "YYYY-MM-DD" e ter acontecido a 2 anos ou mais.
-   body:
    -   username - Nome do usuário. Ex: "Bruno";
    -   capyCode - Código de identificação único e público. Ex: "bruno123";
    -   email - Email. Ex: "bruno@email.com";
    -   password - Senha. Ex: "admin123"; e
    -   birthday - Data de aniversário. Ex: "1989/12/25".

#### Login

Informações:
-   Caminho: /users/login
-   Método: POST
-   Validação - validationLogin. Acontece por meio da biblioteca express-validator. Deve ter:
    -   email - Ser um email válido; e
    -   password - De 8 a 25 caracteres.
-   body:
    -   email - Email. Ex: "bruno@email.com"; e
    -   password - Senha: "admin123".

#### Informações

Informações:
-   Caminho: /users/data/:id
-   Método: GET
-   Parâmetro: ID de usuário no banco de dados ou o capy_code
-   Retorno: Informações do usuário

#### Listar Posts

Informações:
-   Caminho: /users/posts/:user
-   Método: GET
-   Parâmetro: ID de usuário no banco de dados ou o capy_code
-   Retorno: Uma lista de posts

### posts

Essas rotas estão relacionadas com os posts da aplicação.

#### Criação

Informações:
-   Caminho: /posts/post
-   Método: POST
-   Validação - validationPost. Acontece por meio da biblioteca express-validator. Deve ter:
    -   user_id - Numérico;
    -   content - Até 220 caracteres; e
    -   is_private - Booleano.
-   body:
    -   user_id - ID do usuário que serve como chave estrangeira. Ex: 1;
    -   content - Conteúdo textual do post. Ex: "Texto de exemplo"; e
    -   is_private - Indica se o post é privado ou não. Ex: false.

#### Informações

Informações:
-   Caminho: /posts/data/:id
-   Método: GET
-   Parâmetro: ID de post no banco de dados
-   Retorno: Informações do post

#### Listar

Informações:
-   Caminho: /posts/all/
-   Método: GET
-   Retorno: Uma lista de posts

#### Enviar Mídia

Informações:
-   Caminho: /posts/media/post
-   Método: POST
-   Middleware: uploadPost - Para o armazenamento de arquivos no servidor
-   body:
    -   post - ID de um post no banco de dados. Ex: 1
    -   files - Array contendo arquivos (imagens, vídeos, áudios e PDFs)

#### Resgatar Mídias

Informações:
-   Caminho: /posts/media/get/:post
-   Método: GET
-   Parâmetro: ID do post no banco de dados
-   Retorno: Lista de URLs das mídias do arquivo

### amazings

Essas rotas estão relacionadas com os amazings da aplicação.

#### Criação

Informações:
-   Caminho: /post/amazing
-   Método: POST
-   body:
    -   post_id - ID do post que serve como chave estrangeira. Ex: 1; e
    -   user_id - ID do usuário que serve como chave estrangeira. Ex: 1.

#### Remoção

Informações:
-   Caminho: /post/amazing
-   Método: DELETE
-   body:
    -   post_id - ID do post que serve como chave estrangeira. Ex: 1; e
    -   user_id - ID do usuário que serve como chave estrangeira. Ex: 1.

#### Criação em Comentário

Informações:
-   Caminho: /post/comments/amazing
-   Método: POST
-   body:
    -   post_id - ID do post que serve como chave estrangeira. Ex: 1; e
    -   user_id - ID do usuário que serve como chave estrangeira. Ex: 1.

#### Remoção em Comentário

Informações:
-   Caminho: /post/comments/amazing
-   Método: DELETE
-   body:
    -   post_id - ID do post que serve como chave estrangeira. Ex: 1; e
    -   user_id - ID do usuário que serve como chave estrangeira. Ex: 1.