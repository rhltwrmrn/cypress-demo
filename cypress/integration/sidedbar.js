describe('address', () => {
    it('address', () => {
        cy.visit('/')
        cy.dashboard().then(($el)=>{
            cy.visit('/account-dashboard.html')
            cy.wait(1000)
            cy.get("#st-container-hide > div > div > div.row > div.col-md-3 > div > ul > li:nth-child(2) > a").click()
            cy.get("#st-container-hide > div > div > div.row > div.col-md-3 > div > ul > li:nth-child(3) > a").click()
            cy.wait(1000)
            cy.get("#st-container-hide > div > div > div.row > div.col-md-3 > div > ul > li:nth-child(4) > a").click()
            cy.get("#st-container-hide > div > div > div.row > div.col-md-3 > div > ul > li:nth-child(5) > a").click()
            cy.get("#st-container-hide > div > div > div.row > div.col-md-3 > div > ul > li:nth-child(6) > a").click()
            cy.url().should('include', '/storecredit.html')
        })
    })
})