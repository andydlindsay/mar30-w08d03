describe('Display Results', () => {

  it('can display search results from an API', () => {
    // visit the site
    cy.visit('/');

    // load the hardcoded (fixture) values into memory
    cy.fixture('itunes.json')
      .as('itunesResponse');

    // create a web server for handling requestsood
    cy.server();

    // set up a route handler to catch requests
    cy.route({
      method: 'GET',
      url: 'search*',
      delay: 500,
      response: '@itunesResponse'
    }).as('getSearch');

    // find the input and type into it
    cy.get('.search__form')
      .find('input')
      .type('Daft Punk');

    // find the spinner and make sure its visible
    cy.get('.spinner')
      .should('be.visible');

    // wait for the data to load and verify the results
    cy.wait('@getSearch')
      .get('main')
      .contains('Homework')
      .should('be.visible');

    // find the spinner and make sure its not visible
    cy.get('.spinner')
      .should('not.be.visible');

    // find the explicit check box and untick it
    cy.get('#Explicit')
      .uncheck();

    // check to make sure that explicit albums have been removed
    cy.get('article.album')
      .should('not.contain', 'Daft Club');
  });

});
