// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add("login", (mobile) => {
    cy.get('#pim_main > span > div.header > div.container-fluid.mobile-list > div > div > div > div.user-logins.col-sm-2.p-0.m-0.pl-0.my-xl-1 > div.user-logins-icons > ul > li.login_option > a > span > i')
            .click()
    cy.get('#login-section > form > div > div > input').type(mobile)
    cy.get('#login-section > form > div > div > button').click()
    cy.get('#codeBox1').type('1')
    cy.get('#codeBox2').type('2')
    cy.get('#codeBox3').type('3')
    cy.get('#codeBox4').type('4')
    cy.wait(500)
    cy.get('#login > form > div > div:nth-child(2) > button').click()
})

Cypress.Commands.add("search", (product) => {
    cy.get('#pim_main > span > div.header > div.container-fluid.mobile-list > div > div > div > div.user-logins.col-sm-2.p-0.m-0.pl-0.my-xl-1 > div.user-logins-icons > ul > li.search-scroll-down.search-class > span')
    .click()
    cy.get('#search').type(product)
})

Cypress.Commands.add("dashboard", () => {
    cy.visit('/')
    cy.login(Cypress.env('mobile')).then(()=>{
    cy.wait(2000)
    // cy.visit('localhost:8081/account-dashboard.html')
    })
})

Cypress.Commands.add("return", (product) => {
    cy.dashboard().then(()=>{
        cy.wait(1000)
        cy.visit('localhost:8081/my-order.html')
        cy.wait(2000)
        cy.get("#st-container-hide > div > div > div > div.col-md-9 > div > div > div > div > table >tbody")
        .each(($el, index, $list)=>{
            const txt = $el.text();
            if (txt.includes('Return')){
            cy.get("#st-container-hide > div > div > div > div.col-md-9 > div > div > div > div > table >tbody")
                .eq(index).contains('Return').click({force:true})
            cy.get("#return_modal > div > div > div.modal-body.mt-3 > table > tbody > tr:nth-child(1) > td.action.text-right > a").click()
            }
        })
    })
})