function hdg () {
    basic.showNumber(input.compassHeading())
}
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (text_list[y]))
})
function temp () {
    basic.showNumber(input.temperature())
}
input.onButtonPressed(Button.AB, function () {
    if (y == 0) {
        temp()
    } else if (y == 1) {
        hdg()
    } else if (y == 2) {
        light2()
    } else if (y == 3) {
        mic()
    }
    basic.clearScreen()
})
function mic () {
    basic.showNumber(input.soundLevel())
}
input.onButtonPressed(Button.B, function () {
    y += 1
    if (y == x - 0) {
        y = 0
    }
    basic.showString("" + (text_list[y]))
})
function light2 () {
    basic.showNumber(input.lightLevel())
}
let y = 0
let x = 0
let text_list: string[] = []
text_list = ["Temp", "Hdg", "Light", "Mic"]
x = text_list.length
y = 0
