let Tafel_3 = 0
basic.forever(function () {
    basic.showNumber(Tafel_3)
    if (Tafel_3 < 12) {
        Tafel_3 += 3
    } else {
        Tafel_3 = 0
    }
})
