// ## `Partial<>` in TypeScript

// `Partial<T>` is a utility type that makes every property of `T` optional.

// It’s useful when you want to pass only some fields of an object—for example, updating just a product’s name or price.

// ### 1. Without `Partial`

 
type Product = {
  id: number;
  name: string;
  price: number;
};

function updateProduct(product: Product) {
  // update logic
}

updateProduct({
  id: 1,
  name: "Keyboard",
  price: 1500,
}); // All fields required
 

// ### 2. With `Partial<Product>`

 
type Product2 = {
  id: number;
  name: string;
  price: number;
};

function updateProduct2(product: Partial<Product>) {
  // update logic
}

updateProduct2({ name: "Mechanical Keyboard" }); // Valid
updateProduct2({ price: 2000 });                 // Valid
updateProduct2({ name: "Keyboard", price: 1500 }); // Valid
updateProduct2({});                              // Also valid
 

// Conceptually, TypeScript transforms `Product` into:

 
type PartialProduct = {
  id?: number;
  name?: string;
  price?: number;
};
 

// The `?` means a property is optional.

// ### 3. Practical React example

// Suppose your component receives a product and lets the user update selected fields:

 
type Product3 = {
  id: number;
  name: string;
  price: number;
  stock: number;
};

type ProductUpdate = Partial<Product3>;

function updateProduct3(id: number, changes: ProductUpdate) {
  // Send only changed fields to your API
}

updateProduct3(101, { price: 1800 });
updateProduct3(101, { stock: 20 });
 

// This is handy for partial updates—often associated with HTTP `PATCH` APIs. Your backend still needs to decide how omitted fields should be handled.

// ### Important: `Partial` is shallow

 
type Product4 = {
  name: string;
  details: {
    brand: string;
    color: string;
  };
};

type PartialProduct2 = Partial<Product4>;
 

// Here, `name` and `details` are optional, but if you provide `details`, both `brand` and `color` are still required:

 
const update: PartialProduct2 = {
  details: { brand: "Logitech", color: "Black" },
}; // Valid
 

// In short: `Partial<T>` means “an object of type `T` where any or all properties may be omitted.”