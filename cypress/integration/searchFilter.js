describe('Search Test', () => {
    it('Search product',()=>{
        cy.visit('/')
        cy.search(Cypress.env('searchValue'))
        cy.get('#STbar > div.sidebar__inner > div:nth-child(6) > div.filter-list-container > ul > div > li:nth-child(4) > div > label > div')
        .click()
        var text  = Cypress.env('filter')
        cy.get("#STbar > div.filter-header > div > h4").contains(text)
        .then(($el)=>{
            cy.log($el.text())
        })
    })
})