// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// plusOne

describe('plusOne', function() {
    it('should be defined a function', function() {
        expect(typeof plusOne).toBe("function");
    });
    it('should be of the number data type' , function() {
        expect(typeof plusOne()).toBe("number")
    });
    it('should return 5 when passed 4' , function() {
        expect(plusOne(4)).toBe(5)
    });
    it('should return 0 when passed anything but a number' , function() {
        expect(plusOne(true)).toBe(0)
    });
});

//sayHello

describe('sayHello' , function(){
    it('should be a defined function' , function(){
        expect(typeof sayHello).toBe("function");
    });
    it('should return a string when called' , function () {
        expect(typeof sayHello()).toBe("string")
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello()).toBe("Hello, Jane!")
    })
});

//
