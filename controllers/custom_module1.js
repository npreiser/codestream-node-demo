
var hardwaredriver = require("./hardware_driver");

var service = module.exports = {

    customfunc1: function (value) {

        hardwaredriver.driverfunc1(value);
    },
    customfunc2: function (value) {

        hardwaredriver.driverfunc2(value);
    },
    customfunc3: function (value) {

        hardwaredriver.driverfunc3(value);
    }

}