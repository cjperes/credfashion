# Credfashion Integração

Fala Caio, tudo certo? Como havia comentado, utilizei novos conceitos de Javascript para desenvolver todo o comportamento, as requisições e trocas de componentes sem precisar recarregar a página.

## Estrutura de Pastas

### ./ (root)

- `.editorconifg`: Arquivo para padronizar a formtação do código entre outras pessoas que possam dar manutenção no código se necessário.

- `eslintrc.json`: Arquivo de configuração do Linter, onde está estabelecido as regras que foram usadas para manter o código padronizado.

- `bs-config.json`: Configuração do servidor local de desenvolvimento.

- `package.json`: Arquivos para gerenciar as dependencias e configurações do projeto.

### src/
O código desenvolvido está todo na pasta `/src`.

- `./services/cardHttp.js`: Arquivo responsável pela requisição HTTP no serviço do cliente.

- `./template/Template.js`: Arquivo responsável por conter os componentes que serão trocados para exibir os pontos e também inserir os valores (nome e saldo).

- `./index.js`: Arquivo que carrega a aplicação, bem como que possui a lógica, associação de eventos e HTML elements

### public/
Os arquivos nesta pasta são os arquivos que devem ir para o servidor que será hospedado. Lembrando que se for adicionado uma nova estrutura de pastas, suas respectivas referências deverão ser corrigidas para que tudo continue funcionando.

## Recompilando
O arquivo `bundle.js` é o que contém toda a lógica e chamada dos métodos. Ele está minificado e ofuscado.

Caso seja necessário recompila-lo no futuro, tenha o NodeJS versão 8 instalado no seu computador, vá pelo terminal na pasta do projeto (root) e digite:

```sh
npm install
```

Após as dependencias terem sido instaladas, rode o comando:

```sh
npm run compile
```

Então, um novo arquivo será gerado.

