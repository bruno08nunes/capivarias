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
1.  [Coleção Postman (rotas do servidor)](#coleção-postman-rotas-servidor)

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

## Coleção Postman (Rotas Servidor)