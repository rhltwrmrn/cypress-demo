describe('return order', () => {
    it('return', () => {
        cy.dashboard().then(()=>{
            cy.wait(1000)
            cy.visit('/my-order.html')
            cy.wait(1000)
            cy.get("#st-container-hide > div > div > div > div.col-md-9 > div > div > div > div > table >tbody")
            .each(($el, index, $list)=>{
                const txt = $el.text();
                if (txt.includes('Return')){
                    cy.get("#st-container-hide > div > div > div > div.col-md-9 > div > div > div > div > table >tbody")
                        .eq(index).contains('Return').click({force:true})
                    cy.get("#return_modal > div > div > div.modal-body.mt-3 > table > tbody > tr:nth-child(1) > td.action.text-right > a").click()
                    cy.get("#return_modal > div > div > div.modal-body.mt-3 > table > tbody > tr:nth-child(2) > td > div > div > button").click()
                    cy.get("#return_modal > div > div > div.modal-body.mt-3 > table > tbody > tr:nth-child(3) > td > form > div:nth-child(2) > select")
                    .select('Size Fit Issue').should('have.value', 'Size Fit Issue')
                    cy.get("#return_modal > div > div > div.modal-body.mt-3 > table > tbody > tr:nth-child(3) > td > form")
                    .then(($el)=>{
                        const txt = $el.text()
                        if(txt.includes('For refund, please enter your account details below')){
                            cy.get("#return_modal > div > div > div.modal-body.mt-3 > table > tbody > tr:nth-child(3) > td > form > div:nth-child(4) > div > div > div:nth-child(2) > div.reason-container.w-50.mb-3.m-mobile.pl-3.pr-3 > input").type("Aakanksha")
                            cy.get("#return_modal > div > div > div.modal-body.mt-3 > table > tbody > tr:nth-child(3) > td > form > div:nth-child(4) > div > div > div:nth-child(2) > div:nth-child(2) > input").type("SBI")
                            cy.get("#return_modal > div > div > div.modal-body.mt-3 > table > tbody > tr:nth-child(3) > td > form > div:nth-child(4) > div > div > div:nth-child(3) > div:nth-child(1) > input").type("8860879728")
                            cy.get("#return_modal > div > div > div.modal-body.mt-3 > table > tbody > tr:nth-child(3) > td > form > div:nth-child(4) > div > div > div:nth-child(3) > div:nth-child(2) > input").type("8860879728")
                            cy.get("#return_modal > div > div > div.modal-body.mt-3 > table > tbody > tr:nth-child(3) > td > form > div:nth-child(4) > div > div > div.reason-container.w-100.mb-3.text-capitalize > input").type("SBI00000999")
                            cy.get("#return_modal > div > div > div.modal-body.mt-3 > table > tbody > tr:nth-child(3) > td > form > button:nth-child(5)").click()
                        }
                        else{
                            cy.get("#return_modal > div > div > div.modal-body.mt-3 > table > tbody > tr:nth-child(3) > td > form > button:nth-child(4)").click()
                        }
                    })
                }
            })
        })
    })
    
})