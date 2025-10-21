basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.showString("door open")
        basic.pause(5000)
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.showString("door closed")
    }
})
