/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit("/")
    })
    it('Double click and assertion', () => {
        let deneme = "deneme 1234 !'+%/()=?_?"

        cy.get('.widget-content > input:nth-of-type(1)').click().clear().type(deneme)
        cy.get('div#sidebar-right-1 > div:nth-of-type(1)  button').dblclick()
        cy.wait(1000)
        cy.get('div#sidebar-right-1 > div:nth-of-type(1)  button').should("have.text", "Copy Text")
    })
})
