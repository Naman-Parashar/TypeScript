 interface read {
    readonly name: string;
    version: number;
 }

 const MyApp: read = {
    name: "My Application",
    version: 1.0
};

// myApp.name = "New Name"; 
// Error: Cannot assign to 'name' because it is a read-only property.