/// <reference types="cypress" />

context('Actions', () => {

    const getMenuItemCount = () => {
        return cy.get('select#speed').find('options').its('length');
    };

    const getRandomIndex = (itemCount) => {
        return Math.floor(Math.random() * itemCount);
    };

    var a = Math.floor(Math.random() * 12) + 1;
    var b = Math.floor(Math.random() * 31) + 1;
    var c = Math.floor(Math.random() * (2100 - 2023 + 1)) + 2023;

    beforeEach(() => {
        cy.visit("/")
    })

    it('Date Picker', () => {
        // *month* / *date* / *year*
        cy.get('input#datepicker').click().type(a)
        cy.get('input#datepicker').click().type("/")
        cy.get('input#datepicker').click().type(b)
        cy.get('input#datepicker').click().type("/")
        cy.get('input#datepicker').click().type(c)
        cy.get('input#datepicker').click().type('{enter}')
    })

    it('Select menu', () => {
        cy.get('select#speed').find('option').then((options) => {
        const itemCount = options.length;
        const randomIndex = Math.floor(Math.random() * itemCount);
        cy.get('select#speed').select(options[randomIndex].value);

        cy.wait(500)

        cy.get('select#files').find('option').then((options) => {
        const itemCount = options.length;
        const randomIndex = Math.floor(Math.random() * itemCount);
        cy.get('select#files').select(options[randomIndex].value);

        cy.wait(500)

        cy.get('select#number').find('option').then((options) => {
        const itemCount = options.length;
        const randomIndex = Math.floor(Math.random() * itemCount);
        cy.get('select#number').select(options[randomIndex].value);
        
        cy.wait(500)

        cy.get('select#products').find('option').then((options) => {
        const itemCount = options.length;
        const randomIndex = Math.floor(Math.random() * itemCount);
        cy.get('select#products').select(options[randomIndex].value);

        cy.wait(500)

        cy.get('select#animals').find('option').then((options) => {
        const itemCount = options.length;
        const randomIndex = Math.floor(Math.random() * itemCount);
        cy.get('select#animals').select(options[randomIndex].value);
        })
    })
})
})
})
})
})