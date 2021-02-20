async function sendText(page, labelText, inputValue) {
    console.log("input", labelText)
    const field = await find.findInputFieldWithLabel(page, labelText)
    console.log("field", field)
    await field.focus()
    await field.type(inputValue)
}

module.exports = {
    sendText
}