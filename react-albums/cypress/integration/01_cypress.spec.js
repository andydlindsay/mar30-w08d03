describe('Cypress Tests', () => {

  it('is working', () => {
    expect(true).to.equal(true);
  });

  it('can visit the homepage', () => {
    cy.visit('/');
  });

});