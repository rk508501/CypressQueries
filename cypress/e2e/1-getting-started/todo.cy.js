/// <reference types="cypress" />

// it('Check the case sensitivity', () => {
//   cy.visit('http://127.0.0.1:5500/HTML/buttons.html');
//   cy.get('button')
//     .filter((index, button) => /click me/i.test(button.innerText))
//     .each(($btn) => {
//       cy.wrap($btn).click();
//     });
// });

it('Click the matching btns', () => {
  cy.visit('http://127.0.0.1:5500/HTML/buttons.html');
  cy.get('button').then((buttons) => {
    for (let i = 0; i < buttons.length; i++) {
      if (
        /click me/i.test(buttons[i].innerText) &&
        buttons[i].innerText.length == 'click me'.length
      ) {
        cy.wrap(buttons[i]).click();
      }
    }
  });
});
