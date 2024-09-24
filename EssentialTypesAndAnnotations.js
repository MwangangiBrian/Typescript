/*
  BASIC ANNOTATIONS
*/
// Exercise 1: function to take 2 booleans
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
/*
    OBJECT LITERAL TYPES
*/
//Exercise 1 Object Literal Types
var concatName = function (user) {
    return "".concat(user.first, " ").concat(user.last);
};
// Exercise 2 Optional Property Types
var concatNames = function (user) {
    return "".concat(user.first, " ").concat(user.last); // ? means optional
};
var getRectangleArea = function (rectangle) {
    return rectangle.width * rectangle.height;
};
var getRectanglePerimeter = function (rectangle) {
    return 2 * (rectangle.width + rectangle.height);
};
var processCart = function (cart) {
    // Do something with the cart in here
};
processCart({
    userId: 'user123',
    items: ['item1', 'item2', 'item3'],
});
var processRecipe = function (recipe) {
    // Do something with the recipe in here
};
processRecipe({
    title: 'Chocolate Chip Cookies',
    ingredients: [
        { name: 'Flour', quantity: '2 cups' },
        { name: 'Sugar', quantity: '1 cup' },
    ],
    instructions: '...',
});
// Exercise 3: Tuples
var setRange = function (range) {
    var x = range[0];
    var y = range[1];
};
// Exercise 4:  Optional members of Tuples
var goToLocation = function (coordinates) {
    var latitude = coordinates[0];
    var longitude = coordinates[1];
    var elevation = coordinates[2];
};
var userMap = new Map();
userMap.set(1, { name: 'Max', age: 30 });
userMap.set(2, { name: 'Manuel', age: 31 });
//@ts-expect-error
userMap.set('3', { name: 'Anna', age: 29 });
//@ts-expect-error
userMap.set(3, '123');
// Exercise 2: JSON.parse
var parsedData = JSON.parse('{"name": "Alice", "age": 30}');
/*
  TYPING FUNCTIONS
*/
// Exercise 1: Optional Function Parameters
var concatName1 = function (first, last) {
    if (!last) {
        return first;
    }
    return "".concat(first, " ").concat(last);
};
var result1 = concatName1('John', 'Doe');
var result3 = concatName1('John');
// Exercise 2: Default Function Parameters.(use 'Pockok' as default value)
var concatName2 = function (first, last) {
    if (last === void 0) { last = 'Pockok'; }
    if (!last) {
        return first;
    }
    return "".concat(first, " ").concat(last);
};
var result4 = concatName2('John');
// Exercise 3: Rest Parameters
function concatenate() {
    var strings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        strings[_i] = arguments[_i];
    }
    return strings.join('');
}
var modifyUser = function (user2, id, makeChange) {
    return user2.map(function (u) {
        if (u.id === id) {
            return makeChange(u);
        }
        return u;
    });
};
var users = [
    { id: '1', name: 'John' },
    { id: '2', name: 'Jane' },
];
modifyUser(users, '1', function (user) {
    return __assign(__assign({}, user), { name: 'Waqas' });
});
// Exercise 5: Functions returning Void
var addClickEventListener = function (listener) {
    document.addEventListener('click', listener);
};
addClickEventListener(function () {
    console.log('Clicked!');
});
addClickEventListener(
// @ts-expect-error
'abc');
// Exercise 6: void vs undefined
var acceptsCallback = function (callback) {
    callback();
};
var returnString = function () {
    return 'Hello!';
};
acceptsCallback(returnString);
// Exercise 7: Typing Async Functions
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('https://api.example.com/data')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
