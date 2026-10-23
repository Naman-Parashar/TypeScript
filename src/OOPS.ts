class chai{
    flavor: string;
    price: number

    constructor(flavor: string, price: number) {
        this.flavor = flavor;
        this.price = price;
    }
}

const masalaChai = new chai("masala", 10);

// Access modifiers
class chaiWithAccessModifiers {
    public flavor: string; // can be accessed from anywhere
    private _price: number; // can only be accessed within the class
    // or we can use #
     #rating:number;
    protected size: string; // can be accessed within the class and its subclasses

    constructor(flavor: string, price: number, size: string, rating: number) {
        this.flavor = flavor;
        this._price = price; // No, the underscore (_) is not necessary. It’s just a naming convention often used to indicate a private/internal field.
        this.size = size;
        this.#rating = rating;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }
}

const gingerChai = new chaiWithAccessModifiers("ginger", 12, "medium", 4.5);
gingerChai.flavor; // accessible
// gingerChai.price; // Error: Property 'price' is private and only accessible within class 'chaiWithAccessModifiers'.
// gingerChai.size; // Error: Property 'size' is protected and only accessible within class 'chaiWithAccessModifiers' and its subclasses.

gingerChai.price; // now we can access it.

/**
 * Regular method
 * class Chai {
 *   private _price: number;
 *
 *   constructor(price: number) {
 *     this._price = price;
 *   }
 *
 *   getP(): number {
 *     return this._price;
 *   }
 * }
 *
 * const chai = new Chai(20);
 *
 * console.log(chai.getP()); // 20
 *
 *
 * You call it with parentheses: chai.getP().
 * Getter accessor
 * class Chai {
 *   private _price: number;
 *
 *   constructor(price: number) {
 *     this._price = price;
 *   }
 *
 *   get price(): number {
 *     return this._price;
 *   }
 * }
 *
 * const chai = new Chai(20);
 *
 * console.log(chai.price); // 20 — no parentheses
 *
 *
 * Difference: getP() is a method you call; get price() lets you read price like a property. Both can return _price.
 *
 *
 * You can use get price() without an underscore. The issue is that your getter and field have the same name.
 * This won’t work:
 * class Chai {
 *   private price: number;
 *
 *   get price(): number {
 *     return this.price; // refers to the getter itself, causing recursion
 *   }
 * }
 *
 *
 * The getter price conflicts with the field price. Use a different internal field name:
 * class Chai {
 *   private actualPrice: number;
 *
 *   constructor(price: number) {
 *     this.actualPrice = price;
 *   }
 *
 *   get price(): number {
 *     return this.actualPrice;
 *   }
 *
 *   set price(value: number) {
 *     this.actualPrice = value;
 *   }
 * }
 *
 * const chai = new Chai(20);
 *
 * console.log(chai.price); // 20
 * chai.price = 30;
 * console.log(chai.price); // 30
 *
 *
 * actualPrice could be _price, storedPrice, or any other name. The underscore is optional; the internal field just needs a different name from the getter/setter.
 * **/

// composition

class Heater{
    heat(){}
}

// here instead of inheriting the class we use it in constructor this is called composition
class Kettle{
    constructor(private heater: Heater) {}

    make(){
        this.heater.heat();
    }
}
