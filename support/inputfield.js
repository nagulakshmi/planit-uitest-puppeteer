async function sendText(page, labelText, inputValue) {
    const field = await find.findInputFieldWithLabel(page, labelText)
    await field.focus()
    await field.type(inputValue)
}

module.exports = {
    sendText
}