describe('footer', () => {
    it('footer', () => {
        cy.visit('/')
        cy.get("#footer > div.footer-links-container.p-0.mt-5.pt-5.footer-mobile > div > div > div > div.footer_links.mb-6.pb-0.mt-6 > div > div:nth-child(2) > div > div > ul > li:nth-child(1) > a")
        .click()
        cy.get("#footer > div.footer-links-container.p-0.mt-5.pt-5.footer-mobile > div > div > div > div.footer_links.mb-6.pb-0.mt-6 > div > div:nth-child(2) > div > div > ul > li:nth-child(2) > a").click()
        cy.wait(500)
        cy.get("#footer > div.footer-links-container.p-0.mt-5.pt-5.footer-mobile > div > div > div > div.footer_links.mb-6.pb-0.mt-6 > div > div:nth-child(2) > div > div > ul > li:nth-child(3) > a").click()
        
        cy.wait(500)
        cy.get("#footer > div.footer-links-container.p-0.mt-5.pt-5.footer-mobile > div > div > div > div.footer_links.mb-6.pb-0.mt-6 > div > div:nth-child(2) > div > div > ul > li:nth-child(4) > a").click()
        
        cy.wait(500)
        cy.get("#footer > div.footer-links-container.p-0.mt-5.pt-5.footer-mobile > div > div > div > div.footer_links.mb-6.pb-0.mt-6 > div > div:nth-child(2) > div > div > ul > li:nth-child(5) > a").click()
        
        cy.wait(500)
        cy.get("#footer > div.footer-links-container.p-0.mt-5.pt-5.footer-mobile > div > div > div > div.footer_links.mb-6.pb-0.mt-6 > div > div:nth-child(2) > div > div > ul > li:nth-child(6) > a").click()
        
        cy.wait(500)
        cy.get("#footer > div.footer-links-container.p-0.mt-5.pt-5.footer-mobile > div > div > div > div.footer_links.mb-6.pb-0.mt-6 > div > div:nth-child(2) > div > div > ul > li:nth-child(7) > a").click()

        cy.wait(500)
        cy.get("#footer > div.footer-links-container.p-0.mt-5.pt-5.footer-mobile > div > div > div > div.footer_links.mb-6.pb-0.mt-6 > div > div:nth-child(3) > div:nth-child(2) > div > ul > li:nth-child(1) > a").click()

        cy.wait(500)
        cy.get("#pim_main > nav > ol > li.breadcrumb-item.font-weight-bold > a").click()
        cy.get("#footer > div.footer-links-container.p-0.mt-5.pt-5.footer-mobile > div > div > div > div.footer_links.mb-6.pb-0.mt-6 > div > div:nth-child(3) > div:nth-child(2) > div > ul > li:nth-child(2) > a").click()

        cy.wait(500)
        cy.get("#pim_main > nav > ol > li.breadcrumb-item.font-weight-bold > a").click()

        cy.get("#footer > div.footer-links-container.p-0.mt-5.pt-5.footer-mobile > div > div > div > div.footer_links.mb-6.pb-0.mt-6 > div > div:nth-child(3) > div:nth-child(2) > div > ul > li:nth-child(3) > a").click()
        
        cy.wait(500)
        cy.get("#pim_main > nav > ol > li.breadcrumb-item.font-weight-bold > a").click()

        cy.get("#footer > div.footer-links-container.p-0.mt-5.pt-5.footer-mobile > div > div > div > div.footer_links.mb-6.pb-0.mt-6 > div > div:nth-child(3) > div:nth-child(4) > div > ul > li:nth-child(1) > a").click()
 
        cy.wait(500)
        cy.get("#pim_main > nav > ol > li.breadcrumb-item.font-weight-bold > a").click()

        cy.get("#footer > div.footer-links-container.p-0.mt-5.pt-5.footer-mobile > div > div > div > div.footer_links.mb-6.pb-0.mt-6 > div > div:nth-child(3) > div:nth-child(4) > div > ul > li:nth-child(2) > a").click()
        cy.url().should('include','return_exchange')
        
    })
})