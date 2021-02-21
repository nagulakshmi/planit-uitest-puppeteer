async function clickByButton(page, buttonText) {
    const element = await find.findButtonFieldContainText(page, buttonText)
    await element.focus()
    await Promise.all([
        element.click(),
        page.waitForNavigation({
            waitUntil: "networkidle0",
            timeout: 60000
        })
    ])
}

module.exports = {
    clickByText

}