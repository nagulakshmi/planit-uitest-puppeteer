Feature: Plan it automation interview

    @test
    Scenario: Test case 4- Verify the items are in the cart
        Given I launch Jupiter planit Applciation
        Then I click on "Shop" menu link
        Then It should show all product items with below:
            | Teddy Bear     |
            | Stuffed Frog   |
            | Handmade Doll  |
            | Fluffy Bunny   |
            | Smiley Bear    |
            | Funny Cow      |
            | Valentine Bear |
            | Smiley Face    |
        Then I click on Buy button on "Funny Cow"
        And I click on Buy button on "Funny Cow"
        And I click on Buy button on "Fluffy Bunny"
        Then I click on "Cart" menu link
        Then I should see the following items in the cart:
            | Funny Cow    | $10.99 | 2 | $21.98 |
            | Fluffy Bunny | $9.99  | 1 | $9.99  |






