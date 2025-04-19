/// <reference types="cypress"/>

it('Verify the books via API', () => {
  cy.fixture('books').then((books) => {
    cy.intercept('GET', 'https://demoqa.com/BookStore/v1/Books', {
      body: books,
    }).as('books')
  });

  cy.visit('/books');

  cy.wait('@books').then(booksResponse =>{
    cy.log(JSON.stringify(booksResponse.response.body))

    let booksArr = booksResponse.response.body.books
    cy.log("Total books received " + booksArr.length)

    expect(booksArr.length).to.eq(3)
    expect(booksArr[0].title).to.eq('Cypress Book 1')

    for(let i = 0; i < booksArr.length; i ++){
        cy.log(booksArr[i].title)
        cy.log(booksArr[i].publish_date)
    }
  })
});
