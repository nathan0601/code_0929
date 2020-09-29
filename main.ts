let grade = 0
input.onPinPressed(TouchPin.P0, function () {
    if (grade < 84) {
        basic.showString("A-")
    }
    if (grade == 85) {
        basic.showString("A")
    }
    if (grade == 86) {
        basic.showString("A")
    }
    if (grade == 87) {
        basic.showString("A")
    }
    if (grade == 88) {
        basic.showString("A")
    }
    if (grade == 89) {
        basic.showString("A")
    }
    if (grade > 90) {
        basic.showString("A+")
    }
})
input.onGesture(Gesture.Shake, function () {
    grade = randint(80, 100)
})
