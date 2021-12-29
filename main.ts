enum RadioMessage {
    bogus1 = 6130,
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    if (input.lightLevel() > 150) {
        radio.sendValue("light", input.lightLevel())
    } else {
        radio.sendValue("dark", input.lightLevel())
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("oscar", 25)
})
radio.onReceivedValue(function (name, value) {
    if (name == "light") {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (name == "dark") {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
})
basic.showNumber(input.lightLevel())
