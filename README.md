# TypeScript Types

Here are the important types you can use in TypeScript, especially for React and frontend development.

## 1. Common Primitive Types

| Type | Example | Description |
|---|---|---|
| `string` | `let name: string = "NovaCart";` | Text |
| `number` | `let price: number = 100;` | Integers and decimals |
| `boolean` | `let active: boolean = true;` | True or false |
| `bigint` | `let id: bigint = 100n;` | Large integers |
| `symbol` | `let key: symbol = Symbol("id");` | Unique identifiers |

## 2. Special Types

| Type | Example | Meaning |
|---|---|---|
| `any` | `let x: any = 10;` | Disables most type checking |
| `unknown` | `let x: unknown = 10;` | Any value, but must be narrowed before use |
| `void` | `function log(): void {}` | No meaningful return value |
| `never` | `function fail(): never { throw new Error(); }` | Function never completes normally |
| `null` | `let x: null = null;` | Null value |
| `undefined` | `let x: undefined = undefined;` | Undefined value |

## 3. Arrays and Tuples

```typescript
// Array of strings
let names: string[] = ["John", "Sam"];

// Alternative array syntax
let prices: Array<number> = [100, 200];

// Tuple: fixed positions with specified types
let user: [number, string] = [1, "John"];

// Tuple with optional element
let details: [string, number?] = ["John"];
```

## 4. Object Types

An object type defines the properties and their types.

```typescript
let product: {
    id: number;
    name: string;
    price: number;
} = {
    id: 1,
    name: "Laptop",
    price: 50000
};
```

### Using `type` or `interface`

You can define reusable object types using either `type` or `interface`.

```typescript
interface Product {
    id: number;
    name: string;
    price: number;
}

const product: Product = {
    id: 1,
    name: "Laptop",
    price: 50000
};
```

## 5. Union and Intersection Types

### Union (`|`)

A union means a value can be one of several types.

```typescript
let id: string | number;

id = 101;
id = "P101";
```

### Intersection (`&`)

An intersection combines multiple types. An object must satisfy all the combined types.

```typescript
type User = {
    name: string;
};

type Employee = {
    employeeId: number;
};

type UserEmployee = User & Employee;

const employee: UserEmployee = {
    name: "John",
    employeeId: 101
};
```

## 6. Literal and Enum Types

### Literal Types

A literal type restricts a variable to specific values.

```typescript
let status: "active" | "inactive";

status = "active";
```

### Enum

An enum defines a set of named constants.

```typescript
enum Role {
    ADMIN,
    USER,
    GUEST
}

let role: Role = Role.ADMIN;
```

For React applications, string-union types such as `"active" | "inactive"` are often a simple alternative to enums.

## 7. Function Types

You can specify function parameter types and return types.

```typescript
// Function parameter and return types
function add(a: number, b: number): number {
    return a + b;
}

// Function type
let operation: (a: number, b: number) => number = add;
```

## 8. DOM Types

`document.getElementById()` returns `HTMLElement | null`, because the element might not exist.

The `as HTMLInputElement` assertion tells TypeScript what you expect the element to be.

### Common DOM Element Types

| Type | Used for |
|---|---|
| `HTMLElement` | General HTML elements |
| `HTMLInputElement` | `<input>` |
| `HTMLTextAreaElement` | `<textarea>` |
| `HTMLSelectElement` | `<select>` |
| `HTMLButtonElement` | `<button>` |
| `HTMLFormElement` | `<form>` |
| `HTMLAnchorElement` | `<a>` |
| `HTMLImageElement` | `<img>` |
| `HTMLVideoElement` | `<video>` |
| `HTMLAudioElement` | `<audio>` |
| `HTMLDivElement` | `<div>` |
| `HTMLSpanElement` | `<span>` |
| `HTMLTableElement` | `<table>` |
| `HTMLUListElement` | `<ul>` |
| `HTMLCanvasElement` | `<canvas>` |
| `SVGElement` | General SVG elements |

### Common DOM Event Types

| Type | Used for |
|---|---|
| `Event` | General DOM event |
| `MouseEvent` | Mouse event |
| `KeyboardEvent` | Keyboard event |

### Example: Accessing an Input Element

```typescript
const element = document.getElementById("myElement") as HTMLInputElement;

console.log(element.value);
```

### Safer Approach: Type Narrowing

```typescript
const element = document.getElementById("myElement");

if (element instanceof HTMLInputElement) {
    console.log(element.value);
}
```

This checks at runtime that the element is actually an input. By contrast, `as HTMLInputElement` only informs the compiler; it does not verify the element.

## 9. Other Useful TypeScript Types

| Type | Example / Purpose |
|---|---|
| `Record<K, V>` | Object whose keys and values follow specified types |
| `Partial<T>` | Makes all properties of `T` optional |
| `Required<T>` | Makes all properties of `T` required |
| `Pick<T, K>` | Selects specific properties from a type |
| `Omit<T, K>` | Excludes specific properties from a type |
| `Readonly<T>` | Makes properties readonly at the type level |
| `Date` | Date and time values |
| `RegExp` | Regular expressions |
| `Map<K, V>` | Key-value collection |
| `Set<T>` | Collection of unique values |
| `Promise<T>` | Asynchronous result |

These include built-in types and utility types. They are not all primitive types.

## Learning Priority for React + TypeScript

Prioritize these concepts while learning React:

1. Primitive types: `string`, `number`, `boolean`
2. Arrays and object types
3. `type` and `interface`
4. Union types and literal types
5. Function parameter and return types
6. `unknown` and type narrowing
7. DOM and event types
8. Utility types such as `Partial`, `Pick`, and `Omit`
9. `Promise` and asynchronous function types
