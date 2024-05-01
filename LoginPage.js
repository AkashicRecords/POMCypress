// cypress/pages/LoginPage.js
class LoginPage {
  visit() {
    cy.visit('/login');
  }

  fillUsername(username) {
    cy.get('#username').type(username);
  }

  fillPassword(password) {
    cy.get('#password').type(password);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }

  // Add more methods as needed
}

export default new LoginPage();
