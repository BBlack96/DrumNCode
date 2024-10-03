class LoginPage {
    elements = {
        emailInput: () => cy.get('#username'),
        continueWithEmailButton: () => cy.get("button[type='submit']"),
        passwordInput: () => cy.get('[name="new_password"]'),
        confirmPasswordInput: () => cy.get('[name="confirmed_password"]'),
        createAccountButton: () => cy.get('[type="submit"]'),
        showPasswordIcon: () => cy.get('[aria-controls="new_password"]'),
        showConfirmPasswordIcon: () => cy.get('[aria-controls="confirmed_password"]'),
        emailErrorMessage: () => cy.get('#username-note'),
        createPasswordTitle: () => cy.get(".page-header > h1"),
        confirmedPasswordAlert: () => cy.get('#confirmed_password-note'),
        passwordErrorAlert: () => cy.get('#new_password-note'),
        captchaTitle: () => cy.get('h3')
    }

    enterEmail(email) {
        this.elements.emailInput().type(email);
    }

    getCaptchaTitle(){
        return this.elements.captchaTitle()
    }

    getPasswordErrorAlert(){
        return this.elements.passwordErrorAlert()
    }

    getConfirmedPasswordAlert(){
        return this.elements.confirmedPasswordAlert()
    }

    getPasswordTitle(){
        return this.elements.createPasswordTitle()
    }

    clickContinueWithEmail() {
        this.elements.continueWithEmailButton().click();
    }

    enterPassword(password) {
        this.elements.passwordInput().type(password);
    }

    confirmPassword(password) {
        this.elements.confirmPasswordInput().type(password);
    }

    clickCreateAccount() {
        this.elements.createAccountButton().click();
    }

    clickShowPassword() {
        this.elements.showPasswordIcon().click();
    }

    clickShowConfirmPassword() {
        this.elements.showConfirmPasswordIcon().click();
    }

    getErrorMessage() {
        return this.elements.emailErrorMessage();
    }
}

export default LoginPage;