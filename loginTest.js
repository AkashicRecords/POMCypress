// cypress/integration/LoginTest.spec.js
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

describe('Login Test', () => {
  it('should login successfully', () => {
    LoginPage.visit();
    LoginPage.fillUsername('your_username');
    LoginPage.fillPassword('your_password');
    LoginPage.submit();
    HomePage.verifyPage();
  });
});
