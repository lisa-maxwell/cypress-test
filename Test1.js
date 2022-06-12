/// <reference types="Cypress" />


describe('My First Test Suite', function()
{

it('My FirstTest case', function()
{

    cy.visit("https://www.lisamaxwell.dev/")
    cy.get('a').each(page => {
        cy.request(page.prop('href'))
    })

}) 

})