describe('addProduct', () => {
    it('addProduct', () => {
        cy.visit(Cypress.env('productPageUrl'))
        cy.get('#st-container-hide > div > div > div.row > div.col-md-10.col-12.product-section-main > div.col-md-12.product-list > div.row > div:nth-child(1) > div > div.product-box > a:nth-child(2) > div').click()
        cy.get('#st-container-hide > div > div.container-fluid.product-detail-container > div.row > div.col-md-5.col-sm-12.content-section.product-details > div:nth-child(6) > div > div.size-box > label:nth-child(2) > span')
        .click()
        cy.get('#product-addtocart-button').click()
        var text  = Cypress.env('addProduct')
        cy.get("body > div.notices.is-top").contains(text)
    })
})