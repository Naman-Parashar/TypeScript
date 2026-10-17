// union in typescript
let sub : number | string;
sub = 10;
sub = "1M";

let apiResponse1 : 'pending' | 'success' | 'error' = 'pending';
apiResponse1 = 'success';
// apiResponse1 = 'done'; // error: Type '"done"' is not assignable to type 
// '"pending" | "success" | "error"'.

let apiResponse:
  | {
      status: number;
      message: string;
    }
  | {
      status: number;
      error: string;
    };
apiResponse = {status: 200, message: "Success"};
apiResponse = {status: 404, error: "Not Found"};


// any in typescript
let data: any;
data = 10;
data = "Naman";
data = true;
// once a variable is declared with the any type, it can be assigned any value 
// without any type checking. 

let name;  // equivalent to let name: any;
name = "Naman";
name = 10;
name = true;
// name : any
