class BBCSportPage
{
    getTitle()
    {
      return cy.title().should('eq','BBC Sport - Scores, Fixtures, News - Live Sport')
    }
   clickOnFormula1Link()
   {
    
    return  cy.get(':nth-child(4) > .ssrcss-161fqwm-StyledLink > .ssrcss-1u47p8g-LinkTextContainer')
    
   }
   clickOnResultsLink()
   {

    return cy.get(':nth-child(3) > .ssrcss-p70ifu-StyledLink > .ssrcss-1mstwv3-LinkTextContainer')

   }
   clickOn2023()

   {
      return cy.get('[data-testid="datepicker-date-link-2023"] > [data-testid="datepicker-date-value"]')
   }
   
}

export default BBCSportPage;
