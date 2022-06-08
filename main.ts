let Laufzeit = 0
input.onButtonPressed(Button.A, function () {
    Laufzeit = 0
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Laufzeit)
})
basic.forever(function () {
    Laufzeit += 1
    basic.pause(1000)
})
