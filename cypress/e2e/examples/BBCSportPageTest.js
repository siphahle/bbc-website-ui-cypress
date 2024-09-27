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

    it('should verify the race results table', () => {
        // Assert that the table exists
        cy.get('table').should('be.visible');
    
        // Check if the table has headers (adjust based on actual structure)
        cy.get('thead').find('th').then(($headers) => {
          expect($headers.eq(0)).to.contain('Rank');
          expect($headers.eq(1)).to.contain('Driver');
          expect($headers.eq(2)).to.contain('Number');
          expect($headers.eq(3)).to.contain('Team');
          expect($headers.eq(4)).to.contain('Grid');
          expect($headers.eq(5)).to.contain('Pits');
          expect($headers.eq(6)).to.contain('Fastest Lap');
          expect($headers.eq(7)).to.contain('Race Time');
          expect($headers.eq(8)).to.contain('Points');
        });
    
        // Verify specific row data (example: Max Verstappen winning)
        cy.get('tbody').find('tr').eq(0).within(() => {
        cy.get('td').eq(0).should('contain', '1');
        cy.get('td').eq(1).should('contain', 'Max Verstappen');  // Position
        cy.get('td').eq(2).should('contain', '1');  // Driver
        cy.get('td').eq(3).should('contain', 'Red Bull');  // Team
        cy.get('td').eq(4).should('contain', '1');
        cy.get('td').eq(5).should('contain', '2');
        cy.get('td').eq(6).should('contain', '1:26.993');
        cy.get('td').eq(7).should('contain', '1:27:02.624');
        cy.get('td').eq(8).should('contain', '26')
        });

        //Charles Leclerc
        cy.get('tbody').find('tr').eq(1).within(() => {
            cy.get('td').eq(0).should('contain', '2');
            cy.get('td').eq(1).should('contain', 'Charles Leclerc');  // Position
            cy.get('td').eq(2).should('contain', '16');  // Driver
            cy.get('td').eq(3).should('contain', 'Ferrari');  // Team
            cy.get('td').eq(4).should('contain', '2');
            cy.get('td').eq(5).should('contain', '2');
            cy.get('td').eq(6).should('contain', '1:28.199');
            cy.get('td').eq(7).should('contain', '+17.993');
            cy.get('td').eq(8).should('contain', '18')
            });

        //Geroge Russel
        cy.get('tbody').find('tr').eq(2).within(() => {
            cy.get('td').eq(0).should('contain', '3');
            cy.get('td').eq(1).should('contain', 'George Russell');  // Position
            cy.get('td').eq(2).should('contain', '63');  // Driver
            cy.get('td').eq(3).should('contain', 'Mercedes');  // Team
            cy.get('td').eq(4).should('contain', '4');
            cy.get('td').eq(5).should('contain', '2');
            cy.get('td').eq(6).should('contain', '1:28.187');
            cy.get('td').eq(7).should('contain', '+20.328');
            cy.get('td').eq(8).should('contain', '15')
            });

      });
})