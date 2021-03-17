describe('Search Test', () => {
    it('Search product',()=>{
        cy.visit('/')
        cy.search('super')
        cy.get("#overlay > div").contains("No Results found")
        // cy.get('#searchModal > div > div > div.st-products > div.st-row > div.st-col-md-3.stpp6.hidden-mobile-only')
        // cy.get("#searchModal > div > div > div.st-products > div.st-row > div.st-col-md-9.st-pl30 > div.st-w-product > div:nth-child(1) > div > div.st-shop-thumbnail-wrap > div > div.product-imageSlider > div")
      
       // cy.url().should('include','http://localhost:8080/')
    })
})