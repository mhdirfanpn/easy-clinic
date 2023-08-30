describe('User Home Page', () => {
  beforeEach(() => {
    cy.visit('/'); // Replace with the actual path to your component
  });

  it('displays doctor cards', () => {
    cy.get('.item').should('have.length.above', 0); // Count the number of doctor cards
  });

  it('scrolls left and right', () => {
    cy.get('[data-cy=scroll-left-button]').click();

    cy.get('[data-cy=scroll-right-button]').click();
  });

  it('navigates to login page', () => {
    cy.get('.item:first').click(); // Click the first doctor card
    cy.url().should('include', '/user/login'  ); // Check if the URL has changed to the doctor details page
  });
})
