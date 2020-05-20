describe('Text Input', () => {

  beforeEach(() => {
    cy.visit('/');

    cy.get('.search__form')
      .find('input')
      .as('searchField');
  });

  it('can type into the input field', () => {
    const input = 'Carrie Underwood';

    cy.get('@searchField')
      .type(input, { delay: 100 })
      .should('have.value', input);
  });

  it('can it handle backspace?', () => {
    cy.get('@searchField')
      .type('Beee{backspace}ge{backspace}{backspace} Gees', { delay: 150 })
      .should('have.value', 'Bee Gees');
  });

});
