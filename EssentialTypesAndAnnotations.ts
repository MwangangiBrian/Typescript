/*
  BASIC ANNOTATIONS
*/
// Exercise 1: function to take 2 booleans

const add = (a: number, b: number) => {
  return a + b;
};

const result = add(1, 2);

// Exercise 2: Annotating empty parameters

const concatTwoStrings = (a: string, b: string) => {
  return [a, b].join(' ');
};

const result2 = concatTwoStrings('hello', 'world');

// Exercise 3: The Basic Types

let example1: string = 'Hello World';
let example2: number = 42;
let example3: boolean = true;
let example4: symbol = Symbol();
let example5: bigint = 123n;

// Exercise 4: The `any` Type

const handleFormData = (e: any) => {
  e.preventDefault();

  const data = new FormData(e.target);

  const value = Object.fromEntries(data.entries());

  return value;
};

/*
    OBJECT LITERAL TYPES
*/

//Exercise 1 Object Literal Types
const concatName = (user: { first: string; last: string }) => {
  return `${user.first} ${user.last}`;
};

// Exercise 2 Optional Property Types
const concatNames = (user: { first: string; last?: string }) => {
  return `${user.first} ${user.last}`; // ? means optional
};

/*
    TYPE ALIASES
*/

type Shape = {
  width: number;
  height: number;
};
const getRectangleArea = (rectangle: Shape) => {
  return rectangle.width * rectangle.height;
};

const getRectanglePerimeter = (rectangle: Shape) => {
  return 2 * (rectangle.width + rectangle.height);
};

/*
    ARRAYS AND TUPLES
*/

// Exercise 1: Array Type
type ShoppingCart = {
  userId: string;
  items: string[];
};

const processCart = (cart: ShoppingCart) => {
  // Do something with the cart in here
};

processCart({
  userId: 'user123',
  items: ['item1', 'item2', 'item3'],
});

// Exercise 2: Array of Objects

type Ingredient = {
  name: string;
  quantity: string;
};
type Recipe = {
  title: string;
  instructions: string;
  ingredients: Ingredient[];
};

const processRecipe = (recipe: Recipe) => {
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

const setRange = (range: Array<number>) => {
  const x = range[0];
  const y = range[1];
};

// Exercise 4:  Optional members of Tuples
const goToLocation = (coordinates: [number, number, ...number[]]) => {
  const latitude = coordinates[0];
  const longitude = coordinates[1];
  const elevation = coordinates[2];
};

/*
  PASSING TYPES TO FUNCTIONS
*/

// Exercise 1: Passing Types to Map

type User = {
  name: string;
  age: number;
};
const userMap = new Map<number, User>();

userMap.set(1, { name: 'Max', age: 30 });
userMap.set(2, { name: 'Manuel', age: 31 });
//@ts-expect-error
userMap.set('3', { name: 'Anna', age: 29 });
//@ts-expect-error
userMap.set(3, '123');

// Exercise 2: JSON.parse

const parsedData = <
  {
    name: string;
    age: number;
  }
>JSON.parse('{"name": "Alice", "age": 30}');

/*
  TYPING FUNCTIONS
*/

// Exercise 1: Optional Function Parameters
const concatName1 = (first: string, last?: string) => {
  if (!last) {
    return first;
  }

  return `${first} ${last}`;
};

const result1 = concatName1('John', 'Doe');
const result3 = concatName1('John');

// Exercise 2: Default Function Parameters.(use 'Pockok' as default value)
const concatName2 = (first: string, last: string = 'Pockok') => {
  if (!last) {
    return first;
  }

  return `${first} ${last}`;
};
const result4 = concatName2('John');

// Exercise 3: Rest Parameters
function concatenate(...strings: string[]) {
  return strings.join('');
}

// Exercise 4: Function Types
type User2 = {
  id: string;
  name: string;
};

type makeChangeFunction = (user: User2) => User2;

const modifyUser = (
  user2: User2[],
  id: string,
  makeChange: makeChangeFunction
) => {
  return user2.map((u) => {
    if (u.id === id) {
      return makeChange(u);
    }

    return u;
  });
};

const users: User2[] = [
  { id: '1', name: 'John' },
  { id: '2', name: 'Jane' },
];

modifyUser(users, '1', (user) => {
  return { ...user, name: 'Waqas' };
});

// Exercise 5: Functions returning Void
const addClickEventListener = (listener: () => void) => {
  document.addEventListener('click', listener);
};

addClickEventListener(() => {
  console.log('Clicked!');
});

addClickEventListener(
  // @ts-expect-error
  'abc'
);

// Exercise 6: void vs undefined
const acceptsCallback = (callback: () => void) => {
  callback();
};
const returnString = () => {
  return 'Hello!';
};

acceptsCallback(returnString);

// Exercise 7: Typing Async Functions
async function fetchData(): Promise<number> {
  const response = await fetch('https://api.example.com/data');

  const data = await response.json();

  return data;
;}
