const {
    Given
} = require("cucumber")

Given('I launch Jupiter planit Applciation', async function() {
    try {
        await scope.page.goto(constants.baseUrl, {
            waitUntil: ["load", "networkidle0", "domcontentloaded"]
        })
    } catch (error) {
        console.log("Page not loaded successfully...")

    }
});