
Feature: Plan it automation interview

    @test
    Scenario: Test case 1- Verify form validation messages
        Given I launch Jupiter planit Applciation
        Then I click on "Contact" menu link
        Then It should show contact form with below fieldset:
            | Forename * |
            | Surname    |
            | Email *    |
            | Telephone  |
            | Message *  |
        Then I click on "Submit" button
        Then It should following error messages:
            | Forename is required |
            | Email is required    |
            | Message is required  |
        Then I enter "Nagalakshmi" in the "Forename *" field
        And I enter "selvaraj" in the "Surname" field
        And I enter "lakshmi.padumanabhan@gmail.com" in the "Email *" field
        And I enter "56668787878" in the "Telephone" field
        And I enter "testing" in the "Message *" field
        Then Validate errors are gone
        

    @test1
    Scenario: Test Case 2 - Verify form validation and successful submission message
        Given I launch Jupiter planit Applciation
        Then I click on "Contact" menu link
        Then It should show contact form with below fieldset:
            | Forename * |
            | Surname    |
            | Email *    |
            | Telephone  |
            | Message *  |
        Then I click on "Submit" button
        Then I enter "Nagalakshmi" in the "Forename *" field
        And I enter "selvaraj" in the "Surname" field
        And I enter "lakshmi.padumanabhan@gmail.com" in the "Email *" field
        And I enter "56668787878" in the "Telephone" field
        And I enter "testing" in the "Message *" field
        Then Validate errors are gone
        Then I click on "Submit" button
        Then I should see "Thanks Nagalakshmi, we appreciate your feedback." success message

    @test
    Scenario: Test Case 3 - Verify form validation with invalid data field
        Given I launch Jupiter planit Applciation
        Then I click on "Contact" menu link
        Then It should show contact form with below fieldset:
            | Forename * |
            | Surname    |
            | Email *    |
            | Telephone  |
            | Message *  |
        Then I enter "123455" in the "Forename *" field
        And I enter "lakshmi.padumanabha" in the "Email *" field
        And I enter "!@#$%^&" in the "Message *" field
        Then It should following error messages:
            | Please enter a valid email |
            



