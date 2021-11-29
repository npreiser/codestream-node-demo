
var hardwaredriver = require("./hardware_driver");

var service = module.exports = {

    customfunc1: function (value) {

        hardwaredriver.driverfunc1(value);
    }
}