import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Estou na pagina de login", () => {
  cy.visit("https://www.saucedemo.com/");
  cy.get('[data-test="username"]').should("be.visible"); // Aguarda o campo de usuário estar visível
});

When("Eu insiro o usuário e a senha", () => {
  cy.get('[data-test="username"]').type('standard_user');
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('#login-button').should("be.visible").click(); // Garante que o botão esteja visível antes do clique
  cy.get('.title').should('be.visible'); // Aguarda a página de produtos carregar
});

Then("Eu vejo a mensagem de login realizado com sucesso", () => {
  cy.url().should('include', '/inventory.html');
  cy.get('.title').should('contain.text', 'Products');
});

When("Eu adiciono três produtos ao carrinho", () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should("be.visible").click();
  cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should("be.visible").click();
  cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').should("be.visible").click();
  cy.get('.shopping_cart_badge').should('contain', '3'); // Aguarda a atualização do carrinho
});

Then("Eu vejo que o carrinho tem três itens", () => {
  cy.get('.shopping_cart_badge').should('be.visible').and('contain', '3');
});

When("Eu acesso o carrinho e valido os produtos escolhidos", () => {
  cy.get('.shopping_cart_link').should("be.visible").click();
  cy.url().should('include', '/cart.html');
  
  cy.get('.cart_item').should('have.length', 3);
  cy.get('.inventory_item_name').eq(0).should('contain.text', 'Sauce Labs Backpack');
  cy.get('.inventory_item_name').eq(1).should('contain.text', 'Sauce Labs Bike Light');
  cy.get('.inventory_item_name').eq(2).should('contain.text', 'Sauce Labs Bolt T-Shirt');
});

When("Eu avanço para o checkout e preencho as informações", () => {
  cy.get('[data-test="checkout"]').should("be.visible").click();
  cy.url().should('include', '/checkout-step-one.html');

  cy.get('[data-test="firstName"]').should("be.visible").type('Felipe');
  cy.get('[data-test="lastName"]').should("be.visible").type('Muginsk');
  cy.get('[data-test="postalCode"]').should("be.visible").type('12345');

  cy.get('[data-test="continue"]').should("be.visible").click();
  cy.url().should('include', '/checkout-step-two.html');
});

Then("Eu confirmo os produtos no resumo do pedido", () => {
  cy.get('.cart_item').should('have.length', 3);
  cy.get('.inventory_item_name').eq(0).should('contain.text', 'Sauce Labs Backpack');
  cy.get('.inventory_item_name').eq(1).should('contain.text', 'Sauce Labs Bike Light');
  cy.get('.inventory_item_name').eq(2).should('contain.text', 'Sauce Labs Bolt T-Shirt');
});

When("Eu finalizo a compra", () => {
  cy.get('[data-test="finish"]').should("be.visible").should("be.enabled").click({ force: true });
  cy.get('.complete-header').should('be.visible'); // Aguarda o carregamento da página de confirmação
  cy.url().should('include', '/checkout-complete.html');
});


Then("Eu vejo a mensagem de compra concluída com sucesso", () => {
  cy.get('.complete-header').should('be.visible').and('contain.text', 'Thank you for your order!');
});
