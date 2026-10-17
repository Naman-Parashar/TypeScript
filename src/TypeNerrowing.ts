// The Unknown keyword in TypeScript is a type-safe counterpart of the any type.
// It represents any value, but unlike any, it requires type checking before
// performing operations on it. T
// his makes unknown a safer choice when dealing with values of uncertain types.
let value: unknown;
// below line will throw an error because we cannot perform operations on unknown
// type without type checking

value = 8;

// ❌ Error: 'value' is of type 'unknown'
// if (value + 2 === 10) {
//     console.log("Value is true");
// }

// ✅ Check the type first
if (typeof value === "number") {
  if (value + 2 === 10) {
    console.log("Value is true");
  } else {
    console.log("Value is false");
  }
}

// Type Narrowing is the process of refining the type of a variable based on certain
// conditions or checks.

function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai ... `;
  }
  return `Chai oder: ${kind}`;
}

// this ? represents an optional parameter. It means that the parameter can be
// either provided or omitted when calling the function.
function getChai2(kind?: string) {
  if (kind) {
    return `Making ${kind} chai ... `;
  }
  return `Chai oder`;
}

// Type safty

class Khudhad {
  serve() {
    return "Serving Khudhad";
  }
}

class cutting {
  serve() {
    return "Serving cutting";
  }
}

function serveChai(chai: Khudhad | cutting) {
  if (chai instanceof Khudhad) {
    return chai.serve(); // this will call the serve method of Khudhad class
  } else {
    return chai.serve(); // this will call the serve method of cutting class
  }
}

type user = {
  name?: string;
  userId?: number;
  image?: string;
}

function getUserInfo(user: user) : string[] {

  return [
    `Name: ${user.name ?? "N/A"}`,
    `User ID: ${user.userId ?? "N/A"}`,
    `Image: ${user.image ?? "N/A"}`
  ];
  
}