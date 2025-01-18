const elem = require('../element/elementqueroserdog').element;

beforeEach("visitar site", () => {
    cy.visit(elem.visit);

})
export class walkdog {
    walkmans() {
        cy.contains(elem.whydog).should('be.visible');
    }

    clickbottom() {
        cy.get(elem.clickdog).click();
    }
    urlsignup() {
        cy.url("eq", elem.signup);
    }
    registerwalkdog() {
        cy.contains(elem.registerdog).should('be.visible');
    }
}

export const user = new walkdog();