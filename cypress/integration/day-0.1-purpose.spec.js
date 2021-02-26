/// <reference types="Cypress" />

/**
 * @abstract: Know the name and the purpose of app
 *
 * @criteria
  As first time visiting user to the spaced repetition site:
  - I see the name of the learning app, and a brief description.
*/
describe(`User story: Application name and purpose`, function () {
  it('has h1 with title', () => {
    cy.visit('/');
    cy.get('header h1')
      .should('contain', 'Spanish Your Way')
      .get('p')
      .should(
        'have.text',
        'Practice learning Spanish with the spaced repetition revision technique.'
      );
  });
});
