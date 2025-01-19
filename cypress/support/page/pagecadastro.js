import { faker } from '@faker-js/faker';
import { cpf } from 'cpf-cnpj-validator';
const register = require('../element/elementcadastro').registerdog;


export class registersignup {
    dados() {

        const randomCPF = cpf.generate();
        const ramdomname = faker.name.fullName();
        const randomemail = faker.internet.email();
        const filename = (register.img);

        cy.get(register.name).type(ramdomname);
        cy.get(register.email).type(randomemail);
        cy.get(register.cpf).type(randomCPF);
        cy.get(register.cep).type(register.numerodecep);
        cy.get(register.rua).type(register.house);
        cy.get(register.bottom).click();
        cy.get(register.active).click();
        cy.get(register.upload).attachFile(filename);
    }
    registrowalkg() {
        cy.get(register.infodogs).click();
    }
    thankswalkg() {
        cy.wait(register.tempo)
        cy.contains(register.thanks).should(register.visible)
    }
}


export const registrodedog = new registersignup();