 const {
     assert
 } = require("chai");
 const {
     Then
 } = require("cucumber");
 const {
     clickLinkByText
 } = require("../support/link");

 const {
     findElementBySelector,
 } = require("../support/find");
 const { elementVisible } = require("../support/wait");

 Then('It should show all product items with below:', async function(dataTable) {
     const contactFormElements = await findElementBySelector(scope.page, 'h4')
     const actualValues = await processContactForm(contactFormElements)
     return assert.deepEqual(actualValues, dataTable.rawTable)
 });

 Then('I click on Buy button on {string}', async function(productName) {
     const productsElements = await findElementBySelector(scope.page, '.product')
     for (let productElm of productsElements) {
         const titleElement = await findElementBySelector(productElm, 'h4')
         const lableText = await scope.page.evaluate(
             el => el.innerText.trim(), titleElement[0]
         )
         if (lableText == productName) {
             const elements = await findElementBySelector(productElm, 'a')
             assert.equal(elements.length, 1, "Buy button is not availbale")
             await elements[0].focus()
             return await Promise.all([
                 elements[0].click()
             ])
         }

     }
     throw new Error(`Unable to find an element : ${productName}`)

 })

 Then('I should see the following items in the cart:', async function(dataTable) {
     await elementVisible(scope.page, '.cart-items')
     const cartElements = await findElementBySelector(scope.page, '.cart-item')
     for (let cartElm of cartElements) {
         const columnElements = await findElementBySelector(cartElm, 'td')
         for (let tdElm of columnElements) {
             const qtyElm = await findElementBySelector(tdElm, '.input-mini')
             const columnText = null;
             if (qtyElm.length !== 0) {
                 columnText = await scope.page.evaluate(
                     el => el.value.trim(), tdElm
                 )
             } else {
                 columnText = await scope.page.evaluate(
                     el => el.innerText.trim(), tdElm
                 )
             }
             console.log("columnText", columnText)
         }
     }
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