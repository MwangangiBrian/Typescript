// Basic Annotations
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
