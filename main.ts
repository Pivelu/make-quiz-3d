input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
let botãonaopressionado = 0
basic.forever(function () {
    while (botãonaopressionado) {
        if (input.pinIsPressed(TouchPin.P0)) {
            basic.showString("A")
            music.ringTone(262)
            botãonaopressionado = false
        } else if (input.pinIsPressed(TouchPin.P0)) {
            basic.showString("B")
            music.ringTone(523)
            botãonaopressionado = false
        }
    }
})
