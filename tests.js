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
        expect(typeof sayHello).toBe("function")
    });
    it('should return a string when called' , function(){
        expect(typeof sayHello()).toBe("string")
    });
    it('should return the string "Hello, Jane!" when executed' , function(){
        expect(sayHello("Jane")).toBe("Hello, Jane!")
    });
    it('should return the string "Hello, Alex!" when executed' , function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    });
    it('should return the string "Hello, Pat!" when executed' , function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
    it('should return the string "Hello, World!" when passed a boolean value' , function(){
        expect(sayHello(Boolean())).toBe("Hello, World!")
    });
});

describe('isFive' , function() {
    it('should be a defined function' , function() {
        expect(typeof isFive).toBe("function")
    });
    it('should be the boolean data type' , function() {
        expect(typeof isFive()).toBe("boolean")
    });
    it('should return true when passed a number' , function() {
        expect(isFive("number")).toBe(true)
    });
    it('should return true when passed a string' , function() {
        expect(isFive("string")).toBe(true)
    });
});


//
