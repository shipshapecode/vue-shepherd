describe('Basic functionality', () => {
  it('Next/back works', () => {
    cy.visit('/');

    // Step one text should be visible
    cy.get('.shepherd-text')
      .contains('Install test')
      .should('exist')
      .and('be.visible');

    // Click next
    cy.contains('Next').click();

    // Step two text should be visible
    cy.get('.shepherd-text')
      .contains('Usage test')
      .should('exist')
      .and('be.visible');

    // Click back
    cy.contains('Back').click();

    // Step one text should be visible again
    cy.get('.shepherd-text')
      .contains('Install test')
      .should('exist')
      .and('be.visible');
  });
});
