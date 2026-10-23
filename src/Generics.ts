function wrapArray<T> (item : T) : T{
    return item;
}

wrapArray("masa");
wrapArray(2);
wrapArray({id:23,name:"naman"})


function pair<A,B> (x: A, y: B) : [A, B] {
    return [x,y];
}

pair("masala", "naman")


interface Box<T> {
    content: T,
    id: number
}

const numberBox : Box<string> = {content: "naman", id :3};
const numberBox2 : Box<boolean> = {content: true, id :3};