// Shepherd keeps earlier steps in the DOM, hidden, so only look at the open one.
const openStep = '.shepherd-element:not([hidden]) .shepherd-text';

describe('Composition API tour', () => {
  it('starts on mount and moves next and back', () => {
    cy.visit('/');

    cy.get(openStep).should('be.visible').and('have.text', 'Install test');
    cy.get('.shepherd-modal-overlay-container').should('have.class', 'shepherd-modal-is-visible');

    cy.contains('button', 'Next').click();
    cy.get(openStep).should('be.visible').and('have.text', 'Usage test');

    cy.contains('button', 'Back').click();
    cy.get(openStep).should('be.visible').and('have.text', 'Install test');

    cy.contains('button', 'Exit').click();
    cy.get('.shepherd-element').should('not.exist');
    cy.get('.shepherd-modal-overlay-container').should('not.exist');
  });
});

describe('Options API tour', () => {
  it('creates a tour with this.$shepherd', () => {
    cy.visit('/');
    cy.contains('button', 'Exit').click();

    cy.contains('button', 'Start Options API tour').click();
    cy.get(openStep).should('be.visible').and('have.text', 'Options API test');

    cy.contains('button', 'Done').click();
    cy.get('.shepherd-element').should('not.exist');
  });
});
