// cypress/pages/HomePage.js
class HomePage {
  verifyPage() {
    cy.contains('Welcome').should('be.visible');
  }

  // Add more methods as needed
}

export default new HomePage();
