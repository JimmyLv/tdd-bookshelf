describe('Home Page', () => {
  it('should have multiple tabs', () => {
    cy.visit('/');
    cy.contains('书架');
    cy.contains('推荐');
    cy.contains('捐赠');
    cy.contains('我的');
  });

  it('should visit book list and filter by category and tag', () => {
    cy.visit('/');

    cy.queryAllByTestId('book-summary')
      .eq(0)
      .should('have.text', '你不知道的JavaScript');
  });
});
