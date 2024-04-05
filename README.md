# Projeto HEROKU-WEB-CYPRESS

Projeto Automação WEB utilizando o frameWork Cypress com o objetivo de validar a pagina: https://the-internet.herokuapp.com/challenging_dom completando o desafio de trabalhar com clicks em cima dos componentes da tela.git

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **[Implantação](https://github.com/PetersonPetravicius/web-heroku-cypress)** para saber como implantar o projeto.

### 📋 Pré-requisitos


+ [NodeJS v20.12.1 ++](https://nodejs.org/en/download) 

+ [GitBash 2.44.0 ++](https://git-scm.com/downloads)

+ IDE [VScode](https://code.visualstudio.com/download)

```

Realizar a instalação dos programas antes de dar inicio ao clone do projeto.

```

### 🔧 Instalação

Ao atender os pré-requisitos, é necesario configurar o [gitBash](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Configura%C3%A7%C3%A3o-Inicial-do-Git).

```

Seguir o artigo de configuração GITBASH.

```

Feito isto, você está apto a realizar o [Clone](https://www.dio.me/articles/comando-git-conheca-o-git-clone-como-nunca) do projeto

```

Seguir o artigo detalhado para realizar o Clone deste projeto em sua maquina local.

```

🏆Se chegou até aqui, então o projeto ja está disponivel para analise e execução dos testes no seu local.🏆 

## ⚙️ Executando os testes

Para execução dos testes devemos executar no terminal do VS Code ou gitbash a inicialização do node e a instalação do Cypress
```

Passo 01: No terminal VS Code ou GitBash (na pasta principal do projeto) rodar o comando
'npm init --yes'
Passo 02: Após execução do comando PASSO 01, envie o comando 'npm install -D cypress' para a versão mais atual do cypress OU
'npm install -D cypress@12.5.0' para instalar uma versão expecifica.

Passo 03: para abrir a versão desktop do cypress que roda os testes WEB, realizar o comando no terminal: 'npx cypress open'
OU para rodar os testes sem abrir a ferramenta desktop, executar o comando 'npx cypress run'

Os Cenários de testes executaveis estão disponíveis em e2e>appTest.cy.js

```

### 🔩 Analise os testes de ponta a ponta

Ao fim da execução dos testes, um pequeno report com o resumo das execuções será exibido na guia "Terminal" quando executado 'npx cypress run'.

```

DevTools listening on ws://127.0.0.1:53425/devtools/browser/dec3cc86-0704-4ea0-b376-b84838891b4c

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        12.17.4                                                                        │
  │ Browser:        Electron 106 (headless)                                                        │
  │ Node Version:   v16.13.1 (C:\Program Files\nodejs\node.exe)                                    │
  │ Specs:          2 found (appTest.cy.js, finances.cy.js)                                        │
  │ Searched:       cypress/e2e/**/*.cy.{js,jsx,ts,tsx}                                            │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────

  Running:  appTest.cy.js                                                                   (1 of 2)


  Botões dinamicos coloridos
    - Deve clicar em todos botões
    - Deve clicar apenas no primeiro botão
    - Deve clicar apenas no segundo botão
    - Deve clicar apenas no terceiro botão

  Coluna Action
    √ Deve clicar em todos botões edit e delete da Coluna Action (4099ms)
    √ Deve clicar apenas no botões edit e delete da 1º linha da Coluna Action (1296ms)
    √ Deve clicar apenas no botões edit e delete da 5º linha da Coluna Action (497ms)
    √ Deve clicar apenas no botões edit e delete da 10º linha da Coluna Action (481ms)


  4 passing (9s)
  4 pending


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        8                                                                                │
  │ Passing:      4                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      4                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     9 seconds                                                                        │
  │ Spec Ran:     appTest.cy.js                                                                    │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started compressing: Compressing to 32 CRF
  -  Finished compressing: 1 second

  -  Video output: C:\herokuappproject\cypress\videos\appTest.cy.js.mp4

```

## 📦 Implantação

A implantação deste projeto, pode ser realizada utilizando a ferramenta [Jenkins](https://digital.ai/pt/catalyst-blog/how-to-launch-jenkins-selenium-tests-using-the-pipeline/), tornando-o capaz de ser executado a cada nova 
subida de codigo ao repositorio e execução de pipeline.

## 🛠️ Construído com

Neste projeto as ferramentas adotadas foram:

[IDE VScode](https://visualstudio.microsoft.com/pt-br/vs/getting-started/)

[JScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

[Cypress](https://docs.cypress.io/guides/overview/why-cypress)


## 📌 Versão

O projeto se encontra em sua versão 1.1 

## ✒️ Autor

* **Peterson Petravicius** - *Analista de Qualidade* - [LinkedIn](https://www.linkedin.com/in/petersonpk/)


## 🎁 Expressões de gratidão

* Este projeto foi uma retomada de conhecimento sobre os conceitos basicos de automação WEB após receber um desafio de implementação 📢;
* Um brinde a minha nova equipe #MeuTudo 🍺;

---

```

console.log("Tchau");

```
😊