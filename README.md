# Cypress Test Suite for Tpro

This Cypress test suite is designed to validate various functionalities of TPro. It covers test scenarios for login, URL validation, and negative scenarios.

# Prerequisites
Before running the tests, ensure that you have the following prerequisites installed:

Node.js - Ensure Node.js is installed on your system.
Cypress - Install Cypress globally or locally in your project.

# Installation
Clone this repository to your local machine
Change into the project directory
Install project dependencies: npm install

# Running tests
To run the cypress tests, use the below command

npm cypress open

To generate allure report, use the below command

npx cypress run --env allure=true

# View allure report
To view the allure report, use the below command

allure open

# View video 

Navigate to the video folder in the project folder structure.

File name: login.cy.js.mp4

# Assumptions
The application is accessible at the URL specified in the Cypress configuration.
The page object model is set up in the fixtures/pageObjectModel directory, providing necessary locators.
The tests assume a certain state of the application, such as available elements and expected error messages.

### Bug noticed in Test Scenario 2: "Page After Login Test"

Summary: User click on the Update button in the "Password" Screen, Snack bar is displayed as "Invalid Credentials"
According to the requirement, after clicking on the Update button, the user is not displayed as Successful Password update. Instead, the user is displayed with Invalid credentials.
Tested manually, the same snack bar is displayed. Unable to perform the test case.
If the above "update password" functionality would have worked then the function can be created for reusable.

