async function findFieldByType(page, inputType, fieldText) {
    let matchingElements = await page.$$(inputType)
    let elemetMatched = null

    for (let element of matchingElements) {
        let lableText = await page.evaluate(
            el => el.innerText.trim(), element
        )

        if (lableText === fieldText) {
            elemetMatched = element
        }
    }

    if (elemetMatched == null) {
        throw new Error(`Unable to find an element : ${fieldText}`)
    }

    return elemetMatched
}

async function findAnchorFieldContainText(page, anchorText) {
    return await findFieldByType(page, 'a', anchorText)
}

async function findElementBySelector(page, selector) {
    let matchingElements = await page.$$(selector)
    if (matchingElements !== null && matchingElements.length > 0) {
        console.log('The number of elemenent found', matchingElements.length)
        return matchingElements
    } 
    throw new Error(`Unable to find an element : ${fieldText}`)    
}

module.exports = {
    findFieldByType,
    findAnchorFieldContainText,
    findElementBySelector
}