// helloWorld function 
function helloWorld(input) {
        return "Hello, World!";
}

function plusOne(num) {
    if (typeof num === "number") {
        return num + 1;
    }
    return 0;
}

//function sayHello(input) {
//    if (input === "Alex") {
//        return "Hello, Alex!";
//    }else if (input === "Pat") {
//        return "Hello, Pat!";
//    }else if (input === "Jane") {
//        return "Hello, Jane!";
//    }else {
//        return ""
//    }
//

function sayHello(input) {
    if (typeof input !== "string") {
        return "Hello, World!" ;
    }
    return "Hello, " + input + "!";
}

function isFive(val) {
    if (typeof val === "number") {
        return true;
    }else if (typeof val === "string") {
        return true;
    }
    return (typeof val === "boolean");
}





