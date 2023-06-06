/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit("/")
    })  
    it('Search bar function and results testing', () => {
      cy.get('input#Wikipedia1_wikipedia-search-input').should('have.length', 1)
      cy.get('input#Wikipedia1_wikipedia-search-input').type('Turkiye')
      cy.get('.wikipedia-search-button').click()
      cy.wait(500)
      cy.get('#Wikipedia1_wikipedia-search-results > div').should('have.length',5)
      cy.wait(500)
      cy.get('div#Wikipedia1_wikipedia-search-more').should('have.length',1)
    }) 
})
