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

# 10. React-Specific TypeScript Examples

These examples use React with TypeScript (`.tsx` files).

### 10.1 Typing Component Props

Props define the data a parent component passes to a child component.

```tsx
import type { FC } from "react";

interface ProductProps {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}

const ProductCard: FC<ProductProps> = ({
    id,
    name,
    price,
    inStock
}) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>Product ID: {id}</p>
            <p>Price: ₹{price}</p>
            <p>{inStock ? "Available" : "Out of stock"}</p>
        </div>
    );
};

export default ProductCard;
```

Usage:

```tsx
<ProductCard
    id={1}
    name="Laptop"
    price={50000}
    inStock={true}
/>
```

`ProductProps` ensures the component receives the expected properties and types.

> `FC` (FunctionComponent) is optional. You can also type the props directly in the function parameter.

```tsx
function ProductCard({ name, price }: ProductProps) {
    return <h2>{name} - ₹{price}</h2>;
}
```

### 10.2 Optional Props and Default Values

Use `?` when a prop is optional.

```tsx
interface GreetingProps {
    name: string;
    message?: string;
}

function Greeting({
    name,
    message = "Welcome to NovaCart!"
}: GreetingProps) {
    return (
        <h2>{message}, {name}</h2>
    );
}
```

Usage:

```tsx
<Greeting name="John" />

<Greeting
    name="John"
    message="Good morning"
/>
```

### 10.3 Typing `useState`

React's `useState` stores component state. TypeScript can infer the type or you can explicitly provide it.

```tsx
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState<number>(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    );
}
```

#### State with a union type

```tsx
type Status = "idle" | "loading" | "success" | "error";

function Example() {
    const [status, setStatus] = useState<Status>("idle");

    return (
        <button onClick={() => setStatus("loading")}>
            {status}
        </button>
    );
}
```

Only the four specified status values are allowed.

#### State containing an object

```tsx
interface User {
    id: number;
    name: string;
    email: string;
}

const [user, setUser] = useState<User | null>(null);

// Set the user
setUser({
    id: 1,
    name: "John",
    email: "john@example.com"
});

// Clear the user
setUser(null);
```

`User | null` is useful when data is initially absent, such as a user loaded after login.

### 10.4 Typing Input and Form Events

Use `ChangeEvent<HTMLInputElement>` for an input's change event.

```tsx
import { useState } from "react";
import type { ChangeEvent } from "react";

function NameInput() {
    const [name, setName] = useState<string>("");

    const handleChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        setName(event.target.value);
    };

    return (
        <input
            type="text"
            value={name}
            onChange={handleChange}
        />
    );
}
```

Common React event types:

| Type | Used for |
|---|---|
| `ChangeEvent<HTMLInputElement>` | Input changes |
| `ChangeEvent<HTMLTextAreaElement>` | Textarea changes |
| `ChangeEvent<HTMLSelectElement>` | Select changes |
| `FormEvent<HTMLFormElement>` | Form submission |
| `MouseEvent<HTMLButtonElement>` | Button mouse events |
| `KeyboardEvent<HTMLInputElement>` | Keyboard events on an input |

Example form submission:

```tsx
import type { FormEvent } from "react";

function LoginForm() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Form submitted");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" />
            <button type="submit">Login</button>
        </form>
    );
}
```

### 10.5 Typing a Click Handler

```tsx
import type { MouseEvent } from "react";

function SaveButton() {
    const handleClick = (
        event: MouseEvent<HTMLButtonElement>
    ) => {
        console.log("Button clicked");
        console.log(event.currentTarget.disabled);
    };

    return (
        <button onClick={handleClick}>
            Save
        </button>
    );
}
```

If you do not need the event object, you can let TypeScript infer the type:

```tsx
<button onClick={() => console.log("Clicked")}>
    Click me
</button>
```

### 10.6 Typing an Array of Products

This is a common pattern for displaying products returned by your backend.

```tsx
interface Product {
    id: number;
    name: string;
    price: number;
}

const products: Product[] = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Keyboard", price: 1500 }
];

function ProductList() {
    return (
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    {product.name} - ₹{product.price}
                </li>
            ))}
        </ul>
    );
}
```

`Product[]` means an array containing `Product` objects.

### 10.7 Typing API Responses

Suppose your Spring Boot API returns a product:

```json
{
    "id": 1,
    "name": "Laptop",
    "price": 50000
}
```

Define a TypeScript interface for the response:

```tsx
interface Product {
    id: number;
    name: string;
    price: number;
}

async function fetchProduct(id: number): Promise<Product> {
    const response = await fetch(`/api/products/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch product");
    }

    return response.json() as Promise<Product>;
}
```

Here:

- `id: number` types the function argument.
- `Promise<Product>` describes the expected asynchronous result.
- `Product` describes the data shape.

**Important:** `as Promise<Product>` does not validate the JSON received from the server. It only tells TypeScript what type you expect. For untrusted API data, validate it at runtime before relying on that shape.

### 10.8 Typing Children and React Nodes

Use `ReactNode` when a component accepts renderable React content.

```tsx
import type { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}

function Container({ children }: ContainerProps) {
    return <div className="container">{children}</div>;
}
```

Usage:

```tsx
<Container>
    <h2>NovaCart</h2>
    <p>Welcome to our store.</p>
</Container>
```

`ReactNode` can represent elements, text, fragments, and other supported React-renderable content.

### 10.9 Typing `useRef`

Use `useRef` to reference a DOM element.

```tsx
import { useRef } from "react";

function SearchBox() {
    const inputRef = useRef<HTMLInputElement>(null);

    const focusInput = () => {
        inputRef.current?.focus();
    };

    return (
        <>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>
                Focus Search
            </button>
        </>
    );
}
```

`HTMLInputElement` provides input-specific properties and methods. The ref starts as `null` because the element may not yet be mounted.

### 10.10 Typing Redux State

For a Redux Toolkit slice, define the state shape explicitly.

```tsx
interface AuthState {
    userId: number | null;
    email: string | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    userId: null,
    email: null,
    isAuthenticated: false
};
```

For a product slice:

```tsx
interface Product {
    id: number;
    name: string;
    price: number;
}

interface ProductState {
    products: Product[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    products: [],
    loading: false,
    error: null
};
```

These types help keep Redux state consistent as actions update it.

### 10.11 Typing a Reusable Callback Prop

You can define the type of a function passed from a parent to a child.

```tsx
interface Product {
    id: number;
    name: string;
}

interface ProductRowProps {
    product: Product;
    onSelect: (productId: number) => void;
}

function ProductRow({ product, onSelect }: ProductRowProps) {
    return (
        <button onClick={() => onSelect(product.id)}>
            Select {product.name}
        </button>
    );
}
```

Usage:

```tsx
<ProductRow
    product={{ id: 1, name: "Laptop" }}
    onSelect={(id) => console.log("Selected:", id)}
/>
```

The callback must accept a `number` as its argument.

## React + TypeScript: What to Learn First

For your React frontend, focus on these in order:

1. Component props using `interface` or `type`
2. `useState` with primitive, object, array, and union types
3. Event types for inputs, buttons, and forms
4. API response types and `Promise<T>`
5. `ReactNode` and callback props
6. `useRef` and DOM element types
7. Redux state and action types

TypeScript can infer many React event and state types automatically. Add explicit types when they clarify component contracts, API data, or state that could otherwise be ambiguous.
