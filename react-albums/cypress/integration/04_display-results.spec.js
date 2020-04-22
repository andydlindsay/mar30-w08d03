describe('Input Tests', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('.search__form')
      .find('input')
      .as('searchField');
  });

  it('loads results from an API', () => {
    // tell cypress about our data
    cy.fixture('itunes.json').as('itunesResponse');

    // start a cypress server running
    cy.server();

    // fake the endpoint to be called
    cy.route({
      method: 'GET',
      url: 'search*',
      delay: 1000,
      response: '@itunesResponse'
    }).as('getRequest');

    cy.get('@searchField')
      .type('Daft Punk')
      .should('have.value', 'Daft Punk');

    cy.get('.spinner')
      .as('spinner')
      .should('be.visible');

    cy.wait('@getRequest')
      .get('main')
      .contains('Homework')
      .should('be.visible');

    cy.get('@spinner')
      .should('not.be.visible');

    cy.contains('Explicit')
      .click();

    cy.get('article.album')
      .should('not.contain', 'Daft Club');
  });
});
