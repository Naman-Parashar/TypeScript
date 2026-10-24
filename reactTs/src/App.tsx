import { ChaiCard } from "./component/ChaiCard";
import ChaiList from "./component/ChaiList";
import { Counter } from "./component/Counter";
import type { Chai } from "./types";

const menu: Chai[] = [
  {id:1,name:"aaaaa", price: 10},
  {id:1,name:"bbbbb", price: 20},
  {id:1,name:"ccccc", price: 40},
  {id:1,name:"ddddd", price: 10},
  {id:1,name:"eeeee", price: 50},
];

function App() {
  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <ChaiCard 
        name="Headphone"
        price= {5000}
        />
      </div>
      <div>
        <Counter />
        
        <ChaiList 
        items={menu}
        />
      </div>
    </>
  );
}

export default App;
