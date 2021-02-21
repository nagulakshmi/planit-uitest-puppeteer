const { assert } = require("chai")
const { Then } = require("cucumber")
const {
    findElementBySelector,
    findElementByCssSelector
} = require("../support/find")
const { clickLinkByText } = require("../support/link")
const { sendText } = require("../support/inputfield")

Then('It should show contact form with below fieldset:', async function(dataTable) {
    const contactFormElements = await findElementBySelector(scope.page, 'label')
    const actualValues = await processContactForm(contactFormElements)
    return assert.deepEqual(actualValues, dataTable.rawTable)
})

Then('I click on {string} button', function(buttonText) {
    return clickLinkByText(scope.page, buttonText)
})

Then('It should following error messages:', async function(dataTable) {
    const contactFormElements = await findElementBySelector(scope.page, '.help-inline')
    const actualValues = await processContactForm(contactFormElements)
    return assert.deepEqual(actualValues, dataTable.rawTable)
})

Then('I enter {string} in the {string} field', async function(inputValue, labelText) {
    console.log("input", inputValue)
    return await sendText(scope.page, labelText, inputValue)
})

Then('Validate errors are gone', async function() {
    const contactFormElements = await findElementByCssSelector(scope.page, '.help-inline')
    return assert.equal(contactFormElements.length, 0)
});

Then('I should see {string} success message', async function(string) {
    const contactFormElements = await findElementByCssSelector(scope.page, '.alert-success')
    return assert.deepEqual(contactFormElements, string)
});

// Then('Then I should see {string} error message', async function(inputValue, errorText) {
//     console.log("input", inputValue)
//     return await sendText(scope.page, errorText, inputValue)
// })

async function processContactForm(contactFormElements) {
    let temp = []
    for (let element of contactFormElements) {
        let lableText = await scope.page.evaluate(
            el => el.innerText.trim(), element
        )
        temp.push([lableText])
    }
    return temp
}