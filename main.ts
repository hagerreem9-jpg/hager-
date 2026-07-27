let open = 0
input.onButtonPressed(Button.A, function () {
    open = 10
    while (open >= 0) {
        basic.showNumber(open)
        basic.pause(100)
        open += -1
    }
    basic.showString("Done")
})
