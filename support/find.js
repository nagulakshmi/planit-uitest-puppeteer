async function findFieldByType(page, inputType, fieldText) {

    let matchingElements = await page.$$(inputType)
    let elementMatched = null

    for (let element of matchingElements) {
        let lableText = await page.evaluate(
            el => el.innerText.trim(), element
        )
        if (lableText === fieldText) {
            elementMatched = element
        }
    }



    if (elementMatched == null) {
        throw new Error(`Unable to find an element : ${fieldText}`)
    }

    return elementMatched
}

async function findAnchorFieldContainText(page, anchorText) {
    return await findFieldByType(page, 'a', anchorText)
}

async function findInputFieldWithLabel(page, labelText) {
    let elementMatched = await findFieldByType(page, 'label', labelText)
    const labelElement = await page.evaluate(
        el => el.getAttribute('for'), elementMatched
    )
    let element = await page.$(`input[id=${labelElement}`)
    if (element == null) {
        element = await page.$(`textarea[id=${labelElement}`)

    }
    return element
}

async function findButtonFieldContainText(page, buttonText) {

}

async function findElementBySelector(page, selector) {
    let matchingElements = await page.$$(selector)
    if (matchingElements !== null && matchingElements.length > 0) {
        console.log('The number of element found', matchingElements.length)
        return matchingElements
    }
    throw new Error(`Unable to find an element : ${fieldText}`)
}

async function findElementByCssSelector(page, selector) {
    return await page.$$(selector)

}

module.exports = {
    findFieldByType,
    findAnchorFieldContainText,
    findElementBySelector,
    findInputFieldWithLabel,
    findElementByCssSelector

}