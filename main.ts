let marxa = 0
basic.forever(function () {
    if (marxa == 0 && input.soundLevel() > 100) {
        marxa = 1
    }
    if (marxa == 1 && input.soundLevel() > 100) {
        marxa = 0
    }
})
// Seguidor línia central.
// SENTIT HORARI 
basic.forever(function () {
    while (marxa == 1) {
        if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
            cuteBot.motors(30, 30)
        }
        if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
            cuteBot.motors(10, 30)
        }
        if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
            cuteBot.motors(30, 10)
        }
    }
    cuteBot.stopcar()
})
