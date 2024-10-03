# DrumNCode

## Overview
Test task for DrumNCode.

## Project Structure
- `cypress/pages/mainPage.js`: Contains the `MainPage` class with methods to interact with the main page elements.
- `cypress/pages/loginPage.js`: Contains the `LoginPage` class with methods to interact with the login page elements.
- `cypress/resources/registrationData.js`: Provides test data for email and password validation.
- `cypress/e2e/registration/registration.cy.js`: Contains Cypress tests for registration form validation.

## Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/BBlack96/DrumNCode.git
    cd DrumNCode
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Running the Project
1. Start the application (if applicable):
    ```sh
    npm start
    ```

2. Run Cypress tests:
    ```sh
    npx cypress open
    ```

   This will open the Cypress Test Runner. Select the test file `registration.cy.js` to run the registration form tests.

## Project Scripts
- `npm start`: Starts the application.
- `npx cypress open`: Opens the Cypress Test Runner.