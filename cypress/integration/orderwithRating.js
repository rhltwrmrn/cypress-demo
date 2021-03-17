describe('add rating', () => {
    it('rating', () => {
        cy.dashboard().then(()=>{
            cy.wait(1000)
            cy.visit('/my-order.html')
            cy.wait(2000)
            cy.get("#st-container-hide > div > div > div > div.col-md-9 > div > div > div > div > table >tbody")
            .then(($el,index)=>{
                const txt = $el.text();
                if (txt.includes('Please add your rating')){
                    cy.get("#st-container-hide > div > div > div > div.col-md-9 > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > div > div.order_info_new > div > div > p > a > span.mt-1").click()
                    cy.get("#review > div > div.modal-body > div > form > div.starts_rating.text-left > div.stars > label.star.star-1").click()
                    cy.get("#review > div > div.modal-body > div > form > div.starts_rating_submit.text-right > button").click()
                    var text  = Cypress.env('review')
                    cy.get("body > div.notices.is-top").contains(text)
                }
            })
        })
    })
})
