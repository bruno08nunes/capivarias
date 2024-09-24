# Documentação API

## Formatação e Convenções

O código da API deve seguir as convenções abaixo:
-   Uso de TypeScript
-   Evitar o uso de variáveis do tipo any ou similar
-   Identificadores de variáveis em inglês, separadas por camelCase e com nomes coerentes
-   Variáveis declaradas com `let` e `const`

## Explicação do Código

Essa parte terá a descrição de pastas e arquivos.

### README.md

Documentação.

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

### .env.example

Contém as variáveis de ambiente. É necessário colocar as informações que estão ali, porém com os valores adequados em um arquivo .env.

### src

Contém os arquivos TS para o funcionamento do servidor.
-   db_config.ts - Configuração com o banco de dados
-   server.ts - Servidor e rotas

### dist

Pasta com os arquivos compilados de TS para JS, para poderem ser interpretados pelo Node.

## Banco de Dados

## Coleção Postman (Rotas Servidor)