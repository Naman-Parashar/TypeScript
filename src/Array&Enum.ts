const arr: string[] = ["apple", "banana", "cherry"];

const secondElement: Array<number> = [1, 2, 3];

// Arrays of object 
type Person = {
  name: string;
  age: number;
};
const people: Person[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];

// Read only array
const cities: readonly string[] = ["New York", "Los Angeles", "Chicago"];
// cities.push("Houston"); // Error: Property 'push' does not exist on type 'readonly string[]'.
const readonlyArr: ReadonlyArray<string> = ["one", "two", "three"];

const table : number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// tuples
let tuple: [string, number, boolean];
tuple = ["Hello", 42, true];
tuple = ["World", 100, false];

let tuple2: [string, number?]; // here the second element is optional
tuple2 = ["Hello"];
tuple2 = ["World", 42];

let tuple3: [string, number, ...boolean[]]; // here the third element is a rest parameter
tuple3 = ["Hello", 42, true, false, true];
tuple3 = ["World", 100];

// readonly tuples
const readonlyTuple: readonly [string, number] = ["Hello", 42];
// readonlyTuple[0] = "World"; // Error: Index signature in type 'readonly [string, number]' only permits reading.

// named tuples
type user = [name: string, age: number];
const userPoint: user = ["Alice", 30];



// Enum 
enum cupSize {
  Small,
  Medium,
  Large,
}

const size = cupSize.Small; // 0

enum status {
  Pending = "PENDING",
  InProgress = "IN_PROGRESS",
  Completed = "COMPLETED",
}

function getStatusMessage(status: status) {
    console.log(`The current status is: ${status}`);
}

getStatusMessage(status.Pending); // The current status is: PENDING
//getStatusMessage("Pending"); // Error: Argument of type '"Pending"' is not assignable to parameter of type 'status'.

// Enum with computed values, it will be evaluated at runtime and incremented by 1 for each subsequent member
enum Direction {
  Up = 1,
  Down, // 2
  Left, // 3
  Right, // 4
}

// composite enum
enum Color {
  Red = 1,
  Green = "GREEN",
}

// CONST will restict the value change and will be inlined at compile time, it will not be present in the generated JS code
const enum sugar{
    Low = 1,
    Medium = 2,
    High = 3
}
// So, unlike a regular enum, you generally can't access Status as a runtime object:
// console.log(sugar); // Not available as a runtime enum object

// Regular enum vs const enum
// - enum Status: creates a runtime enum object; you can access Status.Pending.
// - const enum Status: values are usually substituted during compilation; it’s mainly a compile-time feature.


let t:[string, number] = ["Hello", 42];

t.push("World"); // This is allowed, but it can lead to unexpected behavior since the tuple type is [string, number] and now it has an extra string element.
// At the end of the day, tuples are just arrays with a fixed number of elements, and TypeScript's type system can't prevent you from pushing additional 
// elements onto them.