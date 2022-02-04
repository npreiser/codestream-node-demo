
var hardwaredriver = require("./hardware_driver");

var service = module.exports = {

    customfunc1: function (value) {

        hardwaredriver.driverfunc1(value);
    },
    customfunc2: function (value) {     

        // we need this reviewed please.. now
        


        // is this ok steve +


        hardwaredriver.driverfunc2(value);
    },
    customfunc3: function (value) {

        // steve this is a the 
        // please review this comment. 
        hardwaredriver.driverfunc3(value);
    }

}