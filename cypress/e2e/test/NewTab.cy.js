///<reference types="cypress" />

/**
 * 1. Navigate to https://knowindia.india.gov.in/districts/
 * 2. Click on the first district name
 * 3. Verify the new tab opened
 * 4. Navigate back to the previous page
 * 5. Verify the page is navigated back to  https://knowindia.india.gov.in/districts/
 */
it('Verify the new tab opened', () => {
  
  cy.visit('https://knowindia.india.gov.in/districts/');

  cy.get(
    ':nth-child(2) > .innr-cont > :nth-child(1) > ul > :nth-child(1) > h3 > a'
  )
    .invoke('removeAttr', 'target')
    .click();

  cy.wait(3000);

  cy.origin('https://andhrapradesh.s3waas.gov.in', () => {
    cy.url().should('include', 'https://andhrapradesh.s3waas.gov.in');
    cy.get('body > section.banner-section > div > ul > li.flex-nav-prev > a')
      .click()

    //This breaks the test
    cy.go('back');
  });

  // cy.origin('https://knowindia.india.gov.in', () => {
  //   cy.url().should('include', 'https://knowindia.india.gov.in/districts/');
  // })
});


// CypressError
// The command was expected to run against origin https://andhrapradesh.s3waas.gov.in but the application is at origin https://knowindia.india.gov.in.

// This commonly happens when you have either not navigated to the expected origin or have navigated away unexpectedly.

// Using cy.origin() to wrap the commands run on https://knowindia.india.gov.in will likely fix this issue.

// cy.origin('https://knowindia.india.gov.in', () => {
//   <commands targeting https://knowindia.india.gov.in go here>
// })