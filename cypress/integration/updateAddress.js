
describe('address', () => {
    it('address', () => {
        cy.dashboard().then(()=>{
            cy.wait(1000)
            cy.visit('/account-dashboard.html')
            cy.wait(1000)
            cy.get('#st-container-hide > div > div > div.row > div.col-md-9 > div > div:nth-child(2) > h4 > a').click({force: true})
            cy.wait(1000)
            cy.get("#st-container-hide > div > div > div.row > div.col-md-9 > div > div:nth-child(2) > div > div > div > div > a")
            .each(($el, index)=>{
                if ($el.hasClass('fa-trash')) {
                cy.wait(2000)
                cy.get("#st-container-hide > div > div > div.row > div.col-md-9 > div > div:nth-child("+index+") > div > div > div:nth-child("+index+") > div > a.fa.fa-edit").click({force:true})
                cy.get("#coupon-modal > div > div > div.modal-body > form > div.field.full-name.success > input").type(Cypress.env('username'))
                cy.wait(2000)
                cy.get("#coupon-modal > div > div > div.modal-body > form > div.field.submit > button").click({force:true})
                var text  = Cypress.env('addressUpdate')
                cy.get("#st-container-hide > div > div > div.row > div.col-md-12 > div").contains(text)
                }
            })
        })
    })  
})