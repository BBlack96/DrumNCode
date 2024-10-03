class MainPage {
    elements = {
        signUpButton: () => cy.get('[data-testid="header-sign-up-button"]'),
        userMenu: () => cy.get('div[aria-label=\'Your account menu Your account Genius Level 1\']'),
        afterRegisterModalWindow: () => cy.get('.c0528ecc22')
    }
    URL = "https://www.booking.com/"

    clickSignUp() {
        this.elements.signUpButton().click();
    }

    openPage(){
        cy.visit(this.URL)
    }

    getUserMenu(){
        return this.elements.userMenu()
    }

    getAfterRegisterModalWindow(){
        return this.elements.afterRegisterModalWindow()
    }
}

export default MainPage;