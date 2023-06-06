/// <reference types="cypress" />

import '@4tw/cypress-drag-drop';

context('Actions', () => {
    beforeEach(() => {
        cy.visit("/")
    })
    it('Drag drop slide', () => {

        cy.get('div#draggable').drag('div#droppable', { force: true })

        cy.wait(500)
        cy.get('#slider > span').invoke("attr", "style", "left: 10%")
        cy.wait(500)
        cy.get('#slider > span').invoke("attr", "style", "left: 20%")
        cy.wait(500)
        cy.get('#slider > span').invoke("attr", "style", "left: 30%")
        cy.wait(500)
        cy.get('#slider > span').invoke("attr", "style", "left: 40%")
        cy.wait(500)
        cy.get('#slider > span').invoke("attr", "style", "left: 50%")
        cy.wait(500)
        cy.get('#slider > span').invoke("attr", "style", "left: 60%")
        cy.wait(500)
        cy.get('#slider > span').invoke("attr", "style", "left: 70%")
        cy.wait(500)
        cy.get('#slider > span').invoke("attr", "style", "left: 80%")
        cy.wait(500)
        cy.get('#slider > span').invoke("attr", "style", "left: 90%")
        cy.wait(500)
        cy.get('#slider > span').invoke("attr", "style", "left: 10%")
        cy.wait(500)
        cy.get('#slider > span').invoke("attr", "style", "left: 90%")
        cy.wait(500)
        cy.get('#slider > span').invoke("attr", "style", "left: 70%")
        cy.wait(500)
        cy.get('#slider > span').invoke("attr", "style", "left: 65%")
        cy.wait(500)
        cy.get('#slider > span').invoke("attr", "style", "left: 33%")
        cy.wait(500)
        cy.get('#slider > span').invoke("attr", "style", "left: 22%")
        cy.wait(500)
        cy.get('#slider > span').invoke("attr", "style", "left: 98%")
        cy.wait(500)
        cy.get('#slider > span').invoke("attr", "style", "left: 1%")
        cy.wait(500)

        cy.get('#resizable').invoke('attr', "style", "width: 300px", "height: 150px")
        cy.wait(500)
        cy.get('#resizable').invoke('attr', "style", "width: 30px", "height: 10px")
        cy.wait(500)
        cy.get('#resizable').invoke('attr', "style", "width: 600px", "height: 300px")
        cy.wait(500)
        cy.get('#resizable').invoke('attr', "style", "width: 333px", "height: 111px")
        cy.wait(500)


    })
})
