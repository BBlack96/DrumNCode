import MainPage from '../../pages/mainPage';
import LoginPage from '../../pages/loginPage';
import {emailTestData, passwordTestData} from '../../resources/registrationData';

const mainPage = new MainPage();
const loginPage = new LoginPage();

describe('Registration Form Tests', () => {
    beforeEach(() => {
        mainPage.openPage()
        mainPage.clickSignUp()
    })

    describe('Email Validation', () => {
        emailTestData.forEach(({email}) => {
            it(`should validate email: ${email}`, () => {
                loginPage.enterEmail(email);
                loginPage.clickContinueWithEmail();
                if (email.includes('@') && email.includes('.')) {
                    loginPage.getPasswordTitle().should('be.visible')
                } else {
                    loginPage.getErrorMessage().should('be.visible');
                }
            })
        })
    })

    describe('Password Validation', () => {
        passwordTestData.forEach(({email, password, confirmPassword}) => {
            it(`should validate password: ${password}`, () => {
                loginPage.enterEmail(email)
                loginPage.clickContinueWithEmail()
                loginPage.enterPassword(password);
                loginPage.confirmPassword(confirmPassword);
                loginPage.clickCreateAccount();
                if (password.length >= 10 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && password === confirmPassword) {
                    loginPage.getCaptchaTitle().should('have.text', 'Are you a robot?');
                } else if (password.length >= 10 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && password !== confirmPassword){
                    loginPage.getConfirmedPasswordAlert().should('be.visible');
                }
                else {
                    loginPage.getPasswordErrorAlert().should('be.visible');
                }
            })
        })
    })
})
