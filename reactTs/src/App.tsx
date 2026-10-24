import { ChaiCard } from "./component/ChaiCard";

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
    </>
  );
}

export default App;
