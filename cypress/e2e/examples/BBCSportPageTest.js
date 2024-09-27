//cypress - Spec
///<reference types ="Cypress" />

import BBCSportPage from "../pageObjects/BBCSportPage"

describe('Securi Ease QA Engineer Assessment', function()

{

    it('BBC Sport Home Page', function(){
        
       
       const bbcSportPage = new BBCSportPage()
       cy.visit(Cypress.env('url')+"/sport")

       bbcSportPage.getTitle();
       bbcSportPage.clickOnFormula1Link().click();
       bbcSportPage.clickOnResultsLink().click();
       bbcSportPage.clickOn2023().click();
    })
})