describe('deleteAddress', () => {
    it('deleteAddress', () => {
        cy.dashboard().then(($el)=>{
        cy.wait(1000)
        cy.visit('/account-dashboard.html')
        cy.get("#st-container-hide > div > div > div.row > div.col-md-9 > div > div:nth-child(2) > h4 > a").click({force:true})
        cy.wait(1000)
        cy.get("#st-container-hide > div > div > div.row > div.col-md-9 > div > div:nth-child(2) > div > div > div > div > a")
            .each(($el, index)=>{
                cy.log($el)
                if ($el.hasClass('fa-trash')) {
                    cy.get("#st-container-hide > div > div > div.row > div.col-md-9 > div > div:nth-child(2) > div > div > div:nth-child(2) > div > a.fa.fa-trash.ml-2").click()
                    cy.get("body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled").click()
                    var text  = Cypress.env('deleteAddress')
                    cy.get("body > div.notices.is-top").contains(text)
                }
            })
        })
    })

})