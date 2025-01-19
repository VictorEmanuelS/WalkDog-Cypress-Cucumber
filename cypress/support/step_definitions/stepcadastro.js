const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const { registrodedog } = require('../page/pagecadastro');

Given('visitasignup', () => {
    registrodedog.clickbottom();
})

When('usuário preencher todos os campos corretamente', () => {
    registrodedog.dados();

})
When('clicar no campo de cadastrar', () => {
    registrodedog.registrowalkg();
})

Then('sera exibido toaster informando registro com sucesso', () => {
    registrodedog.thankswalkg();

})