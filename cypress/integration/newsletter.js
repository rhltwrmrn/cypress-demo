
describe('newsletter', () => {
    it('newsletter', () => {
        cy.visit('/')
        cy.get("#newsletter-validate-detail > div.field.newsletter > div").type(Cypress.env('email'))
        cy.get("#Submit > span").click()
        var text  = Cypress.env('letter')
        cy.get("body > div.notices.is-top").contains(text)
    })
})