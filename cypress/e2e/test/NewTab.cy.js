///<reference types="cypress" />

/**
 * 1. Navigate to https://knowindia.india.gov.in/districts/
 * 2. Click on the first district name
 * 3. Verify the new tab opened
 * 4. Navigate back to the previous page
 * 5. Verify the page is navigated back to the previous page
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
      .click();

    //This breaks the test
    cy.go('back');
  });
});
