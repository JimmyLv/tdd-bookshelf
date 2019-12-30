describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/home');
  });
  it('should have multiple tabs', () => {
    cy.visit('/');
    cy.contains('书架');
    cy.contains('推荐');
    cy.contains('捐赠');
    cy.contains('我的');
  });

  it('should visit home and show book list by category and tag', () => {
    cy.contains('ND Library');
    cy.queryAllByTestId('category-tab')
      .eq(0)
      .contains('编程');
    cy.queryAllByTestId('book-tag')
      .eq(0)
      .contains('Java');

    cy.queryAllByTestId('book-summary')
      .eq(0)
      .contains('你不知道的 JavaScript');

    cy.queryAllByTestId('category-tab')
      .eq(0)
      .contains('文学')
      .click();

    cy.queryAllByTestId('book-summary')
      .eq(0)
      .contains('平凡的世界');
  });
});
