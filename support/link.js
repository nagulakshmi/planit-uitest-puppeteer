async function clickLinkByText(page, linkText) {
    const element = await find.findAnchorFieldContainText(page, linkText)
    await element.focus()
    return await Promise.all([
        delay(1000),
        element.click(),
        page.waitForNavigation({
            waitUntil: "networkidle0",
            timeout: 60000
        })
    ])
}

async function clickLinkByTextWithNavigation(page, linkText) {
    const element = await find.findAnchorFieldContainText(page, linkText)
    await element.focus()
    return await Promise.all([
        delay(10000),
        element.click()
    ])

}

function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    })
}

module.exports = {
    clickLinkByText,
    clickLinkByTextWithNavigation
}