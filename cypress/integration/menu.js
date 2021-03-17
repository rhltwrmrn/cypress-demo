describe('Menu', () => {
    it('Gets, types and asserts',()=>{
        cy.visit('/')
        // only for open dropdown
        cy.get("#myNavbar > div > ul > li:nth-child(2)").then($el=>{
            cy.wait(2000)
            cy.get("#myNavbar > div > ul > li:nth-child(2) > div").then($el=>{
              cy.wrap($el).invoke('show')
            })
            cy.get("#myNavbar > div > ul > li:nth-child(2) > div > div > ul > li > a").click()
            cy.wait(6000)
        })
        cy.get('#myNavbar > div > ul>li')
        .each(($el, index, $list) => {
            if ($el.hasClass('dropdown')) {
                cy.get("#myNavbar > div > ul > li:nth-child(2)").contains('Men').then($el=>{
                    cy.log("in dropdown",$el)
                    cy.wrap($el).invoke('show')
                    cy.wait(1000)
                })
                cy.get("#myNavbar > div > ul > li:nth-child(2)>a").trigger('mouseover')
                cy.get("#myNavbar > div > ul > li:nth-child(" + (index+1) + ')').trigger('mouseover')
            } else {
                cy.get("#myNavbar > div > ul > li:nth-child(" + (index+1) + ')') .click()
                cy.wait(2000)
            }
        })
        cy.get('.locator').click()
        cy.url().should('include', '/store-locator.html')
    })
 
})
