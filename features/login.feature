Feature: Login Functionality

    Scenario: Successfull Login
        Given I Open the login page
        When I login with UserName "admin" and Password "admin123"
        Then I Should see the dashboard
        When I Click on "Admin" From Menu
        Then Admin User Mangement page should open
        And I Get Employee Name
        When I click Add button
        Then New User Page Should Open
        When I Select "Admin" from Role Dropdown
        And I Enter Employee Name "Snehal  Patil"
        And I Select "Enabled" from Status Dropdown
        And I Enter User Name "UserName"
        And I Enter Password "Password123"
        And I Enter Confirm Password "Password123"
        Then I click on Submit button

        