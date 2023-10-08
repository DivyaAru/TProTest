import Locators from "../../fixtures/pageObjectModel"


describe("Login Test Suite", function () {
  
  // Run this code before each test in the suite
  beforeEach(()=>{
    Cypress.Cookies.defaults({ preserve:[]});
    cy.clearLocalStorage();
    cy.clearCookies();
  })
  
  it('Login Test',function(){
    // Visit the homepage
    cy.visit('/', {failOnStatusCode: false});

    // Input email and password
    cy.get(Locators.ENTEREMAIL_LABEL).click().type(Locators.EMAIL_ID)
    cy.get(Locators.ENTERPASSWORD_LABEL).type(Locators.CURRENT_PASSWORD)

    // Click the login button
    cy.contains(Locators.LOGINBUTTON_LABEL,Locators.LOGIN_TEXT).click()
    // Validate the URL after login
    cy.url().should('include',Locators.PATH_PARAMETERS)
  
  })

  it("Page After Login Test", function (){
    
    // Click the action menu
    cy.get(Locators.ACTION_MENU_LABEL).click()

    // Click the edit account option
    cy.get(Locators.EDIT_ACCOUNT_LABEL).click()

     // Click the password button
    cy.get(Locators.PASSWORD_BUTTON_LABEL).click()

    // Input current password, new password, and verify password
    cy.get(Locators.CURRENT_PASSWORD_LABEL).click().type(Locators.CURRENT_PASSWORD)
    cy.get(Locators.NEW_PASSWORD_LABEL).click().type(Locators.NEW_PASSWORD)
    cy.get(Locators.VERIFY_PASSWORD_LABEL).click().type(Locators.NEW_PASSWORD)

     // Click the update button
    cy.contains(Locators.UPDATE_LABEL,Locators.UPDATE_TEXT).click()


    // Getting an error message as "Invalid update user data!"

    // Hence, unable to perform the scenario, so log out
    cy.get(Locators.ACTION_MENU_LABEL).click()
    cy.get(Locators.LOGOUT_LABEL).click()

  })

  it("Negative Tests", function (){

    //Test1
    // Trigger focus on email and password inputs
    cy.get(Locators.ENTEREMAIL_LABEL).click()
    cy.get(Locators.ENTERPASSWORD_LABEL).click()

    // Verify error messages for email field
    cy.get(Locators.ERROR_LABEL).eq(0).should('include.text',"required")

   // Clicked on login button to get error message for Password
    cy.contains(Locators.LOGINBUTTON_LABEL,Locators.LOGIN_TEXT).click()

    // Verify error messages for Password field
    cy.get(Locators.ERROR_LABEL).eq(1).should('include.text',"required")
    
    // Reload the page to test another test case
    cy.reload()

    //Test2
    // Input an invalid email and password
    cy.get(Locators.ENTEREMAIL_LABEL).click().type(Locators.INVALID_EMAIL)
    cy.get(Locators.ENTERPASSWORD_LABEL).type(Locators.INVALID_PASSWORD)

    // Click the login button
    cy.contains(Locators.LOGINBUTTON_LABEL,Locators.LOGIN_TEXT).click()

    // Wait for a brief moment to arear in the video (can adjust the duration)
    cy.wait(2000)

    // Check for the presence of a snackbar with a specific text
    cy.contains(Locators.SNACKBAR_LABEL,Locators.SNACKBAR_TEXT).should('exist')
  });
  
})


