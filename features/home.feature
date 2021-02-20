
Feature: Plan it automation interview

    @test
    Scenario: Execute Test case 1
        Given I launch Jupitar plait Applciation
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
        Then I enter "Nagalakshmi" in the "forename" field