# Desafio Ebytr

### A proposta do desafio:

A empresa Ebytr está passando por problemas de produtividade/controle porque as pessoas colaboradoras vêm tendo dificuldade na organização de suas tarefas individuais. Por esse motivo, a diretora de produto Carolina Bigonha decidiu implantar uma nova forma de organizar as tarefas.

Na Ebytr o time de desenvolvimento utiliza a Stack [MERN](https://www.mongodb.com/mern-stack) para criar suas aplicações. Foi combinado com a Ebytr que você utilizará essa mesma Stack para resolver o problema de organização e produtividade da empresa.
Abaixo estão (i) os requisitos técnicos e (ii) as funcionalidades.

### Requisitos técnicos:
1. Front-End em React;
2. Back-End em NodeJS, com MongoDB;
3. Arquitetura em camadas;

### Funcionalidades:
1. Visualizar a lista de tarefas;
    1. Esta lista deve ser ordenável por ordem alfabética, data de criação ou por status;
2. Inserir uma nova tarefa na lista;
3. Remover uma tarefa da lista;
4. Atualizar uma tarefa da lista;
5. A tarefa deve possuir um status editável: pendente, em andamento ou pronto;

# Instalação
Os passoas a seguir serão para executar a aplicação localmente.

## Pré-requisitos:
- possuir o navegador [Google Chrome](https://www.google.pt/intl/pt-PT/chrome/?brand=ISCS&gclid=Cj0KCQjwrJOMBhCZARIsAGEd4VGeicYR42WOZ4QYeXa4A1rAGLHXwktc-Bz_z9EdotYVheTfNY6axdwaAueTEALw_wcB&gclsrc=aw.ds) instalado.
- possuir o git instalado.
- possuir o pacote [node](https://nodejs.org/en/) instalado.
- possuir o pacote MongoDB Community Edition([MacOs](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)/[Linux](https://docs.mongodb.com/manual/administration/install-on-linux/)) instalado.

## Clonando e instalando a aplicação:
1. Para clonar o projeto:
```sh
git clone git@github.com:GustavoMiyagawa/Ebytr.git
```
2. Instalar as dependências do Front-End
```sh
cd front-end
npm install
```
3. Para executar a aplicação:
```sh
npm start
```
4. Para instalar as dependências do Back-End
```sh
cd ../back-end
npm install
```
5. Para executar a aplicação Back-End
```sh
npm run dev
```