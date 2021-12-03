/// <reference types="cypress" />
require('cypress-iframe');

describe('example to-do app', () => {

  it('open localhost', () => {
    cy.visit('/')
  })

  it('click button', () => {
    cy.enter("#iframe").then( body => {
      body().find("#button").click()
    })
  })

})
