// objct in TypeScript is a collection of properties, where each property is a key-value pair. The key is a string (or symbol), and the value can be any type.
//  Objects can be created using object literals, classes, or interfaces.

let person: { 
    name: string; 
    age: number
}

person = {
    name: "John Doe",
    age: 30
};

// aliased object type [type alias]

type Person = {
    name: string;
    age: number;
    phone?: string[]; 
}

const x: Person = {
    name: "Jane Doe",
    age: 25,
    phone: ["123-456-7890", "987-654-3210"]
};

/* In TypeScript, : and = have different purposes:
- : is used to declare a type for a variable, parameter, or property.
- = is used to assign a value to a variable, or to define a type alias when used with type.
Let's look at your two examples.
1. let x: {} — type annotation
let x: {};

x = 10;
x = "Hello";
x = true;
x = { name: "John" };

// x = null;      // Error with strictNullChecks
// x = undefined; // Error with strictNullChecks


Here, : means "the type of x is {}."
In TypeScript, {} is a type that accepts any non-nullish value, including strings, numbers, booleans, and objects.
It does not mean that x must be an empty object.
2. type X = {} — type alias
type X = {};

let x: X;

x = 10;
x = "Hello";
x = { name: "John" };


Here, = defines a reusable type named X, and : applies that type to the variable.
This is essentially equivalent to the first example:
let x: {};


and
type X = {};
let x: X;


Both declare a variable that accepts non-nullish values. The second example just gives the type a reusable name.
3. When do you use : versus =?
Syntax	Purpose	Example
:	Type annotation	let age: number = 25;
=	Assign a value	let age = 25;
type X = ...	Create a type alias	type ID = number;
interface X { ... }	Define an object contract	interface User { name: string; }
Notice that let age: number = 25; uses both:
- : number tells TypeScript the variable's type.
- = 25 assigns its initial value.
 */