describe('Search', () => {
    it('Search and switch color',()=>{
        cy.visit('/')
        cy.search(Cypress.env('searchValue'))
        cy.get('#searchModal > div > div > div.st-products > div.st-row > div.st-col-md-3.stpp6.hidden-mobile-only')
        .then(($el)=>{
            if($el.hasClass('st-col-md-3 stpp6')){
                cy.get('#searchModal > div > div > div.st-products > div.st-row > div.st-col-md-9.st-pl30 > div.st-w-product > div:nth-child(1) > div > div.st-shop-thumbnail-wrap > div > div.st-desktop-info > div.st-view-detail > span')
                .click()
                cy.wait(2000)
                cy.get("#st-container-hide > div > div.container-fluid.product-detail-container > div.row > div.col-md-5.col-sm-12.content-section.product-details > div.size-container.mt-3 > div > div > ul > li:nth-child(1)").click()
                cy.url().should('include', '/doctor-plus-1043-sblue-7-377.html')
            }
        })
    })
})