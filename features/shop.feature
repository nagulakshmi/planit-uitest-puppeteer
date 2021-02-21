Feature: Plan it automation interview

    @test
    Scenario: Execute Test case 4
        Given I launch Jupiter planit Applciation
        Then I click on "Shop" menu link
        Then It should show all product items with below:
            | Teddy Bear|
            | Stuffed Frog |
            | Handmade Doll |
            | Fluffy Bunny |
            | Smiley Bear |
            | Funny Cow |
            | Valentine Bear |
            | Smiley Face |
        # Then I click on "Buy" button on Funny Cow
        




