import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// 1️⃣ Acessar a página de login
Given("Estou na pagina de login", () => {
  cy.visit("https://www.saucedemo.com/v1/");
});

// 2️⃣ Inserir usuário e senha
When("Eu insiro o usuário e a senha", () => {
  cy.get('[data-test="username"]').type('standard_user');
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('#login-button').click();
});

// 3️⃣ Validar que o login foi realizado com sucesso
Then("Eu vejo a mensagem de login realizado com sucesso", () => {
  cy.url().should('include', '/inventory.html');
  cy.get('.product_label').should('be.visible').and('contain.text', 'Products');
});

// 4️⃣ Adicionar três produtos ao carrinho
When("Eu adiciono três produtos ao carrinho", () => {
  cy.get('.inventory_item').eq(0).find('button').click(); // Primeiro produto
  cy.get('.inventory_item').eq(1).find('button').click(); // Segundo produto
  cy.get('.inventory_item').eq(2).find('button').click(); // Terceiro produto
});

// 5️⃣ Validar que o carrinho tem três itens
Then("Eu vejo que o carrinho tem três itens", () => {
  cy.get('.shopping_cart_badge').should('have.text', '3');
});

// 6️⃣ Acessar o carrinho e validar os produtos escolhidos
When("Eu acesso o carrinho e valido os produtos escolhidos", () => {
  cy.get('.shopping_cart_link').click();
  cy.url().should('include', '/cart.html');
  cy.get('.cart_item').should('have.length', 3);
});

// 7️⃣ Avançar para o checkout e preencher as informações
When("Eu avanço para o checkout e preencho as informações", () => {
  cy.get('.checkout_button').should('be.visible').click();
  cy.url().should('include', '/checkout-step-one');
  cy.get('[data-test="firstName"]').type('Felipe');
  cy.get('[data-test="lastName"]').type('Muginsk');
  cy.get('[data-test="postalCode"]').type('12345-678');
  cy.get('.cart_button').click();
});

Then("sou redirecionado para a página de revisão do pedido", () => {
  cy.url().should('include', '/checkout-step-two');
  cy.get('.subheader').should('contain.text', 'Checkout: Overview');
});

When("confirmo a compra", () => {
  cy.get('.cart_button').click();
});

Then("vejo a mensagem de confirmação {string}", (message) => {
  cy.url().should('include', '/checkout-complete');
  cy.get('.complete-header').should('contain.text', message);
});