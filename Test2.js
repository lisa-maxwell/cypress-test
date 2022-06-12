/// <reference types="Cypress" />

describe('Link Iteration Test', function()
{

it('My FirstTest case', function()
{

    cy.visit("https://www.thelisamaxwell.com/")

    cy.get('.nav-link').each(page => {
        cy.request(page.prop('href'))
        })
      
      });
    
}) 
