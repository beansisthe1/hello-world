input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Giraffe)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Ghost)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playMelody("C C E E G G B B ", 120)
})
basic.showIcon(IconNames.Chessboard)
