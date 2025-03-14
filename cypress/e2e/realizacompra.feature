Feature: Compra de produtos

  Scenario: Login válido
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
    Then Eu vejo que o carrinho tem três itens

  Scenario: Finalizar compra com sucesso
    Given Estou na pagina de login
    When Eu insiro o usuário e a senha
    And Eu adiciono três produtos ao carrinho
    And Eu acesso o carrinho e valido os produtos escolhidos
    And Eu avanço para o checkout e preencho as informações
    Then Eu confirmo os produtos no resumo do pedido
    And Eu finalizo a compra
    And Eu vejo a mensagem de compra concluída com sucesso
