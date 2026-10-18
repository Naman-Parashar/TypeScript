// ## `Pick<>` in TypeScript

// `Pick<T, K>` is a utility type that creates a new type by selecting specific properties from an existing type.

// - `T` = the original type
// - `K` = the property names you want to keep

// ### 1. Basic example

 
type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
};

type ProductSummary = Pick<Product, "id" | "name">;
 

// `ProductSummary` is equivalent to:

 
type ProductSummary2 = {
  id: number;
  name: string;
};
 

// You can use it like this:

 
const product2: ProductSummary2 = {
  id: 101,
  name: "Keyboard",
}; // Valid
 

// But including `price` would cause an error when assigning this object literal:

 
// const product3: ProductSummary = {
//   id: 101,
//   name: "Keyboard",
//   price: 1500, // Error: property isn't in ProductSummary
// };
 

// ### 2. React example

// Suppose a product card only needs the product’s name and price—not all product fields:

 
type Product3 = {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
};

type ProductCardProps = Pick<Product, "name" | "price">;

// function ProductCard({ name, price }: ProductCardProps) {
//   return (
//     <div>
//       <h3>{name}</h3>
//       <p>₹{price}</p>
//     </div>
//   );
// }
 

// Now the component’s props stay focused on what it actually uses.

// ### 3. `Pick` vs `Partial`

// They do different jobs:

 
type A = Pick<Product, "name" | "price">;
// Keeps only name and price; both remain required if required in Product.

type B = Partial<Pick<Product, "name" | "price">>;
// Keeps only name and price; makes both optional.
 

// Remember: `Pick` chooses properties; `Partial` makes properties optional. You can combine them when needed.