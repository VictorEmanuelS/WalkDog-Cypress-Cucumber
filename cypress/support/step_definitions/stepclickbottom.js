const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const { user } = require('../page/pagequeroserdog');

Given("que usuario esteja na pagina de walkdog", () => {
    user.walkmans();
})
When("usuario clicar no campo de Quero Ser Dog", () => {
    user.clickbottom();
})
Then("usuario sera direcionado para pagina de signup", () => {
    user.urlsignup();
    user.registerwalkdog();
})

