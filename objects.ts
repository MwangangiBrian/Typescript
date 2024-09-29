// ------EXTENDING OBJECTS------

// Exercise 1: Create an Intersection Type
type User1 = {
  name: string;
  email: string;
} & BaseEntity;

type Product = {
  name: string;
  price: number;
} & BaseEntity;

type BaseEntity = {
  id: string;
  createdAt: Date;
};

// Exercise 2: Extending Interfaces
interface User3 extends BaseEntity2 {
  name: string;
  email: string;
}

interface Product2 extends BaseEntity2 {
  name: string;
  price: number;
}

interface BaseEntity2 {
  id: string;
  createdAt: Date;
}

// -------DYNAMIC OBJECTS KEYS-------

// Exercise 1: Use an Index Signature for Dynamic Keys
const scores: { [key: string]: number } = {};

scores.math = 95;
scores.english = 90;
scores.science = 85;

// Exercise 2: Default Properties with Dynamic Keys
interface Scores {
  [subject: string]: number;
  math: number;
  english: number;
  science: number;
}

// @ts-expect-error science should be provided
const scores1: Scores = {
  math: 95,
  english: 90,
};

scores1.athletics = 100;
scores1.french = 75;
scores1.spanish = 70;

// Exercise 3: Restricting Object Keys With Records
type Environment = 'development' | 'production' | 'staging';

type Configurations = Record<
  Environment,
  { apiBaseUrl: string; timeout: number }
>;

const configurations: Configurations = {
  development: {
    apiBaseUrl: 'http://localhost:8080',
    timeout: 5000,
  },
  production: {
    apiBaseUrl: 'https://api.example.com',
    timeout: 10000,
  },
  staging: {
    apiBaseUrl: 'https://staging.example.com',
    timeout: 8000,
  },
  // @ts-expect-error
  notAllowed: {
    apiBaseUrl: 'https://staging.example.com',
    timeout: 8000,
  },
};

// Exercise 4: Dynamic Key Support
const hasKey = (obj: object, key: string | number) => {
  return obj.hasOwnProperty(key);
};

//--------REDUCING DUPLICATION WITH UTILITY TYPES------------

// Exercise 1: Expecting Certain Properties
interface User3 {
  id: string;
  name: string;
  email: string;
  role: string;
}

type Excluded = Omit<User3, 'id' | 'role'>;

const fetchUser = async (): Promise<Excluded> => {
  const response = await fetch('/api/user');
  const user = await response.json();
  return user;
};

const example = async () => {
  const user = await fetchUser();
};

// Exercise 2: Updating a Product
interface Product1 {
  id: number;
  name: string;
  price: number;
  description: string;
}

const updateProduct = (
  id: number,
  productInfo: Partial<Omit<Product1, 'id'>>
) => {
  //do something with productInfo
  console.log(
    `Updating product with id ${id} with the following info:`,
    productInfo
  );
};

updateProduct(1, {
  name: 'Book',
});

updateProduct(1, {
  price: 12.99,
});
