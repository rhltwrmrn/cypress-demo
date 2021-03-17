describe('address', () => {
    it('address', () => {
        cy.dashboard().then(()=>{
            cy.wait(1000)
            cy.visit('localhost:8081/account-dashboard.html')
            cy.wait(2000)
            cy.get("#st-container-hide > div > div > div.row > div.col-md-9 > div > div:nth-child(2) > h4 > a").click({force:true})
            cy.wait(2000)
            cy.get("#st-container-hide > div > div > div.row > div.col-md-9 > div > div:nth-child(1) > div > button").click({force:true})
            cy.wait(2000)
            cy.get("#coupon-modal > div > div > div.modal-body > form > div.field.full-name.success > input").first().type("updateed")
            cy.wait(2000)
            cy.get("#coupon-modal > div > div > div.modal-body > form > div.field.submit > button > span").click({force:true})
            var text  = Cypress.env('addressUpdate')
            cy.get("#st-container-hide > div > div > div.row > div.col-md-12 > div").contains(text)
        })
    })
})