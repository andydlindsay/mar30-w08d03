describe('Cypress', () => {

  it('is working', () => {
    expect(true).to.equal(true);
  });

  it('can visit our application', () => {
    cy.visit('/');
  });

});
