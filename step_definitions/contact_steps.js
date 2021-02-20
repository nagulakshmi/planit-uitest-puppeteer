const {
    Then
} = require("cucumber");
const { findElementBySelector } = require("../support/find");
const { clickLinkByTextWithNavigation } = require("../support/link");

Then('It should show contact form with below fieldset:', async function (dataTable) {
    const contactFromElements = await findElementBySelector(scope.page, 'label')
    const actailValues = await processContactForm(contactFromElements)
    return assert.deepEqual(actailValues, dataTable.rawTable)
});


Then('I click on {string} button', function (buttonText) {
    return clickLinkByTextWithNavigation(scope.page, buttonText)
});

Then('It should following error messages:', async function (dataTable) {
    const contactFromElements = await findElementBySelector(scope.page, '.help-inline')
    const actailValues = await processContactForm(contactFromElements)
    return assert.deepEqual(actailValues, dataTable.rawTable)
});

async function processContactForm(contactFromElements) {
    let temp = []
    for (let element of contactFromElements) {
        let lableText = await scope.page.evaluate(
            el => el.innerText.trim(), element
        )
        temp.push([lableText])
    }
    return temp
}