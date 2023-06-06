/// <reference types="cypress" />

import 'cypress-file-upload';



context('Actions', () => {

  const getIFrameDocumentFN = () => {
    return cy.get('#frame-one1434677811').should('be.visible').then(($iframe) => {
      const $body = $iframe.contents().find('body')
      cy.wrap($body).find(`input[name='RESULT_TextField-1']`)
    })
  }

  const getIFrameDocumentLN = () => {
    return cy.get('#frame-one1434677811').should('be.visible').then(($iframe) => {
      const $body = $iframe.contents().find('body')
      cy.wrap($body).find(`input[name='RESULT_TextField-2']`)
    })
  }

  const getIFrameDocumentPhone = () => {
    return cy.get('#frame-one1434677811').should('be.visible').then(($iframe) => {
      const $body = $iframe.contents().find('body')
      cy.wrap($body).find(`input[name='RESULT_TextField-3']`)
    })
  }

  const getIFrameDocumentCountry = () => {
    return cy.get('#frame-one1434677811').should('be.visible').then(($iframe) => {
      const $body = $iframe.contents().find('body')
      cy.wrap($body).find(`input[name='RESULT_TextField-4']`)
    })
  }

  const getIFrameDocumentCity = () => {
    return cy.get('#frame-one1434677811').should('be.visible').then(($iframe) => {
      const $body = $iframe.contents().find('body')
      cy.wrap($body).find(`input[name='RESULT_TextField-5']`)
    })
  }

  const getIFrameDocumentEmail = () => {
    return cy.get('#frame-one1434677811').should('be.visible').then(($iframe) => {
      const $body = $iframe.contents().find('body')
      cy.wrap($body).find(`input[name='RESULT_TextField-6']`)
    })
  }

  const getIFrameDocumentGender = () => {
    return cy.get('#frame-one1434677811').should('be.visible').then(($iframe) => {
      const $body = $iframe.contents().find('body')
      cy.wrap($body).find(`div:nth-of-type(15) > .choices.inline_grid > tbody > tr:nth-of-type(1) > td > label`)
    })
  }

  const getIFrameDocumentDays = () => {
    return cy.get('#frame-one1434677811').should('be.visible').then(($iframe) => {
      const $body = $iframe.contents().find('body')
      cy.wrap($body).find(`div:nth-of-type(17) tbody tr:nth-child(1) td label`).click()
      cy.wrap($body).find(`div:nth-of-type(17) tbody tr:nth-child(2) td label`).click()
      cy.wrap($body).find(`div:nth-of-type(17) tbody tr:nth-child(3) td label`).click()
      cy.wrap($body).find(`div:nth-of-type(17) tbody tr:nth-child(4) td label`).click()
      cy.wrap($body).find(`div:nth-of-type(17) tbody tr:nth-child(5) td label`).click()
      cy.wrap($body).find(`div:nth-of-type(17) tbody tr:nth-child(6) td label`).click()
      cy.wrap($body).find(`div:nth-of-type(17) tbody tr:nth-child(7) td label`).click()
      
      cy.wrap($body).find(`div:nth-of-type(17) tbody tr:nth-child(6) td label`).click()
      cy.wrap($body).find(`div:nth-of-type(17) tbody tr:nth-child(7) td label`).click()
    })
  }

  const getIFrameDocumentContact = () => {
    return cy.get('#frame-one1434677811').should('be.visible').then(($iframe) => {
      const $body = $iframe.contents().find('body')
      cy.wrap($body).find(`select#RESULT_RadioButton-9`)
    })
  }
  
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
    getIFrameDocumentFN().type('Ali')
    getIFrameDocumentLN().type('Yilmaz')
    getIFrameDocumentPhone().type('5555555')
    getIFrameDocumentCountry().type('Turkey')
    getIFrameDocumentCity().type('Ankara')
    getIFrameDocumentEmail().type('adsoyad@gmail.com')
    getIFrameDocumentGender().click()
    getIFrameDocumentDays()
    getIFrameDocumentContact().select('Morning')
    getIFrameDocumentFileUpload()
  })
})

