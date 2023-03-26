describe('Check Homepage', () => {
  it('has correct homepage', () => {
    cy.visit('http://localhost:8891');
    cy.title().should('eq', 'CodeMajesty | Software Dev & QA');
    cy.get('footer')
      .should((footerElem) => {
        expect(footerElem.text().trim()).to.equal(
          `© ${new Date().getFullYear()} CodeMajesty`
        );
      })
      .should('be.visible');
  });
});
