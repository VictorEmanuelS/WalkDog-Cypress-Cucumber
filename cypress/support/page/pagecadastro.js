import { faker } from '@faker-js/faker';
import { cpf } from 'cpf-cnpj-validator';
const register = require('../element/elementcadastro').registerdog

export class registersignup {
    dados() {
        const randomCPF = cpf.generate();
        const ramdomname = faker.name.fullName()
        const randomemail = faker.internet.email();
        const randomcep = faker.address.zipCode();

        cy.get(register.name).type(ramdomname);
        cy.get(register.email).type(randomemail);
        cy.get(register.cpf).type(randomCPF);
        cy.get(register.cep).type(randomcep);
        cy.get(register.bottom).click();
        cy.contains(register.active).shoud('be.visible').click();
    }
}

export const registrodedog = new registersignup();