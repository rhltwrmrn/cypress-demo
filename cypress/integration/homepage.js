describe('My First Test', () => {
    it('Gets, types and asserts', () => {
        cy.visit('http://localhost:8081/')
        // Get an input, type into it and verify that the value has been updated
        cy.get('#myNavbar > div > ul > li:nth-child(1) > a')
            .click()
        cy.url().should('include', '/category/newarrivals.html')

        cy.wait(2000);
        cy.get('#st-container-hide > div > div > div.row > div.col-md-10.col-12.product-section-main > div.col-md-12.product-list > div.row > div:nth-child(8) > div > div.product-box > a:nth-child(2)')
            .click()

        cy.url().should('include','/elegance-brown-formal-moccasin0-10050.html')

        cy.get('#st-container-hide > div > div.container-fluid.product-detail-container > div.row > div.col-md-5.col-sm-12.content-section.product-details > div:nth-child(6) > div > div.size-box > label.size-button')
            .click()
        cy.wait(3000);

        cy.get('#buy-now').click()

        cy.get('.col-md-8.col-sm-12.col-xs-12.checkout-section > #login-section > form > div.field.mobile > input')
            .type('9910101029')

        cy.get('.col-md-8.col-sm-12.col-xs-12.checkout-section > #login-section > form > div.row.login-tab-width > div > button').click()

        cy.get('.col-md-8.col-sm-12.col-xs-12.checkout-section > #login-section > form > div.field.otp > input').type('1234')

        cy.get('#new-address-section > form > div.field.full-name > input').type('Test')

        cy.get('#new-address-section > form > div.field.street-address > input').type('jksdncjnsdjk jksdcnsdjn sdkcnsjkn knsdkn')

        cy.get('#postcode').type('201004')

        cy.get('#new-address-section > form > div.field.email > input').type('testuser2@mailinator.com')

        cy.get('#new_address.continue').click()

        cy.wait(2000)

        cy.get('#new_address.continue').click()

        cy.wait(2000)
        cy.get('#payment-method-section > div.all_payments > div:nth-child(5) > div > div.payment-method-title.choice.card-icons').click()

        cy.get('#payment-method-section > div.all_payments > div:nth-child(5) > div > div.payment-method-content > div > div > button').click()

        cy.wait(5000);
        cy.get('body > div.razorpay-container > iframe').then($element => {
            const $body = $element.contents().find('body')
            let stripe = cy.wrap($body)
            stripe.find('#form-common > div.screen.screen-comp > div.screen-main > div.solidbg > div.home-methods > div.methods-block > div.border-list > button:nth-child(3)').click()

            stripe = cy.wrap($body)
            stripe.find('#bank-item-SBIN > label').click();

            stripe = cy.wrap($body)
            stripe.find('#footer').click();

        })

    })
})