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

## 🌿 Executando os Testes

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
├── cypress/
│   ├── e2e/                # Arquivos de testes
│   ├── fixtures/           # Dados simulados
│   ├── support/            # Comandos customizados e configurações
│   ├── screenshots/        # Capturas de tela dos testes
│   ├── videos/             # Gravações das execuções dos testes
├── cypress.config.js       # Configuração do Cypress
├── package.json            # Dependências do projeto
└── README.md               # Documentação do projeto
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

## ✨ Dicas Extras

- Caso tenha problemas com caminhos de arquivos, tente rodar:
  ```bash
  npx cypress cache clear
  ```
- Se os testes não encontrarem os elementos corretos, utilize `cy.wait(ms)` para aguardar carregamentos assíncronos.

## 🎉 Contribuindo

1. Faça um **fork** do repositório
2. Crie uma **branch** para sua modificação (`git checkout -b feature-nova`)
3. Faça **commit** das suas alterações (`git commit -m 'Adicionando nova feature'`)
4. Faça **push** da sua branch (`git push origin feature-nova`)
5. Abra um **Pull Request**

---
**Desenvolvido por Felipe Almeida Muginsk** 🚀

