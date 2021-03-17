describe('address', () => {
    it('address', () => {
        cy.dashboard().then(()=>{
            cy.wait(1000)
            cy.visit('/my-order.html')
            cy.wait(2000)
            cy.get("#st-container-hide > div > div > div > div.col-md-9 > div > div > div > div > table >tbody")
            .each(($el,index)=>{
                const txt  = $el.text()
                if (txt.includes('Cancel')){
                    cy.get("#st-container-hide > div > div > div > div.col-md-9 > div > div > div > div > table >tbody")
                    .eq(index).contains('Cancel').click({force:true})
                }
            })
            cy.wait(1000)
            cy.get("#cancel_modal > div > div > form > div.modal-body.mobile-full-screen > div> select")
            .select(Cypress.env('cancelReason')).should('have.value', Cypress.env('cancelReason'))
            cy.get("#cancel_modal > div > div > form > div.modal-body.mobile-full-screen > button").click({force:true})
            cy.get("body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled").click()
            var text  = Cypress.env('cancelOrder')
            cy.get("body > div.notices.is-top").contains(text)
        })
    })
})