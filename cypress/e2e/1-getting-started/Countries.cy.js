it('Verify the country-capital data', () => {
  cy.visit('http://127.0.0.1:5500/HTML/countryData.html');

  // cy.contains('tr', 'Bahamas').invoke('index').then(bahamaIndex =>{
  //     cy.log(bahamaIndex)
  // })

  cy.getCountryCapital('Bahamas').then((capitalText) => {
    expect(capitalText).to.eq('Nassau');
  });

  cy.getCountryCapital('Belgium').then((capitalText) => {
    expect(capitalText).to.eq('Brussels');
  });

  cy.getCountryCapital('Bahrain').then((capitalText) => {
    expect(capitalText).to.eq('Manama');
  });
});
