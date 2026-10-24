import { ChaiCard } from "./component/ChaiCard";
import { Counter } from "./component/Counter";

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
      </div>
    </>
  );
}

export default App;
