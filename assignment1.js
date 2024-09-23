// Basic Annotations
// Exercise 1: function to take 2 booleans
var add = function (a, b) {
    return a + b;
};
var result = add(1, 2);
// Exercise 2: Annotating empty parameters
var concatTwoStrings = function (a, b) {
    return [a, b].join(' ');
};
var result2 = concatTwoStrings('hello', 'world');
// Exercise 3: The Basic Types
var example1 = 'Hello World';
var example2 = 42;
var example3 = true;
var example4 = Symbol();
var example5 = 123n;
// Exercise 4: The `any` Type
var handleFormData = function (e) {
    e.preventDefault();
    var data = new FormData(e.target);
    var value = Object.fromEntries(data.entries());
    return value;
};
