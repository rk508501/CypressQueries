// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

window.testdata = {
  username: 'admin',
  password: 'admin',
};

Cypress.Commands.add('login', (username, password) => {
  return 'Success';
});

Cypress.Commands.add('logout', () => {
  cy.log('User logged out');
});

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

Cypress.Commands.add('getCountryCapital', (country) => {
  let capitalText;
  cy.get('tr').then((countryRows) => {
    for (let index = 0; index < countryRows.length; index++) {
      const countryRowTxt = countryRows[index].innerText;
      if (countryRowTxt.includes(country)) {

        return cy
          .get(`tr:nth-child(${index}) > td:nth-child(3)`)
          .then((capitalElement) => {
            capitalText = capitalElement.text();
          });
      }
    }
  });

  return cy.then(() => {
    return cy.wrap(capitalText);
  });
});
