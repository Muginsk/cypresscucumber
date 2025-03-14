import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Estou na pagina de login", () => {
  cy.visit("https://www.saucedemo.com/v1/"); // Ajuste a URL conforme necessário
});

When("Eu insiro o usuário e a senha", () => {
  cy.get('[data-test="username"]').type('standard_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('#login-button').click()
});

Then("Eu vejo a mensagem de login realizado com suceso", () => {
  cy.url().should('include', '/inventory.html')
    cy.get('.product_label').should('be.visible').and('contain.text', 'Products')
});
