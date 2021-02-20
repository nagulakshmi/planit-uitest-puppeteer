const { Then } = require("cucumber");

const { clickLinkByTextWithNavigation } = require("../support/link");

Then('I click on {string} menu link', function(menuItem) {
    return clickLinkByTextWithNavigation(scope.page, menuItem)
});