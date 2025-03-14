import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Estou na pagina de login", () => {
  cy.visit("https://www.saucedemo.com/"); // Ajuste a URL conforme necessário
  cy.wait(1000); // Espera 1 segundo após carregar a página
});

When("Eu insiro o usuário e a senha", () => {
  cy.get('[data-test="username"]').type('standard_user');
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('#login-button').click();
  cy.wait(1000); // Espera para garantir que o redirecionamento ocorreu
});

Then("Eu vejo a mensagem de login realizado com sucesso", () => {
  cy.url().should('include', '/inventory.html');
  cy.get('.title').should('be.visible').and('contain.text', 'Products');
});

When("Eu adiciono três produtos ao carrinho", () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  cy.wait(500);
  cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  cy.wait(500);
  cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  cy.wait(1000);
});

Then("Eu vejo que o carrinho tem três itens", () => {
  cy.get('.shopping_cart_badge').should('contain', '3');
  cy.wait(1000);
});

When("Eu acesso o carrinho e valido os produtos escolhidos", () => {
  cy.get('.shopping_cart_link').click();
  cy.wait(1000);
  cy.url().should('include', '/cart.html');

  cy.get('.cart_item').should('have.length', 3);
  cy.get('.inventory_item_name').eq(0).should('contain.text', 'Sauce Labs Backpack');
  cy.get('.inventory_item_name').eq(1).should('contain.text', 'Sauce Labs Bike Light');
  cy.get('.inventory_item_name').eq(2).should('contain.text', 'Sauce Labs Bolt T-Shirt');
});

When("Eu avanço para o checkout e preencho as informações", () => {
  cy.get('[data-test="checkout"]').click();
  cy.wait(1000);
  cy.url().should('include', '/checkout-step-one.html');

  cy.get('[data-test="firstName"]').type('Felipe');
  cy.wait(500);
  cy.get('[data-test="lastName"]').type('Muginsk');
  cy.wait(500);
  cy.get('[data-test="postalCode"]').type('12345');
  cy.wait(500);

  cy.get('[data-test="continue"]').click();
  cy.wait(1000);
});

Then("Eu confirmo os produtos no resumo do pedido", () => {
  cy.url().should('include', '/checkout-step-two.html');
  
  cy.get('.cart_item').should('have.length', 3);
  cy.get('.inventory_item_name').eq(0).should('contain.text', 'Sauce Labs Backpack');
  cy.get('.inventory_item_name').eq(1).should('contain.text', 'Sauce Labs Bike Light');
  cy.get('.inventory_item_name').eq(2).should('contain.text', 'Sauce Labs Bolt T-Shirt');
  cy.wait(1000);
});

When("Eu finalizo a compra", () => {
  cy.get('[data-test="finish"]').click();
  cy.wait(2000); // Espera mais tempo porque é um redirecionamento final
});

Then("Eu vejo a mensagem de compra concluída com sucesso", () => {
  cy.url().should('include', '/checkout-complete.html');
  cy.get('.complete-header').should('contain.text', 'Thank you for your order!');
});
