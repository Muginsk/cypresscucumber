# Cypress + Cucumber

Este repositório contém testes automatizados utilizando **Cypress** com **Cucumber** para escrita dos cenários de teste.

## 🔧 Instalação das Dependências

Para rodar os testes, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/Muginsk/cypresscucumber.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd cypresscucumber
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## ▶️ Executando os Testes

Para executar os testes, utilize um dos seguintes comandos:

- **Modo Interativo (UI do Cypress)**:
  ```bash
  npx cypress open
  ```
  Esse comando abre a interface do Cypress, onde você pode escolher e executar os testes manualmente.

- **Modo Headless (Terminal)**:
  ```bash
  npx cypress run
  ```
  Executa todos os testes em background sem abrir o navegador.

- **Executar um teste específico**:
  ```bash
  npx cypress run --spec "cypress/e2e/realizacompra.feature"
  ```
  Substitua `realizacompra.feature` pelo nome do arquivo de teste desejado.

- **Manter o navegador aberto após execução (para análise)**:
  ```bash
  npx cypress run --headed --no-exit
  ```

## 📝 Estrutura do Projeto

```
├── .github/workflows/       # Configurações do GitHub Actions
├── cypress/
│   ├── e2e/                # Arquivos de testes
│   ├── fixtures/           # Dados simulados
│   ├── support/            # Comandos customizados e configurações
│   ├── screenshots/        # Capturas de tela dos testes
│   ├── videos/             # Gravações das execuções dos testes
├── cypress.config.js       # Configuração do Cypress
├── package.json            # Dependências do projeto
├── .gitignore              # Arquivos ignorados pelo Git
├── README.md               # Documentação do projeto
└── .github/workflows/ci.yml # Pipeline de execução automática com GitHub Actions
```

## 📸 Capturas de Tela & Vídeos

O Cypress salva **screenshots e vídeos** automaticamente:

- **Falhas**: Uma screenshot é salva quando um teste falha.
- **Vídeos**: Cada execução dos testes em `cypress run` gera um vídeo no diretório `cypress/videos`.

**Acessando os arquivos:**
- Screenshots: `cypress/screenshots/`
- Vídeos: `cypress/videos/`

## 🌐 Relatórios de Testes

Para gerar relatórios formatados, siga os passos abaixo:

1. Execute os testes e gere os relatórios JSON:
   ```bash
   npx cypress run --reporter json --reporter-options "output=report.json"
   ```

2. Converta para um formato visual (ex: HTML):
   ```bash
   npx mochawesome-merge report.json > merged-report.json
   npx marge merged-report.json
   ```

O relatório será gerado na pasta `mochawesome-report/` e pode ser aberto no navegador.

## ⚙️ Integração com GitHub Actions

Este repositório possui uma pipeline de execução automatizada utilizando **GitHub Actions**. A cada novo commit na branch principal, os testes são executados automaticamente.

### Configuração do GitHub Actions

O workflow está localizado em `.github/workflows/ci.yml` e segue esta estrutura:

```yaml
name: Cypress Tests

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout do repositório
        uses: actions/checkout@v3

      - name: Instalar dependências
        run: npm install

      - name: Executar testes
        run: npx cypress run

      - name: Salvar screenshots e vídeos
        if: failure()
        uses: actions/upload-artifact@v3
        with:
          name: cypress-artifacts
          path: cypress/screenshots/
          retention-days: 5
```

### Acompanhando Execuções

Para visualizar os resultados das execuções:

1. Acesse o repositório no GitHub.
2. Clique em **Actions**.
3. Selecione o workflow desejado para ver logs e artefatos gerados (screenshots e vídeos de falhas).

## ✨ Dicas Extras

- Caso tenha problemas com caminhos de arquivos, tente rodar:
  ```bash
  npx cypress cache clear
  ```
- Se os testes não encontrarem os elementos corretos, utilize `cy.wait(ms)` para aguardar carregamentos assíncronos.

---

Com esse README, seu repositório está bem documentado, facilitando o entendimento e execução dos testes! 🚀

