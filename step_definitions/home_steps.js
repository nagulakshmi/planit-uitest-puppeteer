
const {
    Then
} = require("cucumber");

const { clickLinkByText } = require("../support/link");

Then('I click on {string} menu link', function (menuItem) {
    return clickLinkByText(scope.page, menuItem)
});