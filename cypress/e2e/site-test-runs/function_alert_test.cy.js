/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit("/")
    })  
    it('Click me button test', () => {
      cy.get('#HTML9 > div.widget-content > button').click().type('{enter}')
      cy.wait(500)
      cy.get('p#demo').should('be.visible')
      cy.wait(500)
      cy.get('p#demo').should('have.text',"You pressed OK!")
    }) 
})
