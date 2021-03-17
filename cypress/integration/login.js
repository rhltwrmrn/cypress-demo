describe('Login Test', () => {
    it('Login',()=>{
        cy.visit('/')
        cy.login(Cypress.env('mobile'))
        var text  = Cypress.env('login')
        cy.get("body > div.notices.is-top").contains(text)
    })
})
