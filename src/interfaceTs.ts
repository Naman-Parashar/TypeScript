// we need interface to define the shape of an object, we have type but type is not
// extendable and interface is extendable
// interface is a way to define the structure of an object, it is a contract that an 
// object must adhere to. 
// It defines the properties and methods that an object must have, 
// but it does not provide any implementation details.

// now type will work like below 
type tea = {
    water?: number;
    milk?: number;
}

class Chai implements tea {
    water = 100 ;
    milk = 50;

}

// but if we custom type then it will not work like below
type cupSize = "small" | "medium" | "large";

// class Chai2 implements cupSize {
    // error : class can only implement an object type or intersection of object
    //  types with statically known members
// }

type res = {ok: true} | {ok: false};

// class Response implements res { // error 
//     ok = true;
// }

// now we use interface
// it dont have = symbol
interface cupSize2 {
    size: "small" | "medium" | "large";
}

class Chai2 implements cupSize2 {
    size = "medium" as cupSize2["size"]; 
}



// intrections 

type BaseChai = {
    teaLeaves: number;
}

type extra = {
    sugar: number;
}

type Chai3 = BaseChai & extra; // intersection of two types

const myChai: Chai3 = {
    teaLeaves: 10,
    sugar: 5
};