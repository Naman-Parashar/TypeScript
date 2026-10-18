// ## Duck typing in TypeScript

// Duck typing means an object is considered compatible with a type based on the properties and methods it has, rather than the name of its class or type.

// > “If it walks like a duck and quacks like a duck, treat it like a duck.”

// TypeScript uses structural typing, which is closely related to duck typing.

// ### 1. Basic example

type User = {
  name: string;
  age: number;
};

const person = {
  name: "Aman",
  age: 25,
  city: "Meerut",
};

const user: User = person; // Valid

// `person` has the required `name` and `age` properties. Its extra `city` property doesn’t stop it from being assigned to `User`.

// TypeScript checks the object’s structure, not whether it was explicitly declared as a `User`.

// ### 2. A function accepts any matching object

type Product = {
  id: number;
  name: string;
};

function printProduct(product: Product) {
  console.log(product.name);
}

const item = {
  id: 101,
  name: "Keyboard",
  price: 1500,
};

printProduct(item); // Valid


// The function accepts `item` because it contains the properties required by `Product`.

// But this fails:

// printProduct({ id: 101 }); // Error: name is missing


// ### 3. Duck typing with methods

type CanRun2 = {
  run: () => void;
};

const dog = {
  run: () => console.log("Dog is running"),
  bark: () => console.log("Woof"),
};

function startRunning(value: CanRun2) {
  value.run();
}

startRunning(dog); // Valid

// The function only requires a `run` method. It doesn’t care whether the object is a dog, a robot, or something else.

// ### 4. How this differs from Java

// In Java, a class generally needs to implement an interface to be treated as that interface:


// interface CanRun3 {
//     void run();
// }

// class Dog implements CanRun3 {
//     public void run() {
//         System.out.println("Running");
//     }
// }


// In TypeScript, an object can match a type simply by having the required structure—even without explicitly saying `implements`.

// ### Remember

// - TypeScript: “Does this object have the required shape?”
// - Java nominal typing: “Is this class declared as implementing or extending the required type?”

// That’s why TypeScript is often described as using structural typing, and duck typing is a useful way to understand it.