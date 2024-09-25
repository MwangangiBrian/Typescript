/* UNIONS AND LITERALS
 */
// Exercise 1: string or null
function getUsername(username) {
    if (username !== null) {
        return "User: ".concat(username);
    }
    else {
        return 'Guest';
    }
}
var results = getUsername('Alice');
var results2 = getUsername(null);
function move(direction, distance) {
    return "".concat(direction, " ").concat(distance, "m");
}
move('up', 10);
move('left', 5);
move(
// @ts-expect-error - "up-right" is not a valid direction
'up-right', 10);
move(
// @ts-expect-error - "down-left" is not a valid direction
'down-left', 20);
/*
    NARROWING
*/
var getAlbumYear = function (year) {
    if (typeof year === 'string') {
        console.log("The album was released in ".concat(year.toUpperCase(), ".")); // `year` is string
    }
    else if (typeof year === 'number') {
        console.log("The album was released in ".concat(year.toFixed(0), ".")); // `year` is number
    }
};
getAlbumYear('two thousand and ten');
// Exercise 1: Narrowing with if Statements
function validateUsername(username) {
    if (typeof username === 'string' && username.length > 5) {
        return true;
    }
    return false;
}
console.log(validateUsername('alices'));
console.log(validateUsername(null));
// Exercise 2: Throwing Errors to Narrow
var appElement = document.getElementById('app');
if (!appElement) {
    throw new Error('App element not found');
}
var handleResponse = function (response) {
    // How do we check if 'data' is in the response?
    if ('data' in response) {
        return response.data.id;
    }
    else {
        throw new Error(response.error);
    }
};
// ------------ UNKNOWN AND NEVER ---------------
// Exercise 1: Narrowing Errors with instanceof
var somethingDangerous = function () {
    if (Math.random() > 0.5) {
        throw new Error('Something went wrong');
    }
    return 'all good';
};
try {
    somethingDangerous();
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
        //'error' is of type 'unknown'.
    }
}
// Exercise 2: Narrowing unknown to a Value
var parseValue = function (value) {
    if (true) {
        return value.data.id;
    }
    throw new Error('Parsing error!');
};
// Exercise 3: Reusable Type Guards
var isParseValue = function (value) {
    return (value !== null &&
        'data' in value &&
        typeof value.data === 'object' &&
        value.data !== null &&
        'id' in value.data &&
        typeof value.data.id === 'string');
};
var parseValue1 = function (value) {
    if (isParseValue(value)) {
        return value.data.id;
    }
    throw new Error('Parsing error!');
};
var parseValueAgain = function (value) {
    if (isParseValue(value)) {
        return value.data.id;
    }
    throw new Error('Parsing error!');
};
function calculateArea(dimensions) {
    if (dimensions.kind === 'circle') {
        var radius = dimensions.radius;
        return 3.41 * radius * radius;
    }
    else {
        var sideLength = dimensions.sideLength;
        return sideLength * sideLength;
    }
}
