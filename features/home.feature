
Feature: Plan it automation interview

    @test
    Scenario: Execute Test case 1
        Given I launch Jupiter planit Applciation
        Then I click on "Contact" menu link
        Then It should show contact form with below fieldset:
            | Forename *|
            | Surname |
            | Email * |
            | Telephone |
            | Message * |
        Then I click on "Submit" button
        Then It should following error messages:
            | Forename is required |
            | Email is required |
            | Message is required |
        Then I enter "Nagalakshmi" in the "Forename *" field
        And I enter "selvaraj" in the "Surname" field
        And I enter "lakshmi.padumanabhan@gmail.com" in the "Email *" field
        And I enter "56668787878" in the "Telephone" field
        And I enter "testing" in the "Message *" field
        Then Validate errors are gone


       
