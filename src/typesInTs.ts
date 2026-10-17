// Type inference in TypeScript, the compiler automatically infers the type of a 
// variable based on its initial value.

let name = "Naman";
// name = 129 // error: Type 'number' is not assignable to type 'string'.

let n = Math.random() > 0.5 ? "Naman" : 129;
// n : string | number


// Type annotation in TypeScript, you can explicitly specify the type of a 
// variable using a colon followed by the type.
let age: number = 25;
// age = "twenty-five"; // error: Type 'string' is not assignable to type 'number'.

age = 30; // valid assignment
// but we can override the type of a variable using type assertion, which tells the compiler to treat a value as a specific type.
let someValue: any = "This is a string";

let strLength: number = (someValue as string).length; 
// this line tells the compiler to treat someValue as a string and get its length 
// property, which is a number.
// strLength : number