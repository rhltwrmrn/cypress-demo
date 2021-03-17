describe('Locator', () => {
    it('Get direction',()=>{
        cy.visit('/')
        cy.get('.locator').click()
        cy.get('#st-container-hide > div > div > div > div.col-12 > div > div > div.col-md-3.col-12 > div.search > input').type(Cypress.env('locatorAddress'))
        cy.get("#st-container-hide > div > div > div > div.col-12 > div > div > div.col-md-3.col-12 > div.sidebar > div > div.store-directions > a").click()
        cy.url().should('include','store-locator.html')
    })
})
