


var drv = module.exports = {

    driverfunc1: function (value) {

        // force an exception so we get a stack trace. 
        var bla = "hello_world"
        bla = bla + value; 
        bla = 1 + value;
        throw new Error('Throw makes it go boom!')
        return bla;

    }
}