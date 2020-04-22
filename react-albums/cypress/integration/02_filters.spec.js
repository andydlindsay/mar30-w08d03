describe('Filters Test', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('can toggle the explicit check box', () => {
    // cy.get('#Explicit');

    // cy.get('.filters__form-group')
    //   .first()
    //   .find('input');

    cy.contains('Explicit')
      .siblings('input')
      .as('explicit');

    cy.get('@explicit')
      .uncheck()
      .should('not.be.checked');

    cy.get('@explicit')
      .check()
      .should('be.checked');
  });

  it('can uncheck the 1900s check box', () => {
    cy.get('.filters__form-group')
      .contains('1900s')
      .parent()
      .find('input')
      .uncheck()
      .should('not.be.checked');
  });

  it('toggles a check box by clicking on the label', () => {
    cy.get('.filters__form-group')
      .contains('Single')
      .click()
      .siblings('input')
      .should('be.checked');
  });

});
