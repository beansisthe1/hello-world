input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Giraffe)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("C C E E G G B B ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Ghost)
})
basic.showIcon(IconNames.Chessboard)
