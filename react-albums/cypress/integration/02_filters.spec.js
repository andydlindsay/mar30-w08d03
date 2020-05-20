describe('Filters', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('can toggle the explicit check box', () => {
    cy.get('.filters__form-group')
      .first()
      .find('input')
      .uncheck()
      .should('not.be.checked');
  });

  it('can toggle the 1900s check box', () => {
    cy.get('.filters__form-group')
      .contains('1900s')
      .parent()
      .find('input')
      .uncheck()
      .should('not.be.checked');
  });

  it('can toggle a check box by clicking on the label', () => {
    cy.contains('EP')
      .click();

    cy.get('#EP')
      .should('be.checked');
  });

});
