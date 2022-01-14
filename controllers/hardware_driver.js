
class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }

var drv = module.exports = {

    driverfunc1: function (value) {

        // force an exception so we get a stack trace. 
        var bla = "hello_world"
        bla = bla + value; 
        bla = 1 + value;
        throw new Error('Throw makes it go boom!')
        return bla;

    },

    driverfunc2: function (value) {

        // force an exception so we get a stack trace. 
        var bla = "hello_world"
        bla = bla + value; 
        bla = 1 + value;
        throw new Error('This is another error')
        return bla;

    },
    driverfunc3: function (value) {

        // force an exception so we get a stack trace. 
        var bla = "hello_world"
        bla = bla + value; 
        bla = 1 + value;
        throw new ValidationError('This is a validation error')
        return bla;

    }
}