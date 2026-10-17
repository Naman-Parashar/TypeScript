// fourceful type conversion is a way to tell the TypeScript compiler to treat a 
// value as a different type than it was originally inferred or declared. 
// This can be useful in situations where you know more about the type of a value
//  than the compiler does, and you want to override its default behavior.
// There are two ways to perform type assertions in TypeScript: 
// using the angle bracket syntax (<>) or the as keyword. 
// Both methods achieve the same result, but the as keyword is generally 
// preferred because it is more readable and less prone to errors

let someValue: unknown = "Hello, TypeScript!";

// Using angle bracket syntax
let strLength1: number = (<string>someValue).length;

// Using 'as' keyword
let strLength2: number = (someValue as string).length;

///////////////////////////////////////////////////
type book = {
    name : string;
};

let bookString = { "name": "The Great Gatsby" };
let bookObject = bookString as book; // Type assertion using 'as' keyword
console.log(bookObject.name); // Output: The Great Gatsby
// but if as was not there then it would not show the "name" property because bookString
//  is of type object and not of type book
// as it is not sure which type of object it is so it will not show the name 
// property of bookString 


const element = document.getElementById("myElement") as HTMLInputElement;
 // Type assertion to specify that the element is an HTMLInputElement


 // never type is a special type in TypeScript that represents values that never occur.
// It is used to indicate that a function never returns or that a variable can never
//  have a value.
// The never type is often used in situations where a function throws an error, 
// enters an infinite loop, or has a return type that is impossible to reach.

type Role = "admin" | "user" | "guest";
function throwError(role: Role): void {
    if (role === "admin") {
        console.log("Welcome, admin!");
        return;
    }
    if (role === "user") {
        console.log("Welcome, user!");
        return;
    }
    if (role === "guest") {
        console.log("Welcome, guest!");
        return;
    }

    role; // This line will never be reached, and TypeScript will infer the 
    // type as 'never'.
}

function infiniteLoop(): never {
    while (true) {
        // This function will never return, and TypeScript will infer the type as 'never'.
    } 
}