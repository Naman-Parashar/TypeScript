// ## `Required<>` in TypeScript

// `Required<T>` is a utility type that makes every property of `T` mandatory—even properties that were originally optional.

// It’s the opposite of `Partial<T>`.

// ### 1. Example

 
type User = {
  name: string;
  email?: string;
  age?: number;
};

type RequiredUser = Required<User>;
 

// TypeScript transforms it conceptually into:

 
type RequiredUser2 = {
  name: string;
  email: string;
  age: number;
};
 

// Now every property must be provided:

 
const user: RequiredUser2 = {
  name: "Aman",
  email: "aman@example.com",
  age: 25,
}; // Valid
 

// This would cause an error because `email` and `age` are missing:

 
// const user: RequiredUser2 = {
//   name: "Aman",
// };
 

// ### 2. React example

// Imagine a component allows some props to be optional:

 
type CardProps = {
  title: string;
  subtitle?: string;
  showIcon?: boolean;
};

type CompleteCardProps = Required<CardProps>;
 

// `CompleteCardProps` now requires all three props:

 
// <Card
//   title="Product"
//   subtitle="Details"
//   showIcon={true}
// />
 

// ### 3. `Partial` vs `Required`

// | Utility type  | Effect                        |
// | ------------- | ----------------------------- |
// | `Partial<T>`  | Makes all properties optional |
// | `Required<T>` | Makes all properties required |

 
type A = Partial<User>;  // name?, email?, age?
type B = Required<User>; // name, email, age
 

// Note: `Required<T>` removes the optional `?` modifier. It doesn’t automatically make a property’s value non-null if the type explicitly includes `null`:

 
type Example = { value?: string | null };
type CompleteExample = Required<Example>;
// { value: string | null }
 

// So, remember: `Required<T>` changes whether a property must be present—not necessarily which values it can hold.