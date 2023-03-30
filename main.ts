let answer = 0
let Avrg = 0
let NbQ = 0
let random = 0
let random2 = 0
input.onButtonPressed(Button.A, function () {
    answer += 1
})
input.onButtonPressed(Button.AB, function () {
    if (Avrg >= NbQ / 2) {
        if (Avrg > NbQ / 2 + NbQ / 4) {
            basic.showLeds(`
                # # . # #
                # # . # #
                . . . . .
                # . . . #
                . # # # .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
        }
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
    NbQ = 0
    Avrg = 0
})
input.onButtonPressed(Button.B, function () {
    answer = 0
    random = 0
    random2 = 0
    basic.clearScreen()
    random += randint(0, 5)
    basic.showNumber(random)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    random2 += randint(0, 5)
    basic.showNumber(random2)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.pause(8000)
    NbQ += 1
    if (answer == random + random2) {
        basic.showIcon(IconNames.Yes)
        Avrg += Avrg + 1
        music.playMelody("C5 B A - - - - - ", 500)
    } else {
        basic.showIcon(IconNames.No)
        music.playMelody("C - C - - - - - ", 500)
    }
})
basic.forever(function () {
	
})
