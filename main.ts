huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.OBJECTCLASSIFICATION)
huskylens.writeName(1, "Rechin1")
huskylens.writeName(2, "Rechin2")
huskylens.writeName(3, "Rechin3")
huskylens.writeName(4, "Orca")
huskylens.writeName(5, "Balena")
huskylens.writeName(6, "Delfin")
huskylens.writeName(7, "Nimic")
let alarma = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (alarma == 1) {
        for (let index = 0; index < 4; index++) {
            Environment.ledBrightness(AnalogPin.P1, true)
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(500)
            Environment.ledBrightness(AnalogPin.P1, false)
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.pause(500)
        }
        alarma = 0
    }
})
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showNumber(1)
        alarma = 1
    } else if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showNumber(2)
        alarma = 1
    } else if (huskylens.isAppear(3, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showNumber(3)
        alarma = 1
    } else if (huskylens.isAppear(4, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showNumber(4)
        alarma = 0
    } else if (huskylens.isAppear(5, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showNumber(5)
        alarma = 0
    } else if (huskylens.isAppear(6, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showNumber(6)
        alarma = 0
    } else {
        basic.showNumber(0)
        alarma = 0
    }
    basic.pause(2000)
})
