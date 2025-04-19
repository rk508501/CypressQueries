/// <reference types="cypress" />

it("Click on three coffee cups and verify the total", ()=>{
    cy.visit("https://coffee-cart.app/")

    //Select three cups
    cy.get('.cup-body').then(cups =>{
        for(let i=0; i  < 3; i++){
            cy.wrap(cups[i]).click()
        }
    })

    //Check if the discount is offered on selecting three cups
    cy.get('button.yes').click()

    //Hover over pay button
    cy.get('button.pay').trigger('mouseover')

    //Check if the "Discounted" text is visible
    cy.contains('Discounted').should('be.visible')

    cy.get('li.list-item').each(flavor =>{
        cy.log(flavor.text())
    })

    // //Verify if 4 line items are present in the total
    // cy.get('li.list-item').then(totalLineItems =>{
    //     let totalItemsDisplayed = totalLineItems.length
    //     expect(totalItemsDisplayed).to.eq(4)
    // })

    // let flavorsArr = []
    // cy.get('li.list-item').then(flavors =>{
    //    let coffeeArr =  Cypress._.toArray(flavors)
    //    for(let i = 0; i < coffeeArr.length; i++){
    //     cy.log(coffeeArr[i].textContent)
    //     flavorsArr.push(coffeeArr[i].textContent)
    //    }
    // }).then(()=>{
    //     cy.log(JSON.stringify(flavorsArr))
    // })
})



