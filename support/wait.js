async function elementVisible(page, selector) {
    return await page.waitForSelector(selector, {
        timeout: constants.pageTimeout,
        visible: true
    })
}


module.exports = {
    elementVisible,
}