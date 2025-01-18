Feature: queroserdog
    Feature usuario cadastra-se no walkdog

    Scenario: ClickQuero Ser Dog
        Given usuario clicar no campo de Quero Ser Dog
        When usuário preencher todos os campos corretamente
        When clicar no campo de cadastrar
        Then usuario recebe toaster que cadastrado com sucesso