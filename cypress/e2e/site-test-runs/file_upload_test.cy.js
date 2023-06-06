/// <reference types="cypress" />

import 'cypress-file-upload';

context('Actions', () => {

    const getIFrameDocumentFileUpload = () => {
        return cy.get('#frame-one1434677811').should('be.visible').then(($iframe) => {
            const $body = $iframe.contents().find('body')
            cy.wrap($body).find(`input[name='RESULT_FileUpload-10']`).attachFile("Upload/Uploadfile.txt")

            //cy.get(".left_question_first.question").should("have.text", "UploadFile.txt")
        })
    }
    beforeEach(() => {
        cy.visit("/")
    })
    it('Volunteer Sign up', () => {
        getIFrameDocumentFileUpload()
        cy.wait(3000)
    })
    afterEach(() => {
        cy.get('#frame-one1434677811').should('be.visible').then(($iframe) => {
            const $body = $iframe.contents().find('body')
            cy.wrap($body).find('.segment_header > h1').should('have.text', "An error has occurred") //site won't allow to upload files so "An error has occured" text considers as successfull.
        })
    })
})