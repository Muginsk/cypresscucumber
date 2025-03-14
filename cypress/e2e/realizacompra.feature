Feature: Realizar uma compra no site SauceDemo

  Scenario: Login no site
    Given Estou na pagina de login
    When Eu insiro o usuário e a senha
    Then Eu vejo a mensagem de login realizado com sucesso

  Scenario: Adicionar produtos ao carrinho
    Given Estou na pagina de login
    When Eu insiro o usuário e a senha
    And Eu adiciono três produtos ao carrinho
    Then Eu vejo que o carrinho tem três itens

  Scenario: Validar produtos no carrinho
    Given Estou na pagina de login
    When Eu insiro o usuário e a senha
    And Eu adiciono três produtos ao carrinho
    And Eu acesso o carrinho e valido os produtos escolhidos

  Scenario: Finalizar compra
    Given Estou na pagina de login
    When Eu insiro o usuário e a senha
    And Eu adiciono três produtos ao carrinho
    And Eu acesso o carrinho e valido os produtos escolhidos
    And Eu avanço para o checkout e preencho as informações
    Then sou redirecionado para a página de revisão do pedido
    When confirmo a compra
    Then vejo a mensagem de confirmação "THANK YOU FOR YOUR ORDER"
