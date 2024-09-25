/* UNIONS AND LITERALS
 */

// Exercise 1: string or null
function getUsername(username: string | null) {
  if (username !== null) {
    return `User: ${username}`;
  } else {
    return 'Guest';
  }
}

const results = getUsername('Alice');

const results2 = getUsername(null);

// Exercise 2:  Restricting Function Parameters

type Direction = 'up' | 'down' | 'left' | 'right';
function move(direction: Direction, distance: number) {
  return `${direction} ${distance}m`;
}

move('up', 10);

move('left', 5);

move(
  // @ts-expect-error - "up-right" is not a valid direction
  'up-right',
  10
);

move(
  // @ts-expect-error - "down-left" is not a valid direction
  'down-left',
  20
);

/*
    NARROWING
*/
const getAlbumYear = (year: string | number) => {
  if (typeof year === 'string') {
    console.log(`The album was released in ${year.toUpperCase()}.`); // `year` is string
  } else if (typeof year === 'number') {
    console.log(`The album was released in ${year.toFixed(0)}.`); // `year` is number
  }
};
getAlbumYear('two thousand and ten');
// Exercise 1: Narrowing with if Statements
function validateUsername(username: string | null): boolean {
  if (typeof username === 'string' && username.length > 5) {
    return true;
  }
  return false;
}

console.log(validateUsername('alices'));
console.log(validateUsername(null));

// Exercise 2: Throwing Errors to Narrow
const appElement = document.getElementById('app');
if (!appElement) {
  throw new Error('App element not found');
}

// Exercise 3: Using in to narrow
type APIResponse =
  | {
      data: {
        id: string;
      };
    }
  | {
      error: string;
    };

const handleResponse = (response: APIResponse) => {
  // How do we check if 'data' is in the response?

  if ('data' in response) {
    return response.data.id;
  } else {
    throw new Error(response.error);
  }
};

// ------------ UNKNOWN AND NEVER ---------------

// Exercise 1: Narrowing Errors with instanceof

const somethingDangerous = () => {
  if (Math.random() > 0.5) {
    throw new Error('Something went wrong');
  }

  return 'all good';
};

try {
  somethingDangerous();
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
    //'error' is of type 'unknown'.
  }
}

// Exercise 2: Narrowing unknown to a Value

const parseValue = (value: any) => {
  if (true) {
    return value.data.id;
  }
  throw new Error('Parsing error!');
};

// Exercise 3: Reusable Type Guards

const isParseValue = (value): value is { data: { id: string } } => {
  return (
    value !== null &&
    'data' in value &&
    typeof value.data === 'object' &&
    value.data !== null &&
    'id' in value.data &&
    typeof value.data.id === 'string'
  );
};
const parseValue1 = (value: unknown) => {
  if (isParseValue(value)) {
    return value.data.id;
  }
  throw new Error('Parsing error!');
};

const parseValueAgain = (value: unknown) => {
  if (isParseValue(value)) {
    return value.data.id;
  }
  throw new Error('Parsing error!');
};

/*
    DISCRIMINATED UNIONS
*/

// Exercise 1: Destructuring a Discriminated Union
type Dimensions =
  | { kind: 'square'; sideLength: number }
  | { kind: 'circle'; radius: number };

function calculateArea(dimensions: Dimensions) {
  if (dimensions.kind === 'circle') {
    const { radius } = dimensions;

    return 3.41 * radius * radius;
  } else {
    const { sideLength } = dimensions;

    return sideLength * sideLength;
  }
}
