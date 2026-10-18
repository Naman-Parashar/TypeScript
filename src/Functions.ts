/* ## Functions in TypeScript

In TypeScript, you write functions much like JavaScript, but you can add types for parameters and the return value. This helps catch mistakes before running your code.

### 1. Type the parameters and return value

```
function add(a: number, b: number): number {
  return a + b;
}

const result = add(10, 20); // result is number
```

- `a: number` and `b: number` specify parameter types.
- `: number` after the parentheses specifies the return type.

If you return a string instead, TypeScript reports an error.

```
function add(a: number, b: number): number {
  return "30"; // Error: string isn't assignable to number
}
```

### 2. Functions that return nothing: `void`

```
function greet(name: string): void {
  console.log(`Hello, ${name}`);
}
```

`void` means the function's return value isn't intended to be used.

### 3. Optional and default parameters

```
function greet(name: string, greeting?: string): string {
  return `${greeting ?? "Hello"}, ${name}`;
}

greet("Aman");           // "Hello, Aman"
greet("Aman", "Welcome"); // "Welcome, Aman"
```

An optional parameter (`?`) may be omitted. A default parameter supplies a value when it is omitted:

```
function multiply(value: number, by: number = 2): number {
  return value * by;
}

multiply(5);    // 10
multiply(5, 3); // 15
```

### 4. Arrow functions

Arrow functions are common in React:

```
const subtract = (a: number, b: number): number => {
  return a - b;
};

// Concise form:
const double = (value: number): number => value * 2;
```

You can also let TypeScript infer the return type:

```
const double = (value: number) => value * 2; // inferred as (value: number) => number
```

Inference works well when the function’s behavior makes its return type clear.

### 5. Function types

You can describe the shape of a function and store it in a variable:

```
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;
```

Here, `MathOperation` means: a function that takes two numbers and returns a number.

### 6. Union types in parameters

A parameter can accept more than one type:

```
function printId(id: number | string): void {
  console.log(id);
}

printId(101);
printId("SKU-101");
```

If you need to use type-specific methods, narrow the type first:

```
function formatId(id: number | string): string {
  if (typeof id === "number") {
    return id.toFixed(0);
  }

  return id.toUpperCase();
}
```

### 7. Function types in React props

For a callback prop, define the function signature:

```
type ProductProps = {
  name: string;
  onSelect: (productName: string) => void;
};

function ProductRow({ name, onSelect }: ProductProps) {
  return (
    <button onClick={() => onSelect(name)}>
      Select {name}
    </button>
  );
}
```

The parent must pass a function that accepts a string and returns `void`:

```
<ProductRow
  name="Keyboard"
  onSelect={(productName) => console.log(productName)}
/>
```

### 8. Common React event types

TypeScript can type DOM events so you can safely access event properties:

```
function SearchBox() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
  };

  return <input onChange={handleChange} />;
}
```

Useful event types:

| React event  | Type                                  |
| ------------ | ------------------------------------- |
| Input change | `React.ChangeEvent<HTMLInputElement>` |
| Button click | `React.MouseEvent<HTMLButtonElement>` |
| Form submit  | `React.FormEvent<HTMLFormElement>`    |

React’s JSX often infers event types when you write the handler directly inline. Explicit types are handy for separately declared handlers.

### Quick reference

```
// Parameters + return type
function fn(value: string): number { return value.length; }

// No intended return value
function log(value: string): void { console.log(value); }

// Optional parameter
function fn2(value?: string): void {}

// Default parameter
function fn3(value: string = "default"): void {}

// Arrow function
const fn4 = (value: number): number => value * 2;

// Function type
type Callback = (value: string) => void;
```

For React, focus first on: parameter and return types, arrow functions, callback/function types, optional parameters, and event types. These cover most everyday component and handler code. */