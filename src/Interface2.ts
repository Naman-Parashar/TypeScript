interface Chai {
    flavor: string;
    price: number;
    milk?: boolean; // optional property
}

const s: Chai ={
    flavor: "ginger",
    price: 12,
    milk: true
};

interface discount {
    (price: number): number;
}

const applyDiscount: discount = (price) => {
    return price * 0.9; // apply a 10% discount
}
// or in lapmbda syntax
const applyDiscountLambda: discount = p => p* 0.9; // apply a 10% discount

interface machine {
    start(): void;
    stop(): void;
}

const teaMachine : machine = {
    start() {
        console.log("start");
    },
    stop() {
        console.log("stop")
    },
}

// his is a TypeScript index signature. It lets an object have many property names, 
// while specifying the type of each property’s value.
interface ChaiRatings {
    // Index signature — brackets describe the key's type
  [flavor: string]: number; // it like key is of string and value ios of number
  //The key is not an array. The square brackets in an index signature are TypeScript syntax meaning “this object can be indexed by a string.”
}

const ratings: ChaiRatings = {
  "masala": 4.5,
  ["ginger"]: 4.5,
  lemon: 4.2,
};

interface ChaiRatings2 {
  [flavor: string]: number[];
}

const ratings2: ChaiRatings2 = {
  masala: [4.5, 4.7], // array of numbers
};


// interfacwe can be merged

interface user{
    name: string;
}

interface user{
    age: number;
}

const u : user = {
    name : "naman",
    age : 12 // must be define ,otherwiese  Property 'age' is missing in type
}

