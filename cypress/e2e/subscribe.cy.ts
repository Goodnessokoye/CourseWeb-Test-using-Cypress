import { faker } from '@faker-js/faker';
const randomEmail = faker.internet.email(); 

describe("Subscription form", ()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000")
    })
    it.only("allow users to subscribe to the newsletter", ()=>{
        cy.getByData("email-input")
            .type(randomEmail)
        cy.getByData('submit-button').click()
        cy.getByData("success-message")
            .should("exist")
            .contains(randomEmail)
    })

    it("Doesn't allow user with an invalid email address", ()=>{
        cy.getByData("email-input")
            .type("helloo")
        cy.getByData("submit-button").click()
        cy.getByData("success-message")
            .should("not.exist")
    })

    it("Users can not subscribe, if they had already subscribed", ()=>{
        cy.getByData("email-input").type("john@example.com")
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should("exist").contains("john@example.com")
    })
})