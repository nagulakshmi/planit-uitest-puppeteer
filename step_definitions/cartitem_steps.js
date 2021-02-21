 const {
     Then
 } = require("cucumber")

 const {
     findElementBySelector,
 } = require("../support/find")

 Then('It should show all product items with below:', async function(dataTable) {
     const contactFormElements = await findElementBySelector(scope.page, 'h4')
     const actualValues = await processContactForm(contactFormElements)
     return assert.deepEqual(actualValues, dataTable.rawTable)
 });


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