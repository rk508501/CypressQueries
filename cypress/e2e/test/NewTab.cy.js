///<reference types="cypress" />

it("Verify the new tab opened", () => {
  cy.visit("https://knowindia.india.gov.in/districts/");

  cy.get(
    ":nth-child(2) > .innr-cont > :nth-child(1) > ul > :nth-child(1) > h3 > a"
  )
    .invoke("removeAttr", "target")
    .click();

  cy.origin('https://andhrapradesh.s3waas.gov.in', () => {
    cy.get('div > a:nth-child(1) > img')
    .first()
    .invoke("removeAttr", "target").click()
    
    cy.go('back')
  })

});
